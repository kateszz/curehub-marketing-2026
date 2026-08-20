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

// Keys must match the `teamCategory` option values in the Studio schema
// (src/sanity/schemaTypes/teamMember.ts) — TeamGrid derives both its group
// order and its headings from this map, and silently drops members whose
// stored category isn't a key here.
export const TEAM_CATEGORY_LABELS: Record<TeamCategory, string> = {
  leadership: "Leadership",
  research: "Research Team",
  development: "Development Team",
};

export type Researcher = {
  _id: string;
  name: string;
  academicTitle: string;
  background: string;
  keyAchievements?: string[];
  contribution?: string;
  image: SanityImage;
};
