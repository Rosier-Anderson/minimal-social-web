"use server";
import z, { email } from "zod";
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
  const formDataResult = formDataSchema.safeParse(Object.fromEntries(formData));
  if (!formDataResult.success) {
    return {
      errors: z.treeifyError(formDataResult.error),
    };
  }
  const { email, password } = formDataResult.data;
  // database query  here
  // --
  if (email !== testUser.email || password !== testUser.password) {
    return {
      error: "Invalid email or password",
      // change this later by safeParse testUser and formDataResult by ommitting the id with typescript
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
