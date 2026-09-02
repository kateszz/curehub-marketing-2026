import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons/User";

export const researcher = defineType({
  name: "researcher",
  title: "Researcher",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Anchor / URL id",
      type: "slug",
      description:
        "Used as the #anchor on Why Trust Us, e.g. \"andras-hajdu\" gives /why-trust-us#andras-hajdu. Leave empty to derive it from the name.",
      options: { source: "name", maxLength: 60 },
    }),
    defineField({
      name: "ranking",
      title: "Order",
      type: "number",
      description:
        "Lower numbers appear first on Why Trust Us. Leave empty to use the default order.",
    }),
    defineField({
      name: "disciplines",
      title: "Disciplines label",
      type: "string",
      description:
        "Short label shown above the name, e.g. \"AI \u00b7 Data Science \u00b7 Medical Image Analysis\".",
    }),
    defineField({
      name: "academicTitle",
      title: "Academic title / positions",
      type: "string",
      description:
        "Current positions in full. Separate several with \u00b7 \u2014 each one is highlighted on its own line on Why Trust Us.",
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
        }),
      ],
    }),
    defineField({
      name: "background",
      title: "Background",
      description: "Description of the researcher's academic and professional background.",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "keyAchievements",
      title: "Key achievements",
      type: "array",
      of: [{ type: "string" }],
      description: "One entry per achievement — rendered as a list.",
    }),
    defineField({
      name: "contribution",
      title: "Contribution to Curehub",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "academicTitle",
      media: "image",
    },
  },
});
