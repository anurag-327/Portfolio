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
export default function BlogHeader({ slug }: { slug: string }) {
  const m = metadata.find((m) => m.slug === slug);
  if (!m) return;
  return (
    <div className="my-16 space-y-6">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
          {m.title}
        </h1>
        <p className="text-center font-medium text-zinc-600 dark:text-zinc-400 mb-1">
          by {m.author}
        </p>
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mb-1">
          {formatDate(m.date)}
        </p>
      </div>
    </div>
  );
}
