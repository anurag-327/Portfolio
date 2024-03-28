import {
  Envelope,
  EnvelopeOpen,
  GithubLogo,
  LinkedinLogo,
  PhoneCall,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full my-10 overflow-hidden">
      <h2 className="font-bold text-violet-700 dark:text-white">
        # Contact me
      </h2>
      <p className="text-sm md:text-lg font-[450]">
        Have a question or just want to say hello👋? I'm always open for a chat.
        Feel free to reach out through any of the channels below:
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline rounded-full dark:border-gray-600 dark:bg-zinc-900 md:w-8 md:h-8 md:p-2 border-contact text-zinc-700 item-center"
          href="https://leetcode.com/anuragSri327/"
        >
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
            className="transition duration-1000 transform logo "
          />
        </a>
        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline rounded-full dark:border-gray-600 md:w-8 md:h-8 md:p-2 border-contact text-zinc-700 item-center"
          href="https://github.com/anurag-327"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/github.png"
            className="transition duration-1000 transform logo "
          />
        </a>
        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline rounded-full dark:border-gray-600 dark:bg-bg-zinc-900 md:w-8 md:h-8 md:p-2 border-contact text-zinc-700 item-center"
          href="https://www.linkedin.com/in/anuragsr327"
        >
          <img
            src="https://img.icons8.com/fluency/48/linkedin.png"
            className="transition duration-1000 transform logo "
          />
        </a>
        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline bg-white rounded-full md:w-8 md:h-8 md:p-2 dark:bg-zinc-900 dark:border-gray-600 border-contact text-zinc-700 item-center"
          href="https://twitter.com/itsAnurag_sri"
        >
          <img
            src="https://img.icons8.com/color/48/twitter--v1.png"
            className="transition duration-1000 transform logo "
          />
        </a>

        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline bg-white rounded-full md:w-8 md:h-8 dark:bg-zinc-900 dark:border-gray-600 bg-gradient-to-r from-blue-500 to-orange-400 md:p-2 border-contact text-zinc-700 item-center"
          href="mailto:anuragsrivastav0027@gmail.com"
        >
          <img
            src="https://img.icons8.com/color/48/gmail-new.png"
            className="transition duration-1000 transform logo "
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
