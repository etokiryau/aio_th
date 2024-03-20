import type { FC } from "react";
import Link from "next/link";

import LogoIcon from "@/components/ui/_icons/LogoIcon";

import styles from "./header.module.scss";

const Header: FC = () => {

	return (
		<header className={styles.header}>
			<Link href="/" className={styles.header__link}>
				<LogoIcon />
				<p>AIO house</p>
			</Link>
			<Link href="tel:(657) 549-0404">(657) 549-0404</Link>
		</header>
	);
};

export default Header;