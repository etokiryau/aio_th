import type { FC } from "react";

import styles from "./spinner.module.scss";

interface IProps {
    styleType: 'dark' | 'light' | 'red' | 'blue' | 'green' | 'yellow'
    size?: number
}

const Spinner: FC<IProps> = ({ styleType, size = 18 }) => {

    return (
        <div className={`${styles.spinner} ${styles[`${styleType + 'Spinner'}`]}`}>
            <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
        </div>
    );
};

export default Spinner;