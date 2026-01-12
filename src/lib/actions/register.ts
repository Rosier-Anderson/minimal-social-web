"use server";
import { redirect } from "next/navigation";

import { RegisterFormchema } from "../zodSchema";
import z from "zod";
import { HashPassword } from "@/src/helper";
import getDatabaseClient from "@/src/db/turso";

export default async function register(prevState: unknown, formData: FormData) {
  const ParserRegisterData = RegisterFormchema.safeParse(
    Object.fromEntries(formData)
  );
  try {
    if (!ParserRegisterData.success) {
      return {
        errors: z.treeifyError(ParserRegisterData.error),
      };
    }
    const { username, email, password } = ParserRegisterData.data;
    const Hashed = await HashPassword(password);
    const client = await getDatabaseClient();
    await client.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, Hashed]
    );
  } catch (error) {
    console.log("Something went wrong");
  }
  redirect("/login");
}
