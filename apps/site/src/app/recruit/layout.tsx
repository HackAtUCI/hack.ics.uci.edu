import type { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import Header from "@/lib/common/components/Header";
import lightBulb from "./lightBulb.svg";
import search from "./search.svg";
import gears from "./gears.svg";

import styles from "./layout.module.scss";

const COMMITTEES = {
	Corporate: "corporate",
	Logistics: "logistics",
	Marketing: "marketing",
	Technology: "tech",
};

const title = "Events — Hack at UCI";
// TODO: write description for events page
const description = "";
export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
	},
};

export default async function RecruitmentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="Recruitment">
			<Header title="Recruitment" />
			<div className="about">
				<div>
					<div>
						<img src={lightBulb.src} alt="Light bulb icon" />
						<h3 className="my-4">Learn</h3>
						<p>
							We host workshops and hackathons that support people as they learn
							industry-relevant skills.
						</p>
					</div>
					<div>
						<img src={search.src} alt="Search icon" />
						<h3 className="my-4">Explore</h3>
						<p>
							We provide professional events that help people to explore new
							technologies, ground-breaking ideas, and career paths.
						</p>
					</div>
					<div>
						<img src={gears.src} alt="Gears icon" />
						<h3 className="my-4">Create</h3>
						<p>
							We support the developer community at UCI to collaborate on
							innovative, technical products that have meaning.
						</p>
					</div>
				</div>
			</div>
			<section className="committees">
				<div>
					<h2 style={{ marginBottom: "3rem" }}>Our Committees</h2>
					<div>
						{Object.entries(COMMITTEES).map(([name, path], index) => (
							<Link key={index} href={"recruit/" + path}>
								{name}
							</Link>
						))}
					</div>
					<div className="committee">{children}</div>
					<h4 className="text-center m-0">
						Look out for recruitment in the fall!
					</h4>
				</div>
			</section>
		</div>
	);
}
