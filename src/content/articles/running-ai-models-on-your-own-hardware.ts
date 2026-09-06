import type { Article } from "@/content/types";

export const runningAiModelsOnYourOwnHardware: Article = {
  slug: "running-ai-models-on-your-own-hardware",
  title: "Running AI Models on Your Own Hardware: When It Is Actually Worth It",
  excerpt:
    "Local models are sold on privacy and cost, and argued about at the wrong altitude. The decision is really an arithmetic problem you can do before downloading anything, and it turns on how much memory you have and which job you are trying to move off the API.",
  image: "/images/articles/running-ai-models-on-your-own-hardware.webp",
  imageAlt:
    "Photograph: a processor seated in an open motherboard socket with the retention arm raised, blue memory slots running along the top",
  category: "ai-tools",
  author: "toolnest-editorial",
  tags: ["AI Tools", "Local AI", "Privacy", "Hardware"],
  publishedAt: "2026-09-01",
  contentUpdatedAt: "2026-09-04",
  featured: true,
  seoTitle: "Running AI Models Locally: Is It Worth It? (2026)",
  seoDescription:
    "Ollama, LM Studio and llama.cpp compared. How much memory each model size needs, what quantisation costs in quality, and when local genuinely beats an API.",
  quickAnswer:
    "Work out the memory first: a model at four-bit quantisation needs roughly half a gigabyte per billion parameters, plus headroom for context. That single sum tells you which models your machine can hold, and everything else follows from it. Local wins clearly in three situations — data that is not allowed to leave your network, high-volume repetitive work where per-token pricing quietly adds up, and anything that must keep working offline or at a fixed cost. It loses on hard reasoning, on long context, and anywhere a subtle quality drop is expensive. Most people who try it seriously end up running both: a local model for the bulk work, a hosted model for the parts that are genuinely difficult.",
  pros: [
    "Data never leaves the machine, which settles some compliance arguments outright",
    "Cost is your electricity bill rather than a meter that scales with how much you use it",
    "Works with no network, and cannot be deprecated out from under you mid-project",
    "The tooling is genuinely easy now — a working setup is a download and one command",
  ],
  cons: [
    "Memory is a hard ceiling, and it is the only specification that really matters",
    "Quality drops in ways that are hard to spot until the output is subtly wrong",
    "Long context is expensive in memory, so the usable window is smaller than advertised",
    "Model choice, updates and evaluation all become your job rather than someone else's",
  ],
  alternatives: [
    { name: "Ollama", url: "https://ollama.com", note: "The easiest starting point. One command to pull and run a model, with an API in a familiar shape." },
    { name: "LM Studio", url: "https://lmstudio.ai", note: "A desktop application with a model browser and local inference, for people who would rather not use a terminal." },
    { name: "llama.cpp", url: "https://github.com/ggml-org/llama.cpp", note: "The engine underneath much of the category. Worth using directly when you want control over quantisation and backend." },
    { name: "A hosted frontier model", note: "Still the right answer for hard reasoning, very long context, and anything where a quiet quality drop is expensive." },
  ],
  faqs: [
    {
      question: "How much memory do I actually need?",
      answer:
        "Take the parameter count in billions, multiply by roughly 0.55, and you have the gigabytes a four-bit model occupies. An eight-billion-parameter model is about 4.5 GB, a fourteen-billion one about 8 GB, a thirty-two-billion one around 18 GB. Then add headroom for the context window, which is not free and grows with how much you feed it. On 16 GB you are comfortable up to about fourteen billion parameters; on 32 GB the thirty-billion class opens up. Apple Silicon does unusually well here because memory is shared with the graphics processor rather than fixed at whatever a card provides.",
    },
    {
      question: "Is a quantised model still any good?",
      answer:
        "At four bits and above, mostly yes. The drop is real but modest, and for summarising, extraction, classification and rewriting you would struggle to pick it out in a blind comparison. Below four bits the losses stop being subtle: instructions get dropped, formatting drifts partway through, and the model becomes more willing to invent a detail than admit it lacks one. Four-bit is where most defaults sit and where most people should stay. Two-bit exists to squeeze a large model onto small hardware, and the result is usually worse than a smaller model at four bits.",
    },
    {
      question: "Can a local model replace an API for coding?",
      answer:
        "For the mechanical parts, increasingly yes — renaming things across a file, writing tests that follow an existing pattern, translating between formats, explaining unfamiliar code. For work that means holding a large codebase in mind and reasoning about consequences, the gap is still wide. Our advice is the same as for hosted tools: decide task by task rather than tool by tool, and keep a review step wherever the output is load-bearing.",
    },
    {
      question: "Does running locally really keep the data private?",
      answer:
        "It keeps inference private, which is usually what people mean. Be careful about the software around it: several desktop tools now offer cloud inference alongside local, and the setting that decides which one runs is easy to miss. If privacy is the reason you are doing this, check what the application sends before trusting it with anything sensitive. The cleanest test is to pull the model, disconnect the network, and confirm the thing still works.",
    },
  ],
  sources: [
    {
      title: "Ollama",
      publisher: "Ollama",
      url: "https://ollama.com/",
      checkedAt: "2026-09-04",
    },
    {
      title: "LM Studio Bionic - Agent for Work and Code",
      publisher: "LM Studio",
      url: "https://lmstudio.ai/",
      checkedAt: "2026-09-04",
    },
    {
      title: "llama.cpp: LLM inference in C/C++",
      publisher: "ggml-org",
      url: "https://github.com/ggml-org/llama.cpp",
      checkedAt: "2026-09-04",
    },
    {
      title: "GGUF",
      publisher: "Hugging Face",
      url: "https://huggingface.co/docs/hub/en/gguf",
      checkedAt: "2026-09-04",
    },
  ],
  content: `<p>The case for running a model on your own machine is privacy and cost, and both arguments are usually had at the wrong altitude. The question is not whether a local model can write a paragraph. It can. The question is whether the specific job you want to move off an API survives the drop in capability, and whether your hardware has enough memory to hold a model good enough to do it.</p>

<p>That second part is not a matter of opinion. It is arithmetic, and you can do it before downloading anything.</p>

<h2>The sum that decides it</h2>

<p>Models are distributed quantised — the weights stored at reduced precision so they take less memory. The GGUF format that nearly every local tool reads describes each of these levels precisely, and the four-bit variants most people use work out at around 4.5 bits per weight once the block scales are counted.</p>

<p>That gives you a rule you can apply to any model you see mentioned:</p>

<blockquote>
<p>Gigabytes of memory needed is roughly the parameter count in billions multiplied by 0.55, plus headroom for context.</p>
</blockquote>

<p>An eight-billion-parameter model is therefore about 4.5 GB. Fourteen billion is about 8 GB. Thirty-two billion is around 18 GB. Seventy billion is around 39 GB, which is why it stays out of reach on most laptops no matter how fast the processor is.</p>

<table>
<thead>
<tr><th>Machine</th><th>Comfortable model size</th><th>What that is good for</th></tr>
</thead>
<tbody>
<tr><td>8 GB memory, no discrete GPU</td><td>Up to about 7B</td><td>Extraction, classification, short rewriting</td></tr>
<tr><td>16 GB memory or 8 GB VRAM</td><td>Up to about 14B</td><td>Summarising, drafting, routine code edits</td></tr>
<tr><td>32 GB unified memory</td><td>Up to about 32B</td><td>Most day-to-day work, with real quality</td></tr>
<tr><td>64 GB, or a 24 GB card</td><td>70B at four bits, tightly</td><td>Work where the quality ceiling matters</td></tr>
</tbody>
</table>

<p>Apple Silicon is disproportionately good at this, because memory is shared between processor and graphics rather than fenced off on a card. A machine with 32 GB of unified memory runs models that would otherwise need an expensive discrete GPU. If you are buying hardware with this in mind, buy memory before anything else — it is the only specification that changes what you can run at all, rather than how fast you run it.</p>

<h2>Context is not free either</h2>

<p>The weights are the fixed cost. The context window is the variable one, and it is the part people forget. Every token you feed the model occupies space in the key-value cache, and that cache grows with the length of the conversation.</p>

<p>The practical effect is that a model advertised with a very large context window will not reach it on your machine. You will hit an out-of-memory error, or the tool will quietly start paging to disk and the whole thing will slow to a crawl. Set the context length deliberately to what the task actually needs rather than to the maximum, and you will have avoided the most common cause of the complaint that local models are unusably slow.</p>

<h2>The three tools, and what separates them</h2>

<p><strong>Ollama</strong> is where most people should start. Pulling and running a model is a single command, it exposes an API in a familiar shape so existing code can point at it with a changed base URL, and it manages the model files for you. It has since grown a cloud offering alongside the local one, which is convenient and worth being deliberate about — for many readers the entire point is that inference happens on their own hardware, so check which mode you are in.</p>

<p><strong>LM Studio</strong> is the desktop application answer: a browser for models, a chat interface, local speech transcription that does not upload audio, and a server mode when you want other software to point at it. If the terminal is a barrier for you or for colleagues you are trying to bring along, this is the one that removes it.</p>

<p><strong>llama.cpp</strong> is the engine a good deal of the category is built on. Plain C and C++ with no dependencies, and acceleration for Apple Metal, NVIDIA CUDA, AMD, Intel, Vulkan and a long list besides. You reach for it directly when you want to choose the quantisation yourself, run on unusual hardware, or embed inference in something you are building. It covers everything from one-and-a-half-bit to eight-bit integer quantisation, which is precisely the dial the other two tools are setting on your behalf.</p>

<h2>Which quantisation to pick</h2>

<p>Four bits is the answer for almost everyone, and it is where most defaults already sit. The quality loss against full precision is real but modest, and on the work local models are actually good at you would have difficulty picking it out blind.</p>

<p>Below four bits the losses stop being subtle. Instructions get dropped, output formatting drifts halfway through, and the model becomes noticeably more willing to invent a detail rather than admit it does not have one. The temptation is to run a much larger model at two bits to fit the hardware. Resist it: a smaller model at four bits is almost always the better machine for the same memory.</p>

<p>Above four bits — six or eight — you are paying a great deal of memory for a small gain. Worth it only when you have memory spare and the task is unusually sensitive to precision.</p>

<h2>Where local genuinely wins</h2>

<p>Three cases. They are narrower than the enthusiasm suggests and completely real.</p>

<ul>
<li><strong>Data that is not allowed to leave.</strong> Client records under a contract that names where data lives, health or legal material, anything where the review process for sending text to a third party costs more than the work itself. Local inference removes the question rather than answering it.</li>
<li><strong>High-volume repetitive work.</strong> Classifying ten thousand support tickets, pulling fields out of a pile of documents, generating first-pass alt text for an image library. These are exactly the tasks a small model handles well, and exactly where per-token pricing quietly adds up. Run them locally and the marginal cost is your electricity.</li>
<li><strong>Anything that must not break.</strong> No network, no rate limit, no model deprecated with three months' notice halfway through a project. A model file on your disk behaves the same way in two years as it does today.</li>
</ul>

<h2>Where they still lose</h2>

<p>Hard reasoning is the honest gap. Problems with several dependent steps, where getting step two wrong quietly poisons step five, are where frontier models remain clearly ahead. Long-context work is the second — not because local models lack the advertised window, but because you cannot afford the memory to use it.</p>

<p>The third is more of a warning than a limitation. A local model fails differently. Rather than refusing or flagging uncertainty, it tends to produce something confident and slightly wrong. If your workflow has no review step, that failure mode will cost you more than the API ever would. This is the same judgement as deciding <a href="/articles/which-tickets-to-give-an-ai-coding-agent">which tickets are safe to hand to an agent</a>: the question is never capability in the abstract, but what happens when the output is wrong and nobody checks.</p>

<h2>An hour that will settle it for you</h2>

<p>Rather than reading comparisons, run this. It takes about an hour and gives you an answer specific to your own work.</p>

<ol>
<li><strong>Do the memory sum</strong> for your machine and pick the largest four-bit model that fits with room to spare. Do not start at the top.</li>
<li><strong>Install Ollama and pull that model.</strong> Two commands. If the terminal is not for you, LM Studio reaches the same place with a download.</li>
<li><strong>Take ten real examples of one repetitive task</strong> you already do — not a demo prompt. Ten support emails to classify, ten paragraphs to shorten, ten functions to document.</li>
<li><strong>Run all ten through the local model and through whatever you use now.</strong> Score them yourself, quickly, out of five.</li>
<li><strong>Compare the totals.</strong> If the local model lands within a point or so, that task can move, and every future run of it is free.</li>
</ol>

<p>The result is nearly always the same shape: some of your work moves and some does not, and the split runs along the boundary between mechanical tasks and judgement. That is a better outcome than either camp advertises. If you are still deciding which hosted model to keep for the difficult half, our comparison of <a href="/articles/chatgpt-vs-claude-for-coding">the main assistants for coding work</a> covers that side of the split.</p>

<p>What we would not do is treat this as a replacement decision. The people getting the most out of local models are running them alongside a hosted one, not instead of it, and the skill worth building is knowing which pile a given job belongs in.</p>`,
};
