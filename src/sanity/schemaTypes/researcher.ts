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
      name: "academicTitle",
      title: "Academic title",
      type: "string",
      description: "e.g. \"PhD in Molecular Genetics, Stanford University\".",
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
