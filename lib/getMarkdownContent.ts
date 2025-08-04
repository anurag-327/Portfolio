import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMarkdownContent(id: string) {
  const filePath = path.join(process.cwd(), "blogs", `${id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return { metadata: data, markdown: content };
}
