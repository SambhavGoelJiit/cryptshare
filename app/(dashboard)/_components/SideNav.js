"use client";
import { FileIcon, Shield, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function SideNav() {
  const menuList = [
    { id: 1, name: "Upload", icon: Upload, path: "/upload" },
    { id: 2, name: "Files", icon: FileIcon, path: "/files" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full bg-white dark:bg-gray-900">
      <a href="/">
        <div className="p-5 flex justify-center items-center">
          <Image
            src="/logo.svg"
            className="block mx-auto"
            width={100}
            height={70}
          />
        </div>
      </a>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item) => (
          <a href={item.path} key={item.id}>
            <button
              className={`flex gap-2 p-4 px-6 hover:bg-blue-300 w-full text-gray-500${
                activeIndex === item.id ? " bg-blue-50 text-primary" : ""
              }`}
              onClick={() => setActiveIndex(item.id)}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
