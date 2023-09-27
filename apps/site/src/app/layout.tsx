import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "@/lib/common/components/Nav";
import Footer from "@/lib/common/components/Footer";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

import "./globals.scss";
import FontProvider from "@/lib/common/FontProvider";

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
				<Theme>
					<Nav />
					{children}
					{/* https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#:~:text=Async%20Server%20Component%20TypeScript%20Error */}
					{/* @ts-expect-error Async Server Component */}
					<Footer />
				</Theme>
			</body>
		</html>
	);
}
