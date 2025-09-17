import { metadata } from "@/meta-data/metadata";

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
    <div className="w-full mt-28 mb-16">
      <div className="min-h-[86vh] flex flex-col">
        {sortedYears.map((year) => (
          <div key={year}>
            <div className="px-5 py-8 font-mono dark:text-blue-100 text-zinc-600">
              <span>{year}</span>
            </div>
            <ul>
              {postsByYear[year].map((post) => (
                <li
                  key={post.slug}
                  className="border-b dark:border-zinc-800 group"
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
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/");
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  return date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
    .toUpperCase();
}
