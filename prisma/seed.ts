import { PrismaClient, ArticleStatus } from "@prisma/client";
import { readingMinutes, slugify } from "../src/lib/format";
import { seedArticles, seedAuthors, seedCategories } from "./seed-content";
import { moreArticles } from "./seed-content-more";
import { imageAlt } from "./seed-images";

const allArticles = [...seedArticles, ...moreArticles];

const db = new PrismaClient();

async function seedAuthorRows() {
  for (const author of seedAuthors) {
    await db.author.upsert({ where: { slug: author.slug }, update: author, create: author });
  }
  console.log(`Authors: ${seedAuthors.length}`);
}

async function seedCategoryRows() {
  let count = 0;
  for (const category of seedCategories) {
    const { children = [], ...parent } = category;
    const saved = await db.category.upsert({
      where: { slug: parent.slug },
      update: parent,
      create: parent,
    });
    count += 1;

    for (const [index, child] of children.entries()) {
      const data = { ...child, parentId: saved.id, position: index + 1 };
      await db.category.upsert({ where: { slug: child.slug }, update: data, create: data });
      count += 1;
    }
  }
  console.log(`Categories: ${count}`);
}

async function seedArticleRows() {
  for (const article of allArticles) {
    const [category, author] = await Promise.all([
      db.category.findUniqueOrThrow({ where: { slug: article.category } }),
      db.author.findUniqueOrThrow({ where: { slug: article.author } }),
    ]);

    const tags = await Promise.all(
      article.tags.map((name) =>
        db.tag.upsert({
          where: { slug: slugify(name) },
          update: { name },
          create: { name, slug: slugify(name) },
        }),
      ),
    );

    const base = {
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      quickAnswer: article.quickAnswer ?? null,
      pros: article.pros ?? [],
      cons: article.cons ?? [],
      seoTitle: article.seoTitle ?? null,
      seoDescription: article.seoDescription ?? null,
      featured: article.featured ?? false,
      // Every seeded article ships with a cover at a path derived from its slug.
      featuredImage: `/images/articles/${article.slug}.webp`,
      featuredImageAlt: imageAlt[article.slug] ?? null,
      readingMinutes: readingMinutes(article.content),
      status: ArticleStatus.PUBLISHED,
      publishedAt: new Date(article.publishedAt),
      contentUpdatedAt: article.contentUpdatedAt ? new Date(article.contentUpdatedAt) : null,
      categoryId: category.id,
      authorId: author.id,
    };

    const faqs = (article.faqs ?? []).map((faq, position) => ({ ...faq, position }));
    const alternatives = (article.alternatives ?? []).map((item, position) => ({
      name: item.name,
      url: item.url ?? null,
      note: item.note ?? null,
      position,
    }));
    const tagIds = tags.map((tag) => ({ id: tag.id }));

    await db.article.upsert({
      where: { slug: article.slug },
      update: {
        ...base,
        tags: { set: tagIds },
        faqs: { deleteMany: {}, create: faqs },
        alternatives: { deleteMany: {}, create: alternatives },
      },
      create: {
        ...base,
        tags: { connect: tagIds },
        faqs: { create: faqs },
        alternatives: { create: alternatives },
      },
    });
  }
  console.log(`Articles: ${allArticles.length}`);
}

async function main() {
  await seedAuthorRows();
  await seedCategoryRows();
  await seedArticleRows();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
