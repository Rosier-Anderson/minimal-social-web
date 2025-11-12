import React from "react";
import RegisterForm from "./register-form";

function SignUp() {
  return (
    <div
      id="box"
      className="flex justify-center size-screen text-sm md:text-lg lg:text-xl "
    >
      <div className=" md:mt-10  p-4 w-[350px] md:w-[400px] h-[400px]">
        <div className="flex flex-col justify-center items-center gap-0.5 md:gap-2 mb-5">
          <h1 className=" text-2xl md:text-3xl font-semibold">Sign up</h1>
          <p className="text-base whitespace-nowrap">
            Enter your information to create an account
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default SignUp;
