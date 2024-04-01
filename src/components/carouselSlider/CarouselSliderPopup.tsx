import { FC, useEffect, useRef } from "react";

import ArrowSmallIcon from "../ui/_icons/ArrowSmallIcon";
import CrossIcon from "../ui/_icons/CrossIcon";
import { useOverflowHidden } from "@/hooks/useOverflowHidden";
import ImageWrapper from "../imageWrapper/ImageWrapper";

import styles from "./carouselSliderPopup.module.scss";

type IProps = {
	slides: string[];
	state: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
	slideToSet: number;
	size?: 'large' | 'small'
};

const CarouselSliderPopup: FC<IProps> = ({ slides, state, slideToSet, size = 'large' }) => {
	const [popup, setPopup] = state;
	const popupRef = useRef<HTMLDivElement>(null);
	const popupSlidesRef = useRef<HTMLLIElement[] | null[]>([]);
	const slidesNumber = slides.length;

	const expandedPopupSlides = [slides[slidesNumber - 1], ...slides, slides[0]];

	useOverflowHidden(popup);

	useEffect(() => {
		const slideWidth = popupSlidesRef.current[0]?.clientWidth;
		if (slideWidth && popupRef.current?.children) {
			popupRef.current.children[0].scrollTo({ left: slideWidth * (slideToSet + 1) });
		}
	}, [slideToSet]);

	const changeSlide = (direction: "next" | "previous") => () => {
		const containerRef = popupRef.current?.children[0];
		const currentLeft: number = containerRef?.scrollLeft ?? 0;
		const containerWidth: number = containerRef?.scrollWidth ?? 0;
		const slideWidth: number = popupSlidesRef.current[0]?.clientWidth ?? 0;

		if (direction === 'previous' && currentLeft === 0) {
			containerRef?.scrollTo({ left: slideWidth * (slidesNumber), behavior: 'auto' });
			setTimeout(() => {
				containerRef?.scrollTo({ left: slideWidth * (slidesNumber - 1), behavior: 'smooth' });
			}, 100);
		} else if (direction === 'next' && containerWidth - slideWidth - currentLeft < 5) {
			containerRef?.scrollTo({ left: slideWidth, behavior: 'auto' });
			setTimeout(() => {
				containerRef?.scrollTo({ left: slideWidth * 2, behavior: 'smooth' });
			}, 100);
		} else {
			containerRef?.scrollTo(
				{
					left: currentLeft + (direction === 'next' ? slideWidth : -slideWidth),
					behavior: 'smooth',
				}
			);
		}
	};

	const closePopup = (event: React.MouseEvent<HTMLDivElement>): void => {
		event?.target === popupRef.current && setPopup(false);
	};

	const togglePopup = () => setPopup(prev => !prev);

	const popupSlides = expandedPopupSlides.map((item, i) => {
		return (
			<li
				key={i}
				ref={ref => popupSlidesRef.current[i] = ref}
				className={styles.popup__content_slide}
			>
				<ImageWrapper
					quality={100}
					src={item}
					width={900} height={900} alt="render" draggable={false}
				/>
			</li>
		);
	});

	return (
		<div
			ref={popupRef}
			onClick={closePopup}
			className={`${styles.popup} ${popup ? styles.activePopup : ""}`}
		>
			<ul className={`${styles.popup__content} ${size === 'small' ? styles.contain : ''}`}>
				{popupSlides}
			</ul>
			<button type="button"
				className={styles.popup__rightChange}
				onClick={changeSlide("next")}
			>
				<ArrowSmallIcon />
			</button>

			<button type="button"
				className={styles.popup__leftChange}
				onClick={changeSlide("previous")}
			>
				<ArrowSmallIcon />
			</button>

			<button type="button"
				className={styles.popup__close}
				onClick={togglePopup}
			>
				<CrossIcon width={16} height={16} />
			</button>
		</div>
	);
};

export default CarouselSliderPopup;