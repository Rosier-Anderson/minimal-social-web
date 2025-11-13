import React from "react";
import LoginForm from "./login-form";
import Link from "next/link";

function LoginPage() {
  return (
    <div
      id="box"
      className="flex justify-center size-screen text-sm md:text-lg lg:text-xl overflow-auto"
    >
      <div className="mt-4 sm:mt-10 p-4 w-sm sm:w-[400px] h-fit shadow-sm rounded-lg">
        <div className="flex flex-col justify-center items-center gap-0.5 sm:gap-2 mb-5">
          <h1 className=" text-2xl sm:text-3xl font-semibold">Sign in</h1>
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
    <div className="flex items-center justify-center text-base sm:text-sm mt-8 sm:mt-10 ">
      <p className="max-sm:text-sm  whitespace-nowrap">
        Don't have an account?&nbsp;
      </p>
      <Link
        // remenber to change it in production or localS
        href="https://djj6yj-3000.csb.app/register"
        className="underline whitespace-nowrap max-sm:text-sm"
      >
        Sign up
      </Link>
    </div>
  );
};

export default LoginPage;
