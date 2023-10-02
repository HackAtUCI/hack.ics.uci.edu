import clsx from "clsx";
import styles from "./button.module.scss";

export interface ButtonProps {
	label: string;
	size?: "small" | "large";
	color?: "sand";
}

const Button = ({ label, size = "small", color = "sand" }: ButtonProps) => {
	return (
		<button className={clsx(styles["button"], styles[size], styles[color])}>
			{label}
		</button>
	);
};

export default Button;
