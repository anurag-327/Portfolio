import AsyncProgrammingBlog from "@/components/blog/async";
import SessionBasedAuthBlog from "@/components/blog/session-based";
import ScalableCodeRunnerBlog from "@/components/blog/scalable-code-runner";
import CodolioJourneyBlog from "@/components/blog/codolio-journey";
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
  minsRead?: number;
  domain?: string;
}

export const metadata: TypeBlog[] = [
  {
    title: "From System Freeze to 250ms: Building a Scalable Code Runner",
    description:
      "The story of how I crashed my own server, successfully engineered my way out of it, and cut execution time from 2.5 seconds to 250ms.",
    date: "28/12/2025",
    slug: "scalable-code-runner",
    url: "/blog/scalable-code-runner",
    tags: ["system-design", "golang", "docker", "redis", "engineering"],
    author: "Anurag Srivastav",
    banner: {
      src: "/blogs/scalable-code-runner.png",
      alt: "Scalable Code Runner Banner",
    },
    minsRead: 10,
    domain: "Engineering",
    component: ScalableCodeRunnerBlog,
  },
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
    domain: "Backend",
    component: SessionBasedAuthBlog,
    minsRead: 20,
  },
  {
    title: "Event Driven Architecture 101: Guide to Async Programming ",
    description: "A Guide to understanding Event Driven Architecture",
    date: "05/08/2025",
    slug: "event-driven-architecture",
    url: "/blog/event-driven-architecture",
    tags: ["event-driven", "architecture", "async", "programming"],
    author: "Anurag Srivastav",
    banner: {
      src: "/blogs/event-driven-architecture.gif",
      alt: "Event-Driven Architecture Banner",
    },
    domain: "Backend",
    component: AsyncProgrammingBlog,
    minsRead: 10,
  },
  {
    title: "My Journey at Codolio: From Intern to Founding Engineer",
    description:
      "How a 2-month frontend internship turned into 1.5 years of architecting backend systems, managing deployments, and surviving production all-nighters.",
    date: "10/06/2025",
    slug: "codolio-journey",
    url: "/blog/codolio-journey",
    tags: ["career", "engineering", "startup", "growth"],
    author: "Anurag Srivastav",
    banner: {
      src: "/blogs/codolio-journey.png",
      alt: "Codolio Journey",
    },
    minsRead: 5,
    domain: "Journey",
    component: CodolioJourneyBlog,
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
