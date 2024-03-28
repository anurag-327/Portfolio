import React from "react";

const Home_Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-violet-700 dark:text-white"># Skills</h2>
      <div className="flex flex-col gap-6 md:gap-4">
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
          <div className="font-[450]">Languages:</div>
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
                alt="js"
              />
              <span>CPP</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/color/48/typescript.png"
                alt="js"
              />
              <span>Typescript</span>
            </div>
            {/* <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full dark:border-gray-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/color/48/python--v1.png" alt="js"/><span>Python</span></div> */}
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt="js"
              />
              <span>Javascript</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="font-[450]">Frameworks:</div>
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg"
                alt="js"
              />
              <span>React</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg"
                alt="js"
              />
              <span>Next</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nodejs.svg"
                alt="js"
              />
              <span>Node js</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/express.svg"
                alt="js"
              />
              <span>Express js</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="font-[450]">Libraries:</div>
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
                alt="js"
              />
              <span>Tailwind CSS</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/color/48/redux.png"
                alt="js"
              />
              <span>Redux</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <span>Zustand</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <span>React-router</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <span>Formik</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="font-[450]">Database:</div>
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt="js"
              />
              <span>MongoDB</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/plasticine/100/oracle-pl-sql--v3.png"
                alt="js"
              />
              <span>SQL</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="font-[450]">Dev Tools:</div>
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/color/48/000000/git.png"
                alt="js"
              />
              <span>Git</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/small/48/null/github.png"
                alt="js"
              />
              <span>Github</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/wired/64/postman-api.png"
                alt="js"
              />
              <span>Postman</span>
            </div>
            {/* <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full dark:border-gray-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Git Kraken</span></div> */}
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/color/48/visual-studio-code-2019.png"
                alt="js"
              />
              <span>VS Code</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="font-[450]">Others:</div>
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://img.icons8.com/nolan/48/api-settings.png"
                alt="js"
              />
              <span>Rest API's</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <img
                className="w-4 h-4 mr-1"
                src="https://seeklogo.com/images/G/graphql-logo-97CBBB6D51-seeklogo.com.png"
                alt="js"
              />
              <span>GraphQL API's</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <span>Redis</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white ">
              <span>Docker</span>
            </div>
            {/* <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white "><img className='w-4 h-4 mr-1' src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" alt="js"/><span>Supabase</span></div>
              <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white "><img className='w-4 h-4 mr-1' src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png" alt="js"/><span>Firebase</span></div>
              <div className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 bg-white border border-gray-300 rounded-full border-skills dark:border-gray-800 dark:bg-zinc-900 text-neutral-900 dark:text-white "><img className='w-4 h-4 mr-1' src="https://seeklogo.com/images/A/appwrite-logo-D33B39992A-seeklogo.com.png" alt="js"/><span>Appwrite</span></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Skills;
