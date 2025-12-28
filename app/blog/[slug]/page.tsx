import BlogHeader from "@/components/blog/BlogHeader";
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
  if (!blog || !blog.component) notFound();
  return (
    <section className="max-w-2xl mx-auto my-16">
      <BlogHeader blog={blog} />
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {blog.component()}
      </div>
    </section>
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
