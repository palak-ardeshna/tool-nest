export const siteConfig = {
  name: "ToolNest",
  tagline: "Discover better tools. Work smarter.",
  description:
    "Practical guides, comparisons and reviews for AI tools, software and productivity. Independently tested, written by people who use them.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  twitter: "@toolnest",
  email: "hello@toolnest.example",
} as const;

/** Primary navigation. Slugs must match top-level Category rows. */
export const primaryNav = [
  { label: "AI Tools", href: "/category/ai-tools" },
  { label: "Software", href: "/category/software" },
  { label: "Productivity", href: "/category/productivity" },
  { label: "Automation", href: "/category/automation" },
  { label: "Developer Tools", href: "/category/developer-tools" },
  { label: "Guides", href: "/category/how-to" },
] as const;

export const footerNav = [
  {
    title: "Sections",
    links: primaryNav.map((item) => ({ ...item })),
  },
  {
    title: "Publication",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "All articles", href: "/articles" },
      { label: "Comparisons", href: "/category/comparisons" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
] as const;

export const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";
export const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
