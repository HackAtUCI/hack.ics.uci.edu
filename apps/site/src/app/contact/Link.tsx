import styles from "./Icon.module.scss";

interface IconProps {
  title: string;
  link: string;
  image: string;
}
const Link = ({ title, link, image }: IconProps) => {
  return (
    <div className={styles.contactIcon}>
      <a href={link}>
        <div className={styles.contactLabel}>{title}</div>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default Link;
