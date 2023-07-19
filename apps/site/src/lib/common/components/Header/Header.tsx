import type { ReactNode } from "react";

import styles from "./Header.module.scss";

interface HeaderProps {
	title: string;
	children?: ReactNode;
}
const Header = ({ title, children }: HeaderProps) => {
	return (
		<header className={styles.globalHeader}>
			<div className={styles.headerImage}>
				<div className={styles.headerOverlay}>
					<h1>{title}</h1>
					{children}
				</div>
			</div>
		</header>
	);
};

export default Header;
