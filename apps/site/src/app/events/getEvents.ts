import "server-only";

const GRAPH_URL = "https://graph.facebook.com/v15.0/me";
const TOKEN = process.env.FB_PAGE_TOKEN;

if (!TOKEN) throw new Error("FB_PAGE_TOKEN env variable is missing.");

type Event = {
  cover: {
    source: string;
    id: string;
    offset_x: number;
    offset_y: number;
  };
  start_time: string;
  end_time?: string;
  name: string;
  description: string;
  id: string;
};

export const getEventsDescending = async (): Promise<Event[]> => {
  // const searchParams = new URLSearchParams({
  //   fields: "events{description,end_time,name,start_time,cover}",
  //   access_token: TOKEN,
  // });
  // const eventsResponse = await fetch(
  //   GRAPH_URL + "?" + searchParams.toString(),
  //   { next: { revalidate: 60 } }
  // );
  // const events = await eventsResponse.json();

  const eventsResponse = await fetch(
    "https://mssreee3b2ta2wnbl4kv6xbsma0cqify.lambda-url.us-west-2.on.aws/api/events",
    { next: { revalidate: 60 } }
  );
  const events: Event[] = await eventsResponse.json();

  return events.sort(
    ({ start_time: startA }, { start_time: startB }) =>
      new Date(startB).valueOf() - new Date(startA).valueOf()
  );
};
