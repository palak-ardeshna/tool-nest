"use server";

import { randomUUID } from "node:crypto";
import { mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { ArticleStatus, Prisma } from "@prisma/client";
import { checkPassword, endSession, requireAdmin, startSession } from "@/lib/auth";
import { readingMinutes, slugify } from "@/lib/format";

export type ActionState = { status: "idle" | "error" | "success"; message?: string };

/* --------------------------------- auth ---------------------------------- */

export async function loginAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  if (!checkPassword(password)) {
    return { status: "error", message: "Incorrect password." };
  }

  await startSession();
  redirect(next.startsWith("/admin") ? next : "/admin");
}

export async function logoutAction(): Promise<void> {
  await endSession();
  redirect("/admin/login");
}

/* -------------------------------- helpers -------------------------------- */

function text(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function optional(formData: FormData, key: string): string | null {
  const value = text(formData, key);
  return value.length ? value : null;
}

/** One value per line, blank lines dropped. Used for pros, cons and alternatives. */
function lines(formData: FormData, key: string): string[] {
  return text(formData, key)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function revalidateArticle(slug: string, categorySlug?: string) {
  revalidatePath("/");
  revalidatePath("/articles");
  revalidatePath(`/articles/${slug}`);
  revalidatePath("/sitemap.xml");
  if (categorySlug) revalidatePath(`/category/${categorySlug}`);
}

/* ------------------------------- articles -------------------------------- */

export async function saveArticleAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const id = optional(formData, "id");
  const title = text(formData, "title");
  const content = text(formData, "content");
  const categoryId = text(formData, "categoryId");
  const authorId = text(formData, "authorId");

  if (!title || !content || !categoryId || !authorId) {
    return { status: "error", message: "Title, content, category and author are required." };
  }

  const slug = slugify(text(formData, "slug") || title);
  const status = text(formData, "status") === "PUBLISHED" ? ArticleStatus.PUBLISHED : ArticleStatus.DRAFT;
  const publishedInput = text(formData, "publishedAt");
  const updatedInput = text(formData, "contentUpdatedAt");

  const data = {
    title,
    slug,
    excerpt: text(formData, "excerpt") || title,
    content,
    featuredImage: optional(formData, "featuredImage"),
    featuredImageAlt: optional(formData, "featuredImageAlt"),
    quickAnswer: optional(formData, "quickAnswer"),
    pros: lines(formData, "pros"),
    cons: lines(formData, "cons"),
    seoTitle: optional(formData, "seoTitle"),
    seoDescription: optional(formData, "seoDescription"),
    featured: formData.get("featured") === "on",
    readingMinutes: readingMinutes(content),
    status,
    // Publishing without an explicit date stamps now; drafts keep no date.
    publishedAt: publishedInput
      ? new Date(publishedInput)
      : status === ArticleStatus.PUBLISHED
        ? new Date()
        : null,
    contentUpdatedAt: updatedInput ? new Date(updatedInput) : null,
    categoryId,
    authorId,
  };

  const faqs = JSON.parse(text(formData, "faqs") || "[]") as { question: string; answer: string }[];
  const alternatives = JSON.parse(text(formData, "alternatives") || "[]") as {
    name: string;
    url?: string;
    note?: string;
  }[];

  const nested = {
    faqs: {
      deleteMany: {},
      create: faqs
        .filter((faq) => faq.question && faq.answer)
        .map((faq, position) => ({ ...faq, position })),
    },
    alternatives: {
      deleteMany: {},
      create: alternatives
        .filter((item) => item.name)
        .map((item, position) => ({
          name: item.name,
          url: item.url || null,
          note: item.note || null,
          position,
        })),
    },
  };

  try {
    const article = id
      ? await db.article.update({ where: { id }, data: { ...data, ...nested } })
      : await db.article.create({ data: { ...data, ...nested } });

    const category = await db.category.findUnique({
      where: { id: categoryId },
      select: { slug: true },
    });
    revalidateArticle(article.slug, category?.slug);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return { status: "error", message: `The slug “${slug}” is already used by another article.` };
    }
    throw error;
  }

  redirect("/admin/articles?saved=1");
}

export async function deleteArticleAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const article = await db.article.delete({
    where: { id },
    include: { category: { select: { slug: true } } },
  });
  revalidateArticle(article.slug, article.category.slug);
  revalidatePath("/admin/articles");
}

export async function toggleArticleStatusAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const article = await db.article.findUnique({ where: { id }, include: { category: true } });
  if (!article) return;

  const publishing = article.status === ArticleStatus.DRAFT;
  await db.article.update({
    where: { id },
    data: {
      status: publishing ? ArticleStatus.PUBLISHED : ArticleStatus.DRAFT,
      publishedAt: publishing ? (article.publishedAt ?? new Date()) : article.publishedAt,
    },
  });

  revalidateArticle(article.slug, article.category.slug);
  revalidatePath("/admin/articles");
}

/* ------------------------------ categories -------------------------------- */

export async function saveCategoryAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const id = optional(formData, "id");
  const name = text(formData, "name");
  if (!name) return { status: "error", message: "Name is required." };

  const data = {
    name,
    slug: slugify(text(formData, "slug") || name),
    description: optional(formData, "description"),
    parentId: optional(formData, "parentId"),
    position: Number(text(formData, "position")) || 0,
  };

  if (id && data.parentId === id) {
    return { status: "error", message: "A category cannot be its own parent." };
  }

  try {
    if (id) await db.category.update({ where: { id }, data });
    else await db.category.create({ data });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return { status: "error", message: `The slug “${data.slug}” is already taken.` };
    }
    throw error;
  }

  revalidatePath("/admin/categories");
  revalidatePath("/");
  return { status: "success", message: "Category saved." };
}

export async function deleteCategoryAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const count = await db.article.count({ where: { categoryId: id } });
  // Deleting a category with articles would orphan them, so refuse instead.
  if (count > 0) return;

  await db.category.delete({ where: { id } });
  revalidatePath("/admin/categories");
  revalidatePath("/");
}

/* -------------------------------- authors --------------------------------- */

export async function saveAuthorAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const id = optional(formData, "id");
  const name = text(formData, "name");
  if (!name) return { status: "error", message: "Name is required." };

  const data = {
    name,
    slug: slugify(text(formData, "slug") || name),
    role: optional(formData, "role"),
    bio: optional(formData, "bio"),
    avatar: optional(formData, "avatar"),
    email: optional(formData, "email"),
    twitter: optional(formData, "twitter"),
    website: optional(formData, "website"),
  };

  try {
    if (id) await db.author.update({ where: { id }, data });
    else await db.author.create({ data });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return { status: "error", message: `The slug “${data.slug}” is already taken.` };
    }
    throw error;
  }

  revalidatePath("/admin/authors");
  revalidatePath("/about");
  return { status: "success", message: "Author saved." };
}

export async function deleteAuthorAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const count = await db.article.count({ where: { authorId: id } });
  if (count > 0) return;

  await db.author.delete({ where: { id } });
  revalidatePath("/admin/authors");
}

/* --------------------------------- media ---------------------------------- */

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const ALLOWED = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/avif", ".avif"],
  ["image/svg+xml", ".svg"],
]);
const MAX_BYTES = 5 * 1024 * 1024;

/**
 * ponytail: writes to the local filesystem, which is correct for a VPS or
 * container with a volume. Swap this one function for an S3/R2 put if the site
 * ever runs on ephemeral serverless storage.
 */
export async function uploadMediaAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { status: "error", message: "Choose a file to upload." };
  }
  const extension = ALLOWED.get(file.type);
  if (!extension) {
    return { status: "error", message: "Only JPEG, PNG, WebP, AVIF and SVG are allowed." };
  }
  if (file.size > MAX_BYTES) {
    return { status: "error", message: "Files must be 5 MB or smaller." };
  }

  const filename = `${randomUUID()}${extension}`;
  await mkdir(UPLOAD_DIR, { recursive: true });
  await writeFile(path.join(UPLOAD_DIR, filename), Buffer.from(await file.arrayBuffer()));

  await db.media.create({
    data: { url: `/uploads/${filename}`, alt: text(formData, "alt") },
  });

  revalidatePath("/admin/media");
  return { status: "success", message: "Uploaded." };
}

export async function deleteMediaAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const media = await db.media.findUnique({ where: { id } });
  if (!media) return;

  await db.media.delete({ where: { id } });
  // The DB row is the source of truth; a missing file must not block deletion.
  await unlink(path.join(process.cwd(), "public", media.url)).catch(() => {});
  revalidatePath("/admin/media");
}
