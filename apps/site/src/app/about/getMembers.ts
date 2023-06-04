const FEED_URL = "https://docs.google.com/spreadsheets/d/";
const SPREADSHEET_KEY = "1DWCOQBlzA3mpa2BXYXPmQrF9_-SpoPFbTdDQuCQ83hU";
const QUERY = "pub";
const FORMAT = "output=tsv";

const dataURL = FEED_URL + SPREADSHEET_KEY + "/" + QUERY + "?" + FORMAT;

const getSheetsData = async (page: string) => {
  const response = await fetch(dataURL);

  if (response.status !== 200)
    console.warn(
      "Error ocurred while fetching schedule data:",
      response.statusText
    );

  const csv = await response.text();
  for (const line of csv.split("\n")) {
    const [key, value] = line.split("\t");
    if (key === page) {
      return JSON.parse(value);
    }
  }

  return null;
};

export const getMembers = async () => await getSheetsData("members");
