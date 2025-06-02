import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const useMobile = () => {
	const [mobile, setMobile] = useState(false);

	useEffect(() => {
		setMobile(isMobile);
	}, [isMobile]);

	return mobile;
};

export default useMobile;
