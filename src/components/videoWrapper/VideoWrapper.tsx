import { FC, useRef, useEffect, useState } from "react";

import PauseIcon from "../ui/_icons/PauseIcon";

import styles from "./videoWrapper.module.scss";

interface IProps {
	src: string[]
}

const VideoWrapper: FC<IProps> = ({ src }) => {
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
		const video = e.target as HTMLVideoElement;

        const currentTime: number = video.currentTime;
        const duration: number = video.duration;

		const progress: number = (currentTime / duration) * 100;
		setProgress(progress);
    };

    const togglePlay = async () => {
        const video = videoRef.current;
		if (video) {
			isPlaying ? video.pause() : await video.play();
			setIsPlaying(prev => !prev);
		}        
    };

	useEffect(() => {
		const options: IntersectionObserverInit = {
			rootMargin: "50px",
			threshold: .4,
		};

		const observer = new IntersectionObserver(entries => {
			entries.forEach(async (entry) => {
				if (
					entry.isIntersecting &&
					entry.target.hasAttribute("data-autoplay")
				) {
					await (entry.target as HTMLVideoElement).play();
					setIsPlaying(true);
				} else {
					(entry.target as HTMLVideoElement).pause();
					setIsPlaying(false);
				}
			});
		}, options);

		if (videoRef.current) observer.observe(videoRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		setIsPlaying(true);
	}, [src]);

	return (
		<div className={styles.video}>
			<video
				ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
				key={src.join()}
				preload="auto"
				data-autoplay
				playsInline
				autoPlay
				loop
				muted
			>
				{src.map((item, i) => {
					return <source key={i} src={item} type="video/mp4" />;
				})}
			</video>
			<button type="button" className={styles.video__control} onClick={togglePlay}>
				<div className={styles.video__control_circle}>
					<svg>
						<circle 
							cx="50%" cy="50%" r="16" 
							strokeDashoffset={100 - (100 * (100 - progress)) / 100}
						/>
					</svg>
				</div>
                
                {!isPlaying && <div className={styles.triangle}></div>}
                {isPlaying && 
					<div className={styles.pause}>
						<PauseIcon />
					</div>
				}
			</button>
		</div>
	);
};

export default VideoWrapper;