import type { FC } from "react";
import Image from "next/image";

import ShareIcon from "../_icons/advantages/ShareIcon";
import DurationViolationsIcon from "../_icons/advantages/DurationViolationsIcon";

import styles from "./advantageBento2.module.scss";

const AdvantageBento2: FC = () => {
    return (
        <div className={styles.bento}>
            <div className={`${styles.bento__tile} ${styles.video}`}>
                <div className={styles.video__frame}>
                    <div className={styles.video__frame_left}>
                        <div />
                        <div />
                    </div>
                    <div className={styles.video__frame_right}>
                        <div />
                        <div />
                    </div>
                </div>
                <p className={styles.medium}>Video monitoring</p>
                <p className={styles.video__live}>Live</p>
                <div className={styles.video__frame}>
                    <div className={styles.video__frame_left}>
                        <div />
                        <div />
                    </div>
                    <div className={styles.video__frame_right}>
                        <div />
                        <div />
                    </div>
                </div>
            </div>
            
            <div className={`${styles.bento__tile} ${styles.notifications}`}>
                <span className={styles.large}>Auto notifications of violations</span>

                <div>
                    <ul>
                        <li>
                            <div>
                                <Image src="/img/advantageWeather.svg" alt="Weather violation" width={120} height={110} />
                            </div>
                            <p className={styles.small}>Violations of weather of work performance</p>
                        </li>
                        <li>
                            <div>
                                <DurationViolationsIcon />
                            </div>
                            <p className={styles.small}>Violations of duration of work performance</p>
                        </li>
                        <li>
                            <div>
                            <Image src="/img/advantageSequence.svg" alt="Work sequence violation" width={120} height={110} />
                            </div>
                            <p className={styles.small}>Violations of subsequence of work performance</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`${styles.bento__tile} ${styles.chat}`}>
                <div className={styles.chat__messages}>
                    <div className={styles.chat__messages_single}>
                        <p className={styles.chat__messages_single_author}>F</p>
                        <p className={styles.chat__messages_single_text}>
                            Hi, John, did you finish the last brick wall?
                        </p>
                    </div>
                    <div className={styles.chat__messages_single}>
                        <p className={styles.chat__messages_single_text}>
                            Hello, Mr. Freeman! We finished it yesterday.
                        </p>
                        <p className={styles.chat__messages_single_author}>J</p>
                    </div>
                    <div className={styles.chat__messages_single}>
                        <p className={styles.chat__messages_single_author}>F</p>
                        <p className={styles.chat__messages_single_text}>Great to hear!</p>
                    </div>
                </div>
                
                <p className={styles.small}>Ability to <span>chat</span> about each work in different chats</p>
            </div>

            <div className={`${styles.bento__tile} ${styles.materials}`}>
                <p className={styles.large}>Сontrol of <span>building</span> materials</p>
            </div>

            <div className={`${styles.bento__tile} ${styles.share}`}>
                <p className={styles.medium}>Share</p>
                <ShareIcon />
                <p className={styles.small}></p>
            </div>
        </div>
    );
};

export default AdvantageBento2;