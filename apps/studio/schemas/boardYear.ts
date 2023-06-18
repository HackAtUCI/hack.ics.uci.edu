import { defineField, defineType, defineArrayMember } from "sanity";
import { HeartIcon } from "@sanity/icons";

const personSearch = [
  defineArrayMember({
    type: "object",
    fields: [
      defineField({
        name: "person",
        type: "reference",
        title: "Person",
        to: {
          type: "person",
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "position",
        type: "string",
        title: "Position",
        validation: (Rule) => Rule.required(),
      }),
    ],
    preview: {
      select: {
        title: "person.name",
        subtitle: "position",
      },
    },
    icon: HeartIcon,
  }),
];

const nameTitleAssoc: Map<string, string> = new Map([
  ["corporate", "Corporate Organizers"],
  ["logistics", "Logistics Organizers"],
  ["marketing", "Marketing Organizers"],
  ["tech", "Tech Organizers"],
]);

export default defineType({
  name: "boardYear",
  type: "document",
  title: "Board Years",
  fields: [
    defineField({
      name: "year",
      type: "number",
      title: "Academic Year",
      validation: (Rule) => Rule.required(),
    }),
    ...Object.entries(nameTitleAssoc).map(([key, title]) =>
      defineField({
        name: key,
        type: "array",
        title: title,
        of: personSearch,
        validation: (Rule) => Rule.required(),
      })
    ),
  ],
  initialValue: {
    year: new Date().getFullYear(),
  },
  preview: {
    select: {
      title: "year",
    },
  },
});
