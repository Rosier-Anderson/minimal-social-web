"use server";

import z, { email } from "zod";
import createSession from "./session";
import { redirect } from "next/navigation";
const testUser = {
  id: "1",
  email: "m@exemple.com",
  password: "12345678",
};
const formDataSchema = z
  .object({
    name: z.string({ message: "Please enter a user name" }).trim(),
    email: z.email({ message: "Please enter a valid email address" }).trim(),
    password: z
      .string({ message: "Please enter password" })
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string({ message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });
export default async function register(prevState: unknown, formData: FormData) {
  const validatedFields = formDataSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error),
    };
  }
  const { name, email, password } = validatedFields.data;
  // ship to the database =------
  await createSession(testUser.id);
  redirect("/");
}
