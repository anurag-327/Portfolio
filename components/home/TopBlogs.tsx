import { metadata } from "@/meta-data/metadata";
import { Clock, Notebook } from "lucide-react";
import Link from "next/link";

export default function TopBlogs() {
  const latestBlogs = metadata.slice(0, 4);

  return (
    <div className="space-y-4 md:p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Notebook className="size-4" />
          <h2 className="font-medium bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-500 text-transparent bg-clip-text text-muted-foreground">
            From the Blog
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="flex flex-col">
        {latestBlogs.map((post, i) => (
          <Link
            key={post.slug}
            href={post.url}
            target={post.url.startsWith("/") ? "_self" : "_blank"}
            className={`group block py-6 ${i !== latestBlogs.length - 1 ? "border-b border-zinc-100 dark:border-zinc-800" : ""
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

            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-blue-300 dark:group-hover:text-blue-400 transition-colors mb-2">
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
    </div>
  );
}
