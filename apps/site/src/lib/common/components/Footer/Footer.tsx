/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import { getSocials } from "@/lib/queries/getSocials";
import Icon from "@/lib/common/components/Icon";

import styles from "./Footer.module.scss";

import HackIcon from "../../assets/logo.svg";

interface FooterProps {
  style?: CSSProperties;
}
const Footer = async ({ style }: FooterProps) => {
  const socials = await getSocials();

  if (!socials) throw new Error();

  return (
    <footer className={styles.footer} style={style}>
      <a href="/">
        <img src={HackIcon.src} alt="Home" />
      </a>
      {socials.map(({ _key, icon, link }) => (
        <a key={_key} href={link}>
          <Icon icon={icon} size="100%" color="#fff" />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
