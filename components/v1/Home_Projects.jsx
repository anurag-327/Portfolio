"use client";
import { projects } from "@/data/data";
import { ArrowLineUpRight } from "@phosphor-icons/react/dist/ssr";
import ProjectCard from "../ui/ProjectCard";
import Container from "../ui/Container";
import { Project } from "../mini-components/Projects";

export default function () {
  return (
    <Container>
      <Section1 />
      <Project />
    </Container>
  );
}

function Section1() {
  return (
    <div className="flex flex-col items-start justify-center gap-2 p-2">
      <h2 className="text-4xl text-blue-600 dark:text-white"># Projects</h2>
      <div className="text-lg">
        <p className="-mt-2 ">
          I strive to innovate and create solutions that enhance user
          experiences. From QuickSign, simplifying signups with OAuth, to
          codemon, a web-based IDE for efficient coding, my passion for crafting
          innovative tools shines through. Logger offers visitor insights
          without intrusion, while socions streamlines icon generation. With
          each project, I aim to push boundaries and make impactful
          contributions, fueled by a love for creating new and inventive
          solutions.
        </p>
        <p>
          I've endeavored to tackle diverse challenges and create solutions that
          enhance user experiences and streamline processes.
        </p>
      </div>
      <a
        href="/projects"
        className="flex items-center justify-center float-right p-2.5 mt-2 dark:border-gray-700 text-zinc-800 no-underline border-project-landing rounded-md bg-gray-50 dark:text-gray-400 dark:bg-zinc-900 "
      >
        View all projects
        <ArrowLineUpRight size={22} />
      </a>
    </div>
  );
}
