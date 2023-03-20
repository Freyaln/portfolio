import { useLayoutEffect, useState } from 'react';

const breakpoint = 850;

export const useDetectMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    useLayoutEffect(() => {
        const updateResolution = () => {
            window.innerWidth > breakpoint ? setIsMobile(false) : setIsMobile(true);
        };
        window.addEventListener('resize', updateResolution);
        updateResolution();
        return () => window.removeEventListener('resize', updateResolution);
    }, []);
    return isMobile;
};
