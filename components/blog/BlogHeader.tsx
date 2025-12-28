import { TypeBlog } from "@/meta-data/metadata";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function formaDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogHeader({ blog }: { blog: TypeBlog }) {
  return (
    <div className="max-w-2xl mx-auto mt-12 mb-10 px-0">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to writing
      </Link>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <time dateTime={blog.date}>{formaDate(blog.date)}</time>
            <span>•</span>
            <span>{blog.author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {blog.title}
          </h1>
        </div>

        {blog.banner && (
          <div className="w-full aspect-video relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 my-8">
            <img
              src={blog.banner.src}
              alt={blog.banner.alt}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
