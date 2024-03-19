import { useState, useEffect } from "react";

interface IViewport {
    viewportWidth: number, 
    viewportHeight: number
}

interface IReturnData extends IViewport {
    isLess577: boolean | null,
    isLess769: boolean | null,
    isLess866: boolean | null,
    isLess1201: boolean | null,
}

export const useViewportSize = (): IReturnData => {
    const [viewportSize, setViewportSize] = useState<IViewport>({
        viewportWidth: 0,
        viewportHeight: 0,
    });
    const [isLess577, setIsLess577] = useState<boolean | null>(null);
    const [isLess769, setIsLess769] = useState<boolean | null>(null);
    const [isLess866, setIsLess866] = useState<boolean | null>(null);
    const [isLess1201, setIsLess1201] = useState<boolean | null>(null);

    useEffect(() => {
        setViewportSize({
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (viewportSize.viewportWidth !== 0) {
            if (viewportSize.viewportWidth > 576) {
                isLess577 !== false && setIsLess577(false);
            } else {
                !isLess577 && setIsLess577(true);
            }
        }
    }, [viewportSize.viewportWidth]);

    useEffect(() => {
        if (viewportSize.viewportWidth !== 0) {
            if (viewportSize.viewportWidth > 768) {
                isLess769 !== false && setIsLess769(false);
            } else {
                !isLess769 && setIsLess769(true);
            }
        }
    }, [viewportSize.viewportWidth]);

    useEffect(() => {
        if (viewportSize.viewportWidth !== 0) {
            if (viewportSize.viewportWidth > 866) {
                isLess866 !== false && setIsLess866(false);
            } else {
                !isLess866 && setIsLess866(true);
            }
        }
    }, [viewportSize.viewportWidth]);

    useEffect(() => {
        if (viewportSize.viewportWidth !== 0) {
            if (viewportSize.viewportWidth > 1200) {
                isLess769 !== false && setIsLess1201(false);
            } else {
                !isLess769 && setIsLess1201(true);
            }
        }
    }, [viewportSize.viewportWidth]);
  
    return { ...viewportSize, isLess577, isLess769, isLess866, isLess1201 };
};