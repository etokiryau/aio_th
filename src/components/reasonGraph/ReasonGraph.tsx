import { FC } from "react";

import ImageWrapper from "../imageWrapper/ImageWrapper";

import styles from "./reasonGraph.module.scss";

interface IProps {
    xData: (string | number)[]
    yData: (string | number)[]
    src: string
    text: string
    yPadding: string
    imgHeight: number
}

const ReasonGraph: FC<IProps> = ({ xData, yData, src, text, yPadding, imgHeight }) => {

    const xContent = xData.map((item, i) => <p key={i}>{item}</p>);
    const yContent = yData.map((item, i) => <p key={i}>{item}</p>);

    return (
        <div className={styles.graph}>
            <div className={styles.graph__main}>
                <div className={styles.graph__main_left}>
                    <div className={styles.graph__main_left_wrapper}>
                        <div className={styles.graph__main_left_image}>
                            <ImageWrapper src={src} alt={text} width={960} height={imgHeight} />
                        </div>
                        
                        <div className={styles.graph__main_left_down}>
                            {xContent}
                        </div>
                    </div>
                </div>
                <div className={styles.graph__main_right} style={{ padding: yPadding }}>
                    {yContent}
                </div>
            </div>
            <p className={styles.graph__text}>{text}</p>
        </div>
    );
};

export default ReasonGraph;