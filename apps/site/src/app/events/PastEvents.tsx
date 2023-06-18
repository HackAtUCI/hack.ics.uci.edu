import { getEventsDescending } from "./getEvents";
import EventCard from "./EventCard";

import styles from "./PastEvents.module.scss";

const PastEvents = async () => {
  const events = await getEventsDescending();

  const now = new Date();
  const pastEvents = events.filter(({ timeRange: { start, end } }) =>
    end ? new Date(end) < now : new Date(start) < now
  );

  if (pastEvents.length === 0)
    return <h2 className="no-events">No past events!</h2>;

  return (
    <div className={styles.events}>
      {pastEvents.map((event) => (
        <EventCard
          key={event._id}
          title={event.title}
          startTime={event.timeRange.start}
          endTime={event.timeRange.end}
          // description={event.description}
          image={event.cover}
        />
      ))}
    </div>
  );
};

export default PastEvents;
