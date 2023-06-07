import { z } from "zod";
import { cache } from "react";
import { client } from "@/lib/sanity/sanityClient";
import { Icon } from "@/lib/sanity/types";

export const Socials = z
  .array(
    z.object({
      icon: Icon,
      platform: z.string(),
      label: z.string().optional(),
      link: z.string(),
    })
  )
  .nullable();

export const getSocials = cache(async () => {
  return await client
    .fetch("*[_id == 'socials'][0].socials")
    .then((result) => Socials.parse(result));
});
