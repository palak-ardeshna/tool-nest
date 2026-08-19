import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";

export function Pagination({
  basePath,
  currentPage,
  totalPages,
}: {
  basePath: string;
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const href = (page: number) => (page === 1 ? basePath : `${basePath}?page=${page}`);

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-between gap-4">
      {currentPage > 1 ? (
        <Link href={href(currentPage - 1)} className={buttonClasses("secondary", "sm")} rel="prev">
          &larr; Previous
        </Link>
      ) : (
        <span />
      )}

      <p className="text-sm text-muted">
        Page {currentPage} of {totalPages}
      </p>

      {currentPage < totalPages ? (
        <Link href={href(currentPage + 1)} className={buttonClasses("secondary", "sm")} rel="next">
          Next &rarr;
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
