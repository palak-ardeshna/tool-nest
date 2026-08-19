import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className} aria-label={`${siteConfig.name} home`}>
      <span className="flex items-center gap-2">
        <span
          aria-hidden
          className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-extrabold text-white"
        >
          T
        </span>
        <span className="text-lg font-extrabold tracking-tight text-ink">{siteConfig.name}</span>
      </span>
    </Link>
  );
}
