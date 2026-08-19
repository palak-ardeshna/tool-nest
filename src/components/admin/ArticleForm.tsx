"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { saveArticleAction, type ActionState } from "@/app/actions/admin";
import { Field, FormMessage, Input, Select, Textarea, AdminPanel } from "@/components/admin/FormControls";
import { RepeatableRows } from "@/components/admin/RepeatableRows";
import { Button } from "@/components/ui/Button";
import { slugify } from "@/lib/format";
import type { FullArticle } from "@/types";

type Option = { id: string; name: string };
type FaqRow = { question: string; answer: string };
type AlternativeRow = { name: string; url: string; note: string };

const initialState: ActionState = { status: "idle" };

function dateValue(date: Date | string | null | undefined): string {
  if (!date) return "";
  return new Date(date).toISOString().slice(0, 10);
}

export function ArticleForm({
  article,
  categories,
  authors,
}: {
  article?: FullArticle;
  categories: Option[];
  authors: Option[];
}) {
  const [state, formAction, pending] = useActionState(saveArticleAction, initialState);

  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [faqs, setFaqs] = useState<FaqRow[]>(
    article?.faqs.map(({ question, answer }) => ({ question, answer })) ?? [],
  );
  const [alternatives, setAlternatives] = useState<AlternativeRow[]>(
    article?.alternatives.map((item) => ({
      name: item.name,
      url: item.url ?? "",
      note: item.note ?? "",
    })) ?? [],
  );

  return (
    <form action={formAction} className="space-y-6">
      {article ? <input type="hidden" name="id" value={article.id} /> : null}
      <input type="hidden" name="faqs" value={JSON.stringify(faqs)} />
      <input type="hidden" name="alternatives" value={JSON.stringify(alternatives)} />

      <AdminPanel title="Basics">
        <div className="space-y-4">
          <Field label="Title" htmlFor="title">
            <Input
              id="title"
              name="title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              onBlur={() => !slug && setSlug(slugify(title))}
            />
          </Field>

          <Field label="Slug" htmlFor="slug" hint="Leave empty to generate from the title.">
            <Input
              id="slug"
              name="slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              placeholder={slugify(title)}
            />
          </Field>

          <Field label="Excerpt" htmlFor="excerpt" hint="One or two sentences. Used in cards, search and meta description fallback.">
            <Textarea id="excerpt" name="excerpt" rows={3} defaultValue={article?.excerpt ?? ""} />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Category" htmlFor="categoryId">
              <Select id="categoryId" name="categoryId" required defaultValue={article?.categoryId ?? ""}>
                <option value="" disabled>
                  Choose a category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Author" htmlFor="authorId">
              <Select id="authorId" name="authorId" required defaultValue={article?.authorId ?? ""}>
                <option value="" disabled>
                  Choose an author
                </option>
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
        </div>
      </AdminPanel>

      <AdminPanel title="Content" description="HTML. Use h2 for main sections — in-article ads are placed on those boundaries.">
        <div className="space-y-4">
          <Field label="Quick answer" htmlFor="quickAnswer" hint="Optional summary box shown above the article body.">
            <Textarea id="quickAnswer" name="quickAnswer" rows={3} defaultValue={article?.quickAnswer ?? ""} />
          </Field>

          <Field label="Body" htmlFor="content">
            <Textarea
              id="content"
              name="content"
              rows={22}
              required
              defaultValue={article?.content ?? ""}
              className="font-mono text-[13px]"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Pros" htmlFor="pros" hint="One per line.">
              <Textarea id="pros" name="pros" rows={5} defaultValue={article?.pros.join("\n") ?? ""} />
            </Field>
            <Field label="Cons" htmlFor="cons" hint="One per line.">
              <Textarea id="cons" name="cons" rows={5} defaultValue={article?.cons.join("\n") ?? ""} />
            </Field>
          </div>

          <RepeatableRows
            legend="Alternatives"
            addLabel="Add alternative"
            fields={[
              { key: "name", label: "Name" },
              { key: "url", label: "URL" },
              { key: "note", label: "Why it is worth a look", multiline: true },
            ]}
            rows={alternatives}
            onChange={setAlternatives}
            empty={{ name: "", url: "", note: "" }}
          />

          <RepeatableRows
            legend="FAQ"
            addLabel="Add question"
            fields={[
              { key: "question", label: "Question" },
              { key: "answer", label: "Answer", multiline: true },
            ]}
            rows={faqs}
            onChange={setFaqs}
            empty={{ question: "", answer: "" }}
          />
        </div>
      </AdminPanel>

      <AdminPanel title="Featured image">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Image path" htmlFor="featuredImage" hint="Upload in Media, then paste the path.">
            <Input
              id="featuredImage"
              name="featuredImage"
              placeholder="/uploads/example.webp"
              defaultValue={article?.featuredImage ?? ""}
            />
          </Field>
          <Field label="Alt text / caption" htmlFor="featuredImageAlt">
            <Input id="featuredImageAlt" name="featuredImageAlt" defaultValue={article?.featuredImageAlt ?? ""} />
          </Field>
        </div>
      </AdminPanel>

      <AdminPanel title="SEO">
        <div className="space-y-4">
          <Field label="SEO title" htmlFor="seoTitle" hint="Defaults to the article title. Aim for under 60 characters.">
            <Input id="seoTitle" name="seoTitle" defaultValue={article?.seoTitle ?? ""} />
          </Field>
          <Field label="Meta description" htmlFor="seoDescription" hint="Defaults to the excerpt. Aim for 120–160 characters.">
            <Textarea id="seoDescription" name="seoDescription" rows={3} defaultValue={article?.seoDescription ?? ""} />
          </Field>
        </div>
      </AdminPanel>

      <AdminPanel title="Publishing">
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Status" htmlFor="status">
            <Select id="status" name="status" defaultValue={article?.status ?? "DRAFT"}>
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
            </Select>
          </Field>
          <Field label="Published date" htmlFor="publishedAt" hint="Blank publishes now.">
            <Input id="publishedAt" name="publishedAt" type="date" defaultValue={dateValue(article?.publishedAt)} />
          </Field>
          <Field label="Last reviewed" htmlFor="contentUpdatedAt" hint="Shown as “Updated” on the article.">
            <Input
              id="contentUpdatedAt"
              name="contentUpdatedAt"
              type="date"
              defaultValue={dateValue(article?.contentUpdatedAt)}
            />
          </Field>
        </div>

        <label className="mt-4 flex items-center gap-2 text-sm font-medium text-ink">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={article?.featured ?? false}
            className="h-4 w-4 rounded border-line text-accent focus:ring-accent"
          />
          Feature on the homepage
        </label>
      </AdminPanel>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Saving…" : article ? "Save changes" : "Create article"}
        </Button>
        <Link href="/admin/articles" className="text-sm font-semibold text-muted hover:text-ink">
          Cancel
        </Link>
        <FormMessage status={state.status} message={state.message} />
      </div>
    </form>
  );
}
