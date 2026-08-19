import { AdSlot } from "@/components/ads/AdSlot";

/**
 * Placed between complete sections of an article, never mid-thought and never
 * styled to resemble a link, button or the next paragraph.
 */
export function InArticleAd({ slotId }: { slotId?: string }) {
  return (
    <AdSlot
      slotId={slotId ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE}
      format="fluid"
      minHeight={280}
      className="border-y border-line py-4"
    />
  );
}
