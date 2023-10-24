import React from 'react'
import { ArrowLineUpRight, ReadCvLogo } from '@phosphor-icons/react'
const Home_About = () => {
  return (
    <div className='mt-12'>
        <button className='w-full px-4 py-6 border-t-2 border-b-8 border-black shadow-sm md:w-fit dark:border-emerald-300 border-x-2 shadow-black bg-emerald-300 dark:bg-zinc-700 dark:text-white rounded-2xl'>
            <span className='pr-2 text-3xl font-semibold text-black dark:text-white md:text-4xl'>👋 Hi, I'm Anurag!</span>    
        </button> 
        <div className='mt-10'>
            <span className='text-xl text-emerald-600 md:text-xl'>I am a 3rd yr. undergrad. at KNIT, Sultanpur.</span>
            <p className='mt-5 text-lg leading-8 first-letter:text-2xl'>
               Hello I'm Anurag Srivastav, a passionate Full Stack Developer hailing from Sultanpur, Uttar Pradesh, India. With over 2 years of hands-on experience in web development, I am a <span className='font-semibold text-zinc-700 dark:text-blue-300'>Full-stack developer</span> with specialization in both front-end and back-end technologies. My journey is marked by a strong command of 
                 <button className="inline-flex items-center p-1 mx-1 text-sm leading-4 border border-gray-500 rounded dark:border-neutral-700 bg-neutral-50 dark:bg-zinc-600 text-neutral-900 dark:text-neutral-100"><img className='w-4 h-4 mr-1' src="/images/js.png" alt="js"/><span>Javascript</span></button>, 
                 <button className="inline-flex items-center p-1 mx-1 text-sm leading-4 border border-gray-500 rounded dark:border-neutral-700 bg-neutral-50 dark:bg-zinc-600 text-neutral-900 dark:text-neutral-100"><img className='w-4 h-4 mr-1' src="/images/react.png" alt="js"/><span>React</span></button> ,
                 <button className="inline-flex items-center p-1 mx-1 text-sm leading-4 border border-gray-500 rounded dark:border-neutral-700 bg-neutral-50 dark:bg-zinc-600 text-neutral-900 dark:text-neutral-100"><img className='w-4 h-4 mr-1' src="/images/next-js.png" alt="js"/><span>Next js</span></button> and
                 <button className="inline-flex items-center p-1 mx-1 text-sm leading-4 border border-gray-500 rounded dark:border-neutral-700 bg-neutral-50 dark:bg-zinc-600 text-neutral-900 dark:text-neutral-100"><img className='w-4 h-4 mr-1 ' src="/images/express.png" alt="js"/><span>Express js</span></button>
               for crafting engaging and efficient web applications. 
               I'm dedicated to creating solutions that blend innovation with user-centric design.
            </p>
            <div className='flex flex-col gap-1 md:gap-2 md:flex-row'>
                 <a className='inline-flex items-center justify-center gap-1 px-3 py-2 text-black no-underline rounded-full w-fit dark:text-white dark:bg-zinc-700 bg-emerald-300' href="/resume">My Resume <ReadCvLogo size={20} className='text-zinc-600 dark:text-zinc-400'  /></a>
                 <a className='inline-flex items-center justify-center gap-1 px-3 py-2 text-black no-underline rounded-full w-fit dark:text-white dark:bg-zinc-700 bg-emerald-300' href="/about">My Journey<ArrowLineUpRight size={20} className='text-zinc-600 dark:text-zinc-400'  /></a>
            </div>
        </div>
    </div>
  )
}

export default Home_About