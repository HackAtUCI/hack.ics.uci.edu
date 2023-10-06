"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export default function FontProvider() {
	return (
		<style jsx global>
			{`
				:root {
					--next-font-poppins: ${poppins.style.fontFamily};
				}
			`}
		</style>
	);
}
