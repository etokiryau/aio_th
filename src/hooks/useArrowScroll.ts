export const useArrowScroll = (
    ref: React.RefObject<HTMLElement>,
    step: number
) => {
    const handleArrowScroll = (direction: 'back' | 'forth') => () => {
        const target = ref.current;

        if (target) {
            const currentPosition: number = target.scrollLeft;
            const newPosition = currentPosition + (direction === 'back' ? - step : + step);
            
            target.scrollTo({
                left: Math.round(newPosition),
                behavior: "smooth",
            });
        }
    };

    return [handleArrowScroll];
};