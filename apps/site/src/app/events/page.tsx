export const revalidate = 60;

import type { Metadata } from "next";
import clsx from "clsx";
import Header from "@/lib/common/components/Header";
import PastEvents from "./PastEvents";
import UpcomingEvents from "./UpcomingEvents";

import styles from "./page.module.scss";

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

export default async function Home() {
	return (
		<div className="events-wrapper">
			<Header title="Our Events" />
			<div className="events">
				{/* https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#:~:text=Async%20Server%20Component%20TypeScript%20Error */}
				{/* @ts-expect-error Async Server Component */}
				<UpcomingEvents />

				<div className="past-events">
					<h2 className="title-events">Past Events</h2>
					{/* @ts-expect-error Async Server Component */}
					<PastEvents />
				</div>
			</div>
		</div>
	);
}
