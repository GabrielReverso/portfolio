import React from 'react';
const useMousePosition = (elementId?: string) => {
    const [
        mousePosition,
        setMousePosition
    ] = React.useState({ x: 0, y: 0 });
    React.useEffect(() => {
        let mouseListener;
        let targetElement: HTMLElement | null;
        if (elementId) {
            targetElement = document.getElementById(elementId)
        } else {
            targetElement = null
        }
        if (targetElement) {
            mouseListener = (ev: MouseEvent) => {
                const rect = targetElement.getBoundingClientRect();
                setMousePosition({
                    x: ev.clientX - rect.left,
                    y: ev.clientY - rect.top
                });
            };

            targetElement.addEventListener('mousemove', mouseListener);
        } else {
            mouseListener = (ev: MouseEvent) => {
                setMousePosition({ x: ev.clientX, y: ev.clientY });
            };
            window.addEventListener('mousemove', mouseListener);
        }

        return () => {
            if (targetElement) {
                targetElement.removeEventListener('mousemove', mouseListener);
            } else {
                window.removeEventListener('mousemove', mouseListener);
            }
        };
    }, []);

    return mousePosition;
};
export default useMousePosition;