import type { Metadata } from "next";
import Nav from "@/lib/common/components/Nav";
import Footer from "@/lib/common/components/Footer";

import "./globals.scss";
import FontProvider from "@/lib/common/FontProvider";
import Accordion from "@/lib/theme/components/accordion";

const title = "Hack at UCI";
const description =
	"Hack at UCI is a student-run organization established to provide students with a platform to learn, grow, and develop technology of the future. Established in 2013, our mission is to promote, educate, and enhance the community around us by giving students the platform to learn and create technology.";
export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<FontProvider />
			<body>
				<Accordion.Root
					className="AccordionRoot"
					type="single"
					defaultValue="item-1"
					collapsible
				>
					<Accordion.Item className="AccordionItem" value="item-1">
						<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
						<Accordion.Content>
							Yes. It adheres to the WAI-ARIA design pattern.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item className="AccordionItem" value="item-2">
						<Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
						<Accordion.Content>
							Yes. It's unstyled by default, giving you freedom over the look
							and feel.
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
				<Nav />
				{children}
				{/* https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#:~:text=Async%20Server%20Component%20TypeScript%20Error */}
				{/* @ts-expect-error Async Server Component */}
				<Footer />
			</body>
		</html>
	);
}
