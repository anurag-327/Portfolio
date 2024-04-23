"use client";
import { projects } from "@/data/data";
import {
  ArrowLineUpRight,
  ArrowRight,
  Link,
  LinkSimpleHorizontal,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "./mini-components/Projects";

const Home_Projects = () => {
  const projectsList = projects.slice(0, 4);
  return (
    <div className="w-full mt-10">
      <h2 className="text-4xl font-bold text-violet-700 dark:text-white">
        # Projects
      </h2>
      {/* <p className="-mt-4 text-sm dark:text-gray-400">
        Below is a list of all the projects I've developed. Please note that you
        might experience slow API responses due to API hoisting limitations.
      </p> */}
      <Project />
      <a
        href="/projects"
        className="flex items-center justify-center float-right p-2.5 mt-2 dark:border-zinc-800 text-gray-800 no-underline border-project-landing rounded-md bg-gray-50 dark:text-gray-400 dark:bg-zinc-900 "
      >
        View all projects
        <ArrowLineUpRight size={22} />
      </a>
    </div>
  );
};

export default Home_Projects;
