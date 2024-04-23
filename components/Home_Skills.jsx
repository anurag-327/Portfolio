import { skills } from "@/data/skills";
import React from "react";

const Home_Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-violet-700 dark:text-white"># Skills</h2>
      <p className="-mt-4">My current tech stacks involves:</p>
      <div className="flex flex-col gap-6 md:gap-4">
        {Object.keys(skills).map((skill, index) => (
          <Skills name={skill} skill={skills[skill]} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home_Skills;

function Skills({ name, skill }) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
      <div className="font-[450] first-letter:capitalize">{name}</div>
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
