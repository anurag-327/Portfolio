import { TypeBlog } from "@/meta-data/metadata";
import { Calendar, Clock } from "lucide-react";

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
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-xs font-medium text-blue-400 mb-6">
            {blog.domain && (
              <span className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                {blog.domain}
              </span>
            )}
            {blog.minsRead && (
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Clock size={14} />
                {blog.minsRead} min read
              </span>
            )}
            <span className="flex items-center gap-1.5 text-zinc-500">
              <Calendar size={14} />
              <time dateTime={blog.date}>{formaDate(blog.date)}</time>
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-6 leading-[40px]">
            <span>{blog.title.split(":")[0]}</span>{" "}
            <br className="hidden md:block" />
            <span className="text-transparent mt-4 bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {blog.title.split(":")[1]}
            </span>
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
