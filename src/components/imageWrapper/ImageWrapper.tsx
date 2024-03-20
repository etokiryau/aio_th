import { FC, useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

import styles from "./imageWrapper.module.scss";

interface IProps extends ImageProps {
    contain?: boolean
}

const ImageWrapper: FC<IProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const { alt, contain = false, ...otherProps } = props;

    useEffect(() => {
        setIsLoaded(false);
    }, [props.src]);

    const handleOnLoad = () => setIsLoaded(true);

    return (
        <div className={`${styles.wrapper} ${isLoaded ? styles.loaded : ''}`}>
            {!isLoaded && 
                <div className={styles.wrapper__spinner} />
            }
            <Image
                alt={alt}
                {...otherProps}
                className={contain ? styles.contain : ''}
                onLoad={handleOnLoad}
            />
        </div>
        
    );
};

export default ImageWrapper;