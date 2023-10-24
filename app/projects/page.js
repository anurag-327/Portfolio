import React from 'react'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <main className="h-full min-h-screen text-black bg-white dark:text-white dark:bg-zinc-950">
        <div className="flex flex-col items-start  sm:max-w-[100%] min-h-screen p-4 px-6 mx-auto md:px-8 md:max-w-2xl lg:max-w-2xl ">
            <Header />
            <Navigation active="projects" />
            <Footer />
        </div>
      </main>
  )
}

export default page