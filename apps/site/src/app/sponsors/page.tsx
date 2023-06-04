import type { Metadata } from "next";
import clsx from "clsx";
import Header from "@/lib/common/components/Header";
// import { CurrentSponsors } from "app/components";
import people from "./people.svg";

import styles from "./page.module.scss";

const title = "Events — Hack at UCI";
// TODO: write description for events page
const description = "";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default async function Home() {
  return (
    <div className={styles.sponsorship}>
      <Header title="Sponsor Information" />

      <div className={clsx("container", styles.sponsorContent)}>
        <h2>HackUCI Profile</h2>
        <div className={clsx(styles.flexCenter, styles.sponsorHackuci)}>
          <form action="https://hackuci.com">
            <input type="submit" value="hackuci.com" />
          </form>
        </div>
        <div className={styles.sponsorAttendees}>
          <img src={people.src} alt="people" />
          <span>500+ Attendees</span>
        </div>
        <div className={clsx(styles.sponsorStats, styles.sponsorHackuciStats)}>
          <div className={styles.sponsorStat}>
            <p>35%</p>
            <label>Female</label>
          </div>
          <div className={styles.sponsorStat}>
            <p>92%</p>
            <label>Submitted a Project</label>
          </div>
          <div className={styles.sponsorStat}>
            <p>46%</p>
            <label>First Time Hackers</label>
          </div>
          <div className={styles.sponsorStat}>
            <p>17</p>
            <label>Majors</label>
          </div>
          <div className={styles.sponsorStat}>
            <p>15</p>
            <label>Colleges</label>
          </div>
        </div>
        <div className={styles.sponsorContentAnecdote} id="Bianca">
          <p>
            "I really enjoyed the experience of working on a coding project with
            other people that wanted to achieve the same goal! Though I was
            focused on coding the whole time, the environment itself was
            actually very peaceful and friendly so I felt at ease. I really
            appreciated that there were so many events that hackers could go to
            for de-stressing, like the Bob Ross painting or smash bros
            tournament."
          </p>
          <div className="text-right">
            <b> - Bianca, Hacker</b>
          </div>
        </div>
        <div className={styles.sponsorContentAnecdote} id="Lizzie">
          <p>
            {" "}
            "Honestly, this was the best hackathon I've been to in a while.
            HackUCI had a great community, was well-run, and we saw good hacks,
            as well as built some connections with students for the future. I
            felt connected to more hackers than usual even though I hadn't met
            them before."
          </p>
          <div className={styles.textRight}>
            <b>- Lizzie, Twilio</b>
          </div>
        </div>

        <div>
          <h2 className={styles.sponsorContentHeading}>ZotHacks Profile</h2>
          <div className={styles.sponsorHackuci}>
            <form action="https://zothacks.com">
              <input
                type="submit"
                className={styles.zothacksBtn}
                value="zothacks.com"
              />
            </form>
          </div>
          <div className={styles.sponsorAttendees}>
            <img src={people.src} alt="people" />
            <span>60+ Attendees</span>
          </div>
          <div className={styles.sponsorStats}>
            <div className={styles.sponsorStat}>
              <p>58%</p>
              <label>Female</label>
            </div>
            <div className={styles.sponsorStat}>
              <p>90%</p>
              <label>Submitted a Project</label>
            </div>
            <div className={styles.sponsorStat}>
              <p>92%</p>
              <label>Would Attend Another Hackathon</label>
            </div>
            <div className={styles.sponsorStat}>
              <p>78%</p>
              <label>First-Time Hackers</label>
            </div>
            <div className={styles.sponsorStat}>
              <p>10</p>
              <label>Majors</label>
            </div>
          </div>
          <div
            className={clsx(
              styles.sponsorContentAnecdote,
              styles.sponsorZothackAnecdote
            )}
            id="Cher"
          >
            <p>
              {" "}
              "ZotHacks was my very first hackathon, and I really liked how the
              event leaned towards beginners. I loved how helpful and
              enthusiastic my mentor was in guiding our group and the
              collaborative and encouraging environment the other hackers and
              mentors helped create."
            </p>
            <div className={styles.textRight}>
              <b>- Cher, Hacker</b>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.container}>
        <h2>Our Past Sponsors</h2>
        {/* <CurrentSponsors /> */}
      </section>
    </div>
  );
}
