import { UserIcon, EarthGlobeIcon } from "@sanity/icons";
import { SiLinkedin } from "@icons-pack/react-simple-icons";
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
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: ["LinkedIn", "Personal Website"],
              },
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
              platform: "platform",
              subtitle: "label",
              link: "link",
            },
            prepare({ title, platform, subtitle, link }) {
              let icon;
              switch (platform.toLowerCase()) {
                case "linkedin":
                  icon = SiLinkedin;
                  break;
                case "personal website":
                  icon = UserIcon;
                  break;
                default:
                  icon = EarthGlobeIcon;
                  break;
              }
              return {
                title,
                icon,
                subtitle: subtitle ? subtitle : link,
                link,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
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
      subtitle: "email",
      media: "profilePic",
    },
  },
});
