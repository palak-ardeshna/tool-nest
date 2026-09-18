import type { Article } from "@/content/types";

export const ciPipelinesThatStayUnderTenMinutes: Article = {
  slug: "ci-pipelines-that-stay-under-ten-minutes",
  title: "CI Pipelines That Stay Under Ten Minutes",
  excerpt:
    "A slow pipeline does not just waste minutes, it changes how a team works: people stop waiting, start batching, and review code that has not finished checking. Here is where the time actually goes, and the four changes that recover most of it.",
  image: "/images/articles/ci-pipelines-that-stay-under-ten-minutes.webp",
  imageAlt:
    "Photograph: two hands typing on a laptop at a pale desk, the screen filled with a syntax-highlighted code editor and a row of open file tabs",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Developer Tools", "CI/CD", "GitHub Actions", "Performance"],
  publishedAt: "2026-09-04",
  contentUpdatedAt: "2026-09-04",
  seoTitle: "How to Get CI Under Ten Minutes (2026)",
  seoDescription:
    "Why CI slows down, how GitHub Actions caching and concurrency behave, and the four changes that take a pipeline from twenty-five minutes to under ten.",
  quickAnswer:
    "Ten minutes is the threshold where people stop waiting for a pipeline and go and do something else, and a team that has stopped waiting has effectively stopped running CI. Most slow pipelines are slow for four reasons: dependency installation that is not cached properly, everything running in one sequential job, superseded runs still burning runners because nothing cancels them, and an expensive runner chosen by habit. Fix caching and concurrency first — they are configuration changes rather than restructuring, and between them they usually recover more than half the time. Then split the pipeline by who is waiting for the answer, so the fast checks report in two minutes and the slow ones stop blocking review.",
  pros: [
    "Caching and concurrency are configuration changes, not rewrites, and land in an afternoon",
    "Splitting by audience makes review usable long before the full suite finishes",
    "Cancelling superseded runs cuts both wall-clock time and the bill at once",
    "Runner choice is often pure habit, and the cheapest option is frequently the fastest",
  ],
  cons: [
    "Aggressive parallelism can cost more than it saves once fixed startup time dominates",
    "Cache keys are easy to get wrong, and a stale cache is worse than none at all",
    "Splitting pipelines means more places for a check to be quietly skipped",
    "The slowest step is often the test suite itself, and no amount of configuration fixes that",
  ],
  alternatives: [
    { name: "GitHub Actions", url: "https://github.com/features/actions", note: "Free for public repositories and self-hosted runners; billed per minute with a multiplier by platform." },
    { name: "GitLab CI", url: "https://docs.gitlab.com/ci/", note: "Tightly integrated with the repository, with its own runner fleet or your own machines." },
    { name: "Buildkite", url: "https://buildkite.com", note: "Orchestration hosted for you, execution on your own hardware. Predictable cost at high volume." },
    { name: "Self-hosted runners", note: "Free of per-minute charges and much faster on cache-heavy work, at the cost of maintaining machines." },
  ],
  faqs: [
    {
      question: "Why ten minutes specifically?",
      answer:
        "It is roughly the point at which waiting stops being reasonable. Under about ten minutes a developer will stay with the pull request, watch it go green and merge. Past that they switch to something else, and the context they were holding is gone. The cost of a twenty-five minute pipeline is not fifteen extra minutes of compute, it is the reload of everything the person had in their head, several times a day, across the team.",
    },
    {
      question: "Is caching dependencies always worth it?",
      answer:
        "Almost always, but only if the key is right. On GitHub Actions a cache is looked up first by exact key, then by the restore-keys prefixes in order, and an existing cache can never be modified — you can only write a new one under a new key. So build the key from a hash of your lockfile. If the key does not change when dependencies change you will keep restoring a stale cache and reinstalling anyway, which is slower than not caching at all. Caches that go unread for seven days are removed, and the repository limit is 10 GB with the oldest-accessed entries evicted first.",
    },
    {
      question: "Should we run everything on every push?",
      answer:
        "No, and this is the change with the best ratio of effort to payoff. Split by who is waiting for the answer. Lint, type-check and unit tests are for the person who just pushed, so they run on every push and need to be fast. Full browser tests across several targets, security scans and long integration suites are for the team, so they can run on the pull request, on a merge queue, or on a schedule. The mistake is treating every check as equally urgent when only some of them block a human.",
    },
    {
      question: "Are bigger runners worth the money?",
      answer:
        "Sometimes, and it is easy to check rather than guess. Per-minute rates differ sharply by platform: on GitHub-hosted runners a 2-core Linux machine is a fraction of the cost of a macOS one, so a job that runs on macOS out of habit rather than necessity is paying roughly ten times the rate for the same work. Larger runners are also charged even when you still have included minutes left. Move what genuinely needs a specific platform onto it, and put everything else on Linux.",
    },
  ],
  sources: [
    {
      title: "GitHub Actions billing",
      publisher: "GitHub",
      url: "https://docs.github.com/en/billing/concepts/product-billing/github-actions",
      checkedAt: "2026-09-04",
    },
    {
      title: "Dependency caching reference",
      publisher: "GitHub",
      url: "https://docs.github.com/en/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows",
      checkedAt: "2026-09-04",
    },
    {
      title: "Control the concurrency of workflows and jobs",
      publisher: "GitHub",
      url: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency",
      checkedAt: "2026-09-04",
    },
  ],
  content: `<p>A pipeline that takes twenty-five minutes does not cost you twenty-five minutes. It costs you the habit of waiting for it. People push, switch to something else, and come back an hour later to a failure they now have to reconstruct from memory. Reviews happen on branches that have not finished checking. Someone eventually adds a rule that merging requires a green tick, and the rule makes everything slower without making anything safer.</p>

<p>Ten minutes is roughly the threshold. Below it a person will stay with the change; above it they will not. Getting there is usually four changes, and two of them are configuration rather than restructuring.</p>

<h2>Where the time actually goes</h2>

<p>Before changing anything, look at one recent run and write down the duration of each step. Almost every slow pipeline we have seen falls into the same distribution, and it is rarely the tests.</p>

<table>
<thead>
<tr><th>Step</th><th>Typical share</th><th>Usually fixable by</th></tr>
</thead>
<tbody>
<tr><td>Installing dependencies</td><td>30–50%</td><td>A cache key built from the lockfile</td></tr>
<tr><td>Waiting for a runner</td><td>5–15%</td><td>Fewer, larger jobs rather than many tiny ones</td></tr>
<tr><td>Building</td><td>15–30%</td><td>Build caching, and not building twice</td></tr>
<tr><td>Tests</td><td>20–40%</td><td>Parallelism, then actually fixing the slow tests</td></tr>
<tr><td>Uploading artefacts</td><td>2–10%</td><td>Uploading less, and setting a retention period</td></tr>
</tbody>
</table>

<p>The uncomfortable finding for most teams is that half the pipeline is spent getting ready to do the work rather than doing it.</p>

<h2>Cache the slow thing, not the big thing</h2>

<p>Caching is the single largest win and the one most often configured incorrectly. The behaviour is worth knowing precisely, because the failure mode is silent.</p>

<p>A cache is looked up by exact key first. If that misses, the restore-keys prefixes are tried in order, and where several partial matches exist the most recently created one is returned. Critically, an existing cache cannot be modified — if the contents change, you must write a new cache under a new key.</p>

<p>That last rule is where teams go wrong. If your key is a fixed string, the first run stores the dependencies and every run afterwards restores that same stale copy, then installs the differences anyway. You have added a download to an install you were already doing. Build the key from a hash of the lockfile so it changes exactly when the dependencies change:</p>

<pre><code>- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: npm-\${{ runner.os }}-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      npm-\${{ runner.os }}-
</code></pre>

<p>Two limits are worth holding in mind. A repository gets 10 GB of cache by default, and when that fills, entries are deleted by last-access date, oldest first. Anything not read for seven days is removed regardless. So a cache for a branch that builds twice a month will never be there when you want it, and caching enormous build outputs can evict the dependency cache that was doing the real work.</p>

<blockquote>
<p>Cache what is slow to produce, not what is large. A 400 MB dependency tree that takes ninety seconds to install is worth caching. A 4 GB build output that takes twenty seconds to regenerate is actively harmful, because it evicts the thing that was helping.</p>
</blockquote>

<h2>Stop paying for runs nobody is waiting for</h2>

<p>This one takes four lines and is skipped almost universally. When someone pushes three times in ten minutes, the first two runs keep going to completion. Nobody will ever read those results. They occupy runners, delay the run that matters, and are billed in full.</p>

<p>Concurrency groups fix it. Jobs sharing a group run one at a time, and with cancellation enabled a new run terminates the one already in progress rather than queueing behind it:</p>

<pre><code>concurrency:
  group: ci-\${{ github.ref }}
  cancel-in-progress: true
</code></pre>

<p>Keying the group on the branch reference means each branch cancels only its own superseded runs. On a busy repository this alone can noticeably shorten the queue, because a meaningful share of the fleet was working on results nobody would read.</p>

<p>The one place to be careful is deployment. A deploy cancelled halfway through is worse than a deploy that queues, so give deployment jobs their own group with cancellation switched off. The <a href="/articles/deploying-a-nextjs-app-four-routes">route you deploy through</a> determines how much this matters — a platform doing atomic swaps is far more forgiving here than a pipeline that copies files onto a live server.</p>

<h2>Split by who is waiting</h2>

<p>Most pipelines are one long sequential job because that is how they started. The fix is not simply to parallelise everything, it is to ask who is waiting for each answer.</p>

<ul>
<li><strong>For the person who just pushed:</strong> lint, type-check, unit tests. These block a human right now, so they run on every push and belong in one job that finishes in two or three minutes. One job, not three — each additional job pays the runner startup cost again, and for short checks that overhead can exceed the work.</li>
<li><strong>For the reviewer:</strong> integration tests and a production build. These run on the pull request. Five to eight minutes is acceptable because review takes longer than that anyway.</li>
<li><strong>For the team:</strong> browser tests across several targets, security scanning, dependency audits. These belong on a merge queue or a schedule. Nobody is sitting watching them, and running them on every push to every branch is where most wasted minutes live.</li>
</ul>

<p>Splitting this way is what actually gets you under ten minutes, because you stop measuring the wrong thing. The number that matters is how long until the person who pushed learns something useful, not how long until every check has finished.</p>

<h2>The runner is a bill as well as a clock</h2>

<p>Per-minute rates differ by more than people assume. On GitHub-hosted runners a single-core Linux machine is the cheapest tier, a 2-core Linux machine is a small multiple of it, Windows costs noticeably more, and macOS is roughly ten times the 2-core Linux rate. Public repositories and self-hosted runners are not billed at all.</p>

<p>The practical consequence: a job running on macOS because the workflow was copied from somewhere is paying an order of magnitude more for work that has nothing to do with Apple platforms. Only the steps that genuinely need macOS — building or signing for Apple targets — should be there. Everything else goes on Linux.</p>

<p>Two further details catch teams out. Larger runners are charged even while you still have included minutes remaining, so switching to a bigger machine to save time is a real cost decision rather than a free one. And storage is billed separately from compute: artefacts and caches accrue a monthly charge per gigabyte, with artefacts costing several times what cache storage does. A workflow uploading a full build output on every run, with the default retention, quietly becomes a storage line item. Set a short retention period and upload only what someone will actually download.</p>

<h2>When the tests themselves are the problem</h2>

<p>All of the above is configuration. At some point you run out of configuration, and what is left is a test suite that is genuinely slow. Two things help more than parallelism.</p>

<p>The first is finding the handful of tests responsible for most of the time. Nearly every suite has a long tail where a small number of tests — usually ones that hit a real database, sleep for a fixed interval, or spin up a browser to check something that could be checked without one — account for a large share of the runtime. Most test runners can report the slowest tests. Reading that list is ten minutes well spent.</p>

<p>The second is being honest about which tests earn their runtime. A browser test that repeats what three unit tests already cover is costing you minutes on every push for no additional information. Deleting it is a legitimate performance fix, and easier to justify once you can point at what it costs per week.</p>

<p>It is also worth checking what your pipeline is not telling you. A suite that is green while production is throwing errors is a suite testing the wrong things, and no amount of speeding it up helps — <a href="/articles/error-tracking-for-small-teams">error tracking in production</a> is what closes that gap, not more CI.</p>

<h2>What we would do first</h2>

<p>In this order, because it is roughly the order of return on effort:</p>

<ol>
<li><strong>Add concurrency with cancellation</strong> to every workflow except deployment. Four lines, immediate effect on both queue time and cost.</li>
<li><strong>Fix the cache key</strong> so it is a hash of the lockfile, with a prefix restore-key as a fallback. Then confirm on the next run that it reports a hit.</li>
<li><strong>Move anything not on Linux onto Linux</strong> unless it genuinely needs another platform.</li>
<li><strong>Split the workflow by audience</strong> — fast checks on push, slower ones on the pull request, the long tail on a schedule.</li>
<li><strong>Only then look at parallelism</strong>, and measure it, because splitting a four-minute job into four one-minute jobs often produces four jobs that each spend forty seconds starting up.</li>
</ol>

<p>The first three are an afternoon and typically recover half the time. The fourth is where the remainder is. If you are still above ten minutes after all of that, the pipeline is no longer the problem and your test suite is, which is a more useful thing to know than it sounds.</p>`,
};
