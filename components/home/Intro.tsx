import Link from "next/link";

export default function Intro() {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400">
      <div className="space-y-5 text-left  leading-snug">
        <p className="font-semibold">
          Hi, I&apos;m Anurag. I build distributed systems that scale.
        </p>



        <div>
          I enjoy building fast, scalable systems with Go, Node.js, Redis, and
          MongoDB. I&apos;ve worked on real-time infra, notification services,
          and internal tools like{" "}
          <a href="https://formwix-docs.vercel.app/" target="_blank">
            <span className=" hover:text-blue-500 text-zinc-800 dark:text-zinc-300 underline-offset-4">
              Formwix
            </span>
          </a>
          .
        </div>

        <p className="italic">
          My approach to engineering is deeply influenced by the{" "}
          <span className="italic">Unix philosophy</span> — building simple,
          composable, and purposeful tools that do one thing well.
        </p>

        <p className="">
          I write about my engineering decisions and backend learnings. All my
          blogs will be hosted here read them at{" "}
          <Link
            href="/blog"
            className=" hover:text-blue-500 text-zinc-800 dark:text-zinc-300 underline-offset-4"
          >
            /blog
          </Link>
          .
        </p>
      </div>
    </section >
  );
}
