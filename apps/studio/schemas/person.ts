import { UserIcon, EarthGlobeIcon, LinkIcon } from "@sanity/icons";
import { SiLinkedin } from "@icons-pack/react-simple-icons";
import { defineField, defineType } from "sanity";

enum Socials {
  LinkedIn = "LinkedIn",
  PersonalWebsite = "Personal Website",
  Other = "Other Platform",
}

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
                list: [
                  { title: Socials.LinkedIn, value: "linkedin" },
                  { title: Socials.PersonalWebsite, value: "site" },
                ],
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
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              platform: "platform",
              label: "label",
              link: "link",
            },
            prepare({ platform, label, link }) {
              let icon, title;
              switch (platform) {
                case "linkedin":
                  title = Socials.LinkedIn;
                  icon = SiLinkedin;
                  break;
                case "site":
                  title = Socials.PersonalWebsite;
                  icon = LinkIcon;
                  break;
                default:
                  title = Socials.Other;
                  icon = EarthGlobeIcon;
                  break;
              }
              return {
                title,
                icon,
                subtitle: label ?? link,
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
