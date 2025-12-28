import React from "react";
import BlogFooter from "./BlogFooter";
import { List, ListItem, OrderedList, OrderedListItem } from "./component";
import InfoBox from "./InfoBox";

export default function ScalableCodeRunnerBlog() {
  return (
    <div>
      <div className="mb-12">
        <div className="mb-8 font-medium text-lg text-zinc-800 dark:text-zinc-200 italic">
          &quot;Just spin up a Docker container for every request! It&apos;ll be
          fine.&quot;
          <span className="block mt-2 text-base font-normal text-zinc-500 dark:text-zinc-400">
            — Me, moments before disaster
          </span>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          When I set out to build{" "}
          <strong className="text-zinc-900 dark:text-zinc-200">Neuron</strong>,
          a managed code execution engine, I thought the hard part would be
          parsing the code. I was wrong. The hard part was{" "}
          <strong className="text-zinc-900 dark:text-zinc-200">
            concurrency
          </strong>
          .
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Here is the story of how I crashed my own server, successfully
          engineered my way out of it, and cut execution time from{" "}
          <strong className="text-zinc-900 dark:text-zinc-200">
            2.5 seconds to 250ms
          </strong>
          .
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          Phase 1: The Naive Approach
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4 italic">
          &quot;Just spin up a Docker container!&quot;
        </p>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          My initial architecture was simple (and efficient... or so I thought):
        </p>

        <OrderedList className="mb-6">
          <OrderedListItem>User sends code via API.</OrderedListItem>
          <OrderedListItem>
            API spins up a brand new Docker container.
          </OrderedListItem>
          <OrderedListItem>Code runs, output is captured.</OrderedListItem>
          <OrderedListItem>Container is destroyed.</OrderedListItem>
        </OrderedList>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          It worked beautifully for local testing. I felt like a genius.
        </p>

        <InfoBox variant="error" title="The Crash 💥">
          <p className="mb-3">
            Then, I decided to run a stress test. I fired up{" "}
            <strong>1,000 concurrent requests</strong>.
          </p>
          <p className="mb-3">
            <strong>Result:</strong> My server froze. Entirely.
          </p>
          <p>
            The kernel panicked trying to spin up 1,000 Docker containers
            simultaneously. The CPU usage hit 100%, memory was swallowed whole,
            and requests started timing out left and right.
          </p>
        </InfoBox>

        <InfoBox variant="warning" title="Lesson Learned">
          <p>
            You cannot simply &quot;spin up&quot; resources on demand at scale.
            You need backpressure.
          </p>
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          Why Not Just Run Synchronously?
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          You might ask:{" "}
          <em>
            &quot;Why queue at all? Why not just <code>exec.Command()</code> and
            return the result?&quot;
          </em>
        </p>

        <InfoBox title="Why Synchronous Execution is a Trap">
          <List>
            <ListItem>
              <strong>Blocked Connections:</strong> If execution takes 2
              seconds, that HTTP connection is open for 2 seconds. With 1,000
              users, you exhaust your file descriptors instantly.
            </ListItem>
            <ListItem>
              <strong>No Backpressure:</strong> If traffic spikes to 5x your
              capacity, a synchronous server crashes immediately. An async
              server just has a longer queue.
            </ListItem>
            <ListItem>
              <strong>Isolation:</strong> If the Runner crashes (e.g.,
              segfault), it shouldn&apos;t take down the API server receiving
              new requests.
            </ListItem>
          </List>
        </InfoBox>

        <p className="text-zinc-600 dark:text-zinc-400">
          <strong>The Solution:</strong> Decouple the <strong>Receiver</strong>{" "}
          (API) from the <strong>Processor</strong> (Worker) using a Queue.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          Phase 2: The Queue (Kafka vs. Redis)
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          I needed a buffer. I needed a queue.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            Attempt A: Apache Kafka
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-3">
            My first instinct was &quot;Enterprise Scale™&quot;, so I deployed
            Kafka.
          </p>
          <List>
            <ListItem>
              <strong>The Good:</strong> It handled the throughput easily.
            </ListItem>
            <ListItem>
              <strong>The Bad:</strong> The latency. By the time a job went from
              API → Kafka → Consumer, we were seeing{" "}
              <strong>700ms - 1000ms</strong> of overhead just to queue the job.
            </ListItem>
          </List>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">
            For a real-time code runner, this was too slow.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            Attempt B: Redis Streams
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-3">
            I stripped out Kafka and implemented <strong>Redis Streams</strong>.
          </p>
          <List>
            <ListItem>
              <strong>The Result:</strong> Queue latency dropped to{" "}
              <strong>~3ms</strong>.
            </ListItem>
            <ListItem>
              <strong>Why:</strong> Redis gives us the speed of in-memory
              interactions.
            </ListItem>
          </List>
        </div>

        <InfoBox variant="success" title="The Lesson">
          <p className="mb-3">
            Don&apos;t just jump to &quot;Fancy Tech&quot; because it&apos;s
            popular or &quot;Enterprise&quot;. Kafka is amazing for
            high-throughput log aggregation, but for low-latency job queuing, it
            was the wrong tool.
          </p>
          <p>
            <strong>Each technology has a specific use case.</strong> For us,
            simplicity won.
          </p>
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          Phase 3: Scaling the Execution Core
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Now that the queue was fast, the bottleneck moved to the worker. I
          tried three different strategies to handle the load.
        </p>

        <div className="grid gap-6">
          <InfoBox
            variant="error"
            title={"Attempt 1: Spin Up On Demand (Unlimited)"}
          >
            <p className="mb-2 italic">
              &quot;Just run a new container for every request.&quot;
            </p>
            <List>
              <ListItem>
                <strong>Logic:</strong> Simple to implement.
              </ListItem>
              <ListItem>
                <strong>Result:</strong> <strong>System Freeze.</strong>
              </ListItem>
              <ListItem>
                <strong>Why:</strong> When 1,000 requests hit at once, the
                server tried to boot 1,000 OS processes. The kernel panicked,
                swapping memory like crazy.
              </ListItem>
            </List>
          </InfoBox>

          <InfoBox
            variant="warning"
            title={"Attempt 2: Capped Concurrency (Fixed X Number)"}
          >
            <p className="mb-2 italic">
              &quot;Okay, let&apos;s limit it to 50 containers at a time.&quot;
            </p>
            <List>
              <ListItem>
                <strong>Logic:</strong> Protect the server by making jobs wait
                in line.
              </ListItem>
              <ListItem>
                <strong>Result:</strong> <strong>Huge Latency Spikes.</strong>
              </ListItem>
              <ListItem>
                <strong>The Math:</strong> If execution takes 2s (startup) +
                0.5s (run), each worker handles only ~0.4 jobs/sec.
              </ListItem>
              <ListItem>
                <strong>The Backlog:</strong> With 50 workers, we could only
                process 20 jobs/sec. A 1,000-job spike meant a{" "}
                <strong>50-second wait time</strong> for the last user.
              </ListItem>
            </List>
          </InfoBox>

          <InfoBox
            variant="success"
            title={"Attempt 3: The &quot;Pre-Warmed&quot; Pool (The Solution)"}
          >
            <p className="mb-2 italic">
              &quot;Why are we waiting 2 seconds for startup?&quot;
            </p>
            <p className="mb-3">
              I realized we were spending 80% of our time <em>waiting</em> for
              Docker to boot, and only 20% running code.
            </p>

            <p className="mb-2 font-semibold">
              The Fix: Treat containers like database connections.
            </p>
            <OrderedList>
              <OrderedListItem>
                <strong>Warm Up:</strong> Boot 50 containers <em>before</em>{" "}
                traffic hits. Pause them.
              </OrderedListItem>
              <OrderedListItem>
                <strong>Execute:</strong> When a job comes, unpause/use an
                existing container. <strong>Startup cost: ~0ms.</strong>
              </OrderedListItem>
              <OrderedListItem>
                <strong>Recycle:</strong> Clean the container and put it back in
                the pool.
              </OrderedListItem>
            </OrderedList>

            <p className="mt-4">
              <strong>The Impact:</strong> My total execution time dropped from{" "}
              <strong>2500ms</strong> to <strong>~250ms</strong>. We achieved
              high throughput <em>without</em> melting the server.
            </p>
          </InfoBox>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          Handling the &quot;Dirty&quot; Ones
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Reusing containers introduces a new risk:{" "}
          <strong>State Pollution</strong>. We implemented a{" "}
          <strong>Health & Rotation Policy</strong>:
        </p>

        <InfoBox title="Health & Rotation Policy">
          <List>
            <ListItem>
              <strong>Isolation:</strong> Containers are locked down (no
              network, limited disk).
            </ListItem>
            <ListItem>
              <strong>Dirty Checks:</strong> If a container returns a TLE (Time
              Limit Exceeded) or OOM (Out of Memory), it is marked
              &quot;Dirty&quot; and destroyed.
            </ListItem>
            <ListItem>
              <strong>Continuous Health Checks:</strong> We run periodic health
              checks on idle containers. If a container becomes unresponsive or
              unhealthy, it is automatically removed and replaced.
            </ListItem>
          </List>
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          🚀 The Result
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Today, <strong>Neuron</strong> runs on a modest server but handles
          high concurrency with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl text-center">
            <div className="text-sm text-zinc-500 mb-1">Queue Latency</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              ~3ms
            </div>
            <div className="text-xs text-zinc-400">Redis Streams</div>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl text-center">
            <div className="text-sm text-zinc-500 mb-1">Execution Time</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              ~250ms
            </div>
            <div className="text-xs text-zinc-400">Container Pool</div>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl text-center">
            <div className="text-sm text-zinc-500 mb-1">Concurrency</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              1,000+
            </div>
            <div className="text-xs text-zinc-400">Requests</div>
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Building this taught me that &quot;Scalability&quot; isn&apos;t just
          about adding more servers. It&apos;s about{" "}
          <strong>Resource Management</strong>.
        </p>
      </section>

      <BlogFooter />
    </div>
  );
}
