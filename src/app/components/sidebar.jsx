"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLogout = () => {
    router.push("/signin");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="w-full md:w-[262px] h-full">
      <div className="flex flex-col justify-between h-auto md:h-screen">
        <div>
          <div className="flex items-center justify-between py-4 lg:py-0 px-4 border-b border-[#E9EAEB] lg:border-none">
            <div className="flex gap-[11px] justify-start items-center lg:mt-6">
              <Image
                width={29}
                height={32}
                src="/images/website-logo.svg"
                alt="website-logo"
              />
              <span className="text-2xl leading-[26px] whitespace-nowrap">
                CodeAnt AI
              </span>
            </div>
            <div className="md:hidden" onClick={toggleSidebar}>
              <Image
                width={24}
                height={24}
                src={isOpen ? "/images/hamburger-close-icon.svg" : "/images/hamburger-open-icon.svg"}
                alt={isOpen ? "hamburger-close-icon" : "hamburger-open-icon"}
                className="transition-all duration-600 ease-in-out"
              />
            </div>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:block container mx-auto px-5 pt-[23px] pb-5`}>
            <select
              id="demo-select"
              value={selectedOption}
              onChange={handleSelectChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                UtkarshDhairyaPanwar
              </option>
              <option value="option2">SahilPanigrahi</option>
              <option value="option3">RahulKumar</option>
            </select>
          </div>

          <div className={`${isOpen ? "block" : "hidden"} md:block px-4`}>
            <div className="px-[14px] py-[10px] flex gap-2 justify-start items-center bg-[#1570EF] text-white rounded-md">
              <Image
                width={24}
                height={24}
                src="/images/active/repositories-icon.svg"
                alt="repositories-icon"
              />
              <button className="text-base">Repositories</button>
            </div>
            <div className="px-[14px] py-[10px] flex gap-2 justify-start items-center">
              <Image
                width={24}
                height={24}
                src="/images/ai-code-review-icon.svg"
                alt="ai-code-review-icon"
              />
              <button className="whitespace-nowrap">AI Code Review</button>
            </div>
            <div className="px-[14px] py-[10px] flex gap-2 justify-start items-center">
              <Image
                width={24}
                height={24}
                src="/images/cloud-icon.svg"
                alt="cloud-icon"
              />
              <button className="whitespace-nowrap">Cloud Security</button>
            </div>
            <div className="px-[14px] py-[10px] flex gap-2 justify-start items-center">
              <Image
                width={24}
                height={24}
                src="/images/how-to-use-icon.svg"
                alt="how-to-use-icon"
              />
              <button>How to Use</button>
            </div>
            <div className="px-[14px] py-[10px] flex gap-2 justify-start items-center">
              <Image
                width={24}
                height={24}
                src="/images/settings-icon.svg"
                alt="settings-icon"
              />
              <button>Settings</button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:block px-4 lg:p-4`}>
          <div className="px-[14px] py-[10px] flex gap-2 justify-start items-center">
            <Image
              width={24}
              height={24}
              src="/images/support-icon.svg"
              alt="support-icon"
            />
            <button>Support</button>
          </div>
          <div className="px-[14px] py-[10px] flex gap-2 justify-start items-center">
            <Image
              width={24}
              height={24}
              src="/images/logout-icon.svg"
              alt="logout-icon"
            />
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
