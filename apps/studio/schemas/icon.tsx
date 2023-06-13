import { Reference, defineField, defineType } from "sanity";
import { titleCase } from "title-case";
import * as simpleIcons from "simple-icons";
import { createElement, icons as lucideIcons } from "lucide";

const logos = Object.entries(simpleIcons).map(([key, { title, path }]) => ({
  title: title,
  value: key,
  svg: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d={path} />
    </svg>
  ),
}));

const icons = Object.entries(lucideIcons).map(([key, icon]) => {
  // Iterating through all exports of `lucide-react` should return an object where all values are type `LucideIcon`.
  // This also throws an error with <LucideIcon /> for some reason.
  // `lucide-react` exports also include aliases, which is undesirable.

  return {
    title: titleCase(key),
    value: key,
    svg: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        dangerouslySetInnerHTML={{ __html: createElement(icon).innerHTML }}
      />
    ),
  };
});

const getIcon = (id: string) => {
  return icons.find(({ value }) => value === id)?.svg;
};

const getLogo = (id: string) => {
  return logos.find(({ value }) => value === id)?.svg;
};

// Resuable preview function that can be used in previews of documents that use an `icon` object.
// Refer to the list preview function in `socials.ts` for example usage.
export const previewIcon = (iconObject: {
  logo: string;
  icon: string;
  customIcon: { _type: "image"; asset: Reference };
}): any => {
  const { logo, icon, customIcon } = iconObject;
  // Sanity's prepare preview function doesn't accept a Sanity image object even though it's redered correctly.
  // Forcing the return type of this function to be any to get around this for now.
  // This probably isn't an optimal solution and might be an upstream issue?
  if (customIcon) return customIcon;
  if (logo) return getLogo(logo);
  if (icon) return getIcon(icon);
  return undefined;
};

export default defineType({
  name: "icon",
  title: "Icon",
  type: "object",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "string",
      options: {
        list: logos,
      },
    }),
    defineField({
      name: "icon",
      title: "Icon",
      description: "Explore available icons at https://lucide.dev/icons.",
      type: "string",
      options: {
        list: icons,
      },
    }),
    defineField({
      name: "customIcon",
      title: "Custom Icon",
      description:
        '.svg files are preferred. This field takes precedent over the "Logo" and "Icon" fields.',
      type: "image",
      validation: (Rule) =>
        Rule.custom(async (image, context) => {
          if (
            typeof image === "undefined" ||
            typeof image.asset === "undefined"
          )
            return true;

          const client = context.getClient({ apiVersion: "2023-06-05" });
          const extension: string | undefined = (
            await client.getDocument(image.asset._ref)
          )?.extension;

          if (!extension) return true;

          return extension === "svg" ? true : ".svg files are preferred.";
        }).warning(),
    }),
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
  validation: (Rule) => [
    // `logo` and `icon` fields are mutually exclusive.
    Rule.custom((object) => {
      if (typeof object === "undefined") return true;

      return object.logo && object.icon
        ? '"Logo" and "Icon" fields can not be selected at the same time.'
        : true;
    }).error(),
  ],
});
