import type { Image } from "sanity";

export type SanityImage = Image & { alt?: string };

export type TeamCategory =
  | "leadership"
  | "science"
  | "engineering"
  | "operations"
  | "advisors";

export type TeamMember = {
  _id: string;
  name: string;
  position: string;
  description?: string;
  teamCategory: TeamCategory;
  ranking: number;
  image: SanityImage;
};

export const TEAM_CATEGORY_LABELS: Record<TeamCategory, string> = {
  leadership: "Leadership",
  science: "Science & Research",
  engineering: "Product & Engineering",
  operations: "Operations & Growth",
  advisors: "Advisors",
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
