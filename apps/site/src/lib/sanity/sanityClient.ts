import { createClient } from "@sanity/client";

const NEXT_PUBLIC_SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const NEXT_PUBLIC_SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
if (!NEXT_PUBLIC_SANITY_PROJECT_ID)
  throw new Error(
    "`NEXT_PUBLIC_SANITY_PROJECT_ID` is a required env variable."
  );
if (!NEXT_PUBLIC_SANITY_DATASET)
  throw new Error("`NEXT_PUBLIC_SANITY_DATASET` is a required env variable.");

const client = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-06-06",
  useCdn: process.env.NODE_ENV === "production",
});

export { client };
