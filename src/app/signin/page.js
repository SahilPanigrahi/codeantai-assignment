"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignInButton = ({ src, alt, children, handleNavigate }) => (
  <div className="px-[14px] md:px-[100px] py-[10px] cursor-pointer flex gap-4 justify-center items-center rounded-md border border-[#D8DAE5]"  onClick={handleNavigate}>
    <Image width={24} height={24} src={src} alt={alt} />
    <button className="font-semibold text-base lg:whitespace-nowrap">
      {children}
    </button>
  </div>
);

const SignIn = () => {
  const [activeButton, setActiveButton] = useState("SAAS");
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="hidden lg:block relative w-full lg:w-1/2">
        <Image
          width={285}
          height={320}
          src="/images/signin-main-svg.svg"
          alt="signin-main-svg-icon"
          className="absolute left-1 bottom-1"
        />
        <div className="inline-block rounded-[24px] shadow-lg ml-20 mt-24">
          <div className="flex gap-[11px] justify-start items-center pl-6 py-[21px] border-b border-[#E6E8F0]">
            <Image
              width={29}
              height={32}
              src="/images/website-logo.svg"
              alt="website-logo"
            />
            <span className="text-lg font-bold leading-[26px] whitespace-nowrap">
              AI to Detect & Autofix Bad Code
            </span>
          </div>
          <div className="pl-5 pr-10 py-[22px] flex gap-10 justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-lg text-center">30+</p>
              <p className="text-sm text-center">Language Support</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-lg text-center">10K+</p>
              <p className="text-sm text-center">Developers</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-lg text-center">100K+</p>
              <p className="text-sm text-center">Hours Saved</p>
            </div>
          </div>
        </div>
        <div className="absolute lg:left-48 top-28 xl:left-80 xl:top-20 z-20 bg-white inline-block rounded-[24px] shadow-lg mt-40 px-[30px] py-5">
          <div className="flex gap-[83px]">
            <div className="size-[50px] bg-[#bcb4f9] rounded-full flex justify-center items-center">
              <Image
                width={28}
                height={28}
                src="/images/pie-icon.svg"
                alt="pie-icon"
              />
            </div>
            <div>
              <div className="flex justify-center items-center gap-2 mt-1">
                <Image
                  width={10}
                  height={8}
                  src="/images/signin/up-arrow.svg"
                  alt="up-arrow-svg-icon"
                />
                <p className="text-sm font-bold text-[#0049C6]">14%</p>
              </div>
              <p>This week</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-bold">Issues Fixed</p>
            <p className="text-3xl font-bold">500K+</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] w-full lg:w-1/2 h-screen px-4 lg:px-6 flex justify-center items-center flex-col gap-8">
        <div className="bg-[#FFF] border border-[#E9EAEB] rounded-xl">
          <div className="border-b border-[#D5D7DA] px-4">
            <div className="flex gap-[11px] justify-center px-5 items-center mt-6 mb-3">
              <Image
                width={29}
                height={32}
                src="/images/website-logo.svg"
                alt="website-logo"
              />
              <h1 className="text-2xl leading-[26px]">CodeAnt AI</h1>
            </div>
            <h2 className="text-2xl leading-[48px] font-semibold text-center mb-3">
              Welcome to CodeAnt AI
            </h2>
            <div className="flex rounded-md mb-8 border border-[#E9EAEB]">
              <button
                onClick={() => setActiveButton("SAAS")}
                className={`flex-1 py-2 text-xl font-semibold rounded-md transition-all duration-200 ${
                  activeButton === "SAAS"
                    ? "bg-[#1570EF] text-white"
                    : "bg-[#FAFAFA] text-[#414651]"
                }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setActiveButton("Self Hosted")}
                className={`flex-1 py-2 text-xl font-semibold rounded-md transition-all duration-200 ${
                  activeButton === "Self Hosted"
                    ? "bg-[#1570EF] text-white"
                    : "bg-[#FAFAFA] text-[#414651]"
                }`}
              >
                Self Hosted
              </button>
            </div>
          </div>
          {activeButton === "SAAS" && (
            <div className="px-4 md:px-[113px] py-6 flex flex-col gap-4">
              <SignInButton
                src="/images/signin/github-icon.svg"
                alt="repositories-icon"
                handleNavigate={handleNavigate}
              >
                Sign in with Github
              </SignInButton>
              <SignInButton
                src="/images/signin/bitbucket-icon.svg"
                alt="bitbucket-icon"
                handleNavigate={handleNavigate}
              >
                Sign in with Bitbucket
              </SignInButton>
              <SignInButton
                src="/images/signin/azure-icon.svg"
                alt="azure-icon"
                handleNavigate={handleNavigate}
              >
                Sign in with Azure Devops
              </SignInButton>
              <SignInButton
                src="/images/signin/gitlab-icon.svg"
                alt="gitlab-icon"
                handleNavigate={handleNavigate}
              >
                Sign in with GitLab
              </SignInButton>
            </div>
          )}
          {activeButton === "Self Hosted" && (
            <div className="px-4 md:px-[113px] py-6 flex flex-col gap-4 h-[283px]">
              <SignInButton
                src="/images/signin/gitlab-icon.svg"
                alt="gitlab-icon"
                handleNavigate={handleNavigate}
              >
                Self Hosted GitLab
              </SignInButton>
              <SignInButton
                src="/images/signin/sso-key-icon.svg"
                alt="sso-key-icon"
                handleNavigate={handleNavigate}
              >
                Sign in with SSO
              </SignInButton>
            </div>
          )}
        </div>
        <p className="text-[14px] text-center">
          By signing up you agree to the{" "}
          <button onClick={handleNavigate} className="font-bold text-[14px]">
            Privacy Policy.
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
