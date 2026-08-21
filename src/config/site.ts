export const siteConfig = {
  name: "ToolNest",
  tagline: "Discover better tools. Work smarter.",
  description:
    "Practical guides, comparisons and buying advice for AI tools, software and productivity. Researched from vendor documentation and public reporting, reviewed before publication.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // The publication writes in British English; og:locale should not contradict it.
  locale: "en_GB",
  email: "palakpatel00132@gmail.com",
} as const;

/** Primary navigation. Slugs must match top-level Category rows. */
export const primaryNav = [
  { label: "AI Tools", href: "/category/ai-tools" },
  { label: "Software", href: "/category/software" },
  { label: "Productivity", href: "/category/productivity" },
  { label: "Developer Tools", href: "/category/developer-tools" },
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
      { label: "Disclaimer", href: "/disclaimer" },
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
