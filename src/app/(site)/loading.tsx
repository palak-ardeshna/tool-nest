import { Container } from "@/components/ui/Container";
import { ArticleGridSkeleton, Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <Container className="py-10 lg:py-14">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="mt-6 h-10 w-2/3 max-w-md" />
      <Skeleton className="mt-4 h-5 w-full max-w-xl" />
      <div className="mt-10">
        <ArticleGridSkeleton />
      </div>
    </Container>
  );
}
