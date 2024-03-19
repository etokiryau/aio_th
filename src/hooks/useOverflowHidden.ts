import { useEffect } from "react";

export const useOverflowHidden = (...dependencies: boolean[]) => {
    useEffect(() => {
        document.body.style.overflow = dependencies.some(item => item === true) ? 'hidden' : '';
    }, [...dependencies]);
};