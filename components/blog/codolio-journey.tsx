import React from "react";
import BlogFooter from "./BlogFooter";
import { List, ListItem } from "./component";
import InfoBox from "./InfoBox";

export default function CodolioJourneyBlog() {
  return (
    <div>
      <div className="mb-12">
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 font-medium text-lg">
          It started with a simple 2-month frontend internship contract. 1.5
          years later, I&apos;m still here, managing the entire platform
          infrastructure. Here&apos;s how I went from writing React components
          to architecting distributed systems.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          Month 0-2: The Frontend Intern
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          I joined <strong>Codolio</strong> with a clear mandate: build UI
          components. But I wasn&apos;t just fixing CSS; I was shipping
          full-fledged React features. I spent my days managing complex
          client-side state, integrating APIs, and building interactive
          dashboards.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          It was fun, but I kept peeking over the fence at the backend. I wanted
          to know <em>how</em> the data got to my components.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          Month 3: I&apos;ll take that backend module
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          The 2-month internship ended, and a new opportunity appeared: a
          backend module needed to be built from scratch. I stepped up and asked
          to lead it.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          That was the turning point. I went from writing react components to
          designing APIs and structuring database schemas. I wasn&apos;t just
          consuming endpoints anymore; I was creating the logic that powered
          them.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          The Grind: 1.5 Years of Chaos &amp; Growth
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          The learning curve wasn&apos;t a curve; it was a vertical wall. I
          ended up crafting <strong>150+ APIs</strong> and taking ownership of
          core systems. My role expanded rapidly to cover everything from
          browser extensions to database optimization.
        </p>

        <div className="grid gap-6">
          <InfoBox variant="info" title="The All-Nighters">
            <p className="italic mb-2">&quot;We push to prod at dawn.&quot;</p>
            <p>
              I vividly remember the pre-deployment meets. The adrenaline of
              debugging critical issues at 3 AM, ensuring the migration scripts
              run perfectly, and the relief of a successful rollout. These
              nights taught me resilience.
            </p>
          </InfoBox>

          <InfoBox title="Technical Milestones">
            <List>
              <ListItem>
                <strong>Core Ownership:</strong> Managed the entire codebase as
                a founding engineer, building <strong>80% of the UI</strong> and
                reducing build size by 60%.
              </ListItem>
              <ListItem>
                <strong>Backend Systems:</strong> Built a production-grade{" "}
                <strong>notification service</strong> (Go + Asynq) and a{" "}
                <strong>real-time leaderboard</strong> (Redis).
              </ListItem>
              <ListItem>
                <strong>Complex Modules:</strong> Engineered a{" "}
                <strong>collaborative sheets module</strong> with conflict-safe
                data handling.
              </ListItem>
              <ListItem>
                <strong>Internal Tools:</strong> Created{" "}
                <strong>Formwix</strong>, a config-based form generation library
                used across the platform.
              </ListItem>
              <ListItem>
                <strong>Performance:</strong> Optimized MongoDB aggregation
                pipelines and implemented scheduled cron jobs.
              </ListItem>
              <ListItem>
                <strong>DevOps:</strong> standardized deployment automation for
                Next.js (Vercel), Node.js, and Go services.
              </ListItem>
            </List>
          </InfoBox>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          The Shift to Architect
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Today, I&apos;m not just writing code; I&apos;m planning architecture.
          I&apos;m thinking about:
        </p>
        <List>
          <ListItem>How do we scale this for the next 10k users?</ListItem>
          <ListItem>
            Is this schema flexible enough for future features?
          </ListItem>
          <ListItem>
            How do we reduce ease technical debt while shipping fast?
          </ListItem>
        </List>
        <p className="text-zinc-600 dark:text-zinc-400 mt-6">
          <strong>1.5 years</strong> have flown by. From a frontend intern to a
          core engineer driving the platform, it&apos;s been the most defining
          chapter of my career so far.
        </p>
      </section>

      <BlogFooter />
    </div>
  );
}
