import Avatar from "@/components/home/AvatarHairPin";
import Intro from "@/components/home/Intro";
import TechStack from "@/components/home/TechStack";
import TopBlogs from "@/components/home/TopBlogs";

export default function Home() {
  return (
    <section className="pb-3 pt-8 mt-12 md:pb-10 lg:mt-12 space-y-8 max-w-2xl mx-auto">
      <div className="flex flex-col items-start justify-start gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
            Anurag Srivastav
          </h1>

          <div className="text-sm text-zinc-600 dark:text-zinc-300">
            Founding Engineer,{" "}
            <a
              href="https://codolio.com"
              target="_blank"
              className="hover:underline hover:text-blue-500"
            >
              Codolio
            </a>
          </div>
        </div>
        <Avatar />
      </div>
      <Intro />
      <TechStack />
      <TopBlogs />
    </section>
  );
}
