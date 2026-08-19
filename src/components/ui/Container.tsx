import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** `wide` for grids and hero sections, `reading` for article body copy. */
  width?: "wide" | "reading";
};

export function Container({ children, className, width = "wide" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        width === "wide" ? "max-w-6xl" : "max-w-[720px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
