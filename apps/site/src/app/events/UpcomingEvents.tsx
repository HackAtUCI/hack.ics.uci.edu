import { getEventsDescending } from "./getEvents";
import EventCard from "./EventCard";
import calendar from "./calendar-alt-regular.svg";

import styles from "./UpcomingEvents.module.scss";

const UpcomingEvents = async () => {
  const events = await getEventsDescending();
  const now = new Date();
  const upcomingEvents = events.filter(({ start_time, end_time }) =>
    end_time ? new Date(end_time) > now : new Date(start_time) > now
  );

  if (upcomingEvents.length === 0)
    return (
      <div className={styles.noEvents}>
        <img className={styles.calendarIcon} src={calendar.src} alt="" />
        <h2 className={styles.title}>No Upcoming Events</h2>
        <span className={styles.stayTuned}>
          Stay tuned for upcoming events!
        </span>
      </div>
    );

  return (
    <>
      <h2 className={styles.title}>Upcoming Events</h2>
      <div className={styles.events}>
        {upcomingEvents.reverse().map((event) => (
          <EventCard
            title={event.name}
            startTime={event.start_time}
            endTime={event.end_time}
            // description={event.description}
            image={event.cover.source}
            key={event.id}
          />
        ))}
      </div>
    </>
  );
};

export default UpcomingEvents;
