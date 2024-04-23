import React from "react";

const About_About = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="box-border w-full py-3 pl-6 mt-6 mb-10 text-lg bg-zinc-300 dark:bg-zinc-900 rounded-xl">
        My Journey so far...
      </div>
      <div>
        <h2 className="font-bold text-zinc-600 dark:text-violet-400">
          # About me
        </h2>
        <p>
          Hello I'm Anurag Srivastav, a passionate Full Stack Developer hailing
          from Sultanpur, Uttar Pradesh, India. With over 2 years of hands-on
          experience in web development, I am a{" "}
          <span className="font-semibold text-zinc-700 dark:text-blue-300">
            Full-stack developer
          </span>{" "}
          with specialization in both front-end and back-end technologies. My
          journey is marked by a strong command of
          <button className="skill-btn border-skills">
            <img className="w-4 h-4 mr-1" src="/images/js.png" alt="js" />
            <span>Javascript</span>
          </button>
          ,
          <button className="skill-btn border-skills">
            <img className="w-4 h-4 mr-1" src="/images/react.png" alt="js" />
            <span>React</span>
          </button>{" "}
          ,
          <button className="skill-btn border-skills">
            <img className="w-4 h-4 mr-1" src="/images/next-js.png" alt="js" />
            <span>Next js</span>
          </button>{" "}
          and
          <button className="skill-btn border-skills">
            <img className="w-4 h-4 mr-1 " src="/images/express.png" alt="js" />
            <span>Express js</span>
          </button>
          for crafting engaging and efficient web applications. I'm dedicated to
          creating solutions that blend innovation with user-centric design.
        </p>
      </div>
      {/* <div>
           <h2 className='font-bold text-violet-500 dark:text-violet-400'># My Passion for coding</h2>
           <p>My journey in the world of web development began with a deep-rooted 
            passion for coding and a drive to create meaningful digital 
            experiences. Over the years, I've embarked on an exciting 
            adventure filled with learning, challenges, and triumphs.</p>
        </div> */}
      <div>
        <h2 className="font-bold text-zinc-600 dark:text-violet-400">
          # Diverse Technologies
        </h2>
        <p>
          From the outset, I've embraced a multitude of technologies, each
          adding a layer to my skill set. As my knowledge expanded, I ventured
          into a realm of languages such as
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
              alt="cpp"
            />
            <span>CPP</span>
          </button>{" "}
          ,
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://img.icons8.com/color/48/javascript--v1.png"
              alt="js"
            />
            <span>Javascript</span>
          </button>{" "}
          and
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://img.icons8.com/color/48/typescript.png"
              alt="ts"
            />
            <span>Typescript</span>
          </button>{" "}
          , I've enjoyed weaving the front-end magic with HTML and CSS, creating
          visually appealing and user-friendly interfaces.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-zinc-600 dark:text-violet-400">
          # Frameworks and Technologies
        </h2>
        <p>
          Frameworks like
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg"
              alt="js"
            />
            <span>React</span>
          </button>
          ,
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg"
              alt="js"
            />
            <span>Next</span>
          </button>
          ,
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nodejs.svg"
              alt="js"
            />
            <span>Node js</span>
          </button>
          ,
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/express.svg"
              alt="js"
            />
            <span>Express js</span>
          </button>{" "}
          and have been my trusted companions in building powerful web
          applications. I've harnessed the capabilities of libraries such as
          Tailwind CSS, Redux, Zustand, and React Router to enhance the
          functionality and aesthetics of my projects.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-zinc-600 dark:text-violet-400">
          # Exploring new horizons
        </h2>
        <p>
          It hasn't just been about mastering technologies; it's been a journey
          of exploration and discovery. I've delved into the world of API's with
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://img.icons8.com/nolan/48/api-settings.png"
              alt="js"
            />
            <span>Rest API's</span>
          </button>
          and
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://seeklogo.com/images/G/graphql-logo-97CBBB6D51-seeklogo.com.png"
              alt="js"
            />
            <span>GraphQL API's</span>
          </button>
          and I've embraced platforms such as
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
              alt="js"
            />
            <span>Supabase</span>
          </button>
          ,
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
              alt="js"
            />
            <span>Firebase</span>
          </button>
          and
          <button className="skill-btn border-skills">
            <img
              className="w-4 h-4 mr-1"
              src="https://seeklogo.com/images/A/appwrite-logo-D33B39992A-seeklogo.com.png"
              alt="js"
            />
            <span>Appwrite</span>
          </button>
          .
        </p>
      </div>
      <div>
        <h2 className="font-bold text-zinc-600 dark:text-violet-400">
          # Educational Pursuits
        </h2>
        <p>
          My academic journey has complemented my practical experiences. I'm
          currently pursuing a BTech. in Computer Science and Engineering at
          Kamla Nehru Institute of Technology, where I've maintained a strong
          CGPA of 8.8. My intermediate studies at Aditya Birla Public School,
          Jagdishpur, enriched my academic foundation, culminating in an
          outstanding 93.4% result.
        </p>
      </div>
    </div>
  );
};

export default About_About;
