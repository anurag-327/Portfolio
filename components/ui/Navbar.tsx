"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitecher";
import { Space_Grotesk } from "next/font/google";

type NavItem = {
  name: string;
  href: string;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blog" },
  { name: "Project", href: "https://anuragsri327.vercel.app/projects" },
  { name: "About", href: "https://anuragsri327.vercel.app/about" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between w-full gap-8">
      {navItems.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          target={href.startsWith("/") ? "_self" : "_blank"}
          className={`${
            spaceGrotesk.className
          } text-sm py-3 transition-all font-medium hover:opacity-80 ${
            !href.startsWith("/") ? "hidden md:inline-block" : ""
          } ${
            pathname === href
              ? "text-zinc-900 dark:text-zinc-50 "
              : "text-zinc-700 dark:text-zinc-200"
          }`}
        >
          {name}
        </Link>
      ))}
      <ThemeSwitch />
    </nav>
  );
}
