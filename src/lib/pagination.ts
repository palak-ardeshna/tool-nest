import { allArticles } from "@/lib/articles";

/** Articles per page on the archive. */
export const PER_PAGE = 20;

export const pageCount = () => Math.max(1, Math.ceil(allArticles.length / PER_PAGE));

/** The slice shown on page `n`, 1-based. */
export const pageSlice = (n: number) => allArticles.slice((n - 1) * PER_PAGE, n * PER_PAGE);

/** Page 1 lives at /articles so the archive URL never moves. */
export const pagePath = (n: number) => (n <= 1 ? "/articles" : `/articles/page/${n}`);
