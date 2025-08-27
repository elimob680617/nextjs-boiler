import React from "react";
import Link from "next/link";
import { NavigationMenuItem } from "@/types/navigation-menu-items.type";

const sidebarItems: NavigationMenuItem[] = [
  {
    title: "دوره های من",
    href: "/",
  },
  {
    title: "فاکتور ها",
    href: "/1",
  },
  {
    title: "پیام های من",
    href: "/2",
  },
  {
    title: "پروفایل کاربری",
    href: "/3",
  },
];

const Sidebar = () => {
  return (
    <ul className="flex flex-col self-stretch *:border-b *:border-base-75 *:border-dashed mt-8 *:px-4 *:hover:opacity-80 *:transition-all *:py-4">
      {sidebarItems.map((item) => (
        <li key={item.href}>
          <Link
            className="flex items-center text-secondary-content gap-3 w-full"
            href={item.href}
          >
            {item.title}
          </Link>
        </li>
      ))}
      <li className="flex items-center text-error gap-3 w-full">
        <Link href="/dashboard">خروج از حساب کاربری</Link>
      </li>
    </ul>
  );
};
export default Sidebar;
