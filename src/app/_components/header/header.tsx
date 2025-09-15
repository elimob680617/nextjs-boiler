import React from "react";
import TopNavigation from "@/app/_components/header/topNavigation";
import { Button } from "@/app/_components/button";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="sticky backdrop-blur-md inset-x-0 top-0 z-10 border-b border-base-75">
      <div className="container h-[70px] xl:h-[90px] flex items-center text-white">
        <span>Logo</span>
        <TopNavigation />
        <div className="flex justify-end  w-full items-center">
          <Link href={"/sign-in"}>
            <Button variant="outline" color="primary">
              ورود | ثبت نام
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
