import React from 'react'
import { projects } from '@/data/data'
import { GithubLogo, RocketLaunch } from '@phosphor-icons/react/dist/ssr'
function Project({data})
{
    return(
        <li className=' w-[100%]  dark:bg-zinc-800  mx-auto hover:bg-zinc-100 box-border px-4 py-2 dark:shadow-zinc-600  bg-white shadow-sm  shadow-zinc-400 rounded-xl '>
        <div className='no-underline border text-zinc-700 dark:text-white'>
            <div>
            <img className='w-full px-2 mt-4 rounded-md dark:bg-green-300' src={data.image.src} alt={data.name}/>
            </div>
            <div className='flex items-center justify-center w-full gap-2'>
                <img className='w-8 h-10 px-2 rounded-md dark:bg-green-300' src={data.logo.src} alt={data.name}/>
                <p className='text-xl '>{data.name}</p>
            </div>
            <div>
                <p><span className='font-semibold'>Tools used : </span>{data.toolsused}</p>
            </div>
            <p className='mt-2 whitespace-pre-wrap'>
                {data.description}
            </p>
            <div className='flex justify-end gap-3 px-3 md:gap-6 md:px-4 text-end'>
               <a href={data.code} title='Code' target='blank'><GithubLogo size={30} className='text-zinc-600 dark:text-zinc-400' /></a>
               <a href={data.link} title='Deployment' target='blank'><RocketLaunch size={30} className='text-zinc-600 dark:text-zinc-400' /></a>
            </div>
        </div>
        </li>
    )
}
const Projects_Projects = () => {
    const projectsdisplay=projects.slice(0,5);
    const otherprojects=projects.slice(5,projects.length)
  return (
    <div>
        <div className='w-full mt-10'>
             <h2 className='text-blue-600'># Projects</h2>
             <ul className='flex flex-col flex-wrap w-full gap-3 p-0 list-none md:gap-5 '>
                {
                    projectsdisplay.map((data,index) => <Project key={index} data={data} /> )
                }
             </ul>
         </div>
         <div className='mt-8'>
            <h2 className='text-blue-600'># Other Projects</h2>
            <ul>
                {
                    otherprojects.map((data,index) => <li key={index}><a className='text-blue-600' href={data.code}>{data.name}</a></li>)
                }
            </ul>
         </div>
    </div>
  )
}

export default Projects_Projects