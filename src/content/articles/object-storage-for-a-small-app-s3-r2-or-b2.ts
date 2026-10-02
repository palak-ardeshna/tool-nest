import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-09-14 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): has used AWS S3 only; the part that cost him was IAM and
 * permissions, roughly half a day. He has not used Cloudflare R2 or Backblaze
 * B2, so neither is reviewed and the article says so rather than comparing three
 * things from one. The least-privilege guidance, the managed-policy caveat and
 * IAM Access Analyzer policy generation are quoted from AWS's IAM security best
 * practices page, read 2026-10-02.
 */
export const objectStorageForASmallAppS3R2OrB2: Article = {
  slug: "object-storage-for-a-small-app-s3-r2-or-b2",
  title: "Half a Day on S3 Permissions, Not on Storage",
  excerpt:
    "Putting files in S3 was the easy part. About 4 hours went on IAM, which is the part nobody warns you about when they compare prices per gigabyte.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["AWS S3", "IAM", "Object Storage", "Permissions"],
  publishedAt: "2026-09-14",
  contentUpdatedAt: "2026-09-21",
  seoTitle: "S3 for a Small App: IAM Is the Real Work",
  seoDescription:
    "Storing files in S3 took minutes. IAM and permissions took me about half a day. What AWS actually recommends, and the order to do it in.",
  pros: [
    "Getting objects in and out of a bucket is quick and well documented",
    "AWS publishes a managed policy you can start from rather than writing JSON from scratch",
    "AWS has a tool that generates a narrower policy from what your app actually did",
  ],
  cons: [
    "About half a day of my setup went on IAM and permissions, not on storage",
    "AWS says its own managed policies \"might not grant least-privilege permissions for your specific use cases\"",
    "A permissions mistake either blocks your app or quietly over-grants, and only one of those is visible",
    "I cannot compare it to R2 or B2, because I have not used them",
  ],
  faqs: [
    {
      question: "Is S3 hard to use for a small app?",
      answer:
        "Storing and fetching files is not. The access control around it is where my time went: roughly half a day on IAM before the thing worked the way I wanted.",
    },
    {
      question: "Should I start with a narrow policy or a broad one?",
      answer:
        "AWS's own best practices say you \"might start with broad permissions while you explore the permissions that are required for your workload or use case\" and then reduce them as the use case matures. That is the opposite of how I tried to do it, and it is their advice, not mine. Checked 2 October 2026.",
    },
    {
      question: "Are the AWS managed policies good enough?",
      answer:
        "AWS says they are a reasonable starting point and warns they \"might not grant least-privilege permissions for your specific use cases because they are available for use by all AWS customers\". So start there, then narrow.",
    },
    {
      question: "What about Cloudflare R2 or Backblaze B2?",
      answer:
        "I have not used either, so I have nothing to tell you. If the egress pricing is what brought you here, that is a real difference between these services and it is not something I can speak to from use.",
    },
  ],
  content: `
<p>I have used AWS S3 and not Cloudflare R2 or Backblaze B2, so take this as a report on one of the three. Getting files into a bucket and back out was quick, and that part went about as I expected. The part that cost me was IAM: about half a day, roughly 4 hours, went on permissions before things worked the way I wanted them to. None of that time was spent on storage itself.</p>

<p>Every comparison of these services is about price per gigabyte and egress fees. Those matter at scale. At the scale of a small app, the cost I actually paid was in hours, and it was all in access control.</p>

<h2>Why permissions take the time</h2>
<p>A storage API has one job and it either works or returns an error you can read. Permissions have two failure modes and only one of them is visible.</p>
<p>If the policy is too narrow, the app breaks and you know immediately. If it is too wide, everything works perfectly and you have given something more access than it needs, which you will not find out from testing. So you cannot tell when you are finished. Working and correct are different states here, which is why half a day goes on it rather than ten minutes.</p>
<p>Add to that the shape of the thing: a policy is JSON with actions, resources and conditions, and the names are not guessable. Knowing you want "let this one app write to this one bucket" does not tell you which actions that needs or how to scope the resource.</p>

<h2>The order AWS actually recommends</h2>
<p>I tried to write the perfect narrow policy first. AWS's own guidance says not to do that, and reading it earlier would have saved me most of the afternoon.</p>
<p>Their IAM security best practices page, read on 2 October 2026, defines least privilege as granting "only the permissions required to perform a task", and then says this about getting there: "You might start with broad permissions while you explore the permissions that are required for your workload or use case. As your use case matures, you can work to reduce the permissions that you grant to work toward least privilege."</p>
<p>So the recommended path is broad, then narrow, which is the reverse of what I attempted. They also say to begin from the AWS managed policies, while warning that those "might not grant least-privilege permissions for your specific use cases because they are available for use by all AWS customers".</p>
<p>And there is a tool for the narrowing step that I did not know existed: AWS can generate a policy from the access activity logged in CloudTrail, so the policy is derived from what your app actually did rather than from what you guessed it would need. For somebody spending half a day guessing, that is the part worth reading first.</p>

<h2>Three other things on that page I had not done</h2>
<p>Reading it properly for this article turned up three recommendations I had skipped, all of which take minutes.</p>
<p>AWS says to require multi-factor authentication for any case where you do need an IAM user or the root user. It says to treat root user credentials the way you would other sensitive personal information, and points at a separate page of root user practices. And it says to regularly review and remove unused users, roles, permissions, policies and credentials, using IAM's last accessed information to find them.</p>
<p>That last one is the counterpart to the half day. Permissions accumulate: the broad policy you created while exploring is still attached long after the exploring finished. Nobody ever gets an error from a permission that is too wide, so nothing prompts you to go back. A review you have scheduled is the only thing that does.</p>

<h2>What I would do differently</h2>
<p>Start from a managed policy, get the app working, and only then tighten. The tightening is a separate task you can do with evidence, and doing it with evidence is both faster and more correct than doing it from imagination.</p>
<p>Use roles rather than long-lived keys where you can. AWS's guidance is explicit that workloads should use temporary credentials with IAM roles, and that long-term access keys are for the cases where a role is not possible.</p>
<p>And budget the permissions work as its own line in the estimate. Adding file storage to an app took minutes. Adding an identity and an access boundary around it took the rest of the day, and that is what the job really was. The same thing happened to me with a GitHub token in <a href="/articles/free-apis-worth-building-on">being rate limited with a token set</a>: the credential was easy and the behaviour around it was the work.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I have used AWS S3 and not Cloudflare R2 or Backblaze B2, so take this as a report on one of the three. Getting files into a bucket and back out was quick, and that part went about as I expected. The part that cost me was IAM: about half a day, roughly 4 hours, went on permissions before things worked the way I wanted them to. None of that time was spent on storage itself.",
  },
  sources: [
    {
      title: "Security best practices in IAM",
      publisher: "Amazon Web Services",
      url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
      checkedAt: "2026-10-02",
    },
  ],
};
