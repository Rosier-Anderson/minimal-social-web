import Link from "next/link";
import React from "react";

function LoginForm() {
  return (
    <form action="" className=" flex flex-col gap-7 text-base ">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="m@exemple.com"
          className="p-3 w-full text-base rounded-xl h-11 md:h-12 bg-gray-100 outline-neutral-950"
        />
      </div>
      <div className="">
        <div className="flex justify-between ">
          {" "}
          <label htmlFor="password">Password</label>
          <Link
            // remenber to change the href on local or production
            href="https://djj6yj-3000.csb.app/forgot-password"
            className=" flex items-center underline text-sm"
          >
            Forgot password?
          </Link>
        </div>

        <input
          id="password"
          type="password"
          placeholder=""
          // Etra margin-top => mt2 for better allignment
          className=" p-3 w-full text-base rounded-xl h-11 md:h-12 bg-gray-100 outline-neutral-950 mt-2"
        />
      </div>
      <LoginButton />
    </form>
  );
}

const LoginButton = () => {
  return (
    <button
      type="submit"
      className="bg-black text-white w-full text-base rounded-xl h-11 md:h-12 cursor-pointer"
    >
      Login
    </button>
  );
};

export default LoginForm;
