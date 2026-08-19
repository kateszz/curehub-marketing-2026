import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // `false` disables the CDN so authoring changes show up immediately in
  // preview/dev. Flip to `true` once the site is live in production if you
  // want faster, cached reads (content updates then take ~30s to appear).
  useCdn: false,
});

/**
 * Fetches from Sanity but never throws — returns `fallback` instead.
 *
 * This matters at build time in particular: if `.env.local` hasn't been
 * filled in yet (or the Sanity project briefly can't be reached), pages
 * that read CMS content should still build and render their empty state
 * rather than taking the whole `next build` down.
 */
export async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  try {
    return await client.fetch<T>(query);
  } catch (error) {
    console.warn("[sanity] fetch failed, falling back to empty content:", error);
    return fallback;
  }
}
