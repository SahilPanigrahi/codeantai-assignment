"use client";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import './globals.css';

const projects = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    updated: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "JavaScript",
    size: "5871 KB",
    updated: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    updated: "5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    updated: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    updated: "6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    updated: "4 days ago",
  },
  {
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: "5432 KB",
    updated: "7 days ago",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="w-full md:w-full h-screen bg-[#FAFAFA] md:p-6">
        <div className="border border-[#E9EAEB] rounded-lg overflow-hidden">
          <div className={`${isOpen !==false ? "bg-[#adadad]": "bg-[#FAFAFA]"} px-4 md:px-6 py-5 border-b border-[#E9EAEB]`}>
            <div className="flex flex-col gap-3 md:gap-0 sm:flex-row w-full justify-between">
              <div>
                <p className="text-[181D27] text-2xl font-semibold">
                  Repositories
                </p>
                <p className="text-sm text-[#414651] mt-1">
                  33 total repositories
                </p>
              </div>
              <div className="flex gap-3 py-2">
                <div className="px-[14px] py-[8px] flex gap-1 items-center border border-[#D5D7DA] shadow-sm rounded-md">
                  <Image
                    width={20}
                    height={20}
                    src="/images/refresh-icon.svg"
                    alt="refresh-icon"
                  />
                  <button className="text-sm">Refresh All</button>
                </div>
                <div className="bg-[#1570EF] text-white px-[14px] py-[8px] flex gap-1 items-center border border-[#D5D7DA] shadow-sm rounded-md">
                  <Image
                    width={20}
                    height={20}
                    src="/images/add-icon.svg"
                    alt="add-icon"
                  />
                  <button className="text-sm">Add Repository</button>
                </div>
              </div>
            </div>
            <div className="mt-4 max-w-[366px] flex gap-[10px] border border-[#D5D7DA] rounded-md px-[14px] py-[10px]">
              <Image
                width={14}
                height={14}
                src="/images/search.svg"
                alt="search-icon"
              />
              <input
                type="text"
                placeholder="Search repositories"
                value={searchQuery}
                onChange={handleSearchChange}
                className={`${isOpen !==false ? "bg-[#adadad]": "bg-[#FAFAFA]"} placeholder:text-[#414651] text-base leading-5 placeholder:text-base placeholder:leading-5 outline-none`}
              />
            </div>
          </div>
          <div className="flex flex-col">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                  className={`${isOpen !==false ? "bg-[#adadad]": "bg-[#FAFAFA]"} flex flex-col gap-2 border-b border-[#E9EAEB] p-4 hover:bg-[#F5F5F5]`}
              >
                <div>
                  <span className="font-medium text-lg leading-6 mr-2 text-[#181D27]">
                    {project.name}
                  </span>
                  <span className="text-sm border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3] px-[10px] py-[2px] rounded-2xl">
                    {project.visibility}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-sm">{project.language}</span>
                  <div className="size-2 bg-blue-600 rounded-full inline-block mr-3 md:mr-4"></div>
                  <Image
                    width={11}
                    height={12}
                    src="/images/database.svg"
                    alt="database-icon"
                    className="inline"
                  />
                  <span className="text-sm mr-3 md:mr-4 whitespace-nowrap">
                    {project.size}
                  </span>
                  <span className="text-sm whitespace-nowrap">
                    Updated {project.updated}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
