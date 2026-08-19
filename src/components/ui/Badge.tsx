import Link from "next/link";
import { cn } from "@/lib/cn";

const tones = {
  accent: "bg-accent-light text-accent-dark",
  neutral: "bg-surface text-muted border border-line",
} as const;

type BadgeProps = {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  href?: string;
  className?: string;
};

export function Badge({ children, tone = "accent", href, className }: BadgeProps) {
  const classes = cn(
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide",
    tones[tone],
    href && "transition-colors hover:brightness-95",
    className,
  );

  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <span className={classes}>{children}</span>
  );
}
