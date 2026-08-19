import type { Author } from "@/content/types";

/** Bylines. Every article references one of these by slug. */
export const authors: Author[] = [
  {
    slug: "maya-oduya",
    name: "Maya Oduya",
    role: "Editor-in-chief",
    bio:
      "Maya has spent twelve years writing about software, most recently leading tool coverage at a developer publication. She reviews every comparison before it goes out and is responsible for ToolNest's testing standards.",
    email: "maya@toolnest.example",
    twitter: "@mayaoduya",
  },
  {
    slug: "daniel-reyes",
    name: "Daniel Reyes",
    role: "Senior writer, productivity",
    bio:
      "Daniel writes about workflows, note-taking and the software people use to organise their work. He has an unhealthy interest in keyboard shortcuts and a healthy scepticism of productivity systems.",
    email: "daniel@toolnest.example",
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    role: "Contributing engineer",
    bio:
      "Priya is a software engineer who covers developer tooling and automation for ToolNest. She tests coding tools against real production codebases rather than sample projects.",
    email: "priya@toolnest.example",
    website: "https://example.com",
  },
];
