import { useState, useEffect } from 'react';

export default function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}