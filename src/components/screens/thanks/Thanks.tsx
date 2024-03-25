import type { FC } from "react";
import Script from "next/script";

import SuccessIcon from "@/components/ui/_icons/SuccessIcon";

import styles from "./thanks.module.scss";

const Thanks: FC = () => {

    return (
        <div className={styles.thanks}>
            <div className={styles.thanks__wrapper}>
                <SuccessIcon />
                <div className={styles.thanks__text}>
                    <p>Your application is successfully sent!</p>
                    <p>Await feedback from our office.</p>
                </div>
            </div>
        </div>
    );
};

export default Thanks;