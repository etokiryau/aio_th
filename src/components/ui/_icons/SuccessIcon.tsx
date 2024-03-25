import type { FC } from "react";
import vars from '@/styles/_variables.module.scss';

interface IProps {
    width?: number
    height?: number
}

const SuccessIcon: FC<IProps> = ({ width = 25, height = 25 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="11.5" stroke={vars.greenStatusColor} strokeWidth="2"/>
            <path d="M8 13L11 16L17 10" stroke={vars.greenStatusColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default SuccessIcon;