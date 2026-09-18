import type { Article } from "@/content/types";

export const npmPnpmOrBunChoosingAPackageManager: Article = {
  slug: "npm-pnpm-or-bun-choosing-a-package-manager",
  title: "npm, pnpm or Bun: Choosing a Package Manager in 2026",
  excerpt:
    "The three serious options for installing JavaScript dependencies now differ less on speed than on what they refuse to do. We compared npm, pnpm and Bun on disk use, lockfiles, monorepos and the supply-chain defaults that matter after a year of poisoned packages, and on the one change to Node itself that affects all three.",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Node.js", "Package Managers", "Developer Tools", "Comparisons"],
  publishedAt: "2026-09-14",
  image: "/images/articles/npm-pnpm-or-bun-choosing-a-package-manager.webp",
  imageAlt: "Disassembled camera parts laid out in neat rows on a white surface",
  seoTitle: "npm vs pnpm vs Bun: Which to Use in 2026",
  seoDescription:
    "npm, pnpm and Bun compared on install speed, disk use, lockfiles, monorepos and the supply-chain defaults that matter after a year of poisoned packages.",
  quickAnswer:
    "For a new project we would pick pnpm. Its strict node_modules layout stops code importing packages it never declared, its content-addressable store means one copy of each package on disk however many projects use it, and since version 11 it waits 24 hours before installing any newly published version — which is the single most effective defence against the malicious releases that hit npm through 2025. Bun's installer is the fastest of the three and works in ordinary Node projects, but its speed matters most in CI and least on a laptop. npm is fine if you are on it already and have turned lifecycle scripts off; it is the one of the three that still runs a dependency's install scripts by default.",
  pros: [
    "All three read the same package.json and npm registry, so switching is a lockfile change rather than a rewrite",
    "pnpm and Bun both refuse to run dependency install scripts unless you allow them by name",
    "pnpm's release-age delay turns most registry compromises into a non-event",
  ],
  cons: [
    "Corepack, the tool that pinned a package manager version per project, is no longer shipped with Node 25 and has to be installed separately",
    "pnpm's symlinked layout still trips up the occasional tool that expects a flat node_modules",
    "Bun's speed claims are Bun's own numbers; the gap on a warm cache is much smaller",
  ],
  alternatives: [
    {
      name: "npm",
      url: "https://github.com/npm/cli",
      note: "Ships with Node. npm ci installs exactly what the lockfile says and fails if package.json disagrees. Runs dependency lifecycle scripts unless you pass --ignore-scripts or set it in .npmrc.",
    },
    {
      name: "pnpm",
      url: "https://pnpm.io/motivation",
      note: "Content-addressable store with hard links, strict non-flat node_modules, workspaces. Dependency build scripts are blocked until allowed; new versions are held for 24 hours by default since v11.",
    },
    {
      name: "Bun",
      url: "https://bun.com/docs/pm/cli/install",
      note: "Standalone installer that works in any project with a package.json. Text lockfile since 1.2, workspaces, --frozen-lockfile, and no lifecycle scripts for dependencies unless listed in trustedDependencies.",
    },
    {
      name: "Corepack",
      url: "https://github.com/nodejs/corepack",
      note: "Reads the packageManager field in package.json and runs the pinned version. Bundled with Node from 14.19 up to but not including 25; install it with npm install -g corepack on newer runtimes.",
    },
  ],
  faqs: [
    {
      question: "Is it worth migrating an existing npm project?",
      answer:
        "If it is small and stable, probably not; turn off lifecycle scripts and carry on. If it is a monorepo, has a slow CI install, or you have been bitten by a dependency importing something it never declared, pnpm pays for the afternoon it takes. Delete node_modules and package-lock.json, run pnpm import to build the new lockfile from the old one, then pnpm install.",
    },
    {
      question: "Does Bun's package manager mean I have to run Bun instead of Node?",
      answer:
        "No. Bun's own documentation describes the installer as a standalone tool that works in existing Node.js projects. You can use bun install in CI for the speed and keep running the app on Node. Whether that split is worth the second tool is a fair question; we mostly use it where the install step is the slow part of a pipeline.",
    },
    {
      question: "What does the Corepack change actually break?",
      answer:
        "Nothing you have already set up on Node 24 or earlier, which still ship it. On Node 25 and later, the packageManager field in package.json does nothing until someone installs Corepack globally. If your team relies on it to keep everyone on the same pnpm version, add that install to your setup docs and your CI image now, before the first person upgrades Node.",
    },
    {
      question: "Why hold back new versions for a day?",
      answer:
        "Because that is how long it takes to catch a bad one. pnpm's documentation puts it plainly: malicious releases are usually discovered and removed from the registry within an hour. A 24-hour minimum release age means your install never sees them. You can exempt packages you publish yourself with minimumReleaseAgeExclude.",
    },
  ],
  sources: [
    {
      title: "Motivation",
      publisher: "pnpm",
      url: "https://pnpm.io/motivation",
      checkedAt: "2026-09-14",
    },
    {
      title: "Settings: dependency resolution (minimumReleaseAge)",
      publisher: "pnpm",
      url: "https://pnpm.io/settings/dependency-resolution",
      checkedAt: "2026-09-14",
    },
    {
      title: "Settings: build (allowBuilds, strictDepBuilds)",
      publisher: "pnpm",
      url: "https://pnpm.io/settings/build",
      checkedAt: "2026-09-14",
    },
    {
      title: "bun install",
      publisher: "Bun",
      url: "https://bun.com/docs/pm/cli/install",
      checkedAt: "2026-09-14",
    },
    {
      title: "npm ci",
      publisher: "npm (GitHub)",
      url: "https://github.com/npm/cli/blob/latest/docs/lib/content/commands/npm-ci.md",
      checkedAt: "2026-09-14",
    },
    {
      title: "nodejs/corepack README",
      publisher: "Node.js (GitHub)",
      url: "https://github.com/nodejs/corepack",
      checkedAt: "2026-09-14",
    },
    {
      title: "Node.js TSC votes to stop distributing Corepack",
      publisher: "Socket",
      url: "https://socket.dev/blog/node-js-tsc-votes-to-stop-distributing-corepack",
      checkedAt: "2026-09-14",
    },
  ],
  content: `<p>For most of the last decade the package manager question was about speed, and the answer changed every eighteen months. That argument is mostly over. All three serious options are fast enough on a warm cache that you will not notice the difference on a laptop, and where it does matter, in CI, the fix is usually caching rather than switching tools.</p>

<p>What separates them now is what they refuse to do. After a year in which the npm registry was hit by a run of compromised packages, some of them self-propagating, the defaults around install scripts and freshly published versions are the reason to choose one over another. We run projects on all three. Here is how we decide.</p>

<h2>The short version</h2>

<table>
<thead>
<tr><th></th><th>npm</th><th>pnpm</th><th>Bun</th></tr>
</thead>
<tbody>
<tr><td>Ships with Node</td><td>Yes</td><td>No</td><td>No</td></tr>
<tr><td>Disk use across projects</td><td>One copy per project</td><td>One copy per machine, hard-linked</td><td>Global cache, copied or linked per project</td></tr>
<tr><td>node_modules layout</td><td>Flat (hoisted)</td><td>Strict, symlinked</td><td>Flat (hoisted)</td></tr>
<tr><td>Dependency install scripts</td><td>Run by default</td><td>Blocked until allowed</td><td>Blocked until trusted</td></tr>
<tr><td>Delay on new versions</td><td>None</td><td>24 hours by default (v11)</td><td>None</td></tr>
<tr><td>Lockfile</td><td>package-lock.json</td><td>pnpm-lock.yaml</td><td>bun.lock (text, since 1.2)</td></tr>
<tr><td>Workspaces</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
</tbody>
</table>

<h2>npm: fine, if you change two defaults</h2>

<p>npm's case is that it is already there. It comes with Node, every tutorial assumes it, and <code>npm ci</code> does the one thing a CI install must do: install exactly what the lockfile says and fail loudly if package.json has drifted from it. If your project is small and your team is not fighting it, there is no prize for switching.</p>

<p>The two things we change on every npm project are both about scripts. First, <code>ignore-scripts=true</code> in <code>.npmrc</code>, so a dependency's <code>postinstall</code> cannot run code on your machine just because you typed install. The handful of packages that genuinely need a build step, native modules mostly, you then run by hand or list explicitly. Second, <code>npm ci</code> rather than <code>npm install</code> anywhere automated, which we covered in more detail in <a href="/articles/ci-pipelines-that-stay-under-ten-minutes">our piece on keeping CI under ten minutes</a>.</p>

<p>What npm does not give you is any protection against a package that was fine yesterday and compromised this morning. If a version is on the registry, npm will install it.</p>

<h2>pnpm: the defaults we would want everywhere</h2>

<p>pnpm started as a disk-space fix and became the safest of the three almost as a side effect of being strict. The disk-space part still holds: every package version lives once in a content-addressable store on your machine, and projects hard-link to it. Its documentation puts it simply — when packages are installed, their files are hard-linked from that single place, consuming no additional disk space. Ten projects on one laptop that all use the same React means one React on disk.</p>

<p>The strictness is the part that changes how you write code. pnpm puts only your declared dependencies at the top of node_modules, so <code>import lodash from "lodash"</code> fails unless lodash is actually in your package.json, rather than quietly working because something else pulled it in. That is the phantom dependency problem, and it is the cause of a whole class of "works on my machine, breaks in production" bugs. If some tool you rely on cannot cope with the symlinked layout, <code>nodeLinker: hoisted</code> gives you a flat tree and you lose only that check.</p>

<blockquote>
<p>Since version 11, pnpm waits 24 hours before it will install a newly published version of anything, including transitive dependencies. Most malicious releases are pulled from the registry within an hour. That one default is worth more than any audit tool we have used.</p>
</blockquote>

<p>Two settings do the security work. <code>minimumReleaseAge</code> defines the minimum number of minutes that must pass after a version is published before pnpm will install it, and defaults to 1440 in v11. And since v10.3, dependency build scripts do not run at all unless you allow the package by name; with <code>strictDepBuilds</code> on, which is the default, an install with unreviewed scripts fails rather than silently skipping them. You will spend five minutes approving esbuild and sharp on a new project. That is the cost.</p>

<h2>Bun: the fastest installer, in a runtime you may not want</h2>

<p>Bun's package manager is the one people mean when they say "Bun is fast". Bun's own page claims installs many times faster than npm; we would treat the headline multiplier as a best case on a cold cache, but the direction is right. On a CI runner with nothing cached, <code>bun install --frozen-lockfile</code> is consistently the quickest way we know to get from a checkout to a node_modules.</p>

<p>The point that is easy to miss is that you do not have to run your app on Bun to use it. The documentation is explicit: it is a standalone tool that works in existing Node.js projects; if your project has a package.json, you can use bun install. So the practical pattern is Bun for the install step and Node for everything else, which is what we do on a couple of pipelines where installing was the slow part.</p>

<p>On safety, Bun is closer to pnpm than to npm. It does not execute lifecycle scripts like postinstall for installed dependencies unless you list the package in <code>trustedDependencies</code>. What it lacks is any equivalent of pnpm's release-age delay. And the lockfile, binary until 1.2, is now plain text and reviewable in a pull request, which removes the objection we used to have.</p>

<h2>The Corepack change affects all three</h2>

<p>Corepack was the tool that made the <code>packageManager</code> field in package.json mean something: with it installed, typing <code>pnpm</code> ran the exact version your project pinned, downloading it if needed. Node distributed it from 14.19 up to but not including 25.0.0, and from 25 it is gone. The Node steering committee voted to stop shipping it, on the argument that package managers should not be bundled with the runtime.</p>

<p>Nothing breaks on Node 24, which is the current LTS and still includes it. But the first person on your team to install Node 25 will find <code>pnpm</code> is suddenly not a command, and the fix is one line: <code>npm install -g corepack</code>. Put it in your setup docs and your CI image now. If you would rather not depend on Corepack at all, pnpm's own standalone installer and Bun's install script both work without it.</p>

<h2>Which one, then</h2>

<ul>
<li><strong>Starting a project:</strong> pnpm. The strict layout and the 24-hour delay are the defaults we would choose if we were designing a package manager today, and workspaces are good enough that we no longer reach for a separate monorepo tool for small setups.</li>
<li><strong>Existing npm project that works:</strong> stay, set <code>ignore-scripts</code>, use <code>npm ci</code>. Migrate when you next touch the monorepo structure or the CI install time, not before.</li>
<li><strong>Install step is the slow part of CI:</strong> Bun for the install, Node for the app. Cheap to try, easy to reverse.</li>
<li><strong>Already on Bun as a runtime:</strong> use its installer; the two are built to go together.</li>
</ul>

<p>Whichever you pick, the same three habits apply: commit the lockfile, install with the frozen flag in CI, and do not let dependencies run scripts you have not read. The tool makes those easier or harder. It does not make them optional. And if the project is a Next.js app you are about to deploy, the package manager you choose also has to be one your host supports — <a href="/articles/deploying-a-nextjs-app-four-routes">our deployment comparison</a> notes where that bites.</p>`,
};
