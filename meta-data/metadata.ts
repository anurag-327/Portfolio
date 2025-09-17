import AsyncProgrammingBlog from "@/components/blog/async";
import { JSX } from "react";

export interface TypeBlog {
  title: string;
  description: string;
  date: string; // in dd/mm/yyyy format
  slug: string;
  url: string; // external link if any
  tags: string[];
  author: string;
  banner: {
    src: string;
    alt: string;
  };
  component?: () => JSX.Element;
}

export const metadata: TypeBlog[] = [
  {
    title: "Event Driven Architecture 101: Guide to Async Programming ",
    description: "Event Driven Architecture",
    date: "05/08/2025",
    slug: "event-driven-architecture",
    url: "/blog/event-driven-architecture",
    tags: ["event-driven", "architecture", "async", "programming"],
    author: "Anurag Srivastav",
    banner: {
      src: "/images/blogs/event-driven-architecture.webp",
      alt: "Event-Driven Architecture Banner",
    },
    component: AsyncProgrammingBlog,
  },
  {
    title: "Setup Express Server",
    description:
      "How to set up an Express.js server from scratch — a guide for backend boilerplate.",
    date: "16/06/2023",
    slug: "setup-express-server",
    url: "https://knightblogs.hashnode.dev/setting-up-express-server",
    tags: ["express", "nodejs", "backend", "server", "boilerplate"],
    author: "Anurag Srivastav",
    banner: {
      src: "/images/blogs/setup-express-server.webp",
      alt: "Setting Up Express Server",
    },
  },
  {
    title: "Auth with Express & JWT",
    description:
      "Implementing authentication using Express, MongoDB, and JSON Web Tokens.",
    date: "14/06/2023",
    slug: "auth-express-mongo-jwt",
    url: "https://knightblogs.hashnode.dev/authentication-with-express-mongodb-and-jsonwebtoken",
    tags: ["authentication", "express", "mongodb", "jwt", "nodejs"],
    author: "Anurag Srivastav",
    banner: {
      src: "/images/blogs/auth-express-mongo-jwt.webp",
      alt: "Authentication with Express, MongoDB, and JWT",
    },
  },
];
