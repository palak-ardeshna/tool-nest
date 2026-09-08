import type { Article } from "@/content/types";

export const choosingABackgroundJobQueue: Article = {
  slug: "choosing-a-background-job-queue",
  title: "Choosing a Background Job Queue: Your Hosting Decides More Than Your Taste Does",
  excerpt:
    "Every comparison of Inngest, Trigger.dev, BullMQ and pg-boss argues about features. The decision is usually made earlier and by something else: whether your runtime lets you keep a worker process alive at all.",
  category: "developer-tools",
  author: "toolnest-editorial",
  tags: ["Developer Tools", "Backend", "Serverless", "Comparisons"],
  publishedAt: "2026-09-08",
  image: "/images/articles/choosing-a-background-job-queue.webp",
  imageAlt:
    "Overhead view of a long white conveyor bridge crossing a dark stockyard of bulk material, with rail lines running along one edge",
  seoTitle: "Choosing a Background Job Queue (2026)",
  seoDescription:
    "Inngest, Trigger.dev, QStash, BullMQ and pg-boss compared: why your hosting picks the shortlist, and what the free tiers really run out of first.",
  quickAnswer:
    "Answer one question before you compare anything: can you keep a process running? If you deploy to a VPS, a container or any platform that runs a long-lived Node process, use a library and pay nobody — pg-boss if you already have Postgres, BullMQ if you already have Redis. If you deploy to serverless functions, you have nowhere to run a worker, and what Inngest, Trigger.dev and QStash actually sell you is somebody else's always-on process that calls your HTTP endpoint back on a schedule and retries when it fails. That is the real product. Feature tables are downstream of it.",
  pros: [
    "A library on your own infrastructure costs nothing per job and has no vendor in the failure path",
    "Managed services solve the one thing serverless cannot: durable state between retries",
    "Both routes give you retries, scheduling and dead letters — the differences are operational, not functional",
  ],
  cons: [
    "A self-hosted queue is a second thing to monitor, and a silently dead worker looks exactly like an empty queue",
    "Managed pricing meters runs, compute and concurrency separately, so the bill is hard to forecast from job count alone",
    "Free tiers are generous on volume and tight on concurrency and history, which is the opposite of what most people plan for",
  ],
  alternatives: [
    {
      name: "pg-boss",
      url: "https://github.com/timgit/pg-boss",
      note: "MIT-licensed Node library that keeps the queue in Postgres 13+ using SKIP LOCKED. The right default when you already run Postgres and do not want a second datastore.",
    },
    {
      name: "BullMQ",
      url: "https://docs.bullmq.io/",
      note: "The established Redis-backed Node queue: retries, delayed and repeatable jobs, parent-child dependencies, per-worker concurrency. Needs Redis and a process to run workers in.",
    },
    {
      name: "Inngest",
      url: "https://www.inngest.com/pricing",
      note: "Event-driven durable workflows. Free tier is 50k executions a month at 5 concurrent steps; Pro is $99/mo with 1M executions and 100 concurrent steps.",
    },
    {
      name: "Trigger.dev",
      url: "https://trigger.dev/pricing",
      note: "Managed task platform with no task timeout on any tier. Priced as compute credits plus $0.25 per 10,000 run invocations; Free includes $5/mo of credits at 20 concurrent runs.",
    },
    {
      name: "Upstash QStash",
      url: "https://upstash.com/pricing/qstash",
      note: "The thinnest option: an HTTP message scheduler that calls your endpoint back. Free is 1,000 messages a day; pay-as-you-go is $1 per 100K messages.",
    },
  ],
  faqs: [
    {
      question: "Do I need a queue at all, or is a cron endpoint enough?",
      answer:
        "If you have one job, it runs on a schedule rather than on demand, and nobody is waiting on the result, a cron-triggered route reading rows from a table is genuinely enough. You need a queue when work arrives from user actions, has to be retried without duplicating its effect, and has to survive a deploy mid-flight. Those three together are the threshold.",
    },
    {
      question: "Can I run BullMQ on Vercel?",
      answer:
        "You can enqueue from a Vercel function, but you cannot run the worker there. BullMQ workers are long-lived processes that hold a Redis connection and poll; a serverless function is terminated when the response is sent. Teams who try this end up running the worker somewhere else anyway, at which point the question is whether that second box was worth avoiding a managed service.",
    },
    {
      question: "Is Postgres fast enough to be a queue?",
      answer:
        "For the volumes a small application produces, comfortably. PostgreSQL's own documentation describes SKIP LOCKED as a way to avoid lock contention between multiple consumers reading a queue-like table, which is exactly what pg-boss uses it for. Redis wins on raw throughput, but throughput is rarely the constraint that made you want a queue.",
    },
    {
      question: "What happens to in-flight jobs when I deploy?",
      answer:
        "With a self-hosted worker, whatever your process manager does on shutdown — which is why BullMQ documents automatic recovery from process crashes, and why stalled-job handling matters more than it sounds. With a managed service, the state lives on their side and the retry comes back to a fresh function. That difference is the strongest practical argument for the managed option.",
    },
  ],
  sources: [
    {
      title: "Vercel Functions Limits",
      publisher: "Vercel",
      url: "https://vercel.com/docs/functions/limitations",
      checkedAt: "2026-09-08",
    },
    {
      title: "Pricing | Inngest",
      publisher: "Inngest",
      url: "https://www.inngest.com/pricing",
      checkedAt: "2026-09-08",
    },
    {
      title: "Pricing | Trigger.dev",
      publisher: "Trigger.dev",
      url: "https://trigger.dev/pricing",
      checkedAt: "2026-09-08",
    },
    {
      title: "QStash Pricing",
      publisher: "Upstash",
      url: "https://upstash.com/pricing/qstash",
      checkedAt: "2026-09-08",
    },
    {
      title: "pg-boss — README",
      publisher: "pg-boss",
      url: "https://github.com/timgit/pg-boss",
      checkedAt: "2026-09-08",
    },
    {
      title: "BullMQ Documentation",
      publisher: "BullMQ",
      url: "https://docs.bullmq.io/",
      checkedAt: "2026-09-08",
    },
    {
      title: "SELECT — The Locking Clause (SKIP LOCKED)",
      publisher: "PostgreSQL",
      url: "https://www.postgresql.org/docs/current/sql-select.html",
      checkedAt: "2026-09-08",
    },
  ],
  content: `<p>The first background job almost every application needs is sending an email. Someone signs up, you call the mail provider inside the request handler, and for a while nothing goes wrong. Then the provider has a slow morning, your sign-up route starts taking eleven seconds, and a few of those requests time out after the account was created but before the welcome email went. Now you have users in a state your code does not have a name for.</p>

<p>That is the moment people go looking for a queue, and the search results are unhelpful in a specific way: they compare features. Retries, cron, priorities, dead letters — every serious option has all of them. We have not run these at scale against each other, and no honest comparison could in an afternoon. What we can do is point at the constraint that actually decides this, because it is usually already decided.</p>

<h2>The question is not which library</h2>

<p>A job queue is two things: somewhere to put the work, and something running that takes work out. Almost all the writing is about the first half. The second half is what your hosting either gives you or does not.</p>

<p>If your application runs as a long-lived process — a VPS, a container, Render, Fly, Railway, your own box — you already have somewhere for a worker to live. Adding a queue is adding a dependency, and it is free.</p>

<p>If your application is a set of serverless functions, you do not. A function exists to answer a request and is terminated once it has. There is no process to poll a queue, no place to hold a retry, nothing that stays alive between the failure and the second attempt. On Vercel, functions have a default maximum duration of 300 seconds, rising to 800 seconds on Pro and Enterprise, with a 1800-second extended maximum in beta. Those are generous numbers, and they are still a ceiling on a single invocation rather than a way to keep something running.</p>

<blockquote>
<p>What managed job platforms sell is not retries. It is a process you are not paying to keep alive: something that stays awake, holds the state of a half-finished workflow, and calls your endpoint back. Everything else in the feature table follows from that.</p>
</blockquote>

<p>So the shortlist is not five products. It is two, and which one you are on was settled when you picked <a href="/articles/deploying-a-nextjs-app-four-routes">where to deploy</a>.</p>

<h2>If you can keep a process alive, use a library</h2>

<p>Two defaults, and the choice between them is about what you already run rather than what they do.</p>

<p><strong>pg-boss</strong> if you have Postgres. It is MIT-licensed, needs Postgres 13 or newer, and keeps jobs in your existing database using <code>SKIP LOCKED</code> — the locking clause PostgreSQL's own documentation describes as suitable for avoiding lock contention between multiple consumers reading a queue-like table. It covers exactly-once delivery, retries with exponential backoff, cron scheduling and deferral, dead letter queues with redrive, priority queues and job dependencies. The appeal is what it does not add: no second datastore, no separate backup story, and a job row you can query with the same SQL as everything else.</p>

<p><strong>BullMQ</strong> if you have Redis. It is the established Node queue, and its feature set is broader at the edges: delayed jobs, repeatable jobs on a cron specification, parent-child dependencies, LIFO and FIFO ordering, per-worker concurrency, and automatic recovery from process crashes. A paid Pro tier adds groups, batches, observables and extra telemetry. If Redis is already in your stack for sessions or caching, this costs you nothing new to run.</p>

<p>Our advice is to resist adding Redis solely to get a queue. A second stateful service means a second thing to size, secure, back up and wake up for, and the throughput advantage it buys you is not the problem you were trying to solve.</p>

<h2>If you are on serverless, you are buying a process</h2>

<p>Three options, and they differ mostly in how much of your workflow they want to own.</p>

<p><strong>Upstash QStash</strong> is the thinnest. It is a message scheduler that makes an HTTP call to your endpoint, with retries and delays. Free covers 1,000 messages a day with a 1 MB message limit and a 15-minute maximum response duration; pay-as-you-go is $1 per 100K messages, lifts messages to 10 MB and the response window to two hours. If your jobs are "call this URL later, and again if it fails", this is the whole answer and you can stop reading.</p>

<p><strong>Inngest</strong> is an event-driven durable workflow engine — steps, fan-out, state that survives between them. The Hobby tier is free with 50k executions a month, 5 concurrent steps and 24 hours of trace history. Pro is $99/mo with 1M executions included, pay-as-you-go to 20M, 100 concurrent steps with more at $25 per 25, and 7 days of trace history.</p>

<p><strong>Trigger.dev</strong> is a managed task platform whose headline difference is honest and useful: tasks can run as long as they need, with no timeout, on every tier including Free. Pricing is compute credits plus run invocations — $0.25 per 10,000 runs on top of per-second machine cost. Free includes $5/mo of credits at 20 concurrent runs, Hobby is $10/mo with $10 of credits at 50, Pro is $50/mo with $50 of credits at 200 and more at $10/mo per 50.</p>

<h2>What the free tiers actually run out of</h2>

<p>People plan for job volume. Volume is the thing these tiers are generous about — 50k executions or 1,000 messages a day is well past what a small application generates. Two other limits bite first.</p>

<ul>
<li><strong>Concurrency.</strong> Five concurrent steps or twenty concurrent runs is fine on an average Tuesday and is not fine when a batch import fans out. Concurrency is also the line item that scales your bill: $25 per 25 steps, or $10/mo per 50 runs.</li>
<li><strong>History.</strong> Twenty-four hours of trace retention means a job that failed on Friday evening is unreadable by Monday. Retention is what you need precisely when something has gone wrong, and it is the first thing trimmed from a free tier.</li>
</ul>

<p>Neither shows up in a comparison that counts jobs per month. Both show up in the first incident, alongside whatever your <a href="/articles/error-tracking-for-small-teams">error tracking</a> did or did not capture from inside the worker.</p>

<h2>What we would pick</h2>

<p>On a long-lived process with Postgres already there: pg-boss, and nothing else. On a long-lived process with Redis already there: BullMQ. On serverless with simple deferred work: QStash, because paying for a workflow engine to send an email later is buying a category of product you do not need. On serverless with multi-step work that has to survive partial failure: Inngest or Trigger.dev, and pick on the timeout — if any task might run longer than a function invocation allows, Trigger.dev's no-timeout position is a real difference rather than marketing.</p>

<p>One thing to do before any of it. Whatever you choose, make the job idempotent — safe to run twice — because every option on this page will eventually run one twice. Retries, at-least-once delivery and a worker that died after doing the work but before recording it all produce the same duplicate. A unique key on the effect is a smaller change than the queue you are about to install, and it is the part that stops a <a href="/articles/sending-email-from-your-app">duplicated welcome email</a> from becoming a duplicated charge.</p>`,
};
