import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Home_About from "@/components/Home_About";
import Home_Projects from "@/components/Home_Projects";
import Navigation from "@/components/ui/Navigation";
import Home_Skills from "@/components/Home_Skills";
import Contact from "@/components/Contact";
import Home_Repos from "@/components/Home_Repos";
import Home_CurrentProjects from "@/components/Home_CurrentProjects";

export default function Home() {
  return (
    <>
      <main className="h-full min-h-screen text-zinc-700 dark:text-white dark:bg-[#111010]">
        {/* <Logger /> */}
        <div className="flex flex-col items-start sm:max-w-[100%] min-h-screen p-4 px-4 mx-auto md:px-8 md:max-w-3xl lg:max-w-3xl ">
          <Header />
          <Navigation active="home" />
          <Home_About />
          <hr className="w-[90%] mx-auto h-px mt-10 mb-5 rounded-full dark:border-none bg-zinc-300 dark:bg-zinc-800"></hr>
          <Home_Skills />
          <Home_Projects />
          <Home_CurrentProjects />
          <Home_Repos />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
