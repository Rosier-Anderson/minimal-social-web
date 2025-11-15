"use server";
import z, { email } from "zod";

const formDataSchema = z
  .object({
    name: z
      .string({ message: "Please enter a user name" })
      .min(2, { message: "user name can not be empty" })
      .trim(),
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
  const formDataResult = formDataSchema.safeParse(Object.fromEntries(formData));

  if (!formDataResult.success) {
    return {
      errors: z.treeifyError(formDataResult.error),
    };
  }
  const { name, email, password } = formDataResult.data;

  // ship to the database =------
}
