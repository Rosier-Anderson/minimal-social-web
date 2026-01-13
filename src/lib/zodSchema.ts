import z from "zod";

export const RegisterFormchema = z
  .object({
    username: z.string({ message: "Please enter a user name" }).trim(),
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
export const LoginFormSchema = z.object({
  email: z.email({ error: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { error: "Be at least 8 characters long" })
    .trim(),
});

export const UserDataSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export const idToStringSchema = z.number().transform((val) => String(val));
