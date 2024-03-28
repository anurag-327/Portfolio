"use client";
import { useEffect, useState } from "react";
export default function Logger() {
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
        "https://logger-mocha-six.vercel.app/api/logger/v1",
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
