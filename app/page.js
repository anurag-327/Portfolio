"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home_About from "@/components/Home_About";
import Home_Projects from "@/components/Home_Projects";
import Navigation from "@/components/Navigation";
import Home_Skills from "@/components/Home_Skills";
import Image from "next/image";
import Contact from "@/components/Contact";
import { useState, useEffect } from "react";

export default function Home() {
  // const [visitors, setVisitors] = useState(0);
  // useEffect(() => {
  //   (async function () {
  //     const body = {
  //       method: "post",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         clientSecret: "2fd4c9ce-3f14-4b2b-a273-54f1c34145e5",
  //         applicationId: "9b4dc55c-cebd-45aa-ae6d-d1c80bbf8028",
  //       }),
  //     };
  //     const res = await fetch("http://localhost:3002/api/logger", body);
  //     const json = await res.json();
  //     if (res.status === 200) {
  //       console.log(json);
  //       setVisitors(json);
  //     } else {
  //       // error
  //       console.log(json);
  //     }
  //   })();
  // }, []);
  return (
    <>
      <main className="h-full min-h-screen text-zinc-700 dark:text-white dark:bg-zinc-950">
        <div className="flex flex-col items-start sm:max-w-[100%] min-h-screen p-4 px-6 mx-auto md:px-8 md:max-w-2xl lg:max-w-2xl ">
          <Header />
          <Navigation active="home" />
          <Home_About />
          <hr className="w-[90%] mx-auto h-px mt-10 mb-5 rounded-full bg-zinc-300"></hr>
          <Home_Skills />
          <Home_Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
