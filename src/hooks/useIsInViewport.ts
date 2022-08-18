import { useEffect, useState } from "react";


export function useIsInViewport(ref: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }
    )
    useEffect(() => {
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);
    return isIntersecting;
}