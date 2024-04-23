import {
  GithubLogo,
  At,
  TwitterLogo,
  LinkedinLogo,
  ReadCvLogo,
} from "@phosphor-icons/react/dist/ssr";
import { socials } from "@/data/data";
const Header = () => {
  return (
    <header className="z-50 flex justify-between w-full py-4 mt-2 ">
      <div className="flex items-center">
        <a
          className="flex items-center text-xl font-[500] no-underline text-zinc-700 dark:text-zinc-300"
          href="/"
        >
          @anurag
        </a>
      </div>
      <div className="flex items-center gap-2 text-zinc-400">
        <a href={socials.github} title="Github" target="blank">
          <GithubLogo size={25} className="text-zinc-600 dark:text-gray-400" />
        </a>
        <a href={socials.linkedin} title="LinkedIn" target="blank">
          <LinkedinLogo
            className="text-zinc-600 dark:text-gray-400"
            size={25}
          />
        </a>
        <a href={socials.twitter} title="Twitter" target="blank">
          <TwitterLogo size={25} className="text-zinc-600 dark:text-gray-400" />
        </a>
        <a href={socials.resume} title="Resume" target="blank">
          <ReadCvLogo size={25} className="text-zinc-600 dark:text-gray-400" />
        </a>
      </div>
    </header>
  );
};

export default Header;
