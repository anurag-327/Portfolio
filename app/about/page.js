import React from "react";
import Header from "@/components/ui/Header";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import About_About from "@/components/About_About";
const page = () => {
  return (
    <main className="h-full min-h-screen text-zinc-700 dark:text-white dark:bg-zinc-950">
      <div className="flex flex-col items-start  sm:max-w-[100%] min-h-screen p-4 px-6 mx-auto md:px-8 md:max-w-2xl lg:max-w-2xl ">
        <Header />
        <Navigation active="about" />
        <hr className="w-full h-px mt-8 border-none bg-zinc-700" />
        <About_About />
        <Footer />
      </div>
    </main>
  );
};

export default page;
