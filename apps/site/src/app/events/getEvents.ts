import "server-only";

import { z } from "zod";
import { cache } from "react";
import { client } from "@/lib/sanity/sanityClient";
import { SanityDocument, SanityImageReference } from "@/lib/sanity/types";

export const Cover = SanityImageReference.extend({
	alt: z.string(),
});

const Events = z.array(
	SanityDocument.extend({
		_type: z.literal("event"),
		title: z.string(),
		cover: Cover,
		timeRange: z.object({
			timezone: z.string(),
			start: z.string().datetime(),
			end: z.string().datetime().optional(),
		}),
		description: z.string(),
		location: z.string().optional(),
	})
);

export const getEventsDescending = cache(async () => {
	return Events.parse(
		await client.fetch(
			"*[_type == 'event'] | order(timeRange.start desc, timeRange.end desc)"
		)
	);
});
