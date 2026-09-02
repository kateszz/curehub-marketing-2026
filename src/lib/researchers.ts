import type { Researcher } from "@/lib/sanity/types";

/**
 * Helpers shared by the Why Trust Us researcher profiles.
 *
 * Everything here is a *fallback*: the Studio fields (`slug`, `ranking`,
 * `disciplines`) win whenever they are filled in. They aren't yet on the
 * four existing entries, and the anchors below are already published in the
 * content brief (`/why-trust-us#andras-hajdu` etc), so the derivations have
 * to hold on their own until an editor sets the fields.
 */

/** Honorifics that prefix a researcher's name but aren't part of it. The
 *  trailing dot is required so real names that merely start with these
 *  letters (Drexler, Professzor…) are left alone. */
const HONORIFICS = /\b(?:prof|dr|assoc|assist|mr|mrs|ms)\.\s*/gi;

/** Anchor id for a person's name — `andras-hajdu` for "Prof. Dr. András
 *  Hajdu", `adrienne-csutak` for "Prof. Dr. Adrienne Csutak, MD, PhD, DSc,
 *  MSc". Shared with the Our Team cards, which deep-link into these
 *  profiles with only a `teamMember` name to work from. */
export function personSlug(name: string): string {
  return (
    name
      // post-nominals (", PhD, DSc") are a title, not a name
      .split(",")[0]
      .replace(HONORIFICS, "")
      // strip diacritics so "Szederkényi" → "szederkenyi"
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );
}

/** Anchor id for a researcher profile — the Studio `slug` field where an
 *  editor has set one, otherwise derived from the name. */
export function researcherSlug(researcher: Researcher): string {
  return researcher.slug?.current || personSlug(researcher.name);
}

/** The narrative order the page is specified to run in: AI → mathematics →
 *  clinic → computer vision. Anyone not listed sorts after these, by name. */
const CANONICAL_ORDER = [
  "andras-hajdu",
  "gabor-szederkenyi",
  "adrienne-csutak",
  "andras-horvath",
];

/** Short discipline label shown above each name. */
const CANONICAL_DISCIPLINES: Record<string, string> = {
  "andras-hajdu": "AI · Data Science · Medical Image Analysis",
  "gabor-szederkenyi": "Systems Modelling · Mathematical Validation",
  "adrienne-csutak": "Ophthalmology · Retinal Imaging · Clinical Validation",
  "andras-horvath": "AI · Computer Vision · Synthetic Modelling",
};

export function researcherDisciplines(researcher: Researcher): string | undefined {
  return researcher.disciplines || CANONICAL_DISCIPLINES[researcherSlug(researcher)];
}

/** `ranking` from the Studio first, then the canonical order above, then
 *  alphabetical — so a fifth researcher added in the CMS still lands
 *  somewhere sensible instead of silently jumping to the front. */
export function orderResearchers(researchers: Researcher[]): Researcher[] {
  const rank = (researcher: Researcher) => {
    if (typeof researcher.ranking === "number") return researcher.ranking;
    const i = CANONICAL_ORDER.indexOf(researcherSlug(researcher));
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };

  return [...researchers].sort(
    (a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name)
  );
}

/** The Studio stores positions as one string joined with "·" (matching the
 *  client's own wording); each one gets its own highlighted line. */
export function splitPositions(academicTitle: string): string[] {
  return academicTitle
    .split("·")
    .map((position) => position.trim())
    .filter(Boolean);
}

/** Splits a textarea value into paragraphs on blank lines. The biographies
 *  are protected copy — this only ever re-flows them, never edits them. */
export function toParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
