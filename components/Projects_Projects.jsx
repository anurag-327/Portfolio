import React from "react";
import { projects } from "@/data/data";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Grid from "./ui/Grid";

function Project({ data }) {
  return (
    <li className="box-border w-full mx-auto transition-all rounded-lg bg-gray-50 dark:bg-zinc-900 border-project hover:bg-gray-50 dark:border-zinc-800">
      <div className="flex flex-col px-6 py-3 no-underline text-zinc-700 dark:text-white">
        <div className="flex items-center justify-start w-full gap-4">
          <Image
            className="aspect-square"
            src={data.logo}
            alt={data.name}
            width={40}
            height={40}
          />
          <p className="text-xl font-[550] first-letter:capitalize ">
            {data.name}
          </p>
        </div>
        <p className="text-base whitespace-pre-wrap dark:text-gray-400">
          {data.description}
        </p>
        <div className="flex justify-end gap-3 px-3 md:gap-6 md:px-4 text-end">
          <a href={data.code} title="Code" target="blank">
            <GithubLogo
              size={22}
              className="text-zinc-600 dark:text-zinc-400"
            />
          </a>
          <a href={data.link} title="Deployment" target="blank">
            <ArrowSquareOut
              size={22}
              className="text-zinc-600 dark:text-zinc-400"
            />
          </a>
        </div>
      </div>
    </li>
  );
}
const Projects_Projects = () => {
  const projectsdisplay = projects.slice(0, 11);
  const otherprojects = projects.slice(11, projects.length);
  return (
    <div>
      <div className="w-full mt-10">
        <h2 className="text-4xl text-blue-600 dark:text-white"># Projects</h2>
        <p className="text-xl dark:text-gray-400">
          Below is a list of all the projects I've developed. Please note that
          you might experience slow API responses due to API hoisting
          limitations.
        </p>
        <Grid>
          {projectsdisplay.map((data, index) => (
            <Project key={index} data={data} />
          ))}
        </Grid>
      </div>
      <div className="mt-8">
        <h2 className="text-4xl text-blue-600 dark:text-white">
          # Other Projects
        </h2>
        <ul>
          {otherprojects.map((data, index) => (
            <li key={index}>
              <a className="text-blue-600 dark:text-blue-300" href={data.code}>
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects_Projects;
