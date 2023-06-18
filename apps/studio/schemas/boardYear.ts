import { HeartIcon } from "@sanity/icons";

const organizerSearch = [
  {
    type: "object",
    fields: [
      {
        name: "organizer",
        type: "reference",
        title: "Organizer",
        to: {
          type: "organizer",
        },
      },
      {
        name: "position",
        type: "string",
        title: "Position",
      },
    ],
    preview: {
      select: {
        title: "organizer.name",
        subtitle: "position",
      },
    },
    icon: HeartIcon,
  },
];

const nameTitleAssoc: Map<string, string> = new Map([
  ["corporate", "Corporate Organizers"],
  ["logistics", "Logistics Organizers"],
  ["marketing", "Marketing Organizers"],
  ["tech", "Tech Organizers"],
]);

export default {
  name: "boardYears",
  type: "document",
  title: "Board Years",
  fields: [
    {
      name: "year",
      type: "number",
      title: "Academic Year",
    },
    ...Array.from(nameTitleAssoc.entries()).map((l) => ({
      name: l[0],
      type: "array",
      title: l[1],
      of: organizerSearch,
    })),
  ],
  initialValue: {
    year: new Date().getFullYear(),
  },
  preview: {
    select: {
      title: "year",
    },
  },
};
