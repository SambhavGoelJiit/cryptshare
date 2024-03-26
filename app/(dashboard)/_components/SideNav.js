"use client";
import { FileIcon, Shield, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function SideNav() {
  const menuList = [
    { id: 1, name: "Upload", icon: Upload, path: "/upload" },
    { id: 2, name: "Files", icon: FileIcon, path: "/files" },
    { id: 3, name: "Upgrade", icon: Shield, path: "/upgrade" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full bg-white dark:bg-gray-900">
      <div className="p-5 ">
        <Image
          src="/logo.svg"
          className="block mx-auto"
          width={100}
          height={70}
        />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            className={`flex gap-2 p-4 px-6 hover:bg-blue-300 w-full text-gray-800${
              activeIndex == index ? "bg-blue-50 text-primary" : null
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
