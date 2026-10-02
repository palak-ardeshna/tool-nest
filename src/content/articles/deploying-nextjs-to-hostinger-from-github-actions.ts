import type { Article } from "@/content/types";

/**
 * Numbered log, rewritten on the URL first published 2026-09-24 (old text
 * deleted 2026-09-29, not restored). Palak's own facts (chat, 2026-10-02): he
 * runs a Hostinger VPS with Node, the build output is around 1,000 files, he
 * started on FTP from GitHub Actions and it was the problem, and its worst
 * failure was finishing while leaving the site half updated. He moved to
 * copying over SSH with rsync. No pipeline timings appear here; those belong to
 * the CI article and repeating them would make two pieces read as one.
 */
export const deployingNextjsToHostingerFromGithubActions: Article = {
  slug: "deploying-nextjs-to-hostinger-from-github-actions",
  title: "Deploying Next.js to Hostinger From GitHub Actions",
  excerpt:
    "A Next.js build is around a thousand files. Uploading that over FTP from GitHub Actions did not fail cleanly, it finished and left the site in a state that was neither the old version nor the new one.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Hostinger", "Next.js", "GitHub Actions", "Deployment", "rsync"],
  publishedAt: "2026-09-24",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Deploying Next.js to Hostinger Over SSH",
  seoDescription:
    "A Next.js build of around 1,000 files broke FTP deploys and left the site half updated. Moving to rsync over SSH on a Hostinger VPS fixed it.",
  content: `
<p>A Next.js build is not one file you drop on a server. It is around a thousand of them, most of them small, many with hashed names that change every time you build. How you move that set of files is the entire deployment, and it is the part most guides treat as an afterthought.</p>

<p>I run a Hostinger VPS with Node on it, and I started by having GitHub Actions push the build up over FTP. With a build output of around 1,000 files, that was the mistake. The failure was not a clean one where the job stops and tells you: it would finish, and the site would be left half updated, with some files from the new build and some from the old. A page would load with markup from one version asking for assets from another. Moving to copying over SSH with rsync is what ended it, because rsync sends only what changed rather than opening a connection per file for all of them.</p>

<h2>Why FTP and a Next.js build are a bad pair</h2>
<ol>
<li>The build output is roughly a thousand files, and FTP largely works a file at a time. A thousand chances for one to go wrong.</li>
<li>There is no transaction. Nothing says "all of it or none of it", so an interruption is not a rollback, it is a half-finished site.</li>
<li>The filenames change on every build because they are content-hashed. New HTML asks for new asset names, and if those assets have not landed yet, the page is broken rather than stale.</li>
<li>Nothing fails loudly. The job can report success because it did upload files, just not all of them.</li>
</ol>

<h2>What rsync changes</h2>
<p>rsync compares what is on the server with what you are sending and transfers the difference. On a site where most of a thousand files are identical between builds, that turns almost the whole upload into a no-op. Less data moves, so there is less time in which something can go wrong, and SSH gives you one authenticated connection rather than many.</p>
<p>It is not a transaction either, to be clear. It is a much smaller window rather than no window. For a site of this size that has been enough, and the half-updated state has not come back.</p>

<h2>The setup, in short</h2>
<ol>
<li>Build in the Actions runner, so the server never has to.</li>
<li>Put an SSH key in the repository secrets, with the public half on the VPS.</li>
<li>rsync the build output to the directory the Node process serves from.</li>
<li>Restart the Node process so it picks up the new build.</li>
</ol>
<p>Step four is the one people forget on a VPS. Unlike static hosting, where new files are live the moment they land, a Node server is holding the old build in memory until something tells it otherwise.</p>

<h2>What I would check on day one</h2>
<p>Count the files in your build output before choosing how to ship them. If it is a handful, anything works. If it is in the hundreds or thousands, the per-file protocols will hurt you eventually, and they will hurt you by half succeeding rather than by failing.</p>
<p>Then look at what happens on a bad run. A deploy that stops cleanly is a nuisance; a deploy that half finishes is an outage, and it is the one you want to design against, in the same way <a href="/articles/ci-pipelines-that-stay-under-ten-minutes">the pipeline around it is worth keeping tight</a>.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I run a Hostinger VPS with Node on it, and I started by having GitHub Actions push the build up over FTP. With a build output of around 1,000 files, that was the mistake. The failure was not a clean one where the job stops and tells you: it would finish, and the site would be left half updated, with some files from the new build and some from the old. A page would load with markup from one version asking for assets from another. Moving to copying over SSH with rsync is what ended it, because rsync sends only what changed rather than opening a connection per file for all of them.",
  },
};
