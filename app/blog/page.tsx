import { metadata } from "@/meta-data/metadata";
import { Hash } from "lucide-react";

function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogListPage() {
  return (
    <div className="min-h-[85vh]">
      <div className="w-full pt-16">
        <div className="text-start mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <Hash className="inline-block size-8 -mr-2" /> my Blogs
          </h1>
        </div>
        <div className="space-y-8 min-h-[56vh]">
          {metadata.map((post, index) => (
            <article key={post.slug}>
              <a href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-base dark:text-white mb-0.5 group-hover:opacity-70  transition-colors">
                  {index + 1}. {post.title}
                </h2>
                <time className="text-sm ml-4 group-hover:opacity-70 text-gray-800 dark:text-gray-400">
                  {formatDate(post.date)}
                </time>
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mb-4">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            More insightful blogs dropping soon...
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Stay tuned for deep dives, dev journeys, and behind-the-scenes from
            Codolio!
          </p>
        </div>
      </div>
    </div>
  );
}
