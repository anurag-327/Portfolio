import React from "react";
import { ArrowLineUpRight, ReadCvLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Container from "../ui/Container";
import image from "@/public/personal/profile1.jpg";
const Home_About = () => {
  return (
    <Container>
      <ImageSection />
      <AboutMe />
    </Container>
  );
};

function ImageSection() {
  return (
    <div className="p-4">
      <Image
        src={image}
        width={600}
        height={400}
        alt="profile"
        loading="lazy"
        className="object-contain w-full h-fit rounded-2xl"
      />
    </div>
  );
}
function AboutMe() {
  return (
    <div className="p-2">
      <div className="px-4 py-4 border-t-2 border-b-8 border-black shadow-sm bg-emerald-300 landingbutton hand-out group md:w-fit dark:border-gray-600 border-x-2 shadow-black dark:bg-zinc-900 dark:text-white rounded-2xl">
        <span className="pr-2 text-3xl font-bold text-black dark:text-white md:text-4xl">
          <span className="hand ">👋</span> Hi, I'm Anurag!
        </span>
      </div>
      <div className="flex flex-col mt-10">
        <span className=" text-emerald-800 first-letter:text-2xl dark:text-emerald-100 text-lg font-[500]">
          <span className="text-2xl">🧑‍🎓</span> I am a 3rd yr. undergrad. at
          KNIT, Sultanpur.
        </span>
        <p className="mt-3 text-lg first-letter:text-2xl">
          Hello I'm Anurag Srivastav, a passionate Full Stack Developer hailing
          from Sultanpur, Uttar Pradesh, India. With over 2 years of hands-on
          experience in web development. I am a
          <span className="font-semibold text-zinc-600 dark:text-blue-400">
            {" "}
            Full-stack developer{" "}
          </span>
          with specialization in both front-end and back-end technologies. My
          journey is marked by a strong command of
          <button className="skill-btn border-skills">
            <img className="w-4 h-4 mr-1" src="/images/js.png" alt="js" />
            <span>Javascript</span>
          </button>
          ,
          <button className="skill-btn border-skills">
            <img className="w-4 h-4 mr-1" src="/images/react.png" alt="js" />
            <span>React</span>
          </button>
          ,
          <button className="skill-btn border-skills">
            <img className="w-4 h-4 mr-1" src="/images/next-js.png" alt="js" />
            <span>Next js</span>
          </button>
          and
          <button className="skill-btn border-skills">
            <img className="w-4 h-4 mr-1 " src="/images/express.png" alt="js" />
            <span>Express js</span>
          </button>
          for crafting engaging and efficient web applications.
        </p>
        <p className="-mt-1 text-lg first-letter:text-2xl">
          🚀 I am currently on my way to master
          <span className="font-semibold text-zinc-600"> Rust</span> and
          <span className="font-semibold text-zinc-600"> Devops</span>.
        </p>
        <div className="flex flex-col gap-1 md:gap-2 md:flex-row">
          <a
            className="inline-flex items-center justify-center gap-1 px-3 py-2 text-black no-underline rounded-full w-fit dark:text-white dark:bg-zinc-800 bg-emerald-300"
            href="/resume"
          >
            My Resume
            <ReadCvLogo
              size={20}
              className="text-zinc-600 dark:text-zinc-400"
            />
          </a>
          {/* <a
          className="inline-flex items-center justify-center gap-1 px-3 py-2 text-black no-underline rounded-full w-fit dark:text-white dark:bg-zinc-800 bg-emerald-300"
          href="/about"
        >
          My Journey
          <ArrowLineUpRight
            size={20}
            className="text-zinc-600 dark:text-zinc-400"
          />
        </a> */}
        </div>
      </div>
    </div>
  );
}
export default Home_About;
