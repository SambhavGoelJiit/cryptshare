import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex justify-center items-center h-16 max-w-screen-xl px-4 sm:px-6 lg:px-8 border-b">
        <Image src="/logo.svg" width={100} height={50} />
      </div>
    </header>
  );
}

export default Header;
