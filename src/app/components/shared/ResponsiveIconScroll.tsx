import { isMobile } from "react-device-detect";
import "../../styles/scrollAnimation.css"

export default function ResponsiveIconScroll() {
    return (
        <>
            {isMobile ?
                <div className="relative flex justify-center h-8 aspect-[2/3] rounded-md border-2 border-gray-300">
                    <div className="absolute h-0.5 w-1/2 bg-gray-300 rounded-b-sm"></div>
                    <div id="touch-scroll"></div>
                </div>
                :
                <div className="relative flex justify-center h-8 aspect-[2/3] rounded-3xl border-2 border-gray-300">
                    <div id="mouse-scroll"></div>
                </div>
            }
        </>
    );
}