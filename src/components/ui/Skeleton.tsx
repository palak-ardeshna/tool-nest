import { cn } from "@/lib/cn";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-surface", className)} />;
}

/** Matches ArticleList's rows so loading states do not shift layout. */
export function ArticleListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="divide-y divide-line border-t border-line">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="space-y-2.5 py-5">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}
