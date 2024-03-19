import { FC, PropsWithChildren } from "react";
import { TMeta } from "./meta.types";
import Head from "next/head";

const Meta: FC<PropsWithChildren<TMeta>> = (props) => {
    const { title, isPublic, children } = props;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:type" content="website" />
                <meta name="og:title" content={title} />
                <meta property="og:site_name" content="AIO" />
                {isPublic 
                    ? <>
                        <meta name="description" content={props.description} />
                        <meta name="og:description" content={props.description} />
                        <meta property="og:url" content={props.url} />
                        <meta name="keywords" content="quality design, affordable prices, architecture, construction, project, plans, cottage, house, private house" />
                    </> 
                    : <meta name="robots" content="noindex, nofollow" />
                }
            </Head>
            {children}
        </>
    );
};

export default Meta;