import React from 'react'

const Home_Skills = () => {
  return (
    <div>
      <h2 className='font-bold text-violet-700 dark:text-violet-400'># Skills</h2>
      <div className='flex flex-col gap-6 md:gap-4'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='font-semibold'>Languages:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="js"/><span>CPP</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/color/48/typescript.png" alt="js"/><span>Typescript</span></button>
              {/* <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/color/48/python--v1.png" alt="js"/><span>Python</span></button> */}
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/color/48/javascript--v1.png" alt="js"/><span>Javascript</span></button>
          </div>
        </div>
        
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='font-semibold'>Frameworks:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg" alt="js"/><span>React</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg" alt="js"/><span>Next</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nodejs.svg" alt="js"/><span>Node js</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/express.svg" alt="js"/><span>Express js</span></button>
          </div>
        </div>
        
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='font-semibold'>Libraries:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png" alt="js"/><span>Tailwind CSS</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/color/48/redux.png" alt="js"/><span>Redux</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Zustand</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>React-router</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Formik</span></button>
          </div>
        </div>

        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='font-semibold'>Database:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/color/48/000000/mongodb.png" alt="js"/><span>MongoDB</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/plasticine/100/oracle-pl-sql--v3.png" alt="js"/><span>SQL</span></button>
          </div>
        </div>
        
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='font-semibold'>Dev Tools:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/color/48/000000/git.png" alt="js"/><span>Git</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/small/48/null/github.png" alt="js"/><span>Github</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/wired/64/postman-api.png" alt="js"/><span>Postman</span></button>
              {/* <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Git Kraken</span></button> */}
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="js"/><span>VS Code</span></button>
          </div>
        </div>

        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='font-semibold'>Others:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://img.icons8.com/nolan/48/api-settings.png" alt="js"/><span>Rest API's</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://seeklogo.com/images/G/graphql-logo-97CBBB6D51-seeklogo.com.png" alt="js"/><span>GraphQL API's</span></button>
              {/* <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" alt="js"/><span>Supabase</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png" alt="js"/><span>Firebase</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://seeklogo.com/images/A/appwrite-logo-D33B39992A-seeklogo.com.png" alt="js"/><span>Appwrite</span></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_Skills