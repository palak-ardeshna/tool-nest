import Script from "next/script";
import { adsenseClient } from "@/config/site";
import { cn } from "@/lib/cn";

export type AdSlotProps = {
  /** AdSense data-ad-slot id. Without it (or without a client id) nothing renders. */
  slotId?: string;
  format?: string;
  /**
   * Height reserved before the ad arrives, so the common case costs no layout
   * shift. It is a floor, not a fixed box: a responsive unit is still free to
   * come back taller and push the content below it down. Set it to the size
   * this placement is actually filled at, not the smallest one it might be.
   */
  minHeight: number;
  className?: string;
  /**
   * Distinguishes two placements that reuse one slot id.
   *
   * `next/script` keys inline scripts by `id` and runs each key once per page,
   * so two units sharing a slot id would leave the second without its
   * `push({})` — a reserved, labelled, permanently blank box. Any placement
   * that can render more than once on a page must pass this.
   */
  instance?: string | number;
};

/**
 * The single integration point for advertising. Every placement composes this,
 * so article and business logic never imports an ad SDK.
 *
 * It renders nothing at all until a publisher id and a slot id are configured;
 * there are deliberately no placeholder boxes in production.
 */
export function AdSlot({ slotId, format = "auto", minHeight, className, instance }: AdSlotProps) {
  if (!adsenseClient || !slotId) return null;

  const scriptId = instance === undefined ? `ad-${slotId}` : `ad-${slotId}-${instance}`;

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
      <Script id={scriptId} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </aside>
  );
}
