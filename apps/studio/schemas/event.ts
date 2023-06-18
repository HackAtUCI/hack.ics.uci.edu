import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export default defineType({
  name: "event",
  title: "Events",
  icon: CalendarIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover",
      title: "Cover",
      description:
        "Should be at least 1200 x 630, with an aspect ratio of 1.9:1.",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "timeRange",
      title: "Time Range",
      type: "timeRange",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => [
        Rule.required(),
        Rule.regex(/\n\n/, { invert: true }).warning(
          "Double newlines should not be used for stylistic reasons. Content will be properly styled when displayed."
        ),
      ],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "rsvp",
      title: "RSVP",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "cover",
      start: "timeRange.start",
      end: "timeRange.end",
    },
    prepare({ title, media, start, end }) {
      const dateTimeFormat = new Intl.DateTimeFormat("en", {
        timeZone: "UTC",
        dateStyle: "medium",
        timeStyle: "short",
      });

      const time = end
        ? dateTimeFormat.formatRange(new Date(start), new Date(end))
        : dateTimeFormat.format(new Date(start));

      return {
        title,
        media,
        subtitle: time,
      };
    },
  },
  orderings: [
    {
      title: "Start Time, Desc",
      name: "startTimeDesc",
      by: [{ field: "timeRange.start", direction: "desc" }],
    },
  ],
});
