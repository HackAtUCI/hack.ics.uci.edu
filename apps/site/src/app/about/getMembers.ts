import { z } from "zod";
import { cache } from "react";
import { client } from "@/lib/sanity/sanityClient";
import { SanityImageReference } from "@/lib/sanity/types";

const Person = z.object({
	_type: z.literal("person"),
	name: z.string(),
	profilePic: SanityImageReference.nullable(),
	socials: z
		.object({
			link: z.string(),
		})
		.nullable(),
});

const Department = z.array(
	z.object({
		person: Person,
		position: z.string(),
	})
);

export const Members = z.object({
	corporate: Department,
	logistics: Department,
	marketing: Department,
	tech: Department,
});

export const getMembers = cache(async () => {
	try {
		return Members.parse(
			await client.fetch(
				`*[_type == 'boardYear'] | order(year desc) [0]{
				corporate[]{
					person->{
						_type,
						name,
						profilePic,
						socials[0] {link}
					},
					position
				},
				logistics[]{
					person->{
						_type,
						name,
						profilePic,
						socials[0] {link}
					},
					position
				},
				marketing[]{
					person->{
						_type,
						name,
						profilePic,
						socials[0] {link}
					},
					position
				},
				tech[]{
					person->{
						_type,
						name,
						profilePic,
						socials[0] {link}
					},
					position
				}, 
			}`
			)
		);
	} catch (error) {
		console.error(error);
	}
});
