"use client";

import Markdown from "markdown-to-jsx";

type MarkdownRendererProps = {
  data: string;
};

export default function MdRenderer({ data }: MarkdownRendererProps) {
  return <Markdown>{data}</Markdown>;
}
