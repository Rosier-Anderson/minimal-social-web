"use client";
import React from "react";

function RegisterForm() {
  // const { formState, showError, handleChange, validate, resetForm } =
  //   useRegisterForm();
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   console.log(formState);
  // };
  return (
    <form action="" className=" flex flex-col gap-4 text-base ">
      <div className="flex flex-col gap-2">
        <label htmlFor="user-name">User name</label>
        <input
          id="user-name"
          type="name"
          placeholder="John Doe"
          className="p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950"
        />
        {/* {showError && (
          <p className="text-xs text-red-500 ">Please enter your name</p>
        )} */}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="m@exemple.com"
          className="p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950"
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder=""
          // Etra margin-top => mt2 for better allignment ?
          className=" p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950 "
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder=""
          // Etra margin-top => mt2 for better allignment ?
          className=" p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950 "
        />
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
      Login
    </button>
  );
};

export default RegisterForm;
