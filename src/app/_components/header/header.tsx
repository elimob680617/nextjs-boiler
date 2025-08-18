import React from "react";
import TopNavigation from "@/app/_components/header/topNavigation";
import TopNavigationAccount from "@/app/(dashborad)/_components/header/topNavigationAccount";
import { Button } from "@/app/_components/button";

const Header: React.FC = () => {
  return (
    <nav className="sticky backdrop-blur-md inset-x-0 top-0 z-10 border-b border-base-200">
      <div className="container h-[70px] xl:h-[90px] flex items-center  text-white">
        <span>Logo</span>
        <TopNavigation />
        <div className="flex justify-end  w-full items-center">
          <Button variant="outlined" color="primary" href="/sign-in">
            ورود | ثبت نام
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
