import { AdSlot } from "@/components/ads/AdSlot";

export function SidebarAd({ slotId }: { slotId?: string }) {
  return (
    <AdSlot
      slotId={slotId ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR}
      format="rectangle"
      minHeight={250}
      className="hidden lg:flex"
    />
  );
}
