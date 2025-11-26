"use server";
import z from "zod";
import createSession from "./session";
import { redirect } from "next/navigation";
// test user
const testUser = {
  id: "1",
  email: "m@exemple.com",
  password: "12345678",
};
const formDataSchema = z.object({
  email: z.email({ message: "Please enter email" }).trim(),
  password: z
    .string({ message: "Please enter password" })
    .min(8, { message: "Password should be at least 8 characters" }),
});
export default async function login(prevState: unknown, formData: FormData) {
 const rawData = Object.fromEntries(formData)
  const formDataResult = formDataSchema.safeParse(rawData);
  if (!formDataResult.success) {
    console.log(z.flattenError(formDataResult.error))
    return {
      errors: z.flattenError(formDataResult.error),
    };
  }
  const { email, password } = formDataResult.data;
  // database query  here
  // --
  if (email !== testUser.email || password !== testUser.password) {
    return {
      error: "Invalid email or password",
      //  safeParse testUser and formDataResult by ommitting the id with typescript
      // errors: {
      //   properties: {
      //     email: {
      //       errors: ["Invalid email or password"],
      //     },
      //   },
      // },
    };
  }

  await createSession(testUser.id);
  redirect("/");
}
