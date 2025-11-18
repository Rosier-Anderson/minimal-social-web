"use client";
import { useState } from "react";
interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const initialState: FormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export function useRegisterForm() {
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
  const resetForm = () => setFormState(initialState);
  return { handleChange, formState, resetForm };
}

// import*****
// *******
// *****

// this hook is deprecated
//   might need later
// *******
// ***************

// import { useState } from "react";
// import z from "zod";

// interface RegisterFormState {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }
// const RegisterFormSchema = z
//   .object({
//     name: z.string().trim(),
//     email: z.email(),
//     password: z
//       .string()
//       .min(8, { message: "Password must be at least 8 characters" }),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"], // path of error
//   });

// //   type errors<T> = {
// //     errors: z.treeifyError(T)
// //   }
// //   typeof error<T> = {
// //     errors: z.treeifyError(T)
// //   }

// export function useRegisterForm() {
//   const [formState, setFormState] = useState<RegisterFormState>({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showError, setShowError] = useState<boolean>(false);

//   const handleChange = (
//     field: keyof RegisterFormState,
//     value: string
//   ): void => {
//     setFormState((prev) => ({ ...prev, [field]: value }));
//   };

//   //  validate the form

//   const validate = () => {
//     const RegisterFormSchemaResult = RegisterFormSchema.safeParse(formState);
//     if (!RegisterFormSchemaResult.success) {
//       setShowError(true);
//       return {
//         errors: z.treeifyError(RegisterFormSchemaResult.error),
//       };
//     }

//     setShowError(false);
//     return true;
//   };

//   const resetForm = (): void => {
//     setFormState({
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//     setShowError(false);
//   };
//   return { formState, showError, handleChange, validate, resetForm };
// }
