import React from "react";
import RegisterForm from "./register-form";
import Link from "next/link";

function SignUp() {
  return (
    <div
      id="box"
      className="flex justify-center size-screen text-sm md:text-lg lg:text-xl "
    >
      <div className=" mt-8 sm:mt-10 p-4 w-[350px] sm:w-[400px] h-fit shadow-sm rounded-lg">
        <div className="flex flex-col justify-center items-center gap-0.5 sm:gap-2 mb-5">
          <h1 className=" text-2xl sm:text-3xl font-semibold">Sign up</h1>
          <p className="text-base/relaxed text-center w-[190px] sm:w-auto  sm:whitespace-nowrap ">
            Enter your information to create an account
          </p>
        </div>
        <RegisterForm />
        <SignInLink />
      </div>
    </div>
  );
}
const SignInLink = () => {
  return (
    <div className="flex items-center justify-center text-base sm:text-sm mt-8 sm:mt-10">
      <p className="">Already have an account? &nbsp;</p>
      <Link href="/login" className="underline">
        Sign in
      </Link>
    </div>
  );
};
export default SignUp;
