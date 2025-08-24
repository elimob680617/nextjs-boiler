import type { Metadata } from "next";
import "../../globals.css";
import Header from "@/app/_components/header/header";
import Footer from "@/app/_components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-dvh dark:bg-base-300 dark:text-base-content">
      <Header />
      <main className="flex-1 container">{children}</main>
      <Footer />
    </div>
  );
}
