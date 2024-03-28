import React from "react";
import {
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  ReadCvLogo,
} from "@phosphor-icons/react/dist/ssr";
import { socials } from "@/data/data";
const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full mt-10 text-start text-zinc-700 dark:text-zinc-400">
      <span>Anurag Srivastav © 2024</span>
      <div className="flex items-center gap-2 text-zinc-400">
        <a href={socials.github} target="blank">
          <GithubLogo size={25} className="text-zinc-600 dark:text-zinc-400" />
        </a>
        <a href={socials.linkedin} target="blank">
          <LinkedinLogo
            className="text-zinc-600 dark:text-zinc-400"
            size={25}
          />
        </a>
        <a href={socials.twitter} target="blank">
          <TwitterLogo size={25} className="text-zinc-600 dark:text-zinc-400" />
        </a>
        <a href={socials.instagram} target="blank">
          <InstagramLogo
            size={25}
            className="text-zinc-600 dark:text-zinc-400"
            weight="regular"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
