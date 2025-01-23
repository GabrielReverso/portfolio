// src/hooks/useWindow.ts

import { useEffect, useState } from 'react';

interface WindowObject {
    innerWidth: number;
    innerHeight: number;
}

export function useWindow(): WindowObject | null {
    const [windowObject, setWindowObject] = useState<WindowObject | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowObject({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            });
        }
    }, []);

    return windowObject;
}