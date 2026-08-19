import Image from "next/image";
import { db } from "@/lib/db";
import { deleteMediaAction } from "@/app/actions/admin";
import { ConfirmSubmit } from "@/components/admin/ConfirmSubmit";
import { MediaUploadForm } from "@/components/admin/MediaUploadForm";
import { CopyPathButton } from "@/components/admin/CopyPathButton";
import { formatDate } from "@/lib/format";

export const metadata = { title: "Media" };
export const dynamic = "force-dynamic";

export default async function AdminMediaPage() {
  const media = await db.media.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">Media</h1>
        <p className="mt-1 text-sm text-muted">
          Upload screenshots and featured images, then paste the path into an article.
        </p>
      </div>

      <MediaUploadForm />

      {media.length ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item) => (
            <li key={item.id} className="overflow-hidden rounded-card border border-line bg-white">
              <div className="relative aspect-[16/10] bg-surface">
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-contain"
                />
              </div>
              <div className="space-y-2 p-4">
                <p className="truncate font-mono text-xs text-muted">{item.url}</p>
                <p className="text-xs text-muted">{formatDate(item.createdAt)}</p>
                <div className="flex items-center gap-3">
                  <CopyPathButton path={item.url} />
                  <form action={deleteMediaAction}>
                    <input type="hidden" name="id" value={item.id} />
                    <ConfirmSubmit
                      message="Delete this file? Articles using it will lose the image."
                      className="text-xs font-semibold text-rose-600 hover:underline"
                    >
                      Delete
                    </ConfirmSubmit>
                  </form>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-card border border-dashed border-line bg-white px-5 py-12 text-center text-sm text-muted">
          No uploads yet.
        </p>
      )}
    </div>
  );
}
