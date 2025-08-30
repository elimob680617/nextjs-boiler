import React, { ReactNode } from "react";
import Link from "next/link";
import TopNavigationAccount from "@/app/(dashborad)/_components/header/topNavigationAccount";
import Sidebar from "@/app/(dashborad)/_components/sidebar/sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopNavigationAccount />
      <div className="flex-1 container">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[400px_1fr] lg:mt-10 gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <div className="flex flex-col">
                <div className="flex flex-row gap-4 py-2 items-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-lg text-base">
                      الهام مبینی
                    </span>
                    <span className="text-secondary-300 text-base">
                      شماره موبایل : 09126598556
                    </span>
                  </div>
                </div>
                <Sidebar />
              </div>
            </div>
          </aside>
          <main className="mt-4">{children}</main>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
