import { groq } from "next-sanity";

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(ranking asc) {
    _id,
    name,
    position,
    description,
    teamCategory,
    ranking,
    image
  }
`;

export const researchersQuery = groq`
  *[_type == "researcher"] | order(name asc) {
    _id,
    name,
    academicTitle,
    background,
    keyAchievements,
    contribution,
    image
  }
`;
