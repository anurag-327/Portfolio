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
      <h2 className="font-bold text-violet-700 dark:text-violet-400">
        # Contact me
      </h2>
      <div className="flex flex-row flex-wrap gap-2">
        <a
          className="flex gap-2 p-2 no-underline bh-while (condition) {
            
          } rounded-md w-fit border-mail text-zinc-700 item-center"
          href="https://github.com/anurag-327"
        >
          <GithubLogo className="" size={25} />
          <span className="text-zinc-600 ">anurag-327</span>
        </a>
        <a
          className="flex gap-2 p-2 no-underline bh-while (condition) {
            
          } rounded-md w-fit border-mail text-zinc-700 item-center"
          href="https://www.linkedin.com/in/anuragsr327"
        >
          <LinkedinLogo className="" size={25} />
          <span className="text-zinc-600 ">anuragsr327</span>
        </a>
        <a
          className="flex gap-2 p-2 no-underline bg-white rounded-md w-fit border-mail text-zinc-700 item-center"
          href="https://twitter.com/itsAnurag_sri"
        >
          <TwitterLogo className="" size={25} />
          <span className="text-zinc-600 ">itsAnurag_Sri</span>
        </a>

        <a
          className="flex gap-2 p-2 no-underline bh-while (condition) {
            
          } rounded-md w-fit border-mail text-zinc-700 item-center"
          href="mailto:anuragsrivastav0027@gmail.com"
        >
          <EnvelopeOpen className="" size={25} />
          <span className="text-zinc-600 ">anuragsrivastav0027@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
