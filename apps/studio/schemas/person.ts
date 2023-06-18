import { HeartIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  icon: HeartIcon,
  title: "People",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pronouns",
      title: "Pronouns",
      type: "string",
    }),
    defineField({
      name: "linkedinURL",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "profilePic",
      title: "Profile Picture",
      description: "Images should preferably have a 1:1 aspect ratio.",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "profilePic",
    },
  },
});
