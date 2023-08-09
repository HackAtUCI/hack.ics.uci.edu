import type { Metadata } from "next";
import clsx from "clsx";
import Header from "@/lib/common/components/Header";
import { getMembers } from "./getMembers";
import GroupPhoto from "./group_photo.png";

import TeamSection from "./TeamSection";
import styles from "./page.module.scss";

const title = "About — Hack at UCI";
export const metadata: Metadata = {
	title,
	openGraph: {
		title,
		// og description isn't inherited from layout
		// might be an upstream bug, but shouldn't really matter either way for now
	},
};

export default async function Home() {
	const teamMembers = await getMembers();

	return (
		<div className={styles.about}>
			<Header title="About Us" />

			<div className={styles.aboutContent}>
				<div className={clsx(styles.aboutDescription, "container")}>
					<h2 className={styles.missionStatement}>Our Mission Statement</h2>
					<p>
						Promote, educate, and enhance the community around us by giving
						students the platform to learn and create technology.
					</p>
				</div>
				<div className={styles.teamPhoto}>
					<img src={GroupPhoto.src} alt="hackuci team" />
				</div>
				<div className={styles.grayBackground}>
					<div className={clsx(styles.aboutDescription, "container")}>
						<h2>Meet the Team</h2>
						<p>
							We strive to provide students with a platform to learn, grow, and
							develop technology of the future. With every event Hack at UCI
							puts on, there is an outstanding team behind it composed of four
							hardworking departments: Corporate, Marketing, Logistics, and
							Tech.
						</p>
					</div>
					<div className={clsx(styles.aboutTeams, "container")}>
						{Object.entries(teamMembers!).map(([team, members]) => (
							<TeamSection key={team} team={team} members={members} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
