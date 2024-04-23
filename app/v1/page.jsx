import Header from "@/components/v1/Header";
import Home_About from "@/components/v1/Home_About";
import Home_Projects from "@/components/v1/Home_Projects";
import Navigation from "@/components/ui/Navigation";
import Home_Skills from "@/components/v1/Home_Skills";
import Home_CurrentProjects from "@/components/v1/Home_CurrentProjects";
import Home_Repositories from "@/components/v1/Home_Repositories";
import Footer from "@/components/ui/Footer";
import Contact from "@/components/v1/Contact";

export default function Home() {
  return (
    <>
      <main className="h-full min-h-screen dark:text-zinc-400 text-zinc-700 dark:bg-[#0E1514]">
        <div className="flex flex-col items-start sm:max-w-[100%] gap-10 sm:px-16 mx-auto md:px-32  ">
          <Header />
          <Navigation active="home" />
          <Home_About />
          {/* <hr className="w-[90%] mx-auto h-px mt-10 mb-5 rounded-full dark:border-none bg-zinc-300 dark:bg-zinc-800"></hr> */}
          <Home_Skills />
          <Home_Projects />
          <Home_CurrentProjects />
          <Home_Repositories />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
