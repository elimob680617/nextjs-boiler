import React, { ReactNode } from "react";
import Link from "next/link";
import TopNavigationAccount from "@/app/(dashborad)/_components/header/topNavigationAccount";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopNavigationAccount />
      <div className="flex-1 container">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[400px_1fr] lg:mt-10 gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <div className="flex flex-col">
                <Link href="/dashboard">dashboard</Link>
                <Link href="/dashboard/profile">profile</Link>
              </div>
            </div>
          </aside>
          <main className="flex flex-col items-center relative mt-4 pb-18">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
