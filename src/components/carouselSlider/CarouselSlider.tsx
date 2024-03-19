import { FC, useState, useRef } from "react";

import ArrowSmallIcon from "../ui/_icons/ArrowSmallIcon";
import CarouselSliderPopup from "./CarouselSliderPopup";
import ImageWrapper from "../imageWrapper/ImageWrapper";

import styles from "./carouselSlider.module.scss";

type IProps = {
	slides: { title: string; src: string }[];
};

const CarouselSlider: FC<IProps> = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [popupSlideToSet, setPopupSlideToSet] = useState(0);
	const [popup, setPopup] = useState(false);
	const slidesWrapperRef = useRef<HTMLUListElement>(null);
	const slidesRef = useRef<(HTMLLIElement | null)[]>([]);

	const handleScroll = (): void => {
		const windowWidth = window.innerWidth;
		slidesRef.current.forEach((ref, i) => {
			const { left, right } = ref?.getBoundingClientRect() ?? { left: 0, right: 0 };
			if (left > 0 / 2 && right < windowWidth) setCurrentSlide(i);
		});
	};

	const changeSlide = (direction: "next" | "previous") => () => {
		const containerRef = slidesWrapperRef.current;
		const currentLeft: number = containerRef?.scrollLeft ?? 0;
		const slideWidth: number = slidesRef.current[0]?.clientWidth ?? 0;
		const gap = 8.5;
		const slideProportion = 62.5;
		const span = slideWidth * (1 + gap / slideProportion);

		containerRef?.scrollTo(
			{
				left: currentLeft + (direction === 'next' ? span : -span),
				behavior: 'smooth',
			}
		);
	};

	const togglePopup = (order: number) => () => {
		setPopupSlideToSet(order);
		setPopup(true);
	};

	const slidesContent = slides.map((item, i) => {
		return (
			<li ref={ref => slidesRef.current[i] = ref} key={i} 
				className={`
					${styles.slider__slide} 
					${currentSlide !== i ? styles.inActive : ''}
				`}
			>
				<button className={styles.slider__slideWrapper} onClick={togglePopup(i)}>
					<ImageWrapper
						quality={100}
						src={item.src}
						width={900} height={900} alt="render" draggable={false}
					/>
				</button>
				<p>{item.title}</p>
			</li>
		);
	});

	return (
		<>
			<div className={styles.slider}>
				<ul 
					ref={slidesWrapperRef} 
					onScroll={handleScroll}
					className={`${styles.slider__wrapper}`}
				>	
					{slides.length > 0 && slidesContent}
				</ul>

				<div className={styles.slider__dots}>
					{slides.map((_, i) => {
						return <span key={i} className={i === currentSlide ? styles.activeDot : ''}/>;
					})}
				</div>
				
				<button type="button"
					className={`${styles.slider__rightChange} ${styles.shiftedButton}`}
					onClick={changeSlide("next")}
				>
					<ArrowSmallIcon />
				</button>

				<button type="button"
					className={`${styles.slider__leftChange} ${styles.shiftedButton}`}
					onClick={changeSlide("previous")}
				>
					<ArrowSmallIcon />
				</button>
			</div>

			{slides.length > 0 && 
				<CarouselSliderPopup
					size="small"
					slides={slides} 
					state={[popup, setPopup]} 
					slideToSet={popupSlideToSet}
				/>
			}
		</>
	);
};

export default CarouselSlider;