import React from "react";
import LoginForm from "./login-form";
import Link from "next/link";

function LoginPage() {
  return (
    <div
      id="box"
      className="flex justify-center size-screen text-sm md:text-lg lg:text-xl "
    >
      <div className=" md:mt-10  p-4 w-[350px] md:w-[400px] h-[400px]">
        <div className="flex flex-col justify-center items-center gap-0.5 md:gap-2 mb-5">
          <h1 className=" text-2xl md:text-3xl font-semibold">Sign in</h1>
          <p className="text-base whitespace-nowrap">
            Enter your account to sign in
          </p>
        </div>
        <LoginForm />
        <SignUpLink />
      </div>
    </div>
  );
}

const SignUpLink = () => {
  return (
    <div className="flex items-center justify-center text-base md:text-sm mt-8 md:mt-10">
      <p className="">Don't have an account?&nbsp;</p>
      <Link
        // remenber to change it in production or localS
        href="https://djj6yj-3000.csb.app/register"
        className="underline"
      >
        Sign up
      </Link>
    </div>
  );
};

export default LoginPage;
