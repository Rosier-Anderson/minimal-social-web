"use client";

import Link from "next/link";

function LoginForm() {
  return (
    <form action="" className=" flex flex-col gap-5 text-base ">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="m@exemple.com"
          className="p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950"
          required
        />
        {false && (
          <p className="text-xs text-red-500 ">Please enter email address</p>
        )}
      </div>
      <div className="">
        <div className="flex justify-between ">
          {" "}
          <label htmlFor="password">Password</label>
          <Link
            // remenber to change the href on local or production
            href="https://djj6yj-3000.csb.app/password/forgot"
            className=" flex items-center underline text-sm max-sm:text-sm"
          >
            Forgot password?
          </Link>
        </div>

        <input
          name="password"
          id="password"
          type="password"
          placeholder=""
          // Etra margin-top => mt2 for better allignment
          className=" p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950 mt-2"
          required
        />
        {false && (
          <p className=" text-red-500 text-xs">Please enter password address</p>
        )}
      </div>
      <LoginButton />
    </form>
  );
}

const LoginButton = () => {
  return (
    <button
      type="submit"
      className="bg-black text-white w-full text-base rounded-lg h-11 sm:h-12 cursor-pointer"
    >
      Login
    </button>
  );
};

export default LoginForm;
