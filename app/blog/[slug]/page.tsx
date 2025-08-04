import BlogHeader from "@/components/blog/BlogHeader";
import BlogRenderer from "@/components/blog/BlogRenderer";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="my-16 space-y-6">
      <BlogHeader slug={slug} />
      <div className="prose dark:prose-invert max-w-none">
        <BlogRenderer id={slug} />
      </div>
    </div>
  );
}
export const dynamicParams = false;
