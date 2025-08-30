"use client";

import React from "react";
import Link from "next/link";

const TopNavigationAccount: React.FC = () => {
  return (
    <nav className="sticky backdrop-blur-md inset-x-0 top-0 z-10 border-b border-base-200">
      <div className="container h-[70px] xl:h-[90px] flex items-center  text-base">
        {/*<Link href="/">Logo</Link>*/}
        <div className="flex justify-center xl:justify-end  w-full items-center">
          <span className="text-sm">الهام مبینی</span>
        </div>
      </div>
    </nav>
  );
};
export default TopNavigationAccount;
