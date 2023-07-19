import "server-only";

import { z } from "zod";
import { Icon as IconZ } from "@/lib/sanity/types";
import * as simpleIcons from "simple-icons";
import * as lucideIcons from "lucide-react";
import { client } from "@/lib/sanity/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

interface IconProps {
	icon: z.infer<typeof IconZ>;
	size?: string | number;
	color?: string;
}
const Icon = ({
	icon: { logo, icon, customIcon },
	size = 24,
	color = "currentColor",
}: IconProps) => {
	if (logo) {
		return (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path fill={color} d={simpleIcons[logo].path} />
			</svg>
		);
	}
	if (icon) {
		const Icon = lucideIcons[icon];
		return <Icon size={size} color={color} />;
	}
	if (customIcon) {
		<img
			width={size}
			height={size}
			src={builder.image(customIcon).dpr(3).url()}
		/>;
	}
	return <></>;
};

export default Icon;
