import React from 'react'

const About = () => {
  return (
    <div className='mt-8'>
        <h1 className='px-4 py-4 border-4 shadow-lg w-fit border-zinc-400 shadow-zinc-400 bg-emerald-300 rounded-2xl'>
            <span className='pr-2 text-2xl text-black md:text-4xl'>👋 Hi, I'm Anurag!</span>    
        </h1> 
        <div className='mt-10'>
            <span className='text-3xl font-semibold text-emerald-500'>I am a 3rd yr. undergrad. at KNIT, Sultanpur.</span>
            <p className='mt-5 text-lg leading-8 first-letter:text-2xl'>
               Hello I'm Anurag Srivastav, a passionate Full Stack Developer hailing from Sultanpur, Uttar Pradesh, India. With over 2 years of hands-on experience in web development, I specialize in both front-end and back-end technologies. My journey is marked by a strong command of 
                 <button className="inline-flex items-center p-1 mx-1 text-sm font-semibold leading-4 border border-gray-500 rounded dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"><img className='w-4 h-4 mr-1' src="/images/js.png" alt="js"/><span>Javascript</span></button>, 
                 <button className="inline-flex items-center p-1 mx-1 text-sm font-semibold leading-4 border border-gray-500 rounded dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"><img className='w-4 h-4 mr-1' src="/images/react.png" alt="js"/><span>React</span></button> ,
                 <button className="inline-flex items-center p-1 mx-1 text-sm font-semibold leading-4 border border-gray-500 rounded dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"><img className='w-4 h-4 mr-1' src="/images/next-js.png" alt="js"/><span>Next js</span></button> and
                 <button className="inline-flex items-center p-1 mx-1 text-sm font-semibold leading-4 border border-gray-500 rounded dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"><img className='w-4 h-4 mr-1' src="/images/express.png" alt="js"/><span>Express Js</span></button>
               for crafting engaging and efficient web applications. 
               I'm dedicated to creating solutions that blend innovation with user-centric design.
            </p>
        </div>
    </div>
  )
}

export default About