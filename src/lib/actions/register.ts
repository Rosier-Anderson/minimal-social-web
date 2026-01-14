"use server";

import {RegisterFormchema} from "../zodSchema";
import z from "zod";
import {HashPassword} from "@/src/helper";
import getDatabaseClient from "@/src/db/turso";

import {redirect} from "next/navigation";

export default async function register(prevState: unknown, formData: FormData) {
  const client = await getDatabaseClient();
  const ParserRegisterData = RegisterFormchema.safeParse(
    Object.fromEntries(formData)
  );
  try {
    if (!ParserRegisterData.success) {
      return {
        errors: z.treeifyError(ParserRegisterData.error),
      };
    }
    const {username, email, password} = ParserRegisterData.data;

    const existingUser = await client.execute(
      "SELECT * FROM users  WHERE username = ? OR email = ? ",
      [username, email]
    );
    if (existingUser.rows.length > 0) {
      if (existingUser.rows[0].username === username) {
        return {
          error: {
            username: ["Username already exists!"],
          },
        };
      }
      if (existingUser.rows[0].email === email) {
        return {
          error: {
            email: ["Email already exists!"],
          },
        };
      }
    }

    const Hashed = await HashPassword(password);
    await client.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, Hashed]
    );
    return redirect("/");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log("Something went wrong", error);
  }
}
