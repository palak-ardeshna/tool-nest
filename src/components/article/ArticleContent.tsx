import { InArticleAd } from "@/components/ads/InArticleAd";
import { groupSections } from "@/lib/content";

export function ArticleContent({ html }: { html: string }) {
  const groups = groupSections(html);

  return (
    <>
      {groups.map((group, index) => (
        <div key={index}>
          {index > 0 ? <InArticleAd /> : null}
          {/* Authored in the CMS by the editorial team, never by site visitors. */}
          <div
            className="prose [&>h2:first-child]:mt-0"
            dangerouslySetInnerHTML={{ __html: group }}
          />
        </div>
      ))}
    </>
  );
}
