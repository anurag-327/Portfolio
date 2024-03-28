import { socials, projects } from "@/data/data";
import {
  GithubLogo,
  At,
  TwitterLogo,
  LinkedinLogo,
  ReadCvLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Socicons } from "socicons";
function Header() {
  return (
    <div className="w-full mt-4">
      <h1>Anurag Srivastav</h1>
      <p>B.TECH in CSE from KNIT Sultanpur</p>
      <div className="flex items-center justify-end w-full gap-2 text-zinc-400">
        <a href={socials.github} title="Github" target="blank">
          <GithubLogo size={22} className="text-zinc-600 dark:text-zinc-400" />
        </a>
        <a href={socials.linkedin} title="LinkedIn" target="blank">
          <LinkedinLogo
            className="text-zinc-600 dark:text-zinc-400"
            size={22}
          />
        </a>
        <a href={socials.twitter} title="Twitter" target="blank">
          <TwitterLogo size={22} className="text-zinc-600 dark:text-zinc-400" />
        </a>
        <a href={socials.resume} title="Resume" target="blank">
          <ReadCvLogo size={22} className="text-zinc-600 dark:text-zinc-400" />
        </a>
      </div>
    </div>
  );
}

function Education() {
  return (
    <>
      <h2>Education</h2>
      <ul className="w-[90%] -mt-6">
        <li>
          <div className="flex flex-col gap-1 items-left">
            <h4>B.Tech in Computer Science and Engineering</h4>
            <span>Kamla Nehru Institute of Technology, Sultanpur</span>
            <span className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <p>2021-2025</p>
              <p className="-mt-3 md:mt-3">CGPA: 8.8/10</p>
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-col gap-1 items-left">
            <h4>Intermediate</h4>
            <span>Aditya Birla Public School</span>
            <span className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <p>2018-2020</p>
              <p className="-mt-3 md:mt-3">93.2%</p>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}
export default function Resume_Resume(props) {
  return (
    <>
      <div className="w-full mt-16">
        <a
          target="blank"
          className="float-right text-lg text-blue-500 underline"
          href={socials.resume}
        >
          Download resume
        </a>
      </div>
      <Header />
      <hr className="w-full h-px mt-8 border-none bg-zinc-700" />
      <Education />
      <hr className="w-full h-px border-none bg-zinc-700" />
      <Skills />
      <hr className="w-full h-px border-none bg-zinc-700" />
      <Projects />
      <hr className="w-full h-px border-none bg-zinc-700" />
      <Achievements />
      <hr className="w-full h-px border-none bg-zinc-700" />
      <Responsibilities />
      <hr />
    </>
  );
}

function Skills() {
  let skills = [
    "CPP",
    "Typescript",
    "Javascript",
    "HTML / CSS / JS",
    "Tailwind CSS",
    "ReactJS",
    "NextJS",
    "Redux",
    "Zustand",
    "NodeJS",
    "ExpressJS",
    "Rest API's",
    "GraphQL API's",
    "Postman",
    "Git",
    "Github",
    "DSA",
  ];
  return (
    <>
      <h2>Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10">
        {skills.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </>
  );
}

function Card({ data }) {
  const points = data.points;
  return (
    <li>
      <div className="flex flex-col gap-1 items-left">
        <h3>
          <a href={data.link} className="underline text-zinc-600 ">
            {data.name}
          </a>
        </h3>
        <p className="-mt-3 font-medium text-blue-600">
          <span className="font-semibold text-black">Tools : </span>
          {data.toolsused}
        </p>
        <span className="-mt-2">{data.description}</span>
        <ul className="mt-1">
          {points.map((point, index) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function Projects() {
  const projectsdisplay = [
    {
      id: 1,
      name: "Quick Sign",
      description:
        "Streamlined OAuth Provider for signup across platforms, offering a smooth user experience.",
      toolsused: "React, Express js, Node Js and MongoDB",
      code: "https://github.com/anurag-327/QuickSign",
      link: "https://quick-sign.vercel.app",
      points: [
        "Architected and deployed an OAuth Provider solution, enabling seamless signup experiences across platforms",
        `Implemented robust security measures using JSON Web Tokens (JWT), leading to a 25% reduction in unauthorized
access incidents`,
        `Created OAuth API’s, contributing to a 20% improvement in cross-platform user authentication and authorization
efficiency`,
        `Utilized React and Tailwind CSS for the frontend, resulting in a 40% enhancement in user engagement and
satisfaction`,
      ],
    },
    {
      id: 2,
      name: "Codemon",
      description:
        "A web-based IDE for compiling CPP codes and solving DSA problems.",
      toolsused: "Next JS, Zustand, Express js and MongoDB",
      code: "https://github.com/anurag-327/Codemon",
      link: "",
      points: [
        `Pioneered a web-based IDE for compiling CPP codes and solving DSA problems.`,
        `Executed Node.js with the childprocess module, reducing CPP code compilation time by 30%.`,
        `Developed 20+ API endpoints for code execution and management, resulting in a 40% speed improvement.`,
        `Dockerized APIs for streamlined deployment, enhancing scalability and ensuring consistent performance, resulting
in a 20% reduction in deployment-related issues.`,
      ],
    },
    {
      id: 3,
      name: "logger",
      description: `Logger is your partner for counting visitors with ease, offering insights without intrusion.`,
      toolsused: "Next JS, Zustand, supabase",

      code: "https://github.com/anurag-327/logger",
      link: "https://logger-mocha-six.vercel.app/",
      points: [
        `Created a non-intrusive system, leading to a 20% improvement in website visitor counting accuracy.`,
        `Applied Zustand for a 15% reduction in page load times and improved performance.`,
        `Deployed automated cron jobs in Logger system, streamlining log organization and system performance; achieved a
30% increase in efficiency and real-time data processing accuracy.`,
      ],
    },

    {
      id: 4,
      name: "Pint",
      description: `An app that frames the screenshots inside a beautiful gradient pattern.`,
      toolsused: "Next JS, Tailwind CSS and appwrite",
      code: "https://github.com/anurag-327/hackfinder",
      link: "https://pint-blue.vercel.app/",
      points: [
        `An app that frames the screenshots inside a beautiful gradient pattern`,
        `Enhanced performance and security by integrating Appwrite Cloud services, lowering data storage costs by 25%.`,
        `Elevated an open-source GitHub repository resulting in heightened code quality, reduced bugs, and a remarkable
40% acceleration in feature delivery`,
      ],
    },
    {
      id: 5,
      name: "Socions",
      description:
        "An icon generating library for genrating icons of brands and tech stacks. ",
      toolsused: "Svg, npm package, esbuild, javascript",
      code: "https://github.com/anurag-327/socions",
      link: "https://www.npmjs.com/package/socicons",
      points: [
        "Created Socions, an icon library featuring logos of well-known brands, social media platforms, and popular tech stacks",
        "Diverse icon support, including social media (e.g., Facebook, Twitter) and tech stacks (e.g., JavaScript, Python)",
        "User-friendly design for seamless icon integration in web and mobile apps",
      ],
    },

    // {
    //   id: 6,
    //   name: "Vault",
    //   description:
    //     "A secure credential storage solution ensuring your sensitive data is safeguarded with robust encryption.",
    //   toolsused: "React, Express js, Node Js and MongoDB",
    //   code: "https://github.com/anurag-327/PasswordManager",
    //   link: "https://my-vault-pm.vercel.app",
    //   points: [
    //     "Securedly stored and managed credentials with strong encryption methods.",
    //     "Safeguarded sensitive information, ensuring data protection and security.",
    //     "Ensured data security and user data protection through robust encryption methods.",
    //   ],
    // },
  ];

  return (
    <>
      <h2>Projects</h2>
      <ul className="-mt-6">
        {projectsdisplay.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </ul>
    </>
  );
}

function Achievements() {
  return (
    <>
      <h2>Achievements</h2>
      <ul>
        <li>
          <a
            target="blank"
            href={socials.leetcode}
            className="font-normal text-blue-500 no-underline border-b-2"
          >
            350 + Problems across Leetcode and Coding Ninjas
          </a>
        </li>
        <li>
          <a
            target="blank"
            href={socials.codechef}
            className="font-normal text-blue-500 no-underline border-b-2"
          >
            Codechef highest Rating 1574
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://github.com/anurag-327"
            className="font-normal text-blue-500 no-underline border-b-2"
          >
            Completed SSOC'23 and Hacktoberfest 2023
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://learn.gitkraken.com/certificates/xagl3ih5ki#.Y3NWmzxgwAo.linkedin"
            className="font-normal text-blue-500 no-underline border-b-2"
          >
            Completed Git Foundational Certification Course by Git Kraken
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="#"
            className="font-normal text-blue-500 no-underline border-b-2"
          >
            Postman Student Expert
          </a>
        </li>
        <li>
          <a
            href="https://unstop.com/certificate-preview/f5147e10-22ba-4077-8544-bee450cde898"
            className="font-normal text-blue-500 no-underline border-b-2"
          >
            Certificate of Participation of Flipkart GRiD 5.0
          </a>
        </li>
      </ul>
    </>
  );
}

function Responsibilities() {
  return (
    <>
      <h2>RESPONSIBILITIES</h2>
      <ul>
        <li className="my-1">
          Web Developement head at Programming and Tech skill club, KNIT
          Sultanpur.
        </li>
        <li>
          Designer and Devloper at Innovation and Incubation Startup Foundation,
          KNIT Sultanpur.
        </li>
      </ul>
    </>
  );
}
