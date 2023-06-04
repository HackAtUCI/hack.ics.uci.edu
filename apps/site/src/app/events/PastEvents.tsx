import { getEventsDescending } from "./getEvents";
import EventCard from "./EventCard";

import styles from "./PastEvents.module.scss";

const PastEvents = async () => {
  const events = await getEventsDescending();
  const now = new Date();
  const pastEvents = events.filter(({ start_time, end_time }) =>
    end_time ? new Date(end_time) < now : new Date(start_time) < now
  );

  if (pastEvents.length === 0)
    return <h2 className="no-events">No past events!</h2>;

  return (
    <div className={styles.events}>
      {pastEvents.map((event) => (
        <EventCard
          title={event.name}
          startTime={event.start_time}
          endTime={event.end_time}
          image={event.cover.source}
          key={event.id}
        />
      ))}
    </div>
  );
};

export default PastEvents;
