import { z } from "zod";

export const SanityDocument = z.object({
  _id: z.string(),
  _createdAt: z.string().datetime(),
  _updatedAt: z.string().datetime(),
  _rev: z.string(),
});

export const SanityReference = z.object({
  _type: z.literal("reference"),
  _ref: z.string(),
});

export const SanityImageReference = z.object({
  _type: z.literal("image"),
  asset: SanityReference,
});

import * as simpleIcons from "simple-icons";
import { icons as lucideIcons } from "lucide";

const SimpleIconKeys = z.custom<keyof typeof simpleIcons>(
  (val) => typeof val === "string" && Object.keys(simpleIcons).includes(val)
);
const LucideIconKeys = z.custom<keyof typeof lucideIcons>(
  (val) => typeof val === "string" && Object.keys(lucideIcons).includes(val)
);

export const Icon = z
  .object({
    _type: z.literal("icon"),
    logo: SimpleIconKeys.optional(),
    icon: LucideIconKeys.optional(),
    customIcon: SanityImageReference.optional(),
  })
  .refine(
    ({ logo, icon }) => !(logo && icon),
    "logo and icon fields are mutually exclusive."
  );
