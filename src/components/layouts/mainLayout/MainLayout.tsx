import { FC, PropsWithChildren } from "react";

import Header from "./header/Header";
// import Footer from "./footer/Footer";
import Meta from "@/components/seo/Meta";
import type { TMeta } from "@/components/seo/meta.types";

import styles from "./mainLayout.module.scss";

type IProps = TMeta & {
    footer?: boolean
};

const MainLayout: FC<PropsWithChildren<IProps>> = (props) => {
    const { title, isPublic, children, footer = true } = props;

    const metadata = !isPublic 
    ? { title, isPublic }
    : {
        isPublic,
        title,
        description: props.description,
        url: props.url,
    };

    return (
        <Meta {...metadata} >
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            {/* {footer && <Footer />} */}
        </Meta>
    );
};

export default MainLayout;