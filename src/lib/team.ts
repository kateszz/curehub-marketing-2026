import { personSlug } from "@/lib/researchers";
import type { TeamCategory, TeamMember } from "@/lib/sanity/types";

/**
 * Helpers shared by the three Our Team sections.
 *
 * The page presents the team as three separate layers — who runs the
 * company, who provides the scientific foundation, who builds it — so the
 * grouping, the deep links into the scientific profiles and the one piece
 * of fallback copy all live here rather than inside the components.
 */

/** Splits the flat CMS list into the three layers, keeping the `ranking`
 *  order the GROQ query already applied. Categories the Studio doesn't
 *  know about are dropped rather than rendered under a made-up heading. */
export function groupTeamMembers(
  members: TeamMember[]
): Record<TeamCategory, TeamMember[]> {
  return {
    leadership: members.filter((m) => m.teamCategory === "leadership"),
    research: members.filter((m) => m.teamCategory === "research"),
    development: members.filter((m) => m.teamCategory === "development"),
  };
}

/** People who also have a full scientific profile on Why Trust Us. Keyed by
 *  the anchor that page renders (see `researcherSlug`), so a card can link
 *  straight to the profile instead of repeating the biography here. */
const SCIENTIFIC_PROFILES = new Set([
  "sandor-spisak",
  "andras-hajdu",
  "gabor-szederkenyi",
  "adrienne-csutak",
  "andras-horvath",
]);

/** `/why-trust-us#andras-hajdu` for anyone whose profile lives on that
 *  page, `undefined` for everyone else — matched on the derived slug, so
 *  the two collections don't have to spell a name identically ("Dr. András
 *  Horváth" here, "Dr. András Horváth, PhD" there). */
export function scientificProfileHref(name: string): string | undefined {
  const slug = personSlug(name);
  return SCIENTIFIC_PROFILES.has(slug) ? `/why-trust-us#${slug}` : undefined;
}

/**
 * Card copy the brief specifies but the Studio entry doesn't carry yet.
 *
 * Only Dr. Spisák: his `teamMember` document has an empty `description`,
 * and without this his card would be the one leadership card with nothing
 * behind it. The CMS value always wins — fill the field in the Studio and
 * this entry can be deleted.
 */
const DESCRIPTION_FALLBACKS: Record<string, string> = {
  "sandor-spisak":
    "Expertise in molecular biology, epigenetics, functional genomics, systems biology, and the systems-level interpretation of metabolism-linked methylation networks.",
};

export function memberDescription(member: TeamMember): string | undefined {
  return member.description?.trim() || DESCRIPTION_FALLBACKS[personSlug(member.name)];
}
