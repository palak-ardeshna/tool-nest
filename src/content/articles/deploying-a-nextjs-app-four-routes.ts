import type { Article } from "@/content/types";

export const deployingANextjsAppFourRoutes: Article = {
  slug: "deploying-a-nextjs-app-four-routes",
  title: "Deploying a Next.js App in 2026: Four Routes Compared",
  excerpt:
    "Managed platform, container on a VPS, Kubernetes, or static export. What each one costs you in setup and in ongoing ownership, the failure each one hides, and the constraint that should actually decide it.",
  category: "developer-tools",
  author: "toolnest-editorial",
  tags: ["Deployment Tools", "Developer Tools", "Comparisons"],
  publishedAt: "2026-07-30",
  image: "/images/articles/deploying-a-nextjs-app-four-routes.webp",
  imageAlt: "Four small matte shipping containers arranged in a row",
  seoTitle: "Deploying Next.js: 4 Routes Compared",
  seoDescription:
    "Four ways to deploy a Next.js app compared on setup, maintenance and cost — plus the specific failure each route hides, starting with ephemeral disks.",
  quickAnswer:
    "A managed platform for almost everyone; a container on a VPS when the bill or a data-residency rule says otherwise. Kubernetes only if you already run it for something else. Static export only if you genuinely have no server-side rendering, which most real apps do.",
  pros: [
    "Managed platforms make image optimisation and caching work with no effort",
    "A container on a VPS is cheap, portable and entirely predictable",
    "Deployment is the least differentiated part of the stack — all four work",
  ],
  cons: [
    "Managed pricing scales with bandwidth, which surprises image-heavy sites",
    "Self-hosting means owning caching, logs and TLS renewal yourself",
    "Kubernetes is enormous overhead for a single web application",
  ],
  faqs: [
    {
      question: "Does self-hosting lose any framework features?",
      answer:
        "Very few now. Image optimisation, incremental regeneration and route handlers all work in a standalone build. What you lose is that they were configured for you.",
    },
    {
      question: "What is the most common self-hosting mistake?",
      answer:
        "No persistent volume for uploaded files and the regeneration cache. Everything works until the container restarts, and then it silently does not.",
    },
  ],
  sources: [
    {
      title: "How to self-host your Next.js application",
      publisher: "Vercel (Next.js documentation)",
      url: "https://nextjs.org/docs/app/guides/self-hosting",
      checkedAt: "2026-09-03",
    },
    {
      title: "How to create a static export of your Next.js application",
      publisher: "Vercel (Next.js documentation)",
      url: "https://nextjs.org/docs/app/guides/static-exports",
      checkedAt: "2026-09-03",
    },
    {
      title: "output",
      publisher: "Vercel (Next.js documentation)",
      url: "https://nextjs.org/docs/app/api-reference/config/next-config-js/output",
      checkedAt: "2026-09-03",
    },
    {
      title: "Runtimes",
      publisher: "Vercel",
      url: "https://vercel.com/docs/functions/runtimes",
      checkedAt: "2026-09-03",
    },
    {
      title: "CDN pricing and usage",
      publisher: "Vercel",
      url: "https://vercel.com/docs/manage-cdn-usage",
      checkedAt: "2026-09-03",
    },
    {
      title: "Volumes | Docker Docs",
      publisher: "Docker",
      url: "https://docs.docker.com/engine/storage/volumes/",
      checkedAt: "2026-09-03",
    },
    {
      title: "FAQ - Let's Encrypt",
      publisher: "Internet Security Research Group (Let's Encrypt)",
      url: "https://letsencrypt.org/docs/faq/",
      checkedAt: "2026-09-03",
    },
  ],
  content: `<p>Deployment advice for Next.js tends to collapse into a preference. It is more useful as a decision about constraints, because all four routes below work — they differ in what they cost you up front, what they cost you every month afterwards, and which failure they hide until production.</p>

<p>Assume throughout a realistic application rather than a demo: server components, incremental regeneration, image optimisation, a <a href="/articles/postgres-tools-worth-using">Postgres database</a> and file uploads. Each of those exercises a different part of the deployment story, and the last two are where routes quietly break.</p>

<h2>Route 1: managed platform</h2>

<p><strong>Setup: minutes.</strong> Connect the repository, add environment variables, done. Image optimisation, caching headers and incremental regeneration work without configuration, because the platform is built around this framework.</p>

<p><strong>Where it bites:</strong> bandwidth pricing. An image-heavy publication generates far more egress than a typical dashboard, and the tiers are sized for the latter. Model your bill at ten times current traffic before committing, because the jump between tiers is where the surprise lives.</p>

<p><strong>The failure it hides:</strong> writable filesystems. Code that writes uploads to local disk works perfectly in development and silently fails to persist on ephemeral infrastructure — the write succeeds, the file is gone after the next deploy or scale event. It is usually one function to change, but nothing warns you, and the symptom appears days later as missing images.</p>

<h2>Route 2: container on a VPS</h2>

<p><strong>Setup: an afternoon,</strong> most of it TLS, a reverse proxy and a deploy script rather than anything Next.js-specific.</p>

<p>A standalone build in a container behind a proxy. Predictable monthly cost, no bandwidth billing surprises, and a persistent volume for uploads and the regeneration cache.</p>

<blockquote>
<p>The persistent volume is the part people miss. Without it, uploads and the incremental cache vanish on every restart, and the failure is quiet.</p>
</blockquote>

<p><strong>What you now own:</strong> certificate renewal, log rotation, security updates, and being the person who notices when the disk fills. None of it is hard; all of it is yours.</p>

<h2>Route 3: Kubernetes</h2>

<p><strong>Setup: days, not hours</strong> — and that assumes a cluster already exists.</p>

<p>Everything worked. Nothing about it was better than route 2 for a single web application. The features that justify Kubernetes — scheduling across many services, sophisticated rollouts, autoscaling on real load — do not apply to one Next.js app.</p>

<p>If you already run a cluster and this is service number fifteen, add it there and ignore route 2. If this is service number one, do not start here.</p>

<h2>Route 4: static export</h2>

<p><strong>Setup: trivial, if it applies to you at all.</strong></p>

<p>A static export is genuinely excellent — cheap, fast, trivially cacheable — and it requires that you have no server-side rendering, no route handlers and no on-demand regeneration.</p>

<p>An application with server actions, route handlers or a database is ruled out before you begin. This is worth stating plainly, because static export gets recommended enthusiastically to people whose applications cannot use it — and the incompatibility only becomes obvious after the build fails or, worse, after a route quietly stops working.</p>

<h2>Side by side</h2>

<table>
<thead>
<tr><th></th><th>Setup</th><th>Monthly cost</th><th>You maintain</th><th>Good for</th></tr>
</thead>
<tbody>
<tr><td>Managed platform</td><td>Minutes</td><td>Scales with bandwidth</td><td>Nothing</td><td>Almost everyone</td></tr>
<tr><td>VPS container</td><td>An afternoon</td><td>Flat and predictable</td><td>TLS, logs, updates, disk</td><td>Cost or data-residency constraints</td></tr>
<tr><td>Kubernetes</td><td>Days</td><td>Cluster cost</td><td>Everything</td><td>Teams already running one</td></tr>
<tr><td>Static export</td><td>Trivial</td><td>Near zero</td><td>Nothing</td><td>Genuinely static sites only</td></tr>
</tbody>
</table>

<h2>How to decide</h2>

<p>Work down this list and stop at the first line that applies:</p>

<ol>
<li><strong>A data-residency or compliance rule constrains where the application runs.</strong> That decides it — a container you place yourself, on infrastructure you chose.</li>
<li><strong>You already operate a Kubernetes cluster.</strong> Add it there. The marginal cost is small and the alternative is a second thing to maintain.</li>
<li><strong>The application genuinely has no server-side rendering, route handlers or database.</strong> Static export, and enjoy it.</li>
<li><strong>None of the above.</strong> Managed platform, and revisit only when the bandwidth bill starts to matter.</li>
</ol>

<p>The last case covers most projects. The setup cost is minutes and the operational cost is nothing, which is difficult to beat before you have traffic. When the bill does start to matter, moving to a container on a VPS is an afternoon of work in exchange for a flat monthly cost — a good trade at that point and a premature one before it.</p>

<p>We know that is an unexciting recommendation, and we are making it anyway. Deployment is the least differentiated part of this stack now — all four routes work, and the decision should be made on your constraints rather than on anyone's benchmark. Which of the four is actually binding for you?</p>`,
};
