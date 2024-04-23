import image from "@/public/personal/profile1.jpg";
import Container from "../ui/Container";
import Image from "next/image";

const Contact = () => {
  return (
    <Container>
      <Section1 />
      {/* <DevCard /> */}
    </Container>
  );
};

function Section1() {
  return (
    <div className="my-10 overflow-hidden ">
      <h2 className="text-4xl text-blue-600 dark:text-white"># Contact Me</h2>
      <p className="text-sm md:text-lg">
        Have a question or just want to say hello👋? I'm always open for a chat.
        Feel free to reach out through any of the channels below:
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline rounded-full dark:border-gray-600 dark:bg-zinc-900 md:w-8 md:h-8 md:p-2 border-contact text-zinc-700 item-center"
          href="https://leetcode.com/anuragSri327/"
        >
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
            className="transition duration-1000 transform logo "
          />
        </a>
        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline rounded-full dark:border-gray-600 md:w-8 md:h-8 md:p-2 border-contact text-zinc-700 item-center"
          href="https://github.com/anurag-327"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/github.png"
            className="transition duration-1000 transform logo "
          />
        </a>
        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline rounded-full dark:border-gray-600 dark:bg-bg-zinc-900 md:w-8 md:h-8 md:p-2 border-contact text-zinc-700 item-center"
          href="https://www.linkedin.com/in/anuragsr327"
        >
          <img
            src="https://img.icons8.com/fluency/48/linkedin.png"
            className="transition duration-1000 transform logo "
          />
        </a>
        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline bg-white rounded-full md:w-8 md:h-8 md:p-2 dark:bg-zinc-900 dark:border-gray-600 border-contact text-zinc-700 item-center"
          href="https://twitter.com/itsAnurag_sri"
        >
          <img
            src="https://img.icons8.com/color/48/twitter--v1.png"
            className="transition duration-1000 transform logo "
          />
        </a>

        <a
          className="flex w-6 h-6 gap-2 p-2 no-underline bg-white rounded-full md:w-8 md:h-8 dark:bg-zinc-900 dark:border-gray-600 bg-gradient-to-r from-blue-500 to-orange-400 md:p-2 border-contact text-zinc-700 item-center"
          href="mailto:anuragsrivastav0027@gmail.com"
        >
          <img
            src="https://img.icons8.com/color/48/gmail-new.png"
            className="transition duration-1000 transform logo "
          />
        </a>
      </div>
    </div>
  );
}

function DevCard() {
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded shadow-lg">
      <img
        className="w-20 h-20 mx-auto mt-4 rounded-full"
        src="developer.jpg"
        alt="Developer"
      />
      <div className="px-6 py-4 text-center">
        <div className="mb-2 text-xl font-bold">John Doe</div>
        <p className="text-sm text-gray-700">Full Stack Developer</p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >
            #JavaScript
          </a>
          <a
            href="#"
            className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >
            #React
          </a>
          <a
            href="#"
            className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >
            #TailwindCSS
          </a>
        </div>
      </div>
      <div className="px-6 py-2 bg-gray-100">
        <div className="flex justify-between text-sm">
          <div className="text-gray-600">Repositories</div>
          <div className="text-gray-900">50</div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="text-gray-600">Stars</div>
          <div className="text-gray-900">200</div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="text-gray-600">Followers</div>
          <div className="text-gray-900">500</div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
