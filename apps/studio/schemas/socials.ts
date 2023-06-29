import { defineField, defineType, defineArrayMember } from "sanity";
import { previewIcon } from "./icon";

export default defineType({
  name: "socials",
  title: "Socials",
  type: "document",
  fields: [
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "icon",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              description:
                "Primary identifier of platform (i.e. Username). Include a prefix character (@, ~, etc.) if used by brand.",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "url",
              validation: (Rule) =>
                Rule.required().uri({ scheme: ["http", "https", "mailto"] }),
            }),
          ],
          preview: {
            select: {
              title: "platform",
              subtitle: "label",
              icon: "icon",
            },
            prepare({ title, subtitle, icon }) {
              return {
                title,
                subtitle,
                media: previewIcon(icon),
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Socials" };
    },
  },
});
