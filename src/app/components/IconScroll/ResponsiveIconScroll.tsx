import useMobile from "@/app/utils/hooks/UseMobile";
import "./scrollAnimation.css";

export default function ResponsiveIconScroll() {
	const isMobile = useMobile();

	return (
		<>
			<div
				className={`${
					isMobile ? "flex" : "hidden"
				} justify-center relative h-8 aspect-[2/3] rounded-md border-2 border-gray-300`}
			>
				<div className="absolute h-0.5 w-1/2 bg-gray-300 rounded-b-sm"></div>
				<div id="touch-scroll"></div>
				<div className="absolute h-0.5 w-1/2 bg-gray-600 rounded-sm bottom-0.5"></div>
			</div>
			<div
				className={`${
					isMobile ? "hidden" : "flex"
				} flex justify-center relative h-8 aspect-[2/3] rounded-3xl border-2 border-gray-300`}
			>
				<div id="mouse-scroll"></div>
			</div>
		</>
	);
}
