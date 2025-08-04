import type React from "react";
import { Zap } from "lucide-react";
import { Marquee } from "../ui/Marquee";

// Frontend Icons
import { IconTypescript as Typescript } from "../icons/typescript";
import { IconJavascript as Javascript } from "../icons/javascript";
import { IconReactJS as ReactIcon } from "../icons/react";
import { IconNextJS as Nextjs } from "../icons/nextjs";
import { IconTailwindcss as Tailwind } from "../icons/tailwindcss";

// Backend & Tools Icons
import { IconNodeJS as NodejsIcon } from "../icons/nodejs";
import { IconExpress as ExpressIcon } from "../icons/express";
import { IconDocker as Docker } from "../icons/docker";
import { IconPostgres as Postgresql } from "../icons/postgres";
import { IconMongoDB as Mongodb } from "../icons/mongodb";
import { IconGolang as GoLang } from "../icons/golang";
import { IconRedis as Redis } from "../icons/redis";

const frontendTech = [Javascript, Typescript, ReactIcon, Nextjs, Tailwind];
const backendAndTools = [
  NodejsIcon,
  ExpressIcon,
  GoLang,
  Postgresql,
  Mongodb,
  Redis,
  Docker,
];

export default function TechStack({
  isForSmall = false,
}: {
  isForSmall?: boolean;
}) {
  return (
    <div className=" space-y-4 p-4">
      <div className="flex items-center gap-2">
        <Zap className="size-4" />
        <h2 className="font-medium bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-500 text-transparent bg-clip-text text-muted-foreground">
          Tech Stack
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <Marquee gap="20px" className="py-2" fade pauseOnHover>
            {frontendTech.map((Icon, i) => (
              <Icon
                key={i}
                id={isForSmall ? `f-${i}` : `${i}`}
                className="size-10 grayscale hover:grayscale-0 transition dark:invert dark:hover:invert-0"
              />
            ))}
          </Marquee>
        </div>

        <div>
          <Marquee gap="20px" className="py-2" reverse fade pauseOnHover>
            {backendAndTools.map((Icon, i) => (
              <Icon
                key={i}
                id={isForSmall ? `b-${i}` : `${i + 100}`}
                className="size-10 grayscale hover:grayscale-0 transition dark:invert dark:hover:invert-0"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
