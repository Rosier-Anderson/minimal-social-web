"use client";

import login from "@/src/lib/actions/login";
import Link from "next/link";
import { useActionState } from "react";

function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <form
      action={formAction}
      method="POST"
      name="loginForm"
      className=" flex flex-col gap-5 text-base "
    >
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
      {state?.error && <p className="text-xs text-red-500 ">{state?.error}</p>}
      <div className="">
        <div className="flex justify-between ">
          {" "}
          <label htmlFor="password">Password</label>
          <Link
            // remenber to change the href on local or production
            href="/password/forgot"
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
        />
        {state?.errors && (
          <p className="text-xs text-red-500 ">
            {state.errors.properties?.password?.errors.toString()}
          </p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}

const SubmitButton = () => {
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
