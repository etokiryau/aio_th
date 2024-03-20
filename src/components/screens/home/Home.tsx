import { FC, useEffect, useRef, useState } from "react";

import VideoWrapper from "@/components/videoWrapper/VideoWrapper";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import AdvatageCard from "@/components/ui/advantageCard/AdvantageCard";
import CarouselSlider from "@/components/carouselSlider/CarouselSlider";
import QuizForm from "@/components/quizForm/QuizForm";

import styles from "./home.module.scss";
import LearnForm from "@/components/learnForm/LearnForm";

interface IOpportunity {
    name: string
    description: string
    src: string[]
}

const Home: FC = () => {
    const [currentOpportunity, setCurrentOpportunity] = useState(0);
    const [isLearn, setIsLearn] = useState(false);
    const opportunityRefs = useRef<HTMLLIElement[] | null[]>([]);
    const opportunityMobileRefs = useRef<HTMLLIElement[] | null[]>([]);
    const mobileOppListRef = useRef<HTMLUListElement>(null);
    const metadata = { title: 'AIO house', description: 'Private construction', 
        url: process.env.SITE_URL ?? '',
    };

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

    const slides = [
        { title: 'Project 1', src: '/mock/project11.jpg' },
        { title: 'Project 1', src: '/mock/project12.jpg' },
        { title: 'Project 1', src: '/mock/project13.jpg' },
        { title: 'Project 1', src: '/mock/Screenshot_21.png' },
    ];

    useEffect(() => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const ref = mobileOppListRef.current;

        const handleScroll = () => {
            opportunityRefs.current.forEach((ref, i) => {
                const { top, bottom } = ref?.getBoundingClientRect() ?? { top: 0, bottom: 0 };
                if (top < windowHeight / 2 - 80 && bottom > windowHeight / 2 + 80) setCurrentOpportunity(i);
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

    const toggleForm = () => setIsLearn(prev => !prev);

    const opportunitiesContent: JSX.Element[] = opportunitiesData.map((item, i) => {
        return (
            <li 
                ref={ref => opportunityRefs.current[i] = ref} 
                key={i} 
                className={`${styles.home__opportunities_content_list_single}
                    ${i === currentOpportunity ? styles.active : ''}
                `}
            >
                <p id={styles.name}>{item.name}</p>
                <p id={styles.description}>{item.description}</p>
            </li>
        );
    });

    return (
        <MainLayout isPublic={true} {...metadata}>
            <div className={styles.home}>
                <LearnForm state={[isLearn, setIsLearn]} />

                <section className={styles.home__head}>
                    <div className={styles.home__head_up}>
                        <div className={styles.home__head_up_left}>
                            <h1>Buy a villa in Thailand</h1>
                            <button type="button" onClick={toggleForm}>Learn more</button>
                        </div>
                        
                        <div className={styles.home__head_up_right}>
                            <VideoWrapper src={["/video/mainVideo.mp4"]} />
                        </div>
                    </div>

                    <div className={styles.home__head_down}>
                        <AdvatageCard value="40%" description="ROI in year one" />
                        <AdvatageCard value="12%" description="Passive income" />
                        <AdvatageCard value="32%" description="Cost reduction" />
                        <AdvatageCard value="100%" description="Process transparency" />
                    </div>
                </section>
                

                <section className={styles.home__opportunities}>
                    <h2>Unique proprietary construction management platform</h2>
                    <div className={styles.home__opportunities_content}>
                        <div className={styles.home__opportunities_content_position}>
                            <div />
                        </div>
                        <ul className={styles.home__opportunities_content_list}>
                            {opportunitiesContent} 
                        </ul>
                        <div className={styles.home__opportunities_content_media}>
                            <div className={styles.home__opportunities_content_media_content}>
                                <VideoWrapper src={opportunitiesData[currentOpportunity].src} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.home__opportunities_mobileContent}>
                        <ul ref={mobileOppListRef} className={styles.home__opportunities_mobileContent_list}>
                            {opportunitiesData.map((item, i) => {
                                return (
                                    <li 
                                        key={i}
                                        ref={ref => opportunityMobileRefs.current[i] = ref}
                                        className={styles.home__opportunities_mobileContent_list_single}
                                    >
                                        <VideoWrapper src={item.src} />
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className={styles.home__opportunities_mobileContent_indexes}>
                            {opportunitiesData.map((_, i) => {
                                return (
                                    <li
                                        key={i}
                                        className={currentOpportunity === i ? styles.activeIndex : ''}
                                    />
                                );
                            })}
                        </ul>
                        <div className={styles.home__opportunities_mobileContent_info}>
                            <div className={styles.home__opportunities_mobileContent_info_up}>
                                <p id={styles.name}>{opportunitiesData[currentOpportunity].name}</p>
                            </div>
                            <p id={styles.description}>{opportunitiesData[currentOpportunity].description}</p>
                        </div>
                    </div>
                </section>

                <section className={styles.home__projects}>
                    <h2>Released projects</h2>
                    <div className={styles.home__projects_slider}>
                        <CarouselSlider slides={slides} />
                    </div>
                    <div className={styles.home__projects_learn}>
                        <button type="button" onClick={toggleForm}>Learn more</button>
                    </div>
                </section>

                <section className={styles.home__reasons}>

                </section>

                <section className={styles.home__form}>
                    <h2>We will offer you a customised project and make calculations based on your preferences</h2>
                    <div className={styles.home__form_content}>
                        <QuizForm />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default Home;