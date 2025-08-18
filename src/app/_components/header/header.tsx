import React from "react";
import TopNavigation from "@/app/_components/header/topNavigation";
import TopNavigationAccount from "@/app/_components/header/topNavigationAccount";

const Header: React.FC = () => {
  return (
    <nav className="sticky backdrop-blur-md inset-x-0 top-0 z-10 border-b border-base-200">
      <div className="container h-[70px] xl:h-[90px] flex items-center  text-white">
        <span>Logo</span>
        <TopNavigation />
        <TopNavigationAccount />
      </div>
    </nav>
  );
};

export default Header;
