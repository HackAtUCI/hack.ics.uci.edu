/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";

import styles from "./Footer.module.scss";

import HackIcon from "../../assets/logo.svg";
import MailIcon from "./mail_icon.svg";
import FacebookIcon from "./facebook_icon.svg";
import InstagramIcon from "./instagram_icon.svg";
import LinkedInIcon from "./linkedin_icon.svg";
import YouTubeIcon from "./youtube_icon.svg";

interface FooterProps {
  style?: CSSProperties;
}
function Footer({ style }: FooterProps) {
  return (
    <footer className={styles.footer} style={style}>
      <a href="/">
        <img src={HackIcon.src} alt="Home" />
      </a>
      <a href="mailto:hack@uci.edu">
        <img src={MailIcon.src} alt="Email Hack at UCI" />
      </a>
      <a href="https://www.facebook.com/UCI.Hack/">
        <img src={FacebookIcon.src} alt="Hack at UCI Facebook" />
      </a>
      <a href="https://www.instagram.com/hackatuci/">
        <img src={InstagramIcon.src} alt="Hack at UCI Instagram" />
      </a>
      <a href="https://www.linkedin.com/company/hackuci">
        <img src={LinkedInIcon.src} alt="Hack at UCI LinkedIn" />
      </a>
      <a href="https://www.youtube.com/channel/UCeQbk4CMo3mxPHMtY80PtFQ">
        <img src={YouTubeIcon.src} alt="Hack at UCI YouTube Channel" />
      </a>
    </footer>
  );
}

export default Footer;
