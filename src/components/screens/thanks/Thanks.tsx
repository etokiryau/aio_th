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
            <Script id="pixel" strategy="lazyOnload">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1090830305464780');
                    fbq('track', 'PageView');
                `}
            </Script>
            <noscript>
                <img height="1" width="1" style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=1090830305464780&ev=PageView&noscript=1"
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