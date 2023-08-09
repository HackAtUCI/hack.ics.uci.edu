import { z } from "zod";
/* eslint-disable @next/next/no-img-element */
import type { StaticImageData } from "next/image";
import clsx from "clsx";
// could we replace with something like simple-icons (https://github.com/simple-icons/simple-icons)?
import linkedinLogo from "@/lib/common/assets/linkedin-logo.svg";
import blank from "./blank.png";
import { client } from "@/lib/sanity/sanityClient";
import { SanityImageReference } from "@/lib/sanity/types";
import imageUrlBuilder from "@sanity/image-url";

const urlBuilder = imageUrlBuilder(client);

import styles from "./TeamCard.module.scss";

// PRETTIER !!!!!!!

//

//

//

//

interface TeamCardProps {
	name: string;
	position: string;
	image: z.infer<typeof SanityImageReference> | null;
	linkedInUrl?: string;
}
const TeamCard = ({ name, position, image, linkedInUrl }: TeamCardProps) => {
	return (
		<div className={styles.teamCard}>
			<div className={styles.imagesContainer}>
				<img
					src={image ? urlBuilder.image(image).url() : blank.src}
					className={styles.profilePicture}
					alt={name}
				/>
				<a href={linkedInUrl}>
					<img
						alt="LinkedIn"
						className={styles.linkedinLogo}
						src={linkedinLogo.src}
					/>
				</a>
			</div>

			<h5 className={styles.name}>{name}</h5>

			<h6 className={styles.position}>{position}</h6>
		</div>
	);
};

export default TeamCard;
