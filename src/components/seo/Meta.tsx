import { FC, PropsWithChildren } from "react";
import type { TMeta } from "./meta.types";
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
                        <meta name="keywords" content="High-tech real estate, Thailand properties, Investment opportunities, Houses and villas, Accommodations in Thailand, Prime locations in Thailand, Detailed project information, Digital ecosystem integration, Unique real estate market off,er Passive income opportunities, Modern technologies in real e,state High ROI (Return on Investmen,t) Real estate developer in Thai,land Innovative property solutions, Investment potential in Thailand" />
                    </> 
                    : <meta name="robots" content="noindex, nofollow" />
                }
            </Head>
            {children}
        </>
    );
};

export default Meta;