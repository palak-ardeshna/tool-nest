import type { Article } from "@/content/types";

export const backupsForASmallTeam: Article = {
  slug: "backups-for-a-small-team",
  title: "Backups for a Small Team: What 3-2-1 Costs When You Actually Price It",
  excerpt:
    "Everyone knows the rule and almost nobody has implemented it, mostly because it sounds expensive and nobody has done the sum. For a team of five it is usually under ten pounds a month — and the copy you are missing is probably not the one on your laptop.",
  image: "/images/articles/backups-for-a-small-team.webp",
  imageAlt:
    "Photograph: a dozen bare hard drives laid face down and packed edge to edge, their green and blue controller boards and barcode labels showing",
  category: "software",
  author: "parth-patel",
  tags: ["Software", "Backups", "Security", "Small Teams"],
  publishedAt: "2026-09-04",
  contentUpdatedAt: "2026-09-04",
  seoTitle: "Small Team Backups: 3-2-1 Priced Properly (2026)",
  seoDescription:
    "What the 3-2-1 backup rule costs once you price it, why your Google Workspace and Microsoft 365 data is not backed up, and how restic and rclone fit in.",
  quickAnswer:
    "Three copies, on two kinds of media, one of them off-site. Priced with commodity object storage at roughly seven dollars per terabyte per month, a small team storing 500 GB is looking at under five dollars a month for the off-site copy — far less than the single subscription you would cancel to pay for it. The copy most teams are missing is not the laptop one; it is their software-as-a-service data. Every major provider states plainly that the customer remains responsible for their own data, and the thirty-day bin in your email suite is a deletion grace period rather than a backup. Whatever you build, the only part that counts is a restore you have actually performed.",
  pros: [
    "Object storage has made the off-site copy genuinely cheap — cents per gigabyte per year",
    "Open-source tools handle encryption, deduplication and verification without a subscription",
    "One scripted job covers laptops, servers and exported SaaS data alike",
    "Object lock turns the off-site copy into something ransomware cannot delete",
  ],
  cons: [
    "It is invisible work with no deadline, so it never wins against anything else",
    "SaaS exports are the fiddliest part and the part most often skipped",
    "An unverified backup is a belief, and most teams discover this during an incident",
    "Encrypted backups create a key you must not lose, which is a new failure mode",
  ],
  alternatives: [
    { name: "restic", url: "https://restic.net", note: "Encrypted, deduplicated, snapshot-based backup with a built-in integrity check. Speaks S3, B2, Azure, GCS and more." },
    { name: "rclone", url: "https://rclone.org", note: "Syncs between 70-plus storage services with hash verification. The right tool for pulling SaaS exports into your own storage." },
    { name: "Backblaze B2", url: "https://www.backblaze.com/cloud-storage/pricing", note: "Commodity object storage with generous free egress, which makes a full restore cost nothing." },
    { name: "A managed backup service", note: "Worth paying for when nobody on the team will own a scripted job. Convenience is a legitimate thing to buy." },
  ],
  faqs: [
    {
      question: "Is my Google Workspace or Microsoft 365 data already backed up?",
      answer:
        "Not in the sense you need. The provider protects the platform against its own failures, and both are explicit that the customer keeps responsibility for their data, their configuration and their accounts regardless of the service model. What that leaves uncovered is everything that goes wrong on your side: someone deletes a shared drive, a departing employee's account is closed and takes their files with it, a compromised account deletes mail, or a retention policy quietly removes something you needed. The bin holds items for a limited window and then they are gone. That window is a grace period for mistakes, not a backup.",
    },
    {
      question: "How much does the off-site copy actually cost?",
      answer:
        "Commodity object storage runs at roughly seven dollars per terabyte per month on a pay-as-you-go basis. A team with 500 GB of genuinely irreplaceable data pays around three and a half dollars a month for that copy. Deduplication usually means you store less than you expect, because most of what changes between snapshots is small. The reason people believe backups are expensive is that they price a managed per-device service rather than the storage itself.",
    },
    {
      question: "Will restoring cost a fortune in egress?",
      answer:
        "This is the right question and it is why the provider matters. Some object stores charge for every gigabyte you download, which turns a disaster into an invoice. Backblaze B2 includes free egress up to three times your average monthly storage, so a full restore of everything you have stored is free, and you could do it three times over in a month before paying anything. Check this before you choose, because the price you care about is the one you pay on your worst day.",
    },
    {
      question: "How often should we test a restore?",
      answer:
        "Quarterly is enough, and it should be a real restore rather than a check that the job ran. Pick a file nobody has touched in months, restore it to a scratch location, open it, and time how long the whole thing took. The number you are looking for is not whether it worked but how long it takes, because that is the figure you will need during an actual incident when someone asks when the system will be back. Write it down.",
    },
  ],
  sources: [
    {
      title: "B2 Cloud Storage Pricing | Backblaze",
      publisher: "Backblaze",
      url: "https://www.backblaze.com/cloud-storage/pricing",
      checkedAt: "2026-09-04",
    },
    {
      title: "Restic Documentation",
      publisher: "restic",
      url: "https://restic.readthedocs.io/en/stable/",
      checkedAt: "2026-09-04",
    },
    {
      title: "Rclone syncs your files to cloud storage",
      publisher: "rclone",
      url: "https://rclone.org/",
      checkedAt: "2026-09-04",
    },
    {
      title: "Shared responsibility in the cloud - Microsoft Azure",
      publisher: "Microsoft",
      url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility",
      checkedAt: "2026-09-04",
    },
  ],
  content: `<p>Everyone in software can recite the 3-2-1 rule. Three copies of your data, on two different kinds of media, one of them off-site. Very few small teams have actually implemented it, and the reason is not carelessness. It is that backups are invisible work with no deadline, and that most people have never sat down and priced the thing they are avoiding.</p>

<p>So let us price it. And then let us talk about the copy you are almost certainly missing, which is probably not the one you think.</p>

<h2>The rule, stated properly</h2>

<p>The three numbers each defend against a different failure, which is the part that gets lost when the rule is repeated as a slogan.</p>

<ul>
<li><strong>Three copies</strong> — the working copy plus two backups. Two, because the moment you need a backup is exactly the moment you discover the single one was corrupt.</li>
<li><strong>Two kinds of media</strong> — defending against a failure mode that takes out everything of one type. A controller fault, a filesystem bug, a synchronisation client that faithfully replicates a deletion everywhere at once.</li>
<li><strong>One off-site</strong> — defending against everything local: fire, theft, flood, and the modern version, which is an attacker with your credentials.</li>
</ul>

<p>A synchronisation service on its own satisfies none of these properly. Cloud file sync is a convenience feature that happens to keep a copy elsewhere. It will replicate a deletion or an encrypted file to every device you own within seconds, which is the opposite of what a backup does. Version history helps, but it is bounded, and bounded history is not a restore plan.</p>

<h2>The copy nobody has</h2>

<p>Here is where most small teams are genuinely exposed, and it is not laptops. Laptops get replaced and people have mostly learnt to keep the important things somewhere shared. The gap is the shared thing itself: the email, the documents, the shared drives, the project tracker, the accounting system.</p>

<p>Providers are direct about this when you read the documentation rather than the marketing. Microsoft's shared responsibility model sets out a matrix across on-premises, infrastructure, platform and software services, and customer data sits in the customer column in every one of them. The list of things you always retain regardless of deployment type begins with data, followed by endpoints, accounts and access management. Google's terms are structured the same way.</p>

<blockquote>
<p>The provider guarantees the platform will not lose your data. It does not guarantee that you will not, and every way you might lose it — a deletion, a departing employee, a compromised account, a retention rule — is on your side of the line.</p>
</blockquote>

<p>Microsoft's own documentation lists insufficient backup and disaster recovery among the responsibilities organisations commonly leave unmet, noting that backups are often infrequent, untested, or stored on-site. That is a fair description of most small teams, including ones that would describe themselves as careful.</p>

<p>The practical exposures are mundane. Someone deletes a shared drive during a tidy-up and nobody notices for two months. An employee leaves, their account is closed on the last day, and their files go with it. A compromised mailbox has its contents deleted by whoever got in. In each case the recovery window is a bin that empties itself, and once it has emptied there is nothing to recover from.</p>

<h2>What it costs, with the arithmetic shown</h2>

<p>Object storage is the reason this argument has changed. Pay-as-you-go pricing at Backblaze B2 currently sits at $6.95 per terabyte per month. The sum for the off-site copy is therefore short:</p>

<table>
<thead>
<tr><th>Data you cannot lose</th><th>Off-site copy per month</th><th>Per year</th></tr>
</thead>
<tbody>
<tr><td>250 GB</td><td>About $1.75</td><td>About $21</td></tr>
<tr><td>500 GB</td><td>About $3.50</td><td>About $42</td></tr>
<tr><td>1 TB</td><td>$6.95</td><td>About $83</td></tr>
<tr><td>2 TB</td><td>About $13.90</td><td>About $167</td></tr>
</tbody>
</table>

<p>Two things make the real figure lower than this table suggests. Deduplication means a daily snapshot of a mostly unchanged filesystem adds very little, so your stored volume grows far more slowly than the number of snapshots. And the amount of genuinely irreplaceable data in a small business is almost always less than people guess — the media library is large, the accounting records and the contracts are not.</p>

<p>Then there is the cost that catches people out. Storage is cheap everywhere; getting your data back is not. Several object stores bill for every gigabyte downloaded, so the day you need a full restore is the day you get an unexpected invoice. B2 includes free egress up to three times your average monthly storage, with anything beyond that charged at a cent per gigabyte, and the routine API calls are free. So with 1 TB stored, a complete restore costs nothing and you could do it three times in a month before paying anything.</p>

<p>Set against a software budget, this is noise. If you have been through the exercise of <a href="/articles/auditing-small-team-software-spend">auditing what a small team spends on software</a>, you already know there is a forgotten subscription costing more than this every month. Backups are one of the few line items where the cheap answer and the correct answer are the same.</p>

<h2>The tools worth learning</h2>

<p>Two open-source tools cover nearly all of it, and both are worth the hour it takes to learn them.</p>

<p><strong>restic</strong> does encrypted, deduplicated, snapshot-based backup. It writes to local disks, SFTP, S3 and anything S3-compatible, Backblaze B2, Azure Blob Storage, Google Cloud Storage, and anything else through rclone. Snapshots are content-addressed, so a daily backup of a mostly unchanged directory stores only what changed. It has a built-in integrity check, which matters more than any other feature on this list — it means you can verify the backup is intact without performing a full restore.</p>

<pre><code>restic -r b2:your-bucket:/laptops backup /home/work
restic -r b2:your-bucket:/laptops forget --keep-daily 7 --keep-weekly 5 --keep-monthly 12 --prune
restic -r b2:your-bucket:/laptops check --read-data-subset 5%
</code></pre>

<p>Those three commands are a complete backup strategy: take a snapshot, expire old ones on a retention schedule, and verify a sample of the actual data rather than just the index. Put them on a timer and most of the problem is solved.</p>

<p><strong>rclone</strong> is the other half, and it is what you want for the SaaS gap. It speaks over seventy storage services, checks MD5 and SHA1 hashes on every transfer so you know what arrived matches what left, and can mount remote storage as a disk. Point it at a scheduled export from your document suite and it will pull that export into storage you control, which is the copy nobody has.</p>

<p>The encryption in restic creates one new obligation worth naming: a key you must not lose. An encrypted backup with a forgotten passphrase is indistinguishable from no backup. Store it the way you store everything else that unlocks the business — in your password manager, with recovery access for at least one other person. If you have not looked at that side of things recently, the <a href="/articles/password-managers-after-the-price-rises">recent changes across password manager pricing</a> are a reasonable prompt to check who can actually get in if you are unavailable.</p>

<h2>Ransomware changed one of the numbers</h2>

<p>The classic rule was written when the threats were fire and hardware failure, both of which are indifferent to your backups. An attacker is not. Anyone who gets credentials good enough to encrypt your files will look for the backups and delete them first, and a backup destination your production machine can write to is a backup destination your production machine can also erase.</p>

<p>Two answers, and you want at least one of them.</p>

<ul>
<li><strong>Object lock.</strong> Most object stores can mark objects immutable for a set period. Once written, nothing deletes them until that period expires — not you, not an administrator, not someone holding your credentials. Fourteen days of immutability is enough for almost any small team, because almost every incident is discovered inside two weeks.</li>
<li><strong>Append-only credentials.</strong> Give the backup job an application key that can write and list but not delete. Pruning old snapshots then runs separately, on a schedule, using a different key that lives somewhere the production machine cannot reach.</li>
</ul>

<p>This is the change worth making if you make only one. It converts your off-site copy from something an attacker can remove into something they cannot, and it costs nothing.</p>

<h2>The part that actually counts</h2>

<p>A backup you have never restored from is a hypothesis. Teams discover this at the worst possible moment, usually finding that the job had been failing silently for months, or that it was backing up the application directory but not the database, or that nobody knows the passphrase because the person who set it up has left.</p>

<p>The test is deliberately small so that you will actually do it. Once a quarter:</p>

<ol>
<li><strong>Pick a file nobody has touched in months</strong> — not a recent one, which may still exist in a cache somewhere.</li>
<li><strong>Restore it to a scratch location</strong> from the off-site copy specifically, not the local one.</li>
<li><strong>Open it</strong> and confirm it is what it should be.</li>
<li><strong>Write down how long it took</strong>, start to finish, including finding the passphrase.</li>
</ol>

<p>That last number is the one worth having. When something has gone badly wrong and someone asks how long until things are back, the difference between an answer and a guess is whether you have ever timed it.</p>

<h2>What we would do at three sizes</h2>

<ul>
<li><strong>One person, working alone:</strong> an external drive with the operating system's own backup tool, plus restic to object storage on a daily timer. Around three dollars a month, two hours to set up once, and it covers the laptop being stolen and the laptop being encrypted.</li>
<li><strong>Two to ten people on a document suite:</strong> the above for machines, plus a scheduled export of the shared drives and mail pulled into your own storage with rclone. This is the copy that is missing almost everywhere, and it is the one that saves you from a deletion nobody notices for a month.</li>
<li><strong>Running your own infrastructure:</strong> the above, plus database dumps to the same repository with object lock and append-only credentials, plus a restore rehearsal into a scratch environment every quarter rather than every year.</li>
</ul>

<p>None of this is difficult and none of it is expensive. It fails to get done because it defends against something that has not happened yet, and there is always a task with a deadline instead. The way we would frame it to anyone weighing it up: an afternoon and the price of a couple of coffees a month, against the category of incident that ends small businesses. Set the timer, and then go and restore one file so you know it works.</p>`,
};
