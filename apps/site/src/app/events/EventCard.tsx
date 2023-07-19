import { z } from "zod";
import { Cover } from "./getEvents";
import { client } from "@/lib/sanity/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const urlBuilder = imageUrlBuilder(client);

import styles from "./EventCard.module.scss";

interface EventCard {
	image: z.infer<typeof Cover>;
	title: string;
	startTime: string;
	endTime?: string;
}
const EventCard = ({ image, title, startTime, endTime }: EventCard) => {
	const dateTimeFormat = new Intl.DateTimeFormat("en", {
		dateStyle: "medium",
		timeStyle: "short",
	});

	return (
		<article className={styles.eventCard}>
			<img
				className={styles.coverImage}
				src={urlBuilder.image(image).url()}
				alt={image.alt}
			/>
			<div className={styles.details}>
				<time
					dateTime={new Date(startTime).toISOString()}
					className={styles.time}
				>
					{endTime
						? dateTimeFormat.formatRange(new Date(startTime), new Date(endTime))
						: dateTimeFormat.format(new Date(startTime))}
				</time>
				<h1 className={styles.title}>{title}</h1>
			</div>
			{/* <div className="modal-top-part">
          <div className="header-line-event-card">
            <span className="popup-title-event-card">{props.title}</span>
          </div>
          <p className="modal-subtext-date">
            <div>
              <Moment format="MMM D, YYYY">{props.date}</Moment>
              <span> · </span>
              <Moment format="h:mma">{props.date}</Moment>
              <span> - </span>
              <Moment format="h:mma">{props.end_date}</Moment>
            </div>
          </p>
          <button className="popup-button-event-card">
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="popup-button-event-card-link"
            >
              <span>View on Facebook</span>
            </a>
          </button>
        </div>
        <div className="desc-text-wrapper-event-card">
          <p className="desc-text-event-card">
            <Linkify> {props.description}</Linkify>
          </p>
        </div>
        <div className="modal-bottom-part">
          <button onClick={closeModal} className="close-button-event-card">
            Close
          </button>
        </div> */}
		</article>
	);
};

export default EventCard;
