import Link from "next/link";
import React from "react";

function RegisterForm() {
  return (
    <form action="" className=" flex flex-col gap-7 text-base ">
      <div className="flex flex-col gap-2">
        <label htmlFor="user-name">User name</label>
        <input
          id="user-name"
          type="name"
          placeholder="John Doe"
          className="p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950"
        />
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
          // Etra margin-top => mt2 for better allignment
          className=" p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950 mt-2"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="password">Confirm Password</label>
        <input
          id="password"
          type="password"
          placeholder=""
          // Etra margin-top => mt2 for better allignment
          className=" p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950 mt-2"
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
