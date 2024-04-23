"use client";
import { currentProjects, projects } from "@/data/data";
import { ArrowLineUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import ProjectCard from "./ui/ProjectCard";
import CurrentProjects from "./mini-components/CurrentProjects";

const Home_CurrentProjects = () => {
  const projectsList = projects.slice(0, 4);
  return (
    <div className="w-full mt-10">
      <h2 className="text-4xl font-bold text-violet-700 dark:text-white">
        # Current Projects
      </h2>
      <CurrentProjects />
    </div>
  );
};

export default Home_CurrentProjects;
