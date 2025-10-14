import { metadata } from "@/meta-data/metadata";
import { Notebook } from "lucide-react";

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

export default function TopBlogs() {
  return (
    <div className=" space-y-4 p-4">
      <div className="flex items-center gap-2">
        <Notebook className="size-4" />
        <h2 className="font-medium bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-500 text-transparent bg-clip-text text-muted-foreground">
          Top Blogs
        </h2>
      </div>
      <ul>
        {metadata.slice(0, 2).map((post, index) => (
          <li
            key={post.slug}
            className={`relative ${
              index != 1 && "border-b"
            } dark:border-zinc-800 group`}
          >
            <a
              href={post.url}
              target={post.url.startsWith("/") ? "_self" : "_blank"}
              className="flex w-full p-5 gap-4 justify-between items-center text-sm flex-1 font-medium text-zinc-600 dark:text-zinc-400 tracking-wide transition-all duration-300 ease-in-out group-hover:text-blue-600 dark:group-hover:text-blue-300"
            >
              <div className="flex-1">
                <span className="whitespace-pre-wrap">{post.title}</span>
              </div>
              <time className="font-mono whitespace-nowrap">
                {formatDate(post.date)}
              </time>
            </a>

            {post.banner && (
              <div className="absolute -top-24 right-4 ml-4 w-44 h-30 overflow-hidden rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src={post.banner.src}
                  alt={post.banner.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
