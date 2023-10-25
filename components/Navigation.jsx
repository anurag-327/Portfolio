import React from 'react'

const Navigation = ({active}) => {
  return (
    <nav className='box-border flex justify-center w-full gap-3 px-2 py-2 mt-4 overflow-auto overflow-y-hidden bg-gray-100 border rounded-full dark:bg-zinc-800 dark:text-white md:gap-3 md:justify-end md:px-4 '>
        <a className={`text-sm md:text-lg ${active=="home"?"underline":"no-underline"} leading-8 underline lowercase text-zinc-700 dark:text-white`} href="/">home</a>
        <a className={`text-sm md:text-lg ${active=="about"?"underline":"no-underline"} leading-8  lowercase text-zinc-700 dark:text-white`} href="/about">about</a>
        <a className={`text-sm md:text-lg ${active=="projects"?"underline":"no-underline"} leading-8  lowercase text-zinc-700 dark:text-white`} href="/projects">projects</a>
        <a className={`text-sm md:text-lg ${active=="resume"?"underline":"no-underline"} leading-8  lowercase text-zinc-700 dark:text-white`} href="/resume">resume</a>
    </nav>
  )
}

export default Navigation