import Link from "next/link";
import { Github } from "../icons/GithubIcon";
import { Linkedin, Twitter, Mail } from "lucide-react";

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/anurag-327",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/itsAnurag_sri",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anuragsr327",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:anuragsrivastav0027@gmail.com",
    icon: Mail,
  },
];

const LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blog" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 pb-8 px-4 md:px-0 text-zinc-600 dark:text-zinc-400">
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        <div className="space-y-2.5 max-w-xs">
          <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
            Anurag Srivastav
          </h3>
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Building high-performance distributed systems and tools for developers.
          </p>
          <div className="text-xs text-zinc-400 dark:text-zinc-500 pt-2">
            © {year} Anurag Srivastav. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-6">
          <ul className="flex flex-wrap gap-6 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-5">
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
