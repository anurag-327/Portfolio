"use client";
import { ArrowLineUpRight } from "@phosphor-icons/react/dist/ssr";
import ProjectCard from "../ui/ProjectCard";
import Container from "../ui/Container";
import { Project } from "../mini-components/Projects";
import Repositiories from "../mini-components/Repositiories";

export default function () {
  return (
    <Container>
      <Section1 />
      <Repositiories />
    </Container>
  );
}

function Section1() {
  return (
    <div className="flex flex-col items-start justify-start gap-2 p-4">
      <h2 className="text-4xl text-blue-600 dark:text-white">
        # Top Repositories
      </h2>
      <div className="text-lg">
        <p className="-mt-2 text-lg">
          I have a passion for solving Data Structures and Algorithms (DSA)
          problems, delving into the intricacies of trees, graphs, and dynamic
          programming. Here are my repositories containing a wealth of DSA
          problems: trees, graphs, and dynamic programming. With over 500
          solutions across various platforms, I'm constantly honing my
          problem-solving skills. Dive into the world of algorithms with me!
        </p>
      </div>
    </div>
  );
}
