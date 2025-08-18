"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenuItem } from "@/app/_components/types/navigation-menu-items.type";

const menuItems: NavigationMenuItem[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "درباره ما",
    href: "/about-us",
  },
  {
    title: "تماس با ما",
    href: "/contact-us",
  },
];
const TopNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className="hidden xl:flex items-center whitespace-nowrap gap-8 ms-20">
        {menuItems.map((item) => {
          const isActive = item.href === pathname;
          return (
            <li key={`navigation-${item.href}`}>
              <Link
                href={item.href}
                className={`hover:text-primary  transition-colors duration-200 pb-2 ${
                  isActive &&
                  "border-b-2 dark:text-primary  dark:border-primary/30"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TopNavigation;
