import React from "react";
import Header from "@/app/_components/header/header";
import Footer from "@/app/_components/footer/footer";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="flex-1 container">{children}</main>
      <Footer />
    </>
  );
}
