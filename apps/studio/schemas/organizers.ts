import { HeartIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "organiers",
  icon: HeartIcon,
  title: "Organizers",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkedinURL",
      title: "LinkedIn URL",
      type: "url",
      validation: (Rule) => Rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "profilePic",
      title: "Profile Picture",
      description: "Images should preferably have a 1:1 aspect ratio.",
      type: "image",
    }),
  ],
});
