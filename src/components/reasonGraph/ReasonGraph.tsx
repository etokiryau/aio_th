import type { FC, PropsWithChildren } from "react";

import ImageWrapper from "../imageWrapper/ImageWrapper";

import styles from "./reasonGraph.module.scss";

interface IProps {
    xData: (string | number)[]
    alt: string
    src: string
    imgHeight: number
}

const ReasonGraph: FC<PropsWithChildren<IProps>> = ({ xData, src, alt, imgHeight, children }) => {

    const xContent = xData.map((item, i) => <p key={i}>{item}</p>);

    return (
        <div className={styles.graph}>
            <div className={styles.graph__main}>
                <div className={styles.graph__main_wrapper}>
                    <div className={styles.graph__main_image}>
                        <ImageWrapper src={src} alt={alt} width={960} height={imgHeight} />
                    </div>
                    
                    <div className={styles.graph__main_down}>
                        {xContent}
                    </div>
                </div>
            </div>
            <div className={styles.graph__text}>{children}</div>
        </div>
    );
};

export default ReasonGraph;