import { FC, useEffect, useRef, useState } from "react";

import styles from "./opportunities.module.scss";
import VideoWrapper from "../videoWrapper/VideoWrapper";

interface IOpportunity {
    name: string
    description: string
    src: string[]
}

const Opportunities: FC = () => {
    const [currentOpportunity, setCurrentOpportunity] = useState(0);
    const opportunityRefs = useRef<HTMLLIElement[] | null[]>([]);
    const opportunityMobileRefs = useRef<HTMLLIElement[] | null[]>([]);
    const mobileOppListRef = useRef<HTMLUListElement>(null);

    const opportunitiesData: IOpportunity[] = [
        {
            name: 'Virtual tour',
            description: 'Explore your favourite projects published in the catalogue in a realistic walk-through format online.',
            src: ['/video/mainVideoEnscape.mp4'],
        },
        {
            name: '3D project',
            description: 'Explore the project in detail before you buy with an engineering 3D model in a handy viewing tool.',
            src: ['/video/mainVideoAcquaintance.mp4'],
        },
        {
            name: 'Digital documentation',
            description: 'Get access to digital interactive documentation in your personal account immediately after purchasing a project.',
            src: ['/video/mainVideoAnyDevice.mp4'],
        },
        {
            name: 'Construction management',
            description: 'Monitor the progress of your home construction without specialised knowledge online within our ecosystem.',
            src: ['/video/mainVideoAccount.mp4'],
        },
    ];


    useEffect(() => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const ref = mobileOppListRef.current;

        const handleScroll = () => {
            opportunityRefs.current.forEach((ref, i) => {
                const { top, bottom } = ref?.getBoundingClientRect() ?? { top: 0, bottom: 0 };
                if (i=== 1) console.log(top, bottom, windowHeight / 2 + 87)
                if (
                    top < ((windowHeight - 87) / 2 + 17) && 
                    bottom > ((windowHeight - 87) / 2 + 157)
                ) setCurrentOpportunity(i);
            });
        };
        window.addEventListener("scroll", handleScroll);

        const handleMobileScroll = () => {
            opportunityMobileRefs.current.forEach((ref, i) => {
                const { left, right } = ref?.getBoundingClientRect() ?? { left: 0, right: 0 };
                if (left < 200 && right < windowWidth) setCurrentOpportunity(i);
            });
        };
        ref?.addEventListener("scroll", handleMobileScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            ref?.removeEventListener("scroll", handleMobileScroll);
        };
    }, []);

    const opportunitiesContent: JSX.Element[] = opportunitiesData.map((item, i) => {
        return (
            <li 
                ref={ref => opportunityRefs.current[i] = ref} 
                key={i} 
                className={`${styles.opportunities__laptop_list_single}
                    ${i === currentOpportunity ? styles.active : ''}
                `}
            >
                <p id={styles.name}>{item.name}</p>
                <p id={styles.description}>{item.description}</p>
            </li>
        );
    });

    return (
        <div className={styles.opportunities}>
           <div className={styles.opportunities__laptop}>
                <div className={styles.opportunities__laptop_position}>
                    <div />
                </div>
                <ul className={styles.opportunities__laptop_list}>
                    {opportunitiesContent} 
                </ul>
                <div className={styles.opportunities__laptop_media}>
                    <div className={styles.opportunities__laptop_media_content}>
                        <VideoWrapper src={opportunitiesData[currentOpportunity].src} />
                    </div>
                </div>
            </div>

            <div className={styles.opportunities__mobile}>
                <ul ref={mobileOppListRef} className={styles.opportunities__mobile_list}>
                    {opportunitiesData.map((item, i) => {
                        return (
                            <li 
                                key={i}
                                ref={ref => opportunityMobileRefs.current[i] = ref}
                                className={styles.opportunities__mobile_list_single}
                            >
                                <VideoWrapper src={item.src} />
                            </li>
                        );
                    })}
                </ul>
                <ul className={styles.opportunities__mobile_indexes}>
                    {opportunitiesData.map((_, i) => {
                        return (
                            <li
                                key={i}
                                className={currentOpportunity === i ? styles.activeIndex : ''}
                            />
                        );
                    })}
                </ul>
                <div className={styles.opportunities__mobile_info}>
                    <div className={styles.opportunities__mobile_info_up}>
                        <p id={styles.name}>{opportunitiesData[currentOpportunity].name}</p>
                    </div>
                    <p id={styles.description}>{opportunitiesData[currentOpportunity].description}</p>
                </div>
            </div>
        </div>
    );
};

export default Opportunities;