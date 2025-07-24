import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

interface WindowObject {
	innerWidth: number;
	innerHeight: number;
}

/**
 * Hook que retorna as dimensões da janela (viewport) do navegador.
 * Retorna `null` em dispositivos móveis para evitar cálculos desnecessários.
 *
 * @returns Objeto com `innerWidth` e `innerHeight` ou `null` se for mobile
 */
export function useWindow(): WindowObject | null {
	// Se for dispositivo móvel, retorna null imediatamente
	if (isMobile) return null;

	const [windowObject, setWindowObject] = useState<WindowObject | null>(null);

	useEffect(() => {
		// Verifica se está no ambiente browser
		if (typeof window !== "undefined") {
			// Seta as dimensões iniciais da janela
			setWindowObject({
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight,
			});
		}
	}, []);

	return windowObject;
}
