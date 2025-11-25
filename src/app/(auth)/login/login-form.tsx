"use client";

import { useLoginForm } from "@/src/hooks/useLoginForm";
import login from "@/src/lib/actions/login";
import Link from "next/link";
import React, { use, useActionState } from "react";
import { useFormStatus } from "react-dom";

function LoginForm() {
  const [state, formAction] = useActionState(login, undefined);
  const { handleChange, formState } = useLoginForm();

  return (
    <form
      name="LoginForm"
      action={formAction}
      className=" flex flex-col gap-5 text-base "
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={formState.email}
          onChange={(e) => handleChange("email", e.target.value)}
          id="email"
          type="email"
          placeholder="m@exemple.com"
          className="p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950"
        />
        {state?.errors && (
          <p className="text-xs text-red-500 ">
            {state.errors.fieldErrors.email?.toString()}
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
          value={formState.password}
          onChange={(e) => {
            handleChange("password", e.target.value);
          }}
          id="password"
          type="password"
          placeholder=""
          // Etra margin-top => mt2 for better allignment
          className=" p-3 w-full text-base rounded-lg h-11 sm:h-12 bg-gray-100 outline-neutral-950 mt-2"
        />
        {state?.errors && (
          <p className="text-xs text-red-500 ">
            {state.errors.fieldErrors.password}
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
      disabled={status.pending}
      type="submit"
      className="bg-black text-white w-full text-base rounded-lg h-11 sm:h-12 cursor-pointer"
    >
      {status.pending ? "Login in..." : "Login"}
    </button>
  );
}

export default LoginForm;
