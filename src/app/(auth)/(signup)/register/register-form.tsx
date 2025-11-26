"use client";
import { useRegisterForm } from "@/src/hooks/useRegisterForm";
import register from "@/src/lib/actions/register";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

function RegisterForm() {
  const [state, registerAction, isPending] = useActionState(
    register,
    undefined
  );
  const { formState, handleChange, resetForm } = useRegisterForm();

  return (
    <form
      action={registerAction}
      name="registerForm"
      className=" flex flex-col gap-4 text-base "
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">User name</label>
        <input
          name="name"
          value={formState.name}
          required
          onChange={(e) => handleChange("name", e.target.value)}
          id="name"
          type="name"
          placeholder="John Doe"
          className="p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950"
        />
        {/* {showError && (
          <p className="text-xs text-red-500 ">Please enter your name</p>
        )} */}
        {state?.errors && (
          <p className="text-xs text-red-500 ">
            {state.errors.properties?.name?.errors.toString()}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={formState.email}
          required
          onChange={(e) => handleChange("email", e.target.value)}
          id="email"
          type="email"
          placeholder="m@exemple.com"
          className="p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950"
        />
        {state?.errors && (
          <p className="text-xs text-red-500 ">
            {state.errors.properties?.email?.errors.toString()}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={formState.password}
          required
          onChange={(e) => handleChange("password", e.target.value)}
          id="password"
          type="password"
          placeholder=""
          // Etra margin-top => mt2 for better allignment ?
          className=" p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950 "
        />
        {state?.errors && (
          <p className="text-xs text-red-500 ">
            {state.errors.properties?.password?.errors[0]}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          name="confirmPassword"
          value={formState.confirmPassword}
          required
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          id="confirmPassword"
          type="password"
          placeholder=""
          // Etra margin-top => mt2 for better allignment ?
          className=" p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950 "
        />
        {state?.errors && (
          <p className="text-xs text-red-500 ">
            {state.errors.properties?.confirmPassword?.errors.toString()}
          </p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-black text-white w-full text-base rounded-lg h-11 sm:h-12 cursor-pointer"
    >
      {status.pending ? "Creating..." : "Create an account"}
    </button>
  );
}

export default RegisterForm;
