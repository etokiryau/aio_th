import { FC, useState } from "react";

import VideoWrapper from "@/components/videoWrapper/VideoWrapper";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import AdvatageCard from "@/components/ui/advantageCard/AdvantageCard";
import CarouselSlider from "@/components/carouselSlider/CarouselSlider";
import QuizForm from "@/components/quizForm/QuizForm";
import LearnForm from "@/components/learnForm/LearnForm";
import AdvantageBento2 from "@/components/ui/advantageBento2/AdvantageBento2";
import ReasonGraph from "@/components/reasonGraph/ReasonGraph";
import Opportunities from "@/components/opportunities/Opportunities";

import styles from "./home.module.scss";

const Home: FC = () => {
    const [isLearn, setIsLearn] = useState(false);

    const metadata = { 
        title: 'High-tech real estate in Thailand: houses and villas for investments and accommodations', 
        description: 'Lots of houses and villas in the best Thailand locations. Maximum detail of all projects, which are designed with own digital ecosystem. Unique real estate market offer from the developer, due to most effective and modern technologies allow to get 12% passive income 40% ROI in the first year.', 
        url: process.env.SITE_URL ?? '',
    };

    const slides = [
        { title: 'Project 1', src: '/img/project1.jpg' },
        { title: 'Project 2', src: '/img/project2.jpg' },
        { title: 'Project 3', src: '/img/project3.jpg' },
        { title: 'Project 4', src: '/img/project4.jpg' },
        { title: 'Project 5', src: '/img/project5.jpg' },
        { title: 'Project 6', src: '/img/project6.jpg' },
        { title: 'Project 7', src: '/img/project7.jpg' },
        { title: 'Project 8', src: '/img/project8.jpg' },
        { title: 'Project 9', src: '/img/project9.jpg' },
        { title: 'Project 10', src: '/img/project10.jpg' },
        { title: 'Project 11', src: '/img/project11.jpg' },
        { title: 'Project 12', src: '/img/project12.jpg' },
    ];

    const toggleForm = () => setIsLearn(prev => !prev);

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
                    <Opportunities />
                </section>

                <section className={styles.home__bento}>
                    <AdvantageBento2 />
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
                    <h2>The main reasons to invest in Thailand property</h2>
                    <ul>
                        <li>
                            <ReasonGraph 
                                xData={['2015', '2016', '2018', '2019', '2020', '2021', '2022', '2023', '2024']}
                                yData={[30, 34, 38]}
                                src="/img/graph1.png"
                                imgHeight={490}
                                text="Thai baht to US dollar exchange rate"
                                yPadding="10px 0 50px"
                            />
                        </li>

                        <li>
                            <ReasonGraph 
                                xData={['2011', '2016', '2021']}
                                yData={[104, 130, 156]}
                                src="/img/graph2.png"
                                imgHeight={315}
                                text="House price index"
                                yPadding="10px 0 30px"
                            />
                        </li>

                        <li>
                            <ReasonGraph 
                                xData={['1999', '2007', '2015', '2023']}
                                yData={[160, 330, 500]}
                                src="/img/graph3.png"
                                imgHeight={376}
                                text="Thailand GDP graph (USD billion)"
                                yPadding="10px 0 50px"
                            />
                        </li>
                    </ul>
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