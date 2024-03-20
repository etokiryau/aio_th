import type { FC } from "react";

const ShareIcon: FC = () => {
    const style1: React.CSSProperties = {
        fill: 'none',
        strokeMiterlimit: '10',
        strokeWidth: '5px',
        stroke: 'url(#linear-gradient)',
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 145.94 139.61">
            <defs>
                <linearGradient id="linear-gradient" y1="69.81" x2="145.94" y2="69.81" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ededed"/>
                    <stop offset="1" stopColor="#3c3c3b"/>
                </linearGradient>
            </defs>
            <g>
                <g id="Layer_1-2" data-name="Layer 1">
                    <path style={style1} d="M80.12,105.92V75.31a88.86,88.86,0,0,0-41.23,12,89.89,89.89,0,0,0-36.36,41.1C2.36,122.84,1.85,83,33.4,56.11,50.9,41.19,70.11,37.18,80.12,36V5.33L142,56.8Z"/>
                </g>
            </g>
        </svg>
    );
};

export default ShareIcon;