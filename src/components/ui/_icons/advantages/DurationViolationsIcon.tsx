import type { FC } from "react";

const DurationViolationsIcon: FC = () => {
    const style1: React.CSSProperties = {
        fill: '#dadada',
    };

    const style2: React.CSSProperties = {
        fill: 'none',
        strokeMiterlimit: '10',
        strokeWidth: '6px',
        strokeLinecap: 'round',
        stroke: '#dadada',
    };

    const style3: React.CSSProperties = {
        fill: '#878787',
    };
    
    const style4: React.CSSProperties = {
        fill: '#none',
        stroke: '#878787',
        strokeMiterlimit: '10',
        strokeWidth: '6px',
        strokeLinecap: 'round',
    };
    const style5: React.CSSProperties = {
        fill: 'none',
        strokeMiterlimit: '10',
        strokeWidth: '2px',
        strokeLinecap: 'round',
        stroke: '#dadada',
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.71 90.31">
            <g>
                <g>
                    <path style={style1} d="M23.16,33.27v4.1H2.35V33.85l10.11-11a39.85,39.85,0,0,0,2.62-3.24,10.61,10.61,0,0,0,1.35-2.46,6.22,6.22,0,0,0,.4-2.15,5.77,5.77,0,0,0-.55-2.59,4.17,4.17,0,0,0-1.58-1.77A4.77,4.77,0,0,0,12.16,10a5.28,5.28,0,0,0-2.9.75,4.54,4.54,0,0,0-1.77,2,7.17,7.17,0,0,0-.6,3H1.75A10.09,10.09,0,0,1,3,10.8,9.06,9.06,0,0,1,6.57,7.22a11.25,11.25,0,0,1,5.65-1.33,12.23,12.23,0,0,1,5.29,1,7.58,7.58,0,0,1,3.32,3A8.72,8.72,0,0,1,22,14.44a9.24,9.24,0,0,1-.47,2.88,14,14,0,0,1-1.33,2.85,25,25,0,0,1-2,2.83c-.78.95-1.64,1.9-2.58,2.87l-6.72,7.4Z" transform="translate(-1.75 -5.89)"/>
                    <path style={style1} d="M27.68,34.81a2.74,2.74,0,0,1,.82-2,3.36,3.36,0,0,1,4.4,0,2.8,2.8,0,0,1,.8,2,2.75,2.75,0,0,1-.8,2,3,3,0,0,1-2.21.81,3,3,0,0,1-2.19-.81A2.69,2.69,0,0,1,27.68,34.81Z" transform="translate(-1.75 -5.89)"/>
                    <line style={style2} x1="54.87" y1="14.25" x2="138.71" y2="14.25"/>
                    <path style={style3} d="M16.38,64.78V95.94H11.24V70.88L3.63,73.46V69.22l12.13-4.44Z" transform="translate(-1.75 -5.89)"/>
                    <path style={style3} d="M27.68,93.38a2.73,2.73,0,0,1,.82-2,2.93,2.93,0,0,1,2.19-.82,2.93,2.93,0,0,1,2.21.82,2.79,2.79,0,0,1,.8,2,2.76,2.76,0,0,1-.8,2,3,3,0,0,1-2.21.81,3,3,0,0,1-2.19-.81A2.7,2.7,0,0,1,27.68,93.38Z" transform="translate(-1.75 -5.89)"/>
                    <line style={style4} x1="54.87" y1="72.83" x2="138.71" y2="72.83"/>
                    <path style={style5} d="M139.61,34.74l-6.13-7.49-6.14,7.49" transform="translate(-1.75 -5.89)"/>
                    <path style={style5} d="M127.34,63.71l6.14,7.49,6.13-7.49" transform="translate(-1.75 -5.89)"/>
                    <line style={style5} x1="131.73" y1="21.37" x2="131.73" y2="65.31"/>
                </g>
            </g>
        </svg>
    );
};

export default DurationViolationsIcon;