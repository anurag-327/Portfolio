import { skills } from "@/data/skills";
import React from "react";
import Container from "../ui/Container";

const Home_Skills = () => {
  return (
    <Container>
      <div className="flex flex-col flex-1 gap-1 text-lg">
        <h2 className="font-bold text-violet-700 dark:text-white">
          <mark>#</mark> Skills
        </h2>
        <p>
          Cultivating a rich tapestry of skills, I navigate effortlessly through
          the coding landscape. From mastering languages like C++, Typescript,
          and JavaScript, to orchestrating frameworks such as React and Next.js,
          my expertise spans across both frontend and backend realms.
        </p>
        <p>
          With a keen eye for design, I harness the power of Tailwind CSS and
          Zustand to craft captivating user experiences. Seamlessly maneuvering
          through databases like MongoDB and SQL, I ensure data integrity and
          efficiency.
        </p>
        <p>
          Armed with Git, Github, and VS Code, I navigate the development
          process with precision and finesse. As I delve deeper into the realms
          of Rest and GraphQL APIs, Redis, and Docker, my journey of discovery
          and growth continues unabated.
        </p>
      </div>
      <div className="items-center justify-center flex-1 w-full h-full md:p-20">
        <div className="flex flex-col justify-center gap-6 md:gap-4">
          {Object.keys(skills).map((skill, index) => (
            <Skills name={skill} skill={skills[skill]} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home_Skills;

function Skills({ name, skill }) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
      <div className="font-[450] first-letter:capitalize">{name}:</div>
      <div className="flex flex-wrap gap-1">
        {skill.map((skill, index) => {
          return (
            <div key={index} className="skill-btn border-skills">
              {skill.image ? (
                <img className="w-4 h-4 mr-1" src={skill.image} alt="js" />
              ) : null}
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
