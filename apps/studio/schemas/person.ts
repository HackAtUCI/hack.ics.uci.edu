import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  icon: UserIcon,
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
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "profilePic",
    },
  },
});
