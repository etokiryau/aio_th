import type { FC } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import SuccessIcon from "@/components/ui/_icons/SuccessIcon";

import styles from "./thanks.module.scss";

const Thanks: FC = () => {
    return (
        <>
            <Head>
                <title>Thanks!</title>
                <meta property="og:type" content="website" />
                <meta name="og:title" content="Thank you for application submition" />
                <meta property="og:site_name" content="AIO" />
            </Head>
            <div className={styles.thanks}>
                <div className={styles.thanks__wrapper}>
                    <SuccessIcon />
                    <div className={styles.thanks__text}>
                        <p>Your application is successfully sent!</p>
                        <p>Await feedback from our office.</p>
                    </div>
                </div>
                <Link href="/">Back to main page</Link>
            </div>
        </>
    );
};

export default Thanks;