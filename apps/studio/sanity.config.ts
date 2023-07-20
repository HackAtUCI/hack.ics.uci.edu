import { defineConfig } from "sanity";
import { theme } from "https://themer.sanity.build/api/hues?primary=1c3385;800";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { CogIcon, EarthAmericasIcon } from "@sanity/icons";

export default defineConfig({
	name: "default",
	title: "hack.ics.uci.edu",
	theme,

	projectId: "ue554f0d",
	dataset: "production",

	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("Site Settings")
							.icon(CogIcon)
							.child(
								S.list()
									.title("Site Settings")
									.items([
										S.listItem()
											.title("Socials")
											.icon(EarthAmericasIcon)
											.child(
												S.document().schemaType("socials").documentId("socials")
											),
									])
							),
						S.divider(),
						...S.documentTypeListItems().filter(
							(listItem) => !["socials"].includes(listItem.getId()!)
						),
					]),
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
});
