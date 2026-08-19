import type { Article } from "@/content/types";

export const deployingANextjsAppFourRoutes: Article = {
  slug: "deploying-a-nextjs-app-four-routes",
  title: "Deploying a Next.js App in 2026: Four Routes Compared",
  excerpt:
    "Managed platform, container on a VPS, Kubernetes, or static export. We deployed the same application four ways and measured cost, effort and what broke.",
  category: "deployment-tools",
  author: "priya-raman",
  tags: ["Deployment Tools", "Developer Tools", "Comparisons"],
  publishedAt: "2026-07-30",
  image: "/images/articles/deploying-a-nextjs-app-four-routes.webp",
  imageAlt: "Four small matte shipping containers arranged in a row",
  seoTitle: "Deploying a Next.js App in 2026: Four Routes Compared",
  seoDescription:
    "The same Next.js app deployed four ways — managed platform, VPS container, Kubernetes and static export. Real costs, real setup times, and what broke in each.",
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
  content: `<p>We took the same Next.js application — server components, incremental regeneration, image optimisation, a Postgres database, file uploads — and deployed it four ways.</p>

<h2>Route 1: managed platform</h2>

<p><strong>Setup: 12 minutes.</strong> Connect the repository, add environment variables, done. Image optimisation, caching headers and regeneration all worked without configuration.</p>

<p><strong>Where it bites:</strong> bandwidth pricing. An image-heavy publication generates far more egress than a typical dashboard, and the tiers are sized for the latter. Model your bill at ten times current traffic before committing, because the jump between tiers is where the surprise lives.</p>

<p><strong>The other issue:</strong> writable filesystems. Our media upload wrote to disk, which works locally and silently does not persist on ephemeral infrastructure. That is one function to change, but you have to know to change it.</p>

<h2>Route 2: container on a VPS</h2>

<p><strong>Setup: about 3 hours,</strong> most of it TLS, a reverse proxy and a deploy script.</p>

<p>A standalone build in a container behind a proxy. Predictable monthly cost, no bandwidth billing surprises, and a persistent volume for uploads and the regeneration cache.</p>

<blockquote>
<p>The persistent volume is the part people miss. Without it, uploads and the incremental cache vanish on every restart, and the failure is quiet.</p>
</blockquote>

<p><strong>What you now own:</strong> certificate renewal, log rotation, security updates, and being the person who notices when the disk fills. None of it is hard; all of it is yours.</p>

<h2>Route 3: Kubernetes</h2>

<p><strong>Setup: a day and a half,</strong> and that was with an existing cluster.</p>

<p>Everything worked. Nothing about it was better than route 2 for a single web application. The features that justify Kubernetes — scheduling across many services, sophisticated rollouts, autoscaling on real load — do not apply to one Next.js app.</p>

<p>If you already run a cluster and this is service number fifteen, add it there and ignore route 2. If this is service number one, do not start here.</p>

<h2>Route 4: static export</h2>

<p><strong>Setup: 20 minutes, then abandoned.</strong></p>

<p>A static export is genuinely excellent — cheap, fast, trivially cacheable — and it requires that you have no server-side rendering, no route handlers and no on-demand regeneration.</p>

<p>Our app has a CMS, server actions and a database. Static export was never going to work, and this is worth stating plainly because the option gets recommended to people whose applications rule it out.</p>

<h2>Side by side</h2>

<table>
<thead>
<tr><th></th><th>Setup</th><th>Monthly cost</th><th>You maintain</th><th>Good for</th></tr>
</thead>
<tbody>
<tr><td>Managed platform</td><td>12 min</td><td>Scales with bandwidth</td><td>Nothing</td><td>Almost everyone</td></tr>
<tr><td>VPS container</td><td>3 hours</td><td>Flat and predictable</td><td>TLS, logs, updates</td><td>Cost or residency constraints</td></tr>
<tr><td>Kubernetes</td><td>1.5 days</td><td>Cluster cost</td><td>Everything</td><td>Teams already running one</td></tr>
<tr><td>Static export</td><td>20 min</td><td>Near zero</td><td>Nothing</td><td>Genuinely static sites only</td></tr>
</tbody>
</table>

<h2>What we would choose</h2>

<p>Managed platform to launch, because the setup cost is twelve minutes and the operational cost is zero. Revisit if the bandwidth bill starts mattering, at which point a container on a VPS is three hours of work and a flat bill.</p>

<p>That is an unexciting recommendation. Deployment is the least differentiated part of this stack now — all four routes work, and the decision should be made on your constraints rather than on anyone's benchmark.</p>`,
};
