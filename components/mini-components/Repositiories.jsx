import ProjectCard from "../ui/ProjectCard";
import { socials } from "@/data/data";
import { repositories } from "@/data/repositories";
import github from "@/public/projects/github.svg";
import Image from "next/image";
import Grid from "../ui/Grid";
export default function () {
  return (
    <Grid>
      {repositories.map((data, index) => (
        <ProjectCard key={index} data={data} />
      ))}
      <Card />
    </Grid>
  );
}

function Card() {
  return (
    <li className="box-border max-h-[240px] w-full mx-auto transition-all rounded-lg card bg-gray-50 dark:bg-zinc-900 border-project-landing border-zinc-200 dark:border-zinc-800">
      <a href={socials.github} className="no-underline">
        <div className="px-6 py-3 no-underline text-zinc-700 dark:text-white">
          <div className="flex items-center justify-start w-full gap-4">
            <Image
              className="aspect-square"
              src={github}
              alt="Github"
              width={40}
              height={40}
            />
            <p className="text-xl font-[550] first-letter:capitalize ">
              Github
            </p>
          </div>
          <p className="text-base whitespace-pre-wrap dark:text-gray-400">
            Checkout All Github repositories
          </p>
        </div>
      </a>
    </li>
  );
}
