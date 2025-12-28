import { metadata } from "@/meta-data/metadata";
import Link from "next/link";
import { Clock } from "lucide-react";

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
    <div className="max-w-2xl mx-auto mt-16 mb-24 md:px-0">
      <header className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Writing
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Thoughts on software engineering, distributed systems, and building
          products.
        </p>
      </header>

      <div className="space-y-16">
        {sortedYears.map((year) => (
          <section key={year} className="relative">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              {year}
            </h2>
            <div className="flex flex-col">
              {postsByYear[year].map((post, i) => (
                <Link
                  key={post.slug}
                  href={post.url}
                  target={post.url.startsWith("/") ? "_self" : "_blank"}
                  className={`group block py-6 ${i !== postsByYear[year].length - 1
                    ? "border-b border-zinc-100 dark:border-zinc-800"
                    : ""
                    }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-wider">
                      {post.domain || "Tech"}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                    <Clock className="w-3 h-3" />
                    {post.minsRead ? `${post.minsRead} min read` : "5 min read"}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
