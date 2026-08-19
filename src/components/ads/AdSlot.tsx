import Script from "next/script";
import { adsenseClient } from "@/config/site";
import { cn } from "@/lib/cn";

export type AdSlotProps = {
  /** AdSense data-ad-slot id. Without it (or without a client id) nothing renders. */
  slotId?: string;
  format?: string;
  /** Reserved height, so ads never cause layout shift. */
  minHeight: number;
  className?: string;
};

/**
 * The single integration point for advertising. Every placement composes this,
 * so article and business logic never imports an ad SDK.
 *
 * It renders nothing at all until NEXT_PUBLIC_ADSENSE_CLIENT and a slot id are
 * configured; there are deliberately no placeholder boxes in production.
 */
export function AdSlot({ slotId, format = "auto", minHeight, className }: AdSlotProps) {
  if (!adsenseClient || !slotId) return null;

  return (
    <aside
      aria-label="Advertisement"
      className={cn("my-8 flex flex-col items-center gap-1.5", className)}
      style={{ minHeight: minHeight + 20 }}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Advertisement</span>
      <ins
        className="adsbygoogle block w-full"
        style={{ display: "block", minHeight }}
        data-ad-client={adsenseClient}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      <Script id={`ad-${slotId}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </aside>
  );
}
