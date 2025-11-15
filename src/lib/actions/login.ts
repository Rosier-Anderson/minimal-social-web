"use sever";

import z from "zod";

const formDataSchema = z.object({
  email: z.string({ message: "Please enter a user name" }).trim(),
  password: z.string({ message: "Please enter password" }),
});
export default function login(prevState: unknown, formData: FormData) {
  const formDataResult = formDataSchema.safeParse(Object.fromEntries(formData));

  if (!formDataResult.success) {
    return {
      errors: z.treeifyError(formDataResult.error),
    };
  }
  const { email, password } = formDataResult.data;
  // database action here
}
