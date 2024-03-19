import { FC, PropsWithChildren } from "react";

import Spinner from "../ui/spinner/Spinner";

import styles from "./loadingButton.module.scss";

type TButtonStyle = 'dark' | 'light' | 'red' | 'blue' | 'green' | 'yellow'
interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title?: string,
    isloading: boolean,
    styleType: TButtonStyle
}

const LoadingButton: FC<PropsWithChildren<IProps>> = ({ title, isloading, disabled, type = 'button', styleType, onClick, className, id, children }) => {
    return (
        <button
            id={id}
            className={`${styles.button} ${styles[styleType]} ${className}`} 
            type={type} 
            disabled={disabled}
            onClick={onClick}
        >
            <div className={styles.button__text}>
                {title ? title : children}
                {isloading && 
                    <div className={styles.button__text_spinner}>
                        <Spinner styleType={styleType} />
                    </div>
                }
            </div>
        </button>
    );
};

export default LoadingButton;