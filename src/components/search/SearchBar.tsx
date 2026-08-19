import { cn } from "@/lib/cn";

/**
 * Plain GET form: works without JavaScript and needs no client component.
 */
export function SearchBar({
  defaultValue = "",
  placeholder = "Search tools, guides and comparisons",
  className,
  autoFocus = false,
  size = "md",
}: {
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  size?: "sm" | "md";
}) {
  return (
    <form action="/search" role="search" className={cn("relative", className)}>
      <label htmlFor={`search-${size}`} className="sr-only">
        Search articles
      </label>
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      <input
        id={`search-${size}`}
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete="off"
        className={cn(
          "w-full rounded-lg border border-line bg-white pl-9 pr-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light",
          size === "sm" ? "h-9 text-sm" : "h-11 text-[15px]",
        )}
      />
    </form>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="m13.5 13.5 3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
