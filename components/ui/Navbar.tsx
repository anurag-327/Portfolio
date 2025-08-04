"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [{ name: "blogs", href: "/blog" }];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-medium hover:opacity-70 transition-opacity"
      >
        Anurag
      </Link>

      <nav className="flex items-center gap-6">
        {navItems.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={`text-sm transition-all hover:opacity-70 ${
              pathname === href
                ? "text-black font-medium dark:text-white"
                : "text-gray-600 dark:text-gray-200"
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
