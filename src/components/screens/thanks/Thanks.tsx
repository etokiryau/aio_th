/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import Link from "next/link";
import Head from "next/head";

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
            <noscript>
                <img height="1" width="1" style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${process.env.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
                />
            </noscript>
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