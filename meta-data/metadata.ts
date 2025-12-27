import AsyncProgrammingBlog from "@/components/blog/async";
import SessionBasedAuthBlog from "@/components/blog/session-based";
import { JSX } from "react";

export interface TypeBlog {
  title: string;
  description: string;
  date: string;
  slug: string;
  url: string;
  tags: string[];
  author: string;
  banner: {
    src: string;
    alt: string;
  } | null;
  component?: () => JSX.Element;
}

export const metadata: TypeBlog[] = [
  {
    title: "Auth Beyond Tokens: Implementing Session Lifecycle",
    description:
      "A practical guide to session-based authentication using Go and Redis.",
    date: "14/10/2025",
    slug: "session-based-auth",
    url: "/blog/session-based-auth",
    tags: ["session-auth", "redis", "authentication", "backend", "go"],
    author: "Anurag Srivastav",
    banner: {
      src: "/blogs/session-based-auth.jpg",
      alt: "Session-Based Authentication in Go Banner",
    },
    component: SessionBasedAuthBlog,
  },
  {
    title: "Event Driven Architecture 101: Guide to Async Programming ",
    description: "Event Driven Architecture",
    date: "05/08/2025",
    slug: "event-driven-architecture",
    url: "/blog/event-driven-architecture",
    tags: ["event-driven", "architecture", "async", "programming"],
    author: "Anurag Srivastav",
    banner: {
      src: "/blogs/event-driven-architecture.gif",
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
    banner: null,
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
    banner: null,
  },
];
