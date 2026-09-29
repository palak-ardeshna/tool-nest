import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className}>
      <span className="font-serif text-xl font-semibold tracking-tight text-ink">{siteConfig.name}</span>
    </Link>
  );
}
