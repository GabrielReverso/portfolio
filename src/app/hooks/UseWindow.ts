import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

interface WindowObject {
	innerWidth: number;
	innerHeight: number;
}

export function useWindow(): WindowObject | null {
	if (isMobile) return null;

	const [windowObject, setWindowObject] = useState<WindowObject | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setWindowObject({
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight,
			});
		}
	}, []);

	return windowObject;
}
