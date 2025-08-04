import { Github } from "../icons/GithubIcon";

export const Footer = () => {
  const year = String(new Date().getFullYear());

  return (
    <footer className="flex flex-col text-zinc-700 dark:text-zinc-100 md:pt-0 pt-5">
      <hr className="w-full border-t border-zinc-150 dark:border-zinc-800" />
      <div className="flex items-center text-sm pt-2">
        <span>{year} © Anurag Srivastav</span>
        <a
          className="link ml-auto inline-flex items-center gap-1.5"
          href="https://github.com/anurag-327/portfolio"
          rel="noreferrer"
          target="_blank"
        >
          <Github className="size-5 dark:invert" />
        </a>
      </div>
    </footer>
  );
};
