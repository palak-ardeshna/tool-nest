import { AdSlot } from "@/components/ads/AdSlot";

export function MobileAd({ slotId }: { slotId?: string }) {
  return (
    <AdSlot
      slotId={slotId ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT_MOBILE}
      minHeight={250}
      className="lg:hidden"
    />
  );
}
