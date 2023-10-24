"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import About from '@/components/Home_About'
import Navigation from '@/components/Navigation'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <main className="h-full min-h-screen text-black bg-white dark:text-white dark:bg-zinc-950">
         <div className="flex flex-col items-start max-w-full min-h-screen p-4 px-6 mx-auto md:px-8 md:max-w-3xl lg:max-w-3xl ">
            <Header />
            <Navigation active="home" />
            <About />
            <Footer />
         </div>
      </main>
    </>
  )
}
