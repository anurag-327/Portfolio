"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home_About from '@/components/Home_About'
import Home_Projects from '@/components/Home_Projects'
import Navigation from '@/components/Navigation'
import Home_Skills from '@/components/Home_Skills'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <main className="h-full min-h-screen text-black dark:text-white dark:bg-zinc-950">
         <div className="flex flex-col items-start sm:max-w-[100%] min-h-screen p-4 px-6 mx-auto md:px-8 md:max-w-2xl lg:max-w-2xl ">
            <Header />
            <Navigation active="home" />
            <Home_About />
            <hr className='w-[90%] mx-auto h-px mt-10 mb-5 rounded-full bg-zinc-300'></hr>
            <Home_Skills />
            <Home_Projects />
            <Footer />
         </div>
      </main>
    </>
  )
}
