import type { Image } from "sanity";

export type SanityImage = Image & { alt?: string };

export type TeamCategory =
  | "leadership"
  | "research"
  | "development";

export type TeamMember = {
  _id: string;
  name: string;
  position: string;
  description?: string;
  teamCategory: TeamCategory;
  ranking: number;
  image: SanityImage;
};

// The values must match the `teamCategory` options in the Studio schema
// (src/sanity/schemaTypes/teamMember.ts): `groupTeamMembers` in
// src/lib/team.ts splits the CMS list on them, one Our Team section per
// category, and silently drops members stored under anything else.

export type Researcher = {
  _id: string;
  name: string;
  /** Optional anchor id. Derived from `name` when unset — see
   *  `researcherSlug` in src/lib/researchers.ts. */
  slug?: { current?: string };
  /** Optional display order on Why Trust Us; lower comes first. */
  ranking?: number;
  /** Optional short discipline label shown above the name. */
  disciplines?: string;
  /** Current positions in full, several joined with "·". */
  academicTitle: string;
  background: string;
  keyAchievements?: string[];
  contribution?: string;
  image: SanityImage;
};
