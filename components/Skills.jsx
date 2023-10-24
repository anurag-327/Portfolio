import React from 'react'

const Skills = () => {
  return (
    <div>
      <h2 className='font-bold text-violet-700 dark:text-violet-400'># Skills</h2>
      <div className='flex flex-col gap-6 md:gap-4'>
        <div className='flex gap-4'>
          <div className='font-semibold'>Languages:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>CPP</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Typescript</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Python</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="/images/js.png" alt="js"/><span>Javascript</span></button>
          </div>
        </div>
        
        <div className='flex gap-4'>
          <div className='font-semibold'>Frameworks:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg" alt="js"/><span>React</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg" alt="js"/><span>Next</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nodejs.svg" alt="js"/><span>Node js</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><img className='w-4 h-4 mr-1' src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/express.svg" alt="js"/><span>Express js</span></button>
          </div>
        </div>
        
        <div className='flex gap-4'>
          <div className='font-semibold'>Libraries:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Tailwind CSS</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Redux</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Zustand</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>React-router</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Formik</span></button>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className='font-semibold'>Database:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>MongoDB</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>SQL</span></button>
          </div>
        </div>
        
        <div className='flex gap-4'>
          <div className='font-semibold'>Dev Tools:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Git</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Github</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Postman</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Git Kraken</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>VS Code</span></button>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className='font-semibold'>Others:</div>
          <div className='flex flex-wrap gap-1'>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Rest API's</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>GraphQL API's</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Supabase</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Firebase</span></button>
              <button className="inline-flex items-center px-3 py-1 mx-1 text-sm leading-4 border border-gray-300 rounded-full dark:border-gray-100 bg-zinc-100 dark:bg-zinc-200 text-neutral-900 dark:text-neutral-700"><span>Appwrite</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills