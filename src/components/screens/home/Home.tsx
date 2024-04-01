import { FC, useState } from "react";

import VideoWrapper from "@/components/videoWrapper/VideoWrapper";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import AdvatageCard from "@/components/ui/advantageCard/AdvantageCard";
import CarouselSlider from "@/components/carouselSlider/CarouselSlider";
import QuizForm from "@/components/quizForm/QuizForm";
import LearnForm from "@/components/learnForm/LearnForm";
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
        { src: '/img/project1.jpg', date: '3st quarter 2022', area: 370, floors: '2 floors', design: 'Individual minimalistic', pool: 'no pool' },
        { src: '/img/project2.jpg', date: '1st quarter 2023', area: 190, floors: '1 floor', design: 'Individual', pool: 'with pool' },
        { src: '/img/project3.jpg', date: '1st quarter 2023', area: 790, floors: '3 floors', design: 'Traditional Thailand', pool: 'with pool' },
        { src: '/img/project4.jpg', date: '4st quarter 2023', area: 540, floors: '2 floors', design: 'Modern Thailand ', pool: 'with pool' },
        { src: '/img/project5.jpg', date: '1st quarter 2022', area: 1100, floors: '2 floors', design: 'Individual Hi-Tech', pool: 'with pool' },
        { src: '/img/project6.jpg', date: '4st quarter 2021', area: 590, floors: '2 floors', design: 'Individual', pool: 'no pool' },
        { src: '/img/project7.jpg', date: '3st quarter 2023', area: 980, floors: '2 floors', design: 'Individual Hi-Tech', pool: 'with pool' },
        { src: '/img/project8.jpg', date: '1st quarter 2022', area: 1200, floors: '2 floors', design: 'Individual Hi-Tech', pool: 'no pool' },
        { src: '/img/project9.jpg', date: '2st quarter 2021', area: 480, floors: '2 floors', design: 'Modern European', pool: 'no pool' },
        { src: '/img/project11.jpg', date: '4st quarter 2023', area: 1200, floors: '2 floors', design: 'Individual minimalistic', pool: 'no pool' },
        { src: '/img/project12.jpg', date: '3st quarter 2023', area: 1000, floors: '3 floors', design: 'Modern Thailand', pool: 'with pool' },
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
                                alt="Thai baht to US dollar exchange rate"
                                yPadding="10px 0 50px"
                            >
                                <p>
                                    Thailand&apos;s official currency, the baht, has demonstrated <span>strong</span> {" "}
                                    stability for a currency in a developing country. From the beginning of {" "}
                                    <span>2000</span> to <span>2023</span>, the baht strengthened against the US dollar 
                                    by <span>6.9%</span>.
                                </p>
                            </ReasonGraph>
                        </li>

                        <li>
                            <ReasonGraph 
                                xData={['2011', '2016', '2021']}
                                yData={[104, 130, 156]}
                                src="/img/graph2.png"
                                imgHeight={315}
                                alt="The housing price index"
                                yPadding="10px 0 30px"
                            >
                                <p>
                                    The housing price index, which is calculated from the cost of a single villa with a 
                                    yard, has shown <span>stable growth</span> since the beginning of observation,
                                    confirming the <span>reliability and prospects of investing</span> in real estate 
                                    in Thailand.
                                </p>
                            </ReasonGraph>
                        </li>

                        <li>
                            <ReasonGraph 
                                xData={['1999', '2007', '2015', '2023']}
                                yData={[160, 330, 500]}
                                src="/img/graph3.png"
                                imgHeight={376}
                                alt="Thailand GDP graph (USD billion)"
                                yPadding="10px 0 50px"
                            >
                                <p>
                                    Thailand GDP graph (USD billion). Over the past <span>four decades</span>. Thailand 
                                    has made <span>remarkable</span> progress in economic development. Thailand&apos;s 
                                    economy ranks second in the region and shows steady growth.
                                </p>
                            </ReasonGraph>
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