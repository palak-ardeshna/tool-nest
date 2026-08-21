import { AdSlot } from "@/components/ads/AdSlot";
import { groupSections } from "@/lib/content";

export function ArticleContent({ html }: { html: string }) {
  const groups = groupSections(html);

  return (
    <>
      {groups.map((group, index) => (
        <div key={index}>
          {/* Between complete sections, never mid-thought and never styled as content. */}
          {index > 0 ? (
            <AdSlot
              slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE}
              format="fluid"
              minHeight={280}
              className="border-y border-line py-4"
            />
          ) : null}
          {/* Authored in src/content by the editorial team, never by site visitors. */}
          <div
            className="prose [&>h2:first-child]:mt-0"
            dangerouslySetInnerHTML={{ __html: group }}
          />
        </div>
      ))}
    </>
  );
}
