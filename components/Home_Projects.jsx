import React from "react";
import { projects } from "@/data/data";
import { Socicons } from "socicons";
import {
  ArrowRight,
  Link,
  LinkSimpleHorizontal,
} from "@phosphor-icons/react/dist/ssr";
function Project({ data }) {
  return (
    <li className=" w-[100%] box-border hover:shadow-lg shadow-md dark:bg-zinc-900 border-project   mx-auto hover:bg-gray-50  px-4 py-3 dark:border-dark bg-white rounded-xl md:w-[90%] transition duration-300">
      <div className="flex flex-col no-underline text-zinc-700 dark:text-white">
        <div className="flex items-center">
          {/* <img
            className="w-4 h-4 px-2 rounded-md dark:bg-green-300"
            src={data.logo.src}
            alt={data.name}
          /> */}
          <a
            href={data.code}
            target="blank"
            className="text-sm font-[500] hover:underline text-blue-700 no-underline "
          >
            anurag-327/
            <span className="text-lg font-[500] dark:text-white text-black">
              {data.name}
            </span>
          </a>
        </div>
        <p className="whitespace-pre-wrap dark:text-white text-zinc-700">
          {data.description}
        </p>
        <div className="flex flex-col gap-2 md:justify-between md:flex-col">
          <div className="flex items-center gap-2 ">
            <img className="w-5 h-5" src={data.stack_logo} alt="js" />
            <span className="text-xs font-[500] ">{data.stack}</span>
          </div>
          {data.link && (
            <div className="flex items-center gap-2 overflow-hidden ">
              <a
                href={data.link}
                className="flex items-center font-[500] gap-2 text-xs text-blue-600 no-underline hover:underline"
                target="blank"
              >
                <LinkSimpleHorizontal
                  size={20}
                  className="text-black dark:text-white"
                />
                {data.link}
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
const Home_Projects = () => {
  const projectsList = projects.slice(0, 4);
  return (
    <div className="w-full mt-10">
      <h2 className="font-bold text-violet-700 dark:text-white"># Projects</h2>
      <div className="w-full">
        <div className="flex flex-col flex-wrap w-full gap-3 p-0 list-none md:gap-5 m-o md:flex-row">
          {projectsList.map((data, index) => (
            <Project key={index} data={data} />
          ))}
        </div>
        <a
          href="/projects"
          className="float-right mt-2 text-blue-600 underline  md:mr-8"
        >
          View all projects {">"}
        </a>
      </div>
    </div>
  );
};

export default Home_Projects;
