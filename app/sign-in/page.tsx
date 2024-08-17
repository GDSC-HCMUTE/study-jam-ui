import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import SignInForm from "./SignInForm";
import studyJamLogo from "@/public/images/study-jam-logo.png";

export const metadata: Metadata = {
  title: "Study Jam | Sign In",
};

const SignIn = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-blue flex justify-center items-center max-md:hidden">
        <div className="w-3/4">
          <Image src={studyJamLogo} alt="Study Jam logo" />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white max-md:w-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl text-blue text-center font-bold">
            Sign in to your account!
          </h1>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
