import type { Article } from "@/content/types";

export const objectStorageForASmallAppS3R2OrB2: Article = {
  slug: "object-storage-for-a-small-app-s3-r2-or-b2",
  title: "Object Storage for a Small App: S3, Cloudflare R2 or Backblaze B2",
  excerpt:
    "The three buckets most small apps end up choosing between look identical from your code and cost wildly different amounts once users start downloading. We priced a realistic month on each — storage, requests and the egress line that decides it — and explain when S3's ecosystem is still worth paying for.",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Cloud Storage", "AWS", "Cloudflare", "Developer Tools", "Comparisons"],
  publishedAt: "2026-09-14",
  image: "/images/articles/object-storage-for-a-small-app-s3-r2-or-b2.webp",
  imageAlt: "Smooth grey and blue pebbles on a beach with sea foam behind them",
  seoTitle: "S3 vs Cloudflare R2 vs Backblaze B2 (2026)",
  seoDescription:
    "Amazon S3, Cloudflare R2 and Backblaze B2 priced on a realistic month for a small app: storage, requests and the egress bill that decides it.",
  quickAnswer:
    "If users download what you store — images, video, exports, backups people restore — put it on Cloudflare R2 or Backblaze B2, not S3. Both speak the S3 API, so your code does not change, and neither charges for egress in the way S3 does: R2 has no egress fee at all, and B2 gives you three times your stored volume free each month before charging $0.01 a GB. On a worked example of 100 GB stored and 500 GB downloaded a month, S3 came to roughly $39, B2 about $3 and R2 under $2. S3 is still the right answer when you need what surrounds it: IAM policies, event notifications into Lambda, a specific region for compliance, or a stack that is already on AWS.",
  pros: [
    "All three expose an S3-compatible API, so the SDK you already use works with a different endpoint",
    "R2 and B2 both include a free tier that covers a hobby project entirely",
    "Egress, the line that surprises people, is free on R2 and mostly free on B2",
  ],
  cons: [
    "S3's request pricing is per thousand and its egress is $0.09 a GB — a popular download link can cost more than the storage under it",
    "R2 is one provider's product in one provider's network; there is no region picker in the AWS sense",
    "B2's free egress is a ratio of what you store, so a small bucket with heavy downloads still pays",
  ],
  alternatives: [
    {
      name: "Amazon S3",
      url: "https://aws.amazon.com/s3/pricing/",
      note: "S3 Standard in US East is $0.023 per GB-month for the first 50 TB, $0.005 per 1,000 PUT/COPY/POST/LIST requests, $0.0004 per 1,000 GET, and $0.09 per GB out to the internet after the first 100 GB a month across your AWS account. New accounts since July 2025 get up to $200 in credits for six months instead of the old always-free 5 GB.",
    },
    {
      name: "Cloudflare R2",
      url: "https://developers.cloudflare.com/r2/pricing/",
      note: "$0.015 per GB-month, $4.50 per million Class A (write) operations, $0.36 per million Class B (read), egress free. Free tier: 10 GB-month, 1 million Class A and 10 million Class B operations a month. Infrequent Access tier at $0.01 per GB-month with a 30-day minimum and $0.01 per GB retrieval.",
    },
    {
      name: "Backblaze B2",
      url: "https://www.backblaze.com/cloud-storage/pricing",
      note: "From $6.95 per TB a month, first 10 GB free. Egress free up to three times your average monthly storage, then $0.01 per GB; unlimited free egress through partner CDNs including Cloudflare, Fastly and bunny.net. Most API calls free on pay-as-you-go; no minimum file size or storage duration.",
    },
  ],
  faqs: [
    {
      question: "Will my existing S3 code work on R2 or B2?",
      answer:
        "Almost always. Both implement the S3 API closely enough that the official AWS SDKs work once you change the endpoint, region and credentials. The gaps are at the edges: some lifecycle and replication features, some ACL behaviour, and on B2 a few older operations. Presigned URLs, multipart upload and the basic put, get, list and delete are fine on all three. Test the upload path from your app before you migrate the data, not after.",
    },
    {
      question: "Is R2 really free for egress, with no catch?",
      answer:
        "Egress is free; operations are not. Every read is a Class B operation at $0.36 per million beyond the 10 million free, and every write a Class A at $4.50 per million beyond the first million. For a normal app that is pennies. For something that issues millions of tiny reads a day it is the line to model. The other catch is architectural: your storage is now in Cloudflare's network rather than in a region you chose.",
    },
    {
      question: "What about the AWS free tier?",
      answer:
        "It changed. Accounts created from 15 July 2025 get up to $200 in credits to spend across AWS in their first six months, rather than a permanent 5 GB of S3. That is enough to try things for free, and then you pay list price. If you are counting on a free bucket for years, R2's 10 GB and B2's 10 GB are the ones that stay free.",
    },
    {
      question: "Can I use one of these as a backup target?",
      answer:
        "Yes, and B2 in particular has been a backup destination for a long time; restic, rclone and most backup tools support it directly. The 3x egress allowance is generous for backups because you rarely restore more than you store. We covered the tooling side in our piece on backups for a small team.",
    },
  ],
  sources: [
    {
      title: "Amazon S3 pricing",
      publisher: "Amazon Web Services",
      url: "https://aws.amazon.com/s3/pricing/",
      checkedAt: "2026-09-14",
    },
    {
      title: "R2 pricing",
      publisher: "Cloudflare",
      url: "https://developers.cloudflare.com/r2/pricing/",
      checkedAt: "2026-09-14",
    },
    {
      title: "B2 Cloud Storage pricing",
      publisher: "Backblaze",
      url: "https://www.backblaze.com/cloud-storage/pricing",
      checkedAt: "2026-09-14",
    },
  ],
  content: `<p>Every small app eventually needs somewhere to put files that are not rows: uploaded images, generated PDFs, video, exports, the nightly database dump. Object storage is the answer, and from inside your code the three products most people choose between are indistinguishable — the same S3 API, the same SDK, a different endpoint string.</p>

<p>From the invoice they are not indistinguishable at all. We priced a realistic month on each and the spread was more than twenty to one. Here is where the money goes, and when the expensive option is still the right one.</p>

<h2>What you are actually paying for</h2>

<p>Object storage bills on three lines, and people consistently budget for the wrong one.</p>

<ul>
<li><strong>Storage</strong>, per GB per month. This is the number on the marketing page and it is small on all three.</li>
<li><strong>Requests</strong>, per thousand or per million operations. Writes cost more than reads everywhere. Usually negligible, occasionally not.</li>
<li><strong>Egress</strong>, per GB transferred out to the internet. This is the line that decides the comparison, because it scales with how popular your files are rather than how many you have.</li>
</ul>

<p>A photo-sharing feature stores each image once and serves it thousands of times. A backup stores a lot and serves almost nothing. Same bucket, opposite bills, and the provider that wins one loses the other.</p>

<h2>The list prices, side by side</h2>

<table>
<thead>
<tr><th></th><th>Amazon S3 Standard (US East)</th><th>Cloudflare R2</th><th>Backblaze B2</th></tr>
</thead>
<tbody>
<tr><td>Storage</td><td>$0.023 / GB-month</td><td>$0.015 / GB-month</td><td>$6.95 / TB-month (about $0.007 / GB)</td></tr>
<tr><td>Writes</td><td>$0.005 per 1,000</td><td>$4.50 per million (Class A)</td><td>Free on pay-as-you-go</td></tr>
<tr><td>Reads</td><td>$0.0004 per 1,000</td><td>$0.36 per million (Class B)</td><td>Free on pay-as-you-go</td></tr>
<tr><td>Egress</td><td>$0.09 / GB after 100 GB a month</td><td>Free</td><td>Free up to 3x stored volume, then $0.01 / GB; free via partner CDNs</td></tr>
<tr><td>Always-free allowance</td><td>None (credits for new accounts)</td><td>10 GB, 1M writes, 10M reads a month</td><td>First 10 GB</td></tr>
</tbody>
</table>

<p>Prices are the ones on each vendor's page on the day we checked, in US dollars. AWS varies by region; we have used US East (N. Virginia), the cheapest and the one most people default to.</p>

<h2>A worked month</h2>

<p>Take an app with 100 GB stored, 500 GB downloaded by users over the month, a million reads and a hundred thousand writes. That is a modest product with a few thousand active users and some images per page.</p>

<table>
<thead>
<tr><th></th><th>S3</th><th>R2</th><th>B2</th></tr>
</thead>
<tbody>
<tr><td>Storage</td><td>$2.30</td><td>$1.35 (90 GB after free tier)</td><td>$0.63 (90 GB after free tier)</td></tr>
<tr><td>Requests</td><td>$0.90</td><td>$0 (inside free tier)</td><td>$0</td></tr>
<tr><td>Egress</td><td>$36.00 (400 GB after the free 100)</td><td>$0</td><td>$2.00 (200 GB over the 300 GB free)</td></tr>
<tr><td><strong>Total</strong></td><td><strong>about $39</strong></td><td><strong>about $1.35</strong></td><td><strong>about $2.63</strong></td></tr>
</tbody>
</table>

<p>The storage lines are within a couple of dollars of each other. The entire difference is egress. Double the downloads and S3 goes to about $75 while the other two barely move; on B2 you would pay another $5, on R2 nothing.</p>

<blockquote>
<p>If people download what you store, the storage price is a rounding error. Price the egress first.</p>
</blockquote>

<h2>When S3 is still the right answer</h2>

<p>None of this makes S3 a bad product. It makes it a product whose price includes things the other two do not have, and whether you need those things is the actual decision.</p>

<p>You want S3 when the bucket is one part of an AWS system: IAM policies that scope access per service, event notifications that trigger a Lambda on upload, a specific region because a contract says the data stays there, CloudFront in front of it already, or a team whose whole stack is on AWS and does not want a second vendor for one bucket. The 100 GB a month of free egress across your AWS account also covers a lot of internal traffic. And if your egress goes to other AWS services in the same region rather than the public internet, much of the bill above disappears.</p>

<p>You do not want S3 when the bucket is the product — a file host, a media library, a download endpoint — and there is nothing else on AWS. Then you are paying $0.09 a GB for an ecosystem you are not in.</p>

<h2>R2 and B2: which of the cheap two</h2>

<p>R2 is the simpler bill: storage plus operations, egress never appears. The free tier covers 10 GB and enough operations for most side projects to run at no cost indefinitely. It sits inside Cloudflare's network, which is a strength if you already use Workers or their CDN — a Worker can read from R2 without leaving the building — and a limitation if you need to say which country the bytes live in. There is also an Infrequent Access tier at $0.01 per GB-month for things you keep but rarely read, with a 30-day minimum and a retrieval fee, which is the pattern for archives.</p>

<p>B2 is the cheapest storage of the three and the longest-standing backup target. Its egress rule is a ratio: free up to three times your average stored volume each month, then $0.01 a GB, which is a ninth of S3's rate. Downloads routed through a partner CDN — Cloudflare, Fastly and bunny.net among them — are free without limit, so a B2 bucket behind a CDN is close to zero egress in practice. The API is S3-compatible, with a native API alongside it that some tools still use, and there is no minimum file size or storage duration to trip over.</p>

<p>Our rule: R2 if the files are served to browsers and you are anywhere near Cloudflare already; B2 if the files are backups, archives or large media where the storage price dominates and a CDN can front the downloads. Either is a fine default for a new small app. For the backup case specifically, the tooling matters as much as the bucket, and we went through it in <a href="/articles/backups-for-a-small-team">backups for a small team</a>.</p>

<h2>Three things to check before you migrate</h2>

<ol>
<li><strong>Presigned URLs.</strong> If your app lets browsers upload directly to the bucket, test the presigned PUT flow against the new endpoint first. It works on all three, but the CORS configuration is different on each.</li>
<li><strong>Region and residency.</strong> If anyone has promised a customer where their data lives, S3 lets you pick; R2 offers location hints rather than guarantees; B2 has a small number of regions. Know which promise you have made.</li>
<li><strong>Moving the data.</strong> Egress applies to the migration too. Pulling 2 TB out of S3 costs about $180 at list price. rclone can do the copy from anywhere, and Cloudflare offers a migration tool that pulls from S3 progressively; do the sums before the copy, not after.</li>
</ol>

<p>The code change is an afternoon. The pricing change is permanent, in either direction, so it is worth an hour with a spreadsheet — and if that spreadsheet is the same one your app's other costs live in, the <a href="/articles/deploying-a-nextjs-app-four-routes">hosting comparison</a> we ran earlier this year is the other half of the bill.</p>`,
};
