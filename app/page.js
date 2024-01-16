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
  const [visitors, setVisitors] = useState(0);
  useEffect(() => {
    (async function () {
      const body = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          clientSecret: "2fd4c9ce-3f14-4b2b-a273-54f1c34145e5",
          applicationId: "9b4dc55c-cebd-45aa-ae6d-d1c80bbf8028",
        }),
      };
      const res = await fetch(
        "https://logger-mocha-six.vercel.app/api/logger",
        body
      );
      const json = await res.json();
      if (res.status === 200) {
        setVisitors(json);
      } else {
        // error
        console.log(json);
      }
    })();
  }, []);
  return (
    <>
      <main className="h-full min-h-screen text-zinc-700 dark:text-white dark:bg-zinc-950">
        <Visitors visitors={visitors} />
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

function Visitors({ visitors }) {
  return (
    <a
      href="https://logger-mocha-six.vercel.app/"
      target="blank"
      title="Powered by logger"
      className="fixed h-9 hidden no-underline  right-0 md:flex gap-1 items-center justify-center  text-sm text-white rotate-90 top-[35%] md:top-[20%]  rounded-l-md bg-zinc-700"
    >
      <div className="flex items-center justify-center h-full pl-2">
        <img
          className="rounded-full"
          src="https://logger-mocha-six.vercel.app/logo2.png"
          width={20}
          height={20}
          alt="logo"
        />
      </div>
      <div className="flex h-full gap-1">
        <span className="flex items-center justify-center ">Visitors</span>
        <span className="flex items-center justify-center h-full px-1 text-sm text-white bg-green-600 min-w-[40px] ">
          {" "}
          {visitors}{" "}
        </span>
      </div>
    </a>
  );
}

{
  /* <div className="fixed hidden md:block h-fit right-0 flex flex-col gap-1 items-center justify-center  text-sm text-white rotate-90 top-[35%] md:top-[20%]  rounded-l-md bg-zinc-700">
      <div className="flex flex-col h-full ">
        <div className="flex flex-col items-center justify-center py-2">
          <span className="-mt-1 font-[450px]">V</span>
          <span className="-mt-1 font-[450px]">I</span>
          <span className="-mt-1 font-[450px]">S</span>
          <span className="-mt-1 font-[450px]">I</span>
          <span className="-mt-1 font-[450px]">T</span>
          <span className="-mt-1 font-[450px]">O</span>
          <span className="-mt-1 font-[450px]">R</span>
          <span className="-mt-1 font-[450px]">S</span>
        </div>
        <span className="flex py-3 items-center justify-center h-full px-1 text-sm text-white bg-green-600 min-w-[40px] ">
          {" "}
          {visitors}{" "}
        </span>
      </div>
    </div> */
}
