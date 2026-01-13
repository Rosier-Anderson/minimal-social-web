"use server";
import z from "zod";
import getDatabaseClient from "../../db/turso";
import {
  LoginFormSchema,
  UserDataSchema,
  idToStringSchema,
} from "../zodSchema";

import { redirect } from "next/navigation";
import createSession from "./session";
import { VerifyPassword } from "@/src/helper";

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};

export default async function login(_: unknown, formData: FormData) {
  const ParseFormData = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!ParseFormData.success) {
    return {
      errors: z.treeifyError(ParseFormData.error),
    };
  }
  const { email, password } = ParseFormData.data;
  try {
    const client = await getDatabaseClient();
    const rawData = await client.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    const user = rawData.rows[0] as unknown as User;
    if (!user) {
      return { error: "Invalid email or password" };
    }

    const { id, password: userPassword } = user;
    const idToString = id.toString();
    const validPassword = await VerifyPassword(password, userPassword);
    if (!validPassword) {
      return { error: "Invalid email or password" };
    }
    await createSession(idToString);
    redirect("/");
  } catch (error: any) {
    if (error.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log("Something went wrong", error);
  }
}
