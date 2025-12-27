// components/PostViewer.tsx
"use client";

import { useEffect, useState } from "react";

export default function BlogRenderer({ id }: { id: string }) {
  const [PostComponent, setPostComponent] =
    useState<React.ComponentType | null>(null);

  useEffect(() => {
    import(`../../blogs/${id}.mdx`)
      .then((mod) => setPostComponent(() => mod.default))
      .catch((err) => console.error("Error loading MD file:", err));
  }, [id]);

  if (!PostComponent) return <div></div>;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <PostComponent />
    </div>
  );
}
