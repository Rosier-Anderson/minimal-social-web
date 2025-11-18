"use client";
import { useState } from "react";
interface FormState {
  email: string;
  password: string;
}
export function useLoginForm() {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
  const resetForm = () =>
    setFormState({
      email: "",
      password: "",
    });
  return { handleChange, formState, resetForm };
}
