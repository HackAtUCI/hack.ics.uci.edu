import clsx from "clsx";
import Link from "next/link";
import Header from "@/lib/common/components/Header";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header title="Hack at UCI">
        <a className={styles.involvedButton} href="#newsletter">
          Get Involved
        </a>
      </Header>

      <main>
        <div className={styles.homeContent}>
          <section className={clsx(styles.about, "container")}>
            <h2>About Us</h2>
            <p>
              Hack at UCI is a student-run organization established to provide
              students with a platform to learn, grow, and develop technology of
              the future. Established in 2013, our mission is to promote,
              educate, and enhance the community around us by giving students
              the platform to learn and create technology.
            </p>
            <Link href="/about">Read More About Us &gt;</Link>
          </section>

          <section className={clsx(styles.events)}>
            <div className="container">
              <h2>Our Events</h2>
              <p>
                We aim to celebrate UC Irvine&lsquo;s spirit of innovation by
                organizing ZotHacks, a beginner friendly hackathon, and HackUCI,
                Orange County&lsquo;s largest hackathon. Furthermore, our
                organization regularly host technical and professional
                development workshops that teach students industry-relevant
                skills.
              </p>
              <Link href="/events">View Upcoming Events &gt;</Link>
              {/* <HomeCards /> */}
            </div>
          </section>

          <section className={clsx(styles.sponsors, "container")}>
            <h2>Thank you to Our Sponsors</h2>
            <p>
              Hack at UCI&lsquo;s hackathons and events wouldn&lsquo;t be
              possible without the aid from our amazing sponsors that have
              helped us over the years. Each donation goes right back into
              creating an outstanding experience for everyone who attends.
            </p>
            <Link href="/sponsors">View Sponsorship Information &gt;</Link>
            {/* <CurrentSponsors /> */}
          </section>
        </div>

        {/* <Newsletter /> */}
      </main>
    </>
  );
}
