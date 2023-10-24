import React from 'react'

const Navigation = ({active}) => {
  return (
    <nav className='box-border flex justify-center w-full gap-3 px-2 py-2 mt-2 bg-gray-100 border rounded-full md:justify-end md:px4 border-zinc-600'>
        <a className={`text-lg ${active=="home"?"underline":"no-underline"} leading-8 underline lowercase text-zinc-700`} href="/">home</a>
        <a className={`text-lg ${active=="projects"?"underline":"no-underline"} leading-8  lowercase text-zinc-700`} href="/projects">projects</a>
        <a className={`text-lg ${active=="resume"?"underline":"no-underline"} leading-8  lowercase text-zinc-700`} href="/resume">resume</a>
    </nav>
  )
}

export default Navigation