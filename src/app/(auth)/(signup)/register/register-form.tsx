"use client";
import register from "@/src/lib/actions/register";
import React, { useActionState } from "react";

function RegisterForm() {
  const [state, registerAction, isPending] = useActionState(
    register,
    undefined
  );
  // const { formState, showError, handleChange, validate, resetForm } =
  //   useRegisterForm();
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   console.log(formState);
  // };
  return (
    <form
      action={registerAction}
      method="POST"
      name="registerForm"
      className=" flex flex-col gap-4 text-base "
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">User name</label>
        <input
          name="name"
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
          id="password"
          type="password"
          placeholder=""
          // Etra margin-top => mt2 for better allignment ?
          className=" p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950 "
        />
        {state?.errors && (
          <p className="text-xs text-red-500 ">
            {state.errors.properties?.password?.errors.toString()}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          name="confirmPassword"
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

      <RegisterButton />
    </form>
  );
}

const RegisterButton = () => {
  return (
    <button
      type="submit"
      className="bg-black text-white w-full text-base rounded-lg h-11 sm:h-12 cursor-pointer"
    >
      Create an account
    </button>
  );
};

export default RegisterForm;
