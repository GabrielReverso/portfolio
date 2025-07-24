import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

/**
 * Hook que detecta se o usuário está em um dispositivo móvel.
 *
 * @returns `true` se for um dispositivo móvel, senão `false`
 */
const useMobile = () => {
	const [mobile, setMobile] = useState(false); // Estado para armazenar se é mobile

	useEffect(() => {
		// Atualiza o estado com base na detecção do dispositivo
		setMobile(isMobile);
	}, [isMobile]);

	return mobile;
};

export default useMobile;
