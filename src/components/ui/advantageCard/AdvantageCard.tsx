import type { FC } from "react";

import styles from "./advantageCard.module.scss";

interface IProps {
    value: string
    description: string
}

const AdvatageCard: FC<IProps> = ({ value, description }) => {

    return (
        <div className={styles.advantage}>
            <p className={styles.advantage__value}>{value}</p>
            <p className={styles.advantage__description}>{description}</p>
        </div>
    );
};

export default AdvatageCard;