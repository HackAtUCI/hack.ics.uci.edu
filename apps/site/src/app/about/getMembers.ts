import { cache } from "react";
import { client } from "@/lib/sanity/sanityClient";

export const getMembers = cache(async () => {
	return await client
		.fetch(
			`*[_type == 'boardYear'][0]{corporate[]{person->{name, profilePic{asset->{url}}, socials[0]{link}}, position}, 
                                  logistics[]{person->{name, profilePic{asset->{url}}, socials[0]{link}}, position}, 
                                  marketing[]{person->{name, profilePic{asset->{url}}, socials[0]{link}}, position}, 
                                  tech[]{person->{name, profilePic{asset->{url}}, socials[0]{link}}, position}}`
		)
		.then((result) => result)
		.catch((error) => console.warn(error));
});
