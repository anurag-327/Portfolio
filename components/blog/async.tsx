import React from "react";
import BlogFooter from "./BlogFooter";
import {
  Code,
  List,
  ListItem,
  OrderedList,
  OrderedListItem,
} from "./component";

export default function AsyncProgrammingBlog() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100">
      <div className="max-w-4xl mx-auto md:p-6">
        <div className="mb-12">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Ever waited in a long line to get your work done? You can&apos;t do
            anything until your turn comes. That&apos;s{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              synchronous
            </strong>{" "}
            in real life — and it applies to programming too.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            In synchronous programming, each block of code must{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">wait</strong>{" "}
            for the previous one to finish before moving on. This can become
            slow, inefficient, and frustrating.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            The Old Synchronous Way
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Let&apos;s look at a real-world analogy: ordering food at a
            restaurant.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Suppose you&apos;re a waiter, and this is how you operate:
          </p>
          <OrderedList className="mb-6">
            <OrderedListItem>
              You take an order from <strong>Table 1</strong>
            </OrderedListItem>
            <OrderedListItem>
              You go to the kitchen and wait until it&apos;s fully cooked
            </OrderedListItem>
            <OrderedListItem>You serve it</OrderedListItem>
            <OrderedListItem>
              Only then do you go to <strong>Table 2</strong> to repeat the same
              steps
            </OrderedListItem>
            <OrderedListItem>
              Then move to <strong>Table 3</strong>, and so on
            </OrderedListItem>
          </OrderedList>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Problems:
            </h4>
            <List>
              <ListItem>Every table must wait for the previous one</ListItem>
              <ListItem>Long waiting times</ListItem>
              <ListItem>Poor customer experience</ListItem>
              <ListItem>You&apos;re not using your time efficiently</ListItem>
            </List>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            This is exactly what{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              synchronous code
            </strong>{" "}
            does — it waits at each step.
          </p>
        </section>

        {/* The Better Asynchronous Way */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            The Better Asynchronous Way
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Now let&apos;s imagine a more efficient restaurant flow:
          </p>

          <OrderedList className="mb-6">
            <OrderedListItem>
              You take an order from <strong>Table 1</strong> and pass it to the
              kitchen
            </OrderedListItem>
            <OrderedListItem>
              While it&apos;s being cooked, you immediately take an order from{" "}
              <strong>Table 2</strong>
            </OrderedListItem>
            <OrderedListItem>
              Then <strong>Table 3</strong>, and so on
            </OrderedListItem>
            <OrderedListItem>
              As soon as a dish is ready, you serve it — regardless of table
              order
            </OrderedListItem>
          </OrderedList>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Benefits:
            </h4>

            <List className="mb-4">
              <ListItem>
                Orders are <strong>processed in parallel</strong>
              </ListItem>
              <ListItem>No table has to wait for others to finish</ListItem>
              <ListItem>
                You&apos;re doing <strong>more in less time</strong>
              </ListItem>
              <ListItem>Much smoother experience</ListItem>
            </List>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            Let&apos;s See in Context of Programming: How Async Helps in Real
            Code
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Suppose you&apos;re building a{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              notification service
            </strong>{" "}
            that sends a confirmation email to each user after they sign up. Now
            imagine{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              100 users sign up at the same time
            </strong>
            .
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Assumptions:
            </h4>

            <List className="mb-4">
              <ListItem>
                You need to send emails to <strong>100 users</strong>
              </ListItem>
              <ListItem>
                Sending <strong>one email takes 2 seconds</strong> (due to
                network delay)
              </ListItem>
            </List>
          </div>

          {/* Synchronous Way */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              Doing it the Synchronous Way
            </h3>

            <Code>
              {`function sendEmails(users) {
  for (let user of users) {
    sendEmail(user.email); // Wait until this email is sent
  }
}`}
            </Code>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-red-900 dark:text-red-200">
                Problems with This Approach:
              </h4>
              <ul className="space-y-1 text-red-800 dark:text-red-300">
                <li>
                  • Sends <strong>one email at a time</strong>
                </li>
                <li>• Each email takes ~2 seconds</li>
                <li>
                  • 100 users = 100 × 2 = <strong>200 seconds total</strong>
                </li>
                <li>• If one email fails or gets stuck, others are delayed</li>
                <li>
                  • <strong>Slow</strong> and <strong>not scalable</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Async Way */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              Let&apos;s Optimize It with Async
            </h3>

            <Code>{`async function sendEmails(users) {
  const promises = users.map((user) => sendEmailAsync(user.email));
  await Promise.all(promises);
}`}</Code>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-green-900 dark:text-green-200">
                Benefits of This Approach:
              </h4>
              <List className="mb-4 text-green-800 dark:text-green-300">
                <ListItem>
                  All emails are sent <strong>in parallel</strong>
                </ListItem>
                <ListItem>
                  Total time drops from{" "}
                  <strong>200 seconds to around 2–3 seconds</strong>
                </ListItem>
                <ListItem>
                  Much <strong>faster</strong> and more{" "}
                  <strong>efficient</strong>
                </ListItem>
                <ListItem>
                  <strong>Scalable</strong> for thousands of users
                </ListItem>
              </List>
            </div>
          </div>
        </section>

        {/* Real-World Infrastructure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            Async in Real Life: Beyond Promises
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            So far, we&apos;ve seen how{" "}
            <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">
              async/await
            </code>{" "}
            and{" "}
            <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">
              Promise.all()
            </code>{" "}
            help us run tasks in parallel in code. That works perfectly for{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              small-scale tasks
            </strong>
            , like sending a few emails or loading UI data in a browser.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            But what about{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              real-world systems
            </strong>{" "}
            with:
          </p>

          <List className="list-disc list-inside space-y-1 mb-6 text-zinc-600 dark:text-zinc-400 pl-4">
            <ListItem>Thousands of users</ListItem>
            <ListItem>Millions of events</ListItem>
            <ListItem>Long-running operations</ListItem>
            <ListItem>
              The need for retries, persistence, and monitoring
            </ListItem>
          </List>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            At scale, promises alone aren&apos;t enough to handle real-world
            async processing needs. Instead, we use{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              infrastructure-level patterns
            </strong>{" "}
            to handle this complexity — patterns built to{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              decouple
            </strong>
            ,{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">scale</strong>,
            and{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              reliably process
            </strong>{" "}
            massive volumes of async tasks.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400">
            Let&apos;s see some common patterns used in real-world backend
            systems:
          </p>
        </section>

        {/* Message Queues */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            1. Message Queues
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Message queues are like{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              buffers or queue
            </strong>{" "}
            that sit between two parts of your system — a{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              producer
            </strong>{" "}
            (which creates tasks) and a{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              consumer/worker
            </strong>{" "}
            (which performs those tasks).
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            They act as a connection point for multiple services. One service
            produces tasks in the queue and other services consume them at their
            own pace.
          </p>

          <div className="mb-6">
            <img
              src="https://blog-asset-v1.s3.ap-south-1.amazonaws.com/msq-queue.png"
              alt="Message queue illustration showing producer, queue, and consumer components"
              className="w-full mx-auto"
            />
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              How Message Queues Help in Async Programming:
            </h4>

            <List className="mb-4 text-zinc-600 dark:text-zinc-400">
              <ListItem>
                <strong>Decouple components</strong> — The API doesn&apos;t wait
                for task completion
              </ListItem>
              <ListItem>
                <strong>Scale easily</strong> — Add more workers to process
                tasks faster
              </ListItem>
              <ListItem>
                <strong>Retry failed jobs</strong> automatically
              </ListItem>
              <ListItem>
                <strong>Persist tasks</strong> — Messages can be kept for
                hours/days if needed
              </ListItem>
              <ListItem>
                <strong>Monitor jobs</strong> — Track what failed/succeeded
              </ListItem>
            </List>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Example: Async Code Compilation (like LeetCode)
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Imagine a user submits some C++ code to your coding platform:
            </p>

            <OrderedList className="list-decimal list-inside space-y-2 mb-4 text-zinc-600 dark:text-zinc-400 pl-4">
              <OrderedListItem>
                The <strong>API receives the code</strong> and quickly pushes a
                task like{" "}
                <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                  Compile user123&apos;s code
                </code>
                into a <strong>message queue</strong>.
              </OrderedListItem>
              <OrderedListItem>
                A <strong>background worker</strong> picks up the task, compiles
                the code, and updates the result in the DB.
              </OrderedListItem>
              <OrderedListItem>
                The user can check the result via job ID — without waiting.
              </OrderedListItem>
            </OrderedList>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-green-900 dark:text-green-200">
              Benefits:
            </h4>
            <List className="mb-4 text-green-800 dark:text-green-300">
              <ListItem>
                <strong>Non-blocking</strong>: API responds instantly — no delay
                for users
              </ListItem>
              <ListItem>
                <strong>Parallelism</strong>: Multiple workers can process
                multiple jobs at once
              </ListItem>
              <ListItem>
                <strong>Resilience</strong>: Failed jobs can be retried
                automatically
              </ListItem>
              <ListItem>
                <strong>Durability</strong>: Tasks stay in queue even if
                services restart
              </ListItem>
            </List>
          </div>
        </section>

        {/* Message Streams */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            2. Message Streams
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            <strong className="text-zinc-900 dark:text-zinc-200">
              Message Streams
            </strong>{" "}
            are used when data keeps flowing — not just one-time tasks, but
            continuous updates.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Unlike message queues (1 producer → 1 consumer per message),{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              message streams allow multiple producer → multiple consumer groups
            </strong>
            , where each group receives all messages independently. They&apos;re
            perfect when{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              many services need to react to the same stream of events
            </strong>{" "}
            — like location updates, order events, or sensor data. Examples:
            Kafka, Kinesis.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-200">
              When to Use Message Streams:
            </h4>

            <List className="mb-4 text-blue-800 dark:text-blue-300">
              <ListItem>
                When you have <strong>real-time data</strong>
              </ListItem>
              <ListItem>
                When <strong>multiple services</strong> need the same info
              </ListItem>
              <ListItem>
                When services must work <strong>independently</strong>, without
                waiting
              </ListItem>
            </List>

            <p className="mt-3 text-blue-700 dark:text-blue-400 italic">
              Think of it like a <strong>live broadcast</strong> — one source,
              many listeners.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Example: Uber Driver Location Streaming
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              In a service like <strong>Uber</strong>, every driver&apos;s app
              sends <strong>live GPS coordinates</strong> every few seconds.
            </p>

            <Code>{`{
  "driverId": "DR123",
  "lat": 28.6139,
  "lng": 77.209,
  "timestamp": 1690917600
}`}</Code>

            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              These updates are pushed to a <strong>Kafka topic</strong> called{" "}
              <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">
                driver-location-stream
              </code>
              .
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <thead className="bg-zinc-50 dark:bg-zinc-800">
                  <tr>
                    <th className="border-b border-zinc-200 dark:border-zinc-700 p-3 text-left text-zinc-900 dark:text-zinc-200 font-semibold">
                      Service
                    </th>
                    <th className="border-b border-zinc-200 dark:border-zinc-700 p-3 text-left text-zinc-900 dark:text-zinc-200 font-semibold">
                      What It Does
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-zinc-200 dark:border-zinc-700 p-3 text-zinc-700 dark:text-zinc-300">
                      Nearby Driver Service
                    </td>
                    <td className="border-b border-zinc-200 dark:border-zinc-700 p-3 text-zinc-600 dark:text-zinc-400">
                      Shows drivers near a passenger
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-zinc-200 dark:border-zinc-700 p-3 text-zinc-700 dark:text-zinc-300">
                      ETA Service
                    </td>
                    <td className="border-b border-zinc-200 dark:border-zinc-700 p-3 text-zinc-600 dark:text-zinc-400">
                      Continuously updates arrival times
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-zinc-200 dark:border-zinc-700 p-3 text-zinc-700 dark:text-zinc-300">
                      Analytics
                    </td>
                    <td className="border-b border-zinc-200 dark:border-zinc-700 p-3 text-zinc-600 dark:text-zinc-400">
                      Tracks hotspots and trends
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-zinc-700 dark:text-zinc-300">
                      Fraud Detection
                    </td>
                    <td className="p-3 text-zinc-600 dark:text-zinc-400">
                      Detects fake GPS or route anomalies
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Each service has its <strong>own consumer group</strong>. All
              groups <strong>receive every message independently</strong>,
              allowing their logic to stay isolated and process asynchronously.
              Within each group, messages are distributed among consumers for
              parallel processing.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <h5 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">
                How Kafka Distributes Work:
              </h5>
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                If a topic has 3 partitions (P0, P1, P2) and a consumer group
                has 3 consumers, each consumer gets one partition. If there are
                fewer consumers than partitions, some consumers handle multiple
                partitions. This ensures parallel processing while maintaining
                message order within each partition.
              </p>
            </div>

            <div className="mb-6">
              <img
                src="https://blog-asset-v1.s3.ap-south-1.amazonaws.com/kafka.png"
                alt="Kafka message streams illustration showing topics, partitions, and consumer groups"
                className="w-full mx-auto"
              />
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Message Stream Benefits:
            </h4>

            <List className="mb-4 text-zinc-600 dark:text-zinc-400">
              <ListItem>
                <strong>Write once</strong>, used by{" "}
                <strong>many services</strong>
              </ListItem>
              <ListItem>
                Real-time, <strong>scalable</strong>, and{" "}
                <strong>resilient</strong>
              </ListItem>
              <ListItem>
                Each group processes data <strong>independently</strong>
              </ListItem>
              <ListItem>
                Supports <strong>message replay</strong> (by offset)
              </ListItem>
              <ListItem>
                Built-in <strong>fault tolerance and parallelism</strong>
              </ListItem>
            </List>
          </div>
        </section>

        {/* Pub/Sub */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            3. Pub/Sub (Publish-Subscribe)
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            In our journey through asynchronous processing, we&apos;ve seen how
            <strong className="text-zinc-900 dark:text-zinc-200">
              message queues
            </strong>{" "}
            offer reliable task delegation and how{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              message streams
            </strong>{" "}
            help process flowing data across consumers. But when it comes to
            real-time event delivery — think of notifications, live updates, or
            collaborative apps — the Publish-Subscribe (Pub/Sub) model shines.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Key Characteristics:
            </h4>

            <List className="mb-4 text-zinc-600 dark:text-zinc-400">
              <ListItem>
                <strong>Fire-and-forget</strong>: Messages are delivered in
                real-time but not stored
              </ListItem>
              <ListItem>
                <strong>Decoupled</strong>: Publishers don&apos;t know
                who&apos;s listening
              </ListItem>
              <ListItem>
                <strong>Broadcast-style</strong>: Every subscriber gets their{" "}
                <strong>own copy</strong> of the message
              </ListItem>
              <ListItem>
                <strong>Ultra-low latency</strong>: Optimized for speed over
                reliability
              </ListItem>
            </List>
          </div>

          <div className="mb-6">
            <img
              src="https://blog-asset-v1.s3.ap-south-1.amazonaws.com/pub-sub.png"
              alt="Pub/Sub illustration showing publisher, topic, and multiple subscribers"
              className="w-full mx-auto"
            />
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Example: Live Sports Score Updates
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Imagine a cricket app showing <strong>live scores</strong>:
            </p>

            <OrderedList className="list-decimal list-inside space-y-2 mb-4 text-zinc-600 dark:text-zinc-400 pl-4">
              <OrderedListItem>
                The backend service publishes score updates to a{" "}
                <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                  LiveScore
                </code>
                topic
              </OrderedListItem>
              <OrderedListItem>
                All users subscribed to the topic receive updates{" "}
                <strong>instantly</strong>, without needing to refresh
              </OrderedListItem>
            </OrderedList>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
              <p className="text-amber-800 dark:text-amber-300 text-sm">
                <strong>Trade-off:</strong> Unlike Kafka streams, Redis Pub/Sub
                doesn&apos;t persist messages. If a subscriber is offline when a
                message is published, they miss it. This makes it perfect for
                real-time updates where only the latest state matters.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h4 className="font-semibold mb-2 text-purple-900 dark:text-purple-200">
              When to Choose Pub/Sub:
            </h4>

            <List className="mb-4 text-purple-800 dark:text-purple-300">
              <ListItem>
                <strong>Ultra-low latency</strong> is critical
              </ListItem>
              <ListItem>All active subscribers should get the update</ListItem>
              <ListItem>
                You don&apos;t need message persistence or replay
              </ListItem>
              <ListItem>
                Real-time notifications, live dashboards, chat systems
              </ListItem>
            </List>
            <p className="mt-3 text-purple-700 dark:text-purple-400 text-sm">
              <strong>Popular tools:</strong> Redis Pub/Sub, Google Cloud
              Pub/Sub, AWS SNS
            </p>
          </div>
        </section>

        {/* Wrap Up */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            Wrap Up
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            All the techniques we saw — <strong>message queues</strong>,{" "}
            <strong>streams</strong>, and <strong>pub-sub</strong> — are not
            just for performance optimization. They&apos;re the core of{" "}
            <strong>event-driven architecture</strong>, which helps in building{" "}
            <strong>scalable and loosely coupled systems</strong>.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            These concepts are used in real-world apps like Uber, Netflix, and
            Facebook to handle massive flows of data in real time.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">
              What&apos;s Next?
            </h3>
            <p className="text-blue-800 dark:text-blue-300">
              In the <strong>next blog</strong>, we&apos;ll use these async
              patterns to{" "}
              <strong> design a real-world Notification System</strong> with
              emails, in-app alerts, and retry handling — all using event-driven
              architecture.
            </p>
          </div>

          <p className="text-xl font-semibold text-center text-zinc-900 dark:text-zinc-200 mb-2">
            Stay Tuned!
          </p>
        </section>

        <BlogFooter />
      </div>
    </div>
  );
}
