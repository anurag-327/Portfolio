// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "mdx", "md"],
};

export default withMDX(nextConfig);
