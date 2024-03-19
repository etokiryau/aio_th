import { useEffect } from "react";

export const useOnClickOutside = (
    refs: React.RefObject<HTMLElement>[],
    trigger: boolean,
    handler: () => void
) => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (refs.every((ref) => !ref.current?.contains(e.target as Node))) {
                handler();
            }
        };

        if (trigger) document.addEventListener('mousedown', handleClick);
        else document.removeEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [trigger]);
};