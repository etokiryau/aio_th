import { FC } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import InstagramIcon from "@/components/ui/_icons/media/InstangramIcon";
import LinkedInIcon from "@/components/ui/_icons/media/LinkedInIcon";
import MailIcon from "@/components/ui/_icons/MailIcon";
import TelegramIcon from "@/components/ui/_icons/media/TelegramIcon";

import styles from "./footer.module.scss";

const Footer: FC = () => {
	const { t } = useTranslation('mainLayout');

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__left}>
				<p>{t('rights')}</p>
			</div>
			<div className={styles.footer__right}>
				<div className={styles.footer__right_block}>
					<p>{t('blog')}</p>
					<Link href="/blog">{t('blogLink')}</Link>
				</div>
				<div className={styles.footer__right_block}>
					<p>{t('about')}</p>
					<Link href="/questions">{t('faq')}</Link>
					<Link href="/policy">{t('policy')}</Link>
				</div>
				<div className={styles.footer__right_block}>
					<p>{t('contacts')}</p>
					<div>
						<a href="#">
							<InstagramIcon width={20} height={20} />
						</a>
						<a href="#">
							<LinkedInIcon width={20} height={18} />
						</a>
						<a href="#">
							<MailIcon width={20} height={16} />
						</a>
						<a href="#">
							<TelegramIcon width={20} height={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
