import type { Metadata } from "next";
import clsx from "clsx";
import Header from "@/lib/common/components/Header";
import Link from "./Link";
import Mail from "./mail.svg";
import Facebook from "./facebook.svg";
import Instagram from "./instagram.svg";
import LinkedIn from "./linkedin.svg";
import YouTube from "./youtube.svg";

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

export default function Home() {
  return (
    <div className={styles.contact}>
      <Header title="Contact Us" />

      <div className={clsx("container", styles.contactIcons)}>
        <Link title="Email" link="mailto:hack@uci.edu" image={Mail.src} />
        <Link
          title="Facebook"
          link="https://www.facebook.com/UCI.Hack/"
          image={Facebook.src}
        />
        <Link
          title="Instagram"
          link="https://www.instagram.com/hackatuci/"
          image={Instagram.src}
        />
        <Link
          title="LinkedIn"
          link="https://www.linkedin.com/company/hackuci"
          image={LinkedIn.src}
        />
        <Link
          title="YouTube"
          link="https://www.youtube.com/channel/UCeQbk4CMo3mxPHMtY80PtFQ"
          image={YouTube.src}
        />
      </div>
      {/* <Newsletter /> */}
    </div>
  );
}
