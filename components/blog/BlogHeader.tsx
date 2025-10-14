import { TypeBlog } from "@/meta-data/metadata";

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
    <div className="mb-8 mt-16 md:mt-32 space-y-6">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
          {blog.title}
        </h1>
        <p className="text-center text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
          by {blog.author}
        </p>
        <p className="text-center text-xs text-zinc-600 dark:text-zinc-400 mb-1">
          {formaDate(blog.date)}
        </p>
      </div>
      {blog.banner && (
        <div className="w-full">
          <img
            src={blog.banner.src}
            alt={blog.banner.alt}
            className="w-full h-auto max-h-[450px] object-contain"
          />
        </div>
      )}
    </div>
  );
}
