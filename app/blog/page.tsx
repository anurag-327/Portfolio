import { metadata } from "@/meta-data/metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const revalidate = 60;

export default function BlogListPage() {
  const postsByYear = metadata.reduce(
    (acc: Record<string, typeof metadata>, post) => {
      const [, , year] = post.date.split("/");
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {}
  );

  const sortedYears = Object.keys(postsByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div className="max-w-2xl mx-auto mt-16 mb-24 px-6">
      <header className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Writing
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Thoughts on software engineering, distributed systems, and building products.
        </p>
      </header>

      <div className="flex flex-col gap-12">
        {sortedYears.map((year) => (
          <div key={year} className="relative">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              {year}
            </h2>
            <div className="flex flex-col gap-8">
              {postsByYear[year].map((post) => (
                <Link
                  key={post.slug}
                  href={post.url}
                  target={post.url.startsWith("/") ? "_self" : "_blank"}
                  className="group flex flex-col w-full -mx-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    {!post.url.startsWith("/") && (
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300 transition-transform group-hover:rotate-45" />
                    )}
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-2">
                    {post.description}
                  </p>

                  <time className="text-xs font-medium text-zinc-400 dark:text-zinc-500 font-mono">
                    {formatDate(post.date)}
                  </time>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const [day, month, year] = dateStr.split("/");
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  return date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
    .toUpperCase();
}
