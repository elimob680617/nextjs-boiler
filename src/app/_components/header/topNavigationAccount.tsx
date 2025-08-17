"use client";

import React from "react";
import { Button } from "@/app/_components/button";

const TopNavigationAccount: React.FC = () => {
  return (
    <div className="flex relative justify-center xl:justify-end xl:gap-4 w-full items-center">
      <div className="flex items-center gap-6 left-0 absolute">
        <div className="flex items-center gap-6">
          <span className="text-lg xl:hidden">خانه</span>
          <div className="flex items-center">
            <div className="hidden xl:block">
              <Button variant="outlined" color="primary" href="/sign-in">
                ورود | ثبت نام
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopNavigationAccount;
