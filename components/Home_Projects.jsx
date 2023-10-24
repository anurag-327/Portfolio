import React from 'react'
import { projects } from '@/data/data'
function Project({data})
{
    return(
        <li className=' w-[100%] dark:bg-zinc-800  mx-auto hover:bg-zinc-100 box-border px-4 py-2 dark:shadow-zinc-600  bg-white shadow-sm  shadow-zinc-400 rounded-xl md:w-[300px]'>
        <a href={data.link} className='no-underline border text-zinc-700 dark:text-white'>
            <div className='flex items-center gap-2'>
                <img className='w-8 h-10 px-2 rounded-md dark:bg-green-300' src={data.logo.src} alt={data.name}/>
                <p className='text-xl '>{data.name}</p>
            </div>
            <p className='mt-2 whitespace-pre-wrap'>
                {data.description}
            </p>
        </a>
        </li>
    )
}
const Home_Projects = () => {
    const projectsList=projects.slice(0,4);
  return (
    <div className='w-full mt-10'>
         <h2 className='font-bold text-violet-700 dark:text-violet-400'># Projects</h2>
         <div className='w-full'>
             <ul className='flex flex-col flex-wrap w-full gap-3 p-0 list-none md:gap-5 m-o md:flex-row'>
                {
                    projectsList.map((data,index) => <Project key={index} data={data} /> )
                }
             </ul>
             <a href="/projects" className='float-right'>View all projects </a>
         </div>
    </div>
  )
}

export default Home_Projects