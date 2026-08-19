import type { Category } from "@/content/types";

/**
 * Sections and their sub-topics. Order here is the order everywhere: the
 * homepage topic grid, category listings and the sitemap.
 *
 * Adding a section is one entry; nothing else needs changing.
 */
export const categories: Category[] = [
  {
    slug: "ai-tools",
    name: "AI Tools",
    description:
      "Hands-on reviews and comparisons of the AI tools we use for writing, images, video, voice, coding and research.",
  },
  {
    slug: "ai-writing",
    name: "AI Writing",
    description: "Drafting, editing and rewriting tools.",
    parent: "ai-tools",
  },
  {
    slug: "ai-image",
    name: "AI Image",
    description: "Image generation, editing and upscaling.",
    parent: "ai-tools",
  },
  {
    slug: "ai-video",
    name: "AI Video",
    description: "Generation, editing, captioning and clipping.",
    parent: "ai-tools",
  },
  {
    slug: "ai-voice",
    name: "AI Voice",
    description: "Speech synthesis, transcription and dubbing.",
    parent: "ai-tools",
  },
  {
    slug: "ai-coding",
    name: "AI Coding",
    description: "Assistants, agents and code review tools.",
    parent: "ai-tools",
  },
  {
    slug: "ai-research",
    name: "AI Research",
    description: "Search, summarisation and literature tools.",
    parent: "ai-tools",
  },
  {
    slug: "software",
    name: "Software",
    description:
      "Reviews of the applications that make up a working day, from design tools to business software.",
  },
  {
    slug: "productivity-apps",
    name: "Productivity Apps",
    description: "Task managers, calendars and planners.",
    parent: "software",
  },
  {
    slug: "design-software",
    name: "Design Software",
    description: "Interface, graphics and prototyping tools.",
    parent: "software",
  },
  {
    slug: "developer-software",
    name: "Developer Software",
    description: "Editors, terminals and local tooling.",
    parent: "software",
  },
  {
    slug: "business-tools",
    name: "Business Tools",
    description: "CRM, invoicing, documents and operations.",
    parent: "software",
  },
  {
    slug: "productivity",
    name: "Productivity",
    description:
      "Methods and tools for getting through the work that matters, tested over months rather than demoed once.",
  },
  {
    slug: "time-management",
    name: "Time Management",
    description: "Planning, focus and scheduling.",
    parent: "productivity",
  },
  {
    slug: "note-taking",
    name: "Note Taking",
    description: "Capture, retrieval and knowledge management.",
    parent: "productivity",
  },
  {
    slug: "workflows",
    name: "Workflows",
    description: "How the pieces fit together.",
    parent: "productivity",
  },
  {
    slug: "remote-work",
    name: "Remote Work",
    description: "Distributed teams, async and home setups.",
    parent: "productivity",
  },
  {
    slug: "automation",
    name: "Automation",
    description:
      "No-code and low-code automation: what is worth automating, what is not, and how to keep it from breaking.",
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    description:
      "APIs, databases, deployment and the tooling that shortens the distance between an idea and production.",
  },
  {
    slug: "apis",
    name: "APIs",
    description: "Public APIs and the tools around them.",
    parent: "developer-tools",
  },
  {
    slug: "database-tools",
    name: "Database Tools",
    description: "Clients, migrations and observability.",
    parent: "developer-tools",
  },
  {
    slug: "deployment-tools",
    name: "Deployment Tools",
    description: "Hosting, CI and release tooling.",
    parent: "developer-tools",
  },
  {
    slug: "how-to",
    name: "How-To Guides",
    description:
      "Step-by-step guides written after actually doing the thing, including the steps that did not work.",
  },
  {
    slug: "comparisons",
    name: "Comparisons",
    description:
      "Head-to-head tests with the same task given to each tool, so the differences are about the tool and not the brief.",
  },
];
