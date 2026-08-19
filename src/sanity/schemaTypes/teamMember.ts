import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons/Users";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Important for SEO and accessibility.",
        }),
      ],
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      description: "Job title, e.g. \"Co-Founder & CEO\".",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "teamCategory",
      title: "Team category",
      type: "string",
      options: {
        list: [
          { title: "Leadership", value: "leadership" },
          { title: "Science & Research", value: "science" },
          { title: "Product & Engineering", value: "engineering" },
          { title: "Operations & Growth", value: "operations" },
          { title: "Advisors", value: "advisors" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ranking",
      title: "Ranking number",
      type: "number",
      description: "Lower numbers appear first within a category.",
      initialValue: 0,
      validation: (rule) => rule.required().integer(),
    }),
  ],
  orderings: [
    {
      title: "Ranking",
      name: "rankingAsc",
      by: [{ field: "ranking", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
  },
});
