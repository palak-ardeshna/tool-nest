import Image from "next/image";
import { CoverArt } from "@/components/article/CoverArt";
import { cn } from "@/lib/cn";

type ArticleCoverProps = {
  src?: string | null;
  alt?: string | null;
  /** Stable string (slug) that picks the palette and motif of generated art. */
  seed: string;
  priority?: boolean;
  sizes: string;
  className?: string;
};

/**
 * Renders the featured image when one exists, and generated cover art when it
 * does not. Both fill the same aspect box, so there is no layout shift either
 * way and adding an image later changes nothing about the surrounding page.
 */
export function ArticleCover({
  src,
  alt,
  seed,
  priority,
  sizes,
  className,
}: ArticleCoverProps) {
  return (
    <div className={cn("relative aspect-[16/9] w-full overflow-hidden bg-surface", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt || ""}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <CoverArt seed={seed} />
      )}
    </div>
  );
}
