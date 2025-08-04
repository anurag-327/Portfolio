import { metadata } from "@/meta-data/metadata";

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
    <div className="min-h-[90vh]">
      <div className="w-full py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">My Blogs</h1>
        </div>
        <div className="space-y-8">
          {metadata.map((post, index) => (
            <article key={post.slug}>
              <a href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-base dark:text-white mb-0.5 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  {index + 1}. {post.title}
                </h2>
                <time className="text-sm ml-4 text-gray-800 dark:text-gray-400">
                  {formatDate(post.date)}
                </time>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
