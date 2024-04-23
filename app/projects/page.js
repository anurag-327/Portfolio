import React from "react";
import Header from "@/components/ui/Header";
import Navigation from "@/components/ui/Navigation";
import Projects_Projects from "@/components/Projects_Projects";
import Footer from "@/components/ui/Footer";
const page = () => {
  return (
    <main className="h-full min-h-screen text-zinc-700 dark:text-zinc-400 dark:bg-zinc-950">
      <div className="flex flex-col items-start  sm:max-w-[100%] min-h-screen p-4 px-6 mx-auto md:px-8 md:max-w-3xl lg:max-w-3xl ">
        <Header />
        <Navigation active="projects" />
        <Projects_Projects />
        <Footer />
      </div>
    </main>
  );
};

export default page;
