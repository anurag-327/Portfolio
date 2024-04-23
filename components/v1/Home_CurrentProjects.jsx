"use client";
import { projects } from "@/data/data";
import { ArrowLineUpRight } from "@phosphor-icons/react/dist/ssr";
import ProjectCard from "../ui/ProjectCard";
import Container from "../ui/Container";
import { Project } from "../mini-components/Projects";
import CurrentProjects from "../mini-components/CurrentProjects";

export default function () {
  return (
    <Container>
      <div className="hidden mt-10 md:block">
        <CurrentProjects />
      </div>
      <Section1 />
      <div className="md:hidden">
        <CurrentProjects />
      </div>
    </Container>
  );
}

function Section1() {
  return (
    <div className="flex flex-col items-start justify-start p-4">
      <h2 className="text-4xl text-blue-600 dark:text-white">
        # Current Projects
      </h2>
      <div className="text-lg">
        <p className="-mt-2">
          Currently working on two exciting projects: 'Go North,' a web design
          agency in collaboration with a friend, crafting websites and selling
          web templates. Playground,' a browser-based platform revolutionizing
          learning image processing algorithms. Stay tuned for innovative
          solutions!
        </p>
        <p>
          Collaborating with a friend, we are dedicated to crafting bespoke
          websites that are as unique as the clients we serve.Alongside,
          'Playground' is our foray into the world of image processing,
          reimagining how algorithms are solved and explored. This browser-based
          platform is more than just a tool; it's a playground for innovation
          and discovery.
        </p>
      </div>
    </div>
  );
}
