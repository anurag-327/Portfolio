import { metadata } from "@/meta-data/metadata";

export default function BlogHeader({ slug }: { slug: string }) {
  const m = metadata.find((m) => m.slug === slug);
  if (!m) return;
  return (
    <div className="my-16 space-y-6">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
          {m.title}
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-4">
          by {m.author}
        </p>
        <p className="text-sm text-center text-zinc-500 dark:text-zinc-400">
          {m.date}
        </p>
      </div>
    </div>
  );
}
