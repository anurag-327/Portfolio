export const socials = {
  github: "https://github.com/anurag-327",
  linkedin: "https://www.linkedin.com/in/anuragsr327",
  twitter: "https://twitter.com/itsAnurag_sri",
  resume:
    "https://drive.google.com/file/d/1WoYeVM3G7EWqdT29T4odE83zOQe10vEG/view",
  instagram: "#",
  codechef: "https://www.codechef.com/users/anurag_cp273",
  leetcode: "https://leetcode.com/Anurag_sr/",
};
import hackfinder_logo from "../public/projects/hackfinder_logo.svg";
import quicksign_logo from "../public/projects/quicksign_logo.svg";
import codemon_logo from "../public/projects/codemon_logo.svg";
import vault_logo from "../public/projects/vault_logo.svg";
import pint_logo from "../public/projects/pint_logo.svg";
import socicons_logo from "../public/projects/socicons_logo.svg";
import logger_logo from "../public/projects/logger_logo.png";
import quicksign from "../public/projectimages/quicksign.png";
import codemon from "../public/projectimages/codemon3.png";
import hackfinder from "../public/projectimages/hackfinder.png";
import vault from "../public/projectimages/vault.png";
import pint from "../public/projectimages/pint.png";
import socicons from "../public/projectimages/socicons.png";
import logger from "../public/projectimages/logger.png";
export const projects = [
  {
    id: 1,
    name: "QuickSign",
    description:
      "Streamlined OAuth Provider for signup across platforms, offering a smooth user experience.",
    toolsused: "React, Express js, Node Js and MongoDB",
    logo: quicksign_logo,
    image: quicksign,
    code: "https://github.com/anurag-327/QuickSign",
    link: "https://quick-sign.vercel.app",
    points: [
      "Discovered and engaged in hackathon events using Next.js and Supabase.s",
      "Efficiently handled user authentication with Node.js and Express.js .",
      "Integrated user state management for seamless navigation and interaction.",
    ],
    stack: "React",
    stack_logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg",
  },
  {
    id: 2,
    name: "codemon",
    description:
      "A web-based IDE for compiling CPP codes and solving DSA problems.",
    toolsused: "Next JS, Zustand, Express js and MongoDB",
    logo: codemon_logo,
    image: codemon,
    code: "https://github.com/anurag-327/codemon",
    link: "https://codemon-five.vercel.app/",
    points: [
      "Developed a versatile web-based IDE for running CPP codes, DSA problem-solving, and debugging.",
      "Managed complete state of the app with Zustand library",
      "Constructed APIs using Express.js, Node.js, and MongoDB to facilitate code execution and management.",
    ],
    stack: "Next JS",
    stack_logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg",
  },
  {
    id: 3,
    name: "logger",
    description: `Logger is your partner for counting visitors with ease, offering insights without intrusion.`,
    toolsused: "Next JS, Zustand, supabase",
    logo: logger_logo,
    image: logger,
    code: "https://github.com/anurag-327/logger",
    link: "https://logger-mocha-six.vercel.app/",
    points: [
      "Developed and implemented a non-intrusive visitor counting system, Logger, for websites",
      "Engineered Logger to be scalable, accommodating varying levels of website traffic, while optimizing performance for resource efficiency.",
      "Integrated Supabase for streamlined and real-time data management in the Logger project, ensuring efficiency and ease of use.",
    ],
    stack: "Next JS",
    stack_logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg",
  },
  {
    id: 4,
    name: "socions",
    description:
      "An icon generating library for genrating icons of brands and tech stacks. ",
    toolsused: "Svg, npm package, esbuild, javascript",
    logo: socicons_logo,
    image: socicons,
    code: "https://github.com/anurag-327/socions",
    link: "https://www.npmjs.com/package/socicons",
    points: [
      "Created Socions, an icon library featuring logos of well-known brands, social media platforms, and popular tech stacks",
      "Diverse icon support, including social media (e.g., Facebook, Twitter) and tech stacks (e.g., JavaScript, Python)",
      "User-friendly design for seamless icon integration in web and mobile apps",
    ],
    stack: "Npm",
    stack_logo: "https://img.icons8.com/color/48/npm.png",
  },
  {
    id: 5,
    name: "Vault",
    description:
      "A secure credential storage solution ensuring your sensitive data is safeguarded with robust encryption.",
    toolsused: "React, Express js, Node Js, MongoDB",
    logo: vault_logo,
    image: vault,
    code: "https://github.com/anurag-327/PasswordManager",
    link: "https://my-vault-pm.vercel.app",
    points: [
      "Handled authentication and storage for the app with Appwrite Cloud services",
      "Managed user data and app data with Zustand",
      "Used Tailwind CSS and radix UI for accessible and configurable components.",
    ],
    stack: "React",
    stack_logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg",
  },
  {
    id: 6,
    name: "Pint",
    description: `An app that frames the screenshots inside a beautiful gradient pattern.`,
    toolsused: "Next JS, Tailwind CSS, appwrite",
    logo: pint_logo,
    image: pint,
    code: "https://github.com/ashishk1331/Pint",
    link: "https://pint-blue.vercel.app/",
    points: [
      "Securedly stored and managed credentials with strong encryption methods.",
      "Safeguarded sensitive information, ensuring data protection and security.",
      "Ensured data security and user data protection through robust encryption methods.",
    ],
    stack: "Next JS",
    stack_logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg",
  },
  {
    id: 7,
    name: "Hack Finder",
    description: `Discover and engage in hackathon events, fostering a user-friendly experience for enthusiasts`,
    toolsused: "Next JS, Tailwind CSS, supabase",
    logo: hackfinder_logo,
    image: hackfinder,
    code: "https://github.com/anurag-327/hackfinder",
    link: "https://hackfinder.vercel.app/",
    points: [],
    stack: "Next JS",
    stack_logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg",
  },
  {
    id: 8,
    name: "Chat App",
    description: "Real time One to One Chat app.",
    toolsused: "React, Express js, Node Js, MongoDB",
    logo: "",
    image: "",
    code: "https://github.com/anurag-327/Chat-App",
    link: "",
    points: [],
    stack: "React",
    stack_logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg",
  },
  {
    id: 9,
    name: "E-Commerce Website",
    description: "E-Commmerce Website built On React.",
    toolsused: "React, Express js, Node Js, MongoDB",
    logo: "",
    image: "",
    code: "https://github.com/anurag-327/E-Commerce",
    link: "",
    points: [],
    stack: "React",
    stack_logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg",
  },
  {
    id: 10,
    name: "Car Rental System",
    description:
      "Car Rental System is a Web Project that helps user to rent out cars for short period. ",
    toolsused: "HTML, CSS, JS, EJS, Express js, MongoDB",
    logo: "",
    image: "",
    code: "https://github.com/anurag-327/Car-Rental-System",
    link: "",
    points: [],
    stack: "Javascript",
    stack_logo: "https://img.icons8.com/color/48/javascript--v1.png",
  },
  {
    id: 11,
    name: "Google Keep Notes Clone",
    description:
      "This project is a clone of Google keep notes that gives user flexibility of adding, deleting, updating and restoring deleted notes.",
    toolsused: "HTML, CSS, JS, EJS, Express js, MongoDB",
    logo: "",
    image: "",
    code: "https://github.com/anurag-327/Google-Keep-Notes",
    link: "",
    points: [],
    stack: "Javascript",
    stack_logo: "https://img.icons8.com/color/48/javascript--v1.png",
  },
  {
    id: 11,
    name: "Netflix UI Clone",
    description: "clone of Netflix's UI",
    toolsused: "HTML, CSS, JS",
    logo: "",
    image: "",
    code: "https://github.com/anurag-327/Netflix-UI-clone",
    link: "",
    points: [],
    stack: "HTML",
    stack_logo: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg",
  },
  {
    id: 4,
    name: "Image Hosisting platform",
    description:
      "ImgHost is a image hoisting platform that provides user links to access the images",
    toolsused: "Express js, Node Js, MongoDB, Multer, EJS",
    logo: "",
    image: "",
    code: "https://github.com/anurag-327/Imghost",
    link: "",
    points: [],
    stack: "Multer",
    stack_logo: "https://img.icons8.com/color/48/javascript--v1.png",
  },
];
