import { isMobile } from "react-device-detect";

export default function ResponsiveIconScroll() {
    return (
        <>
            {isMobile ?
                <div>

                </div>
                :
                <div id="mouse" className="h-8 aspect-[2/3] rounded-3xl border border-white">
                </div>
            }
        </>
    );
}