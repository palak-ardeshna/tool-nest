import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-09-12 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): uses Google Docs and Sheets on the free account and has never
 * paid for an office suite, so the 2026 price rises did not affect him; his 15
 * GB filled and he deleted files rather than buying storage; offline is the
 * other limit he notices. A renewal of his that did go up was a different
 * subscription, not an office suite, so it is not in this article. Storage
 * figures and the consequences of running out are from Google's Drive storage
 * help page, read 2026-10-02.
 */
export const officeSuitesAfterThe2026PriceRises: Article = {
  slug: "office-suites-after-the-2026-price-rises",
  title: "I Pay for Google Docs by Deleting Files",
  excerpt:
    "The 2026 office price rises never reached me because I am on the free account. The 15 GB did, and I paid it in deleted files instead of money.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Google Docs", "Google Drive", "Storage", "Free Tier"],
  publishedAt: "2026-09-12",
  contentUpdatedAt: "2026-09-21",
  seoTitle: "Google Docs Free: What 15 GB Really Costs",
  seoDescription:
    "I never paid for an office suite, so the price rises did not reach me. The 15 GB limit did, and a full Drive also stops Gmail receiving mail.",
  faqs: [
    {
      question: "Did the 2026 office price rises affect you?",
      answer:
        "No. I use Google Docs and Sheets on the free account and have never paid for an office suite, so there was nothing to go up. If you are on a free tier, a price rise is a reason to check what the free tier costs you in other ways, not a reason to switch.",
    },
    {
      question: "What actually counts towards the 15 GB?",
      answer:
        "Google's help page says the 15 GB is shared among Drive, Gmail and Photos, and it lists WhatsApp backups too. It also says only the files you own count, so things shared with you do not. Checked 2 October 2026.",
    },
    {
      question: "What breaks when the storage is full?",
      answer:
        "More than you would expect. Google's page states you will not be able to upload or create files in Drive, send or receive emails in Gmail, or back up photos or videos. The Gmail part is the one that matters most: a full Drive stops your mail arriving.",
    },
    {
      question: "What happens if you stay over the limit?",
      answer:
        "Google's page says that if you are over your storage quota for 2 years, it might delete your content across Gmail, Drive and Photos. That is a long grace period and it is not indefinite.",
    },
  ],
  content: `
<p>I use Google Docs and Sheets on the free account and I have never paid for an office suite, so the 2026 price rises did not reach me. What did reach me was the 15 GB. When my Google storage filled up I deleted files rather than buying more. The other thing I notice is offline: when I have no connection, the work stops.</p>

<p>So if you came here to decide whether to leave over a price rise, my answer comes from the other side of that question. I was never paying, and the free tier still sent me a bill, denominated in deleted files and stopped afternoons.</p>

<h2>A full Drive is not a Drive problem</h2>
<p>This is the fact I would most want someone on a free account to know, and I did not know it when mine filled up.</p>
<p>Google's storage help page, read on 2 October 2026, says the 15 GB is shared among Drive, Gmail and Photos, and lists WhatsApp backups as counting too. When you reach the limit, it states you will not be able to "upload or create files in Drive, send or receive emails in Gmail, or back up photos or videos to Google Photos".</p>
<p>The word in the middle of that is receive. A full Drive stops mail arriving, and mail arriving is not something you are watching, so you find out when somebody asks why you never replied. The documents were never the risk. One shared number sits underneath three services, and the one that fails silently is the one you rely on most.</p>
<p>The same page also says that if you are over quota for 2 years, Google might delete content across Gmail, Drive and Photos. Two years is generous. It is also a deadline, and a free account that is quietly full has one running.</p>

<h2>The clear-out, in the order that worked</h2>
<ol>
<li>Check what is actually using the space before deleting anything, because it is almost never the documents. A Docs file is tiny. Photos, video and backups are not.</li>
<li>Look at WhatsApp backups first, since Google counts them and most people have never looked at them once.</li>
<li>Then large mail attachments. Years of them accumulate in Gmail and they sit under the same 15 GB as everything else.</li>
<li>Remember that only files you own count, so leaving a shared folder changes nothing. Deleting something you own does.</li>
<li>Empty the bin afterwards. Deleted files keep occupying the quota until you do, which is the step that makes people think the clear-out did not work.</li>
</ol>
<p>That got me back under the limit without paying, which is the honest version of what I did rather than a recommendation. Deleting is work, and it comes back around every time the account fills again.</p>

<h2>Offline is the limit I have not solved</h2>
<p>Storage you can clear. Offline you cannot, at least not the way I work.</p>
<p>When the connection goes, the work stops. There are offline modes, and I have not made them part of how I work, which means that in practice a bad connection is a stopped afternoon. For anyone whose connection is reliable this is not a real cost. For anyone whose is not, it is the thing to weigh, and it is a far better reason to pay for a desktop suite than a headline about prices going up.</p>

<h2>What a price rise should actually make you do</h2>
<p>A headline about prices going up is a prompt to look at what you are paying, and that is worth doing even when the answer is nothing. Mine was nothing, and the exercise still found something.</p>
<p>Price rises make people consider switching. For me it made more sense to go and look at what the free tier was already costing, and that turned out to be a number I had not checked and an email risk I had not understood.</p>
<p>So before you move anything: find out how much of your 15 GB is gone, and find out what breaks when it is full. If the answer is your mail, decide now whether you would rather pay for storage than lose a day of it later. I made the same kind of discovery going through my own subscriptions in <a href="/articles/auditing-small-team-software-spend">the audit I did not act on</a>: the costs I had not noticed were the ones worth finding.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I use Google Docs and Sheets on the free account and I have never paid for an office suite, so the 2026 price rises did not reach me. What did reach me was the 15 GB. When my Google storage filled up I deleted files rather than buying more. The other thing I notice is offline: when I have no connection, the work stops.",
  },
  sources: [
    {
      title: "Google Account storage and what counts towards it",
      publisher: "Google",
      url: "https://support.google.com/drive/answer/6374270",
      checkedAt: "2026-10-02",
    },
  ],
};
