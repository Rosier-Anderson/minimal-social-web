"use server";
import z from "zod";
import createSession from "./session";
import { redirect } from "next/navigation";
import { errors } from "jose";
// test user
const testUser = {
  id: "1",
  email: "m@exemple.com",
  password: "12345678",
};

const LoginFormSchema = z.object({
  email: z.email({ error: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { error: "Be at least 8 characters long" })
    .trim(),
});

export default async function login(prevState: unknown, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error),
    };
  }
  const { email, password } = validatedFields.data;
  // database query  here

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: { errors: ["Invalid email or password"] },
    };
  }
  await createSession(testUser.id);
  redirect("/");
}

// const rawData = Object.fromEntries(formData);
// const formDataResult = formDataSchema.safeParse(rawData);
// if (!formDataResult.success) {
//   console.log(z.flattenError(formDataResult.error));
//   return {
//     errors: z.flattenError(formDataResult.error),
//   };
// }
// const { email, password } = formDataResult.data;
// // database query  here
// // --
// if (email !== testUser.email || password !== testUser.password) {
//   return {
//     error: "Invalid email or password",
//     //  safeParse testUser and formDataResult by ommitting the id with typescript
//     // errors: {
//     //   properties: {
//     //     email: {
//     //       errors: ["Invalid email or password"],
//     //     },
//     //   },
//     // },
//   };
// }
