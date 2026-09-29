export const siteConfig = {
  name: "ToolNest",
  tagline: "Notes on the developer and AI tools I use",
  description:
    "Palak Patel's notes on the developer and AI tools he uses: what they cost, where they broke, and dated sources for every claim.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // The publication writes in British English; og:locale should not contradict it.
  locale: "en_GB",
  email: "palakpatel00132@gmail.com",
} as const;

/**
 * Header navigation. Sections are listed in the footer from the live category
 * list, so a removed section can never leave a dead link in the header.
 */
export const primaryNav = [
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  publication: [
    { label: "All articles", href: "/articles" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;

export const adsenseClient = "ca-pub-3720190862522195";
export const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
