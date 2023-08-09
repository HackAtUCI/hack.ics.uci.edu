import clsx from "clsx";
import TeamCard from "./TeamCard";
import { z } from "zod";
import { SanityImageReference } from "@/lib/sanity/types";

import styles from "./TeamSection.module.scss";

type Member = {
	person: {
		name: string;
		profilePic: z.infer<typeof SanityImageReference> | null;
		socials: { link: string } | null;
	};
	position: string;
};

interface TeamSection {
	team: string;
	members: Member[];
}
const TeamSection = ({ team, members }: TeamSection) => {
	return (
		<section>
			<h2 className={styles.teamTitle}>{team}</h2>
			<div className={styles.teamGrid}>
				{members.map((member) => (
					<TeamCard
						key={member.person.name}
						name={member.person.name}
						position={member.position}
						image={member.person.profilePic}
						linkedInUrl={member.person.socials?.link}
					/>
				))}
			</div>
		</section>
	);
};

export default TeamSection;
