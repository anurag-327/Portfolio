import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Github } from "../icons/GithubIcon";

export default function Intro() {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400">
      <div className="space-y-5 text-left">
        <p>
          Hi, I&apos;m Anurag Srivastav — a backend-focused Full-Stack developer
          and Founding Engineer at{" "}
          <Link
            href="https://www.codolio.dev/"
            target="_blank"
            className=" hover:text-blue-500"
          >
            Codolio
          </Link>
          .
        </p>

        <div>
          I enjoy building fast, scalable systems with Go, Node.js, Redis, and
          MongoDB. I&apos;ve worked on real-time infra, notification services,
          and internal tools like{" "}
          <a href="https://formwix-docs.vercel.app/" target="_blank">
            <span className="hover:text-blue-500 wavvy underline-offset-2">
              Formwix
            </span>
          </a>
          .
        </div>

        <p>
          My approach to engineering is deeply influenced by the{" "}
          <span className="italic">Unix philosophy</span> — building simple,
          composable, and purposeful tools that do one thing well.
        </p>

        <p>
          I write about my engineering decisions and backend learnings. All my
          blogs will be hosted here — read them at{" "}
          <Link
            href="/blog"
            className="wavvy hover:text-blue-500 text-zinc-800 dark:text-zinc-200 underline-offset-4"
          >
            /blog
          </Link>
          .
        </p>

        <p>
          I&apos;ve started sharing my blogs and learnings here! Meanwhile, feel
          free to check out my old portfolio at{" "}
          <a
            href="https://anuragsri327.vercel.app/"
            target="_blank"
            className="hover:underline text-sm underline-offset-2 hover:text-blue-500"
          >
            anuragsri327.vercel.app
          </a>
          .
        </p>

        <div className="dark:border-gray-700 pt-10 text-zinc-500 dark:text-zinc-400">
          <p>
            Feel free to reach out — whether it&apos;s about tech, discussions,
            or just to say hi:
          </p>
          <ul className="mt-2 space-y-2 text-sm ml-4">
            <li className="flex items-center gap-2">
              <Mail />
              <a
                href="mailto:anuragsrivastav0027@gmail.com"
                className="underline underline-offset-2 hover:text-blue-500"
              >
                anuragsrivastav0027@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin />
              <a
                href="https://www.linkedin.com/in/anuragsr327/"
                target="_blank"
                className="underline underline-offset-2 hover:text-blue-500"
              >
                linkedin.com/in/anuragsr327
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="size-5 dark:invert" />

              <a
                href="https://github.com/anurag-327/"
                target="_blank"
                className="underline underline-offset-2 hover:text-blue-500"
              >
                github.com/anurag-327
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
