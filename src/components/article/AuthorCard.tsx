import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/types";

type AuthorCardProps = {
  author: Author;
  heading?: string;
};

export function AuthorCard({ author, heading = "Written by" }: AuthorCardProps) {
  return (
    <section className="rounded-card border border-line bg-surface p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{heading}</p>
      <div className="mt-3 flex gap-4">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent-light text-lg font-bold text-accent-dark"
          >
            {author.name.charAt(0)}
          </span>
        )}
        <div className="min-w-0">
          <h2 className="font-bold text-ink">
            <Link href={`/authors/${author.slug}`} className="hover:text-accent">
              {author.name}
            </Link>
          </h2>
          {author.role ? <p className="text-sm text-muted">{author.role}</p> : null}
          {author.bio ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">{author.bio}</p>
          ) : null}
          <p className="mt-2 flex flex-wrap gap-3 text-sm">
            {author.website ? (
              <a
                href={author.website}
                rel="noopener noreferrer me"
                target="_blank"
                className="text-accent hover:underline"
              >
                Website
              </a>
            ) : null}
            {author.twitter ? (
              <a
                href={`https://x.com/${author.twitter.replace(/^@/, "")}`}
                rel="noopener noreferrer me"
                target="_blank"
                className="text-accent hover:underline"
              >
                {author.twitter}
              </a>
            ) : null}
          </p>
        </div>
      </div>
    </section>
  );
}
