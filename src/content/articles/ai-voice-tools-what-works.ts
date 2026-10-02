import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-08-19 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): uses the dictation built into his phone and laptop, in English;
 * speaking is only a little faster than typing for him; a paragraph containing
 * technical words leaves 5 or more corrections; he now uses it for short
 * messages only. He has not used ElevenLabs or any text-to-speech tool, so none
 * is reviewed and the first paragraph says the article covers dictation only.
 * The voice typing behaviour quoted, including "Talk-to-text doesn't work with
 * all languages", is from Google's Gboard help page read 2026-10-02.
 */
export const aiVoiceToolsWhatWorks: Article = {
  slug: "ai-voice-tools-what-works",
  title: "Dictation Costs Me 5 Fixes a Paragraph",
  excerpt:
    "Speaking is only a little faster than typing for me, and a technical paragraph leaves 5 or more corrections. It survives for short messages only.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Dictation", "Voice Typing", "Gboard", "Accessibility"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-08-29",
  seoTitle: "Voice Dictation: 5 Fixes Every Paragraph",
  seoDescription:
    "Dictation is only slightly faster than typing for me, and technical words leave 5 or more corrections a paragraph. Where it still earns its place.",
  quickAnswer:
    "Built-in dictation works for short, plain messages and stops working the moment the text has tool names, code or jargon in it. For me that means 5 or more corrections in a technical paragraph, and since speaking is only a little faster than typing in the first place, the corrections take back the whole saving. I use it for WhatsApp length messages and type anything longer.",
  faqs: [
    {
      question: "Is dictation faster than typing?",
      answer:
        "A little, in my experience, and not by much. That matters because the gap has to cover your correction time. If you are a slow typist the maths will look better for you than it does for me.",
    },
    {
      question: "Why does it get technical words wrong?",
      answer:
        "A tool name or a code identifier is not an ordinary word, so there is nothing for the model to fall back on when the audio is unclear. It produces the nearest real word instead, which is harder to spot when proofreading than a nonsense string would be.",
    },
    {
      question: "Can you punctuate by voice?",
      answer:
        "Yes. Google's Gboard help lists saying \"Period\", \"Comma\", \"Exclamation point\", \"Question mark\", \"New line\" and \"New paragraph\". It also says punctuation might not be available in all languages. Checked 2 October 2026.",
    },
    {
      question: "What about tools that generate a voice?",
      answer:
        "I have not used any, so there is nothing from me on text to speech. This article is about dictation, which is the only side of this I have run on real work.",
    },
  ],
  content: `
<p>I use the dictation that comes with my phone and my laptop, in English. Speaking is a little faster than typing for me, not dramatically. The problem is technical words: when a paragraph has tool names or code in it, I am correcting 5 or more things afterwards. That correcting takes back whatever speaking saved. So I still use dictation, but only for short messages now, and I type anything long.</p>

<p>This is about dictation only. I have not used ElevenLabs or anything else that generates a voice, so I have nothing to tell you about that half.</p>

<h2>The arithmetic of a small speed gain</h2>
<p>Most writing about dictation starts from the claim that speaking is three times faster than typing. For me it was a little faster, and a small gain changes the whole calculation.</p>
<p>If speaking were three times faster, a few corrections would still leave me ahead. At a little faster, the margin is thin enough that 5 fixes wipe it out. And fixing is slower per item than writing, because each fix is a separate operation: find the wrong word, select it, replace it, read the sentence again to check it still means what I meant.</p>
<p>So the honest question is whether your typing is slow enough for the gap to absorb your error rate. Mine is not, which is why this stopped working for me and may not for you.</p>

<h2>Why the errors land on exactly the wrong words</h2>
<p>The 5 or more corrections are never spread evenly through a paragraph. They cluster on the words that carry the meaning.</p>
<p>Ordinary prose comes out fine. It is the tool names, the library names, the identifiers and the jargon that break, and those are the words a technical sentence exists to deliver. A sentence with its common words right and its one proper noun wrong is worse than a sentence with a few typos, because it reads as fluent and says something false.</p>
<p>That is also why proofreading dictated text is slower than proofreading typed text. A typo looks like a typo. A confidently substituted real word looks like a word I chose, and I have to be reading for meaning rather than for spelling to catch it. That is the kind of error I am most likely to read straight past.</p>

<h2>What the documentation does and does not promise</h2>
<p>Google's Gboard help page, read on 2 October 2026, is more careful than the marketing around voice input generally is.</p>
<p>It explains the basics plainly: tap the microphone, and say what you want written when it shows "Speak now". For punctuation you say the mark, with "Period", "Comma", "Exclamation point", "Question mark", "New line" and "New paragraph" all listed. To fix a word you touch and hold it, then tap the microphone and say the replacement.</p>
<p>It also states two limits I would want to know first: "Talk-to-text doesn't work with all languages", and punctuation "might not be available in all languages". It notes some steps need Android 7.0 or later. If you write in a language other than English, check it is covered before you plan around this at all. The language gap is the same wall I hit with notetakers in <a href="/articles/ai-meeting-notetakers-compared">Fireflies and Google Meet</a>, where the Hindi and Gujarati sections of my own calls simply did not arrive.</p>

<h2>What I tried before giving up on long text</h2>
<p>Two things, and neither moved my number.</p>
<p>I tried speaking more slowly and more clearly around the technical words. It helps a little and it is also the opposite of why you dictate: if I am slowing down to enunciate a library name, I have given up the speed I came for. I tried the voice correction route as well, holding the word and saying the replacement, which the Gboard help describes. For an ordinary word that works. For the words I was actually getting wrong it tends to produce the same wrong word again, because the audio was never the problem.</p>
<p>So the 5 or more corrections stayed 5 or more, and I stopped trying to fix the method and changed what I use it for instead.</p>

<h2>Where I still use it</h2>
<p>Short messages. A WhatsApp reply, a note to myself, a line of text with no tool names in it. At that length a wrong word is obvious at a glance and fixing it costs seconds, so the small speed gain survives.</p>
<p>Anything long, anything technical, anything that someone else will read without me checking it again: I type, because my correction cost scales with the technical content and my speed gain does not.</p>
<p>If you want to test this on your own work, dictate one real paragraph from your actual job, with the names and terms you actually use in it, and count the corrections. One paragraph is enough. My number was 5 or more, which was enough to settle it.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I use the dictation that comes with my phone and my laptop, in English. Speaking is a little faster than typing for me, not dramatically. The problem is technical words: when a paragraph has tool names or code in it, I am correcting 5 or more things afterwards. That correcting takes back whatever speaking saved. So I still use dictation, but only for short messages now, and I type anything long.",
  },
  sources: [
    {
      title: "Type with your voice on Gboard",
      publisher: "Google",
      url: "https://support.google.com/gboard/answer/2781851",
      checkedAt: "2026-10-02",
    },
  ],
};
