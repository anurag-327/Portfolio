import React from "react";
import Header from "@/components/ui/Header";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Resume_Resume from "@/components/Resume_Resume";
const page = () => {
  return (
    <main className="h-full min-h-screen text-zinc-700 dark:text-white dark:bg-zinc-950">
      <div className="flex flex-col items-start  sm:max-w-[100%] min-h-screen p-4 px-6 mx-auto md:px-8 md:max-w-3xl lg:max-w-3xl ">
        <Header />
        <Navigation active="resume" />
        <Resume_Resume />
        <Footer />
      </div>
    </main>
  );
};

export default page;
