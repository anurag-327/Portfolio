import BlogHeader from "@/components/blog/BlogHeader";
import BlogRenderer from "@/components/blog/BlogRenderer";
import { metadata } from "@/meta-data/metadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = metadata.find((item) => item.slug === slug);
  if (!blog) notFound();
  return (
    <div className="my-16 space-y-6">
      <BlogHeader slug={slug} />
      <div className="prose dark:prose-invert max-w-none">
        <BlogRenderer id={slug} />
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = metadata.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "This blog post does not exist.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
    keywords: blog.tags.join(", "),
  };
}
