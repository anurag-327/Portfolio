import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Anurag Srivastav',
  description: 'Full-stack engineer turned backend specialist. I build high-performance tools using Go and distributed systems.',
};

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto my-16 mt-24 px-6 md:px-0">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
          I build the tools I wish I had.
        </h1>
        <p className=" text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I&apos;m a <strong>tech nerd</strong> at heart. I started my journey as a generalist full-stack developer, but over time, I found my true calling in the depths of backend engineering—where milliseconds matter and scalability is the only currency.
        </p>
      </div>

      <div className="space-y-12">
        {/* Work Experience */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            Founding Engineer @ Codolio
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            I currently serve as a <strong>Founding Engineer at Codolio</strong>, where I manage the entire lifecycle of the platform. From designing the frontend and architecting the backend to handling deployments and building browser extensions, I own the stack end-to-end.
          </p>
        </section>

        {/* The Shift */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            Node.js to Go: A Love Story
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            For years, <strong>Node.js</strong> was my hammer, and everything looked like a nail. It&apos;s flexible, fast enough for most things, and the ecosystem is massive. But as I started building more complex, performance-critical systems, I hit walls—garbage collection pauses, dynamic typing issues, and concurrency headaches.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Then I found <strong>Go</strong>. It wasn&apos;t just a language switch; it was a mindset shift. The simplicity, the raw performance, and the concurrency model (goroutines &lt;3) completely changed how I architect software. Now, I write robust, type-safe distributed systems that just <em>work</em>.
          </p>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            Why buy when you can build?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            I don&apos;t just build tutorial apps. I build the infrastructure I need for my own digital existence. If I need a tool, my first instinct isn&apos;t to find a SaaS—it&apos;s to open my IDE.
          </p>

          <div className="grid gap-6">
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-200 mb-2">
                Neuron (Remote Code Runner)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A distributed code execution platform. I engineered it to handle high concurrency safely, learning deep lessons about Docker internals and OS-level resource management along the way.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-200 mb-2">
                Formwix
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A config-based form builder library. I wanted a way to generate complex, dynamic forms from simple JSON configurations, so I built a library to handle state, validation, and rendering automatically.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-200 mb-2">
                Personal OAuth Provider
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Why rely on simplistic auth libraries? I implemented my own OAuth2 provider to truly understand the flow of tokens, sessions, and security protocols.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-200 mb-2">
                Custom Analytics Logger
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                I wanted to know who visits my site without handing data to Google. So I built a high-throughput logging service (using Go &amp; Redis) tailored exactly to my metrics.
              </p>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            Let&apos;s Connect
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m always engineering something new. If you want to chat about distributed systems, Go, or just geek out over tech, feel free to reach out.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://twitter.com/itsAnurag_sri" target="_blank" rel="noopener noreferrer" className="text-zinc-800 dark:text-zinc-200 hover:underline">
              Twitter (X)
            </a>
            <a href="https://github.com/anurag-327" target="_blank" rel="noopener noreferrer" className="text-zinc-800 dark:text-zinc-200 hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anuragsr327" target="_blank" rel="noopener noreferrer" className="text-zinc-800 dark:text-zinc-200 hover:underline">
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
