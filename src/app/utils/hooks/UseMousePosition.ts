import React from "react";
import { isMobile } from "react-device-detect";

/**
 * Hook para rastrear a posição do mouse relativa a um elemento específico ou à janela.
 * Retorna {x: 0, y: 0} automaticamente em dispositivos móveis.
 *
 * @param elementId - ID do elemento para calcular a posição relativa ao mesmo (opcional)
 * @returns Objeto com as coordenadas do mouse { x, y }
 */
const useMousePosition = (elementId?: string) => {
	// Em dispositivos móveis, não rastreamos a posição do mouse
	if (isMobile) return { x: 0, y: 0 };

	const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		let mouseListener: (ev: MouseEvent) => void;
		let targetElement: HTMLElement | null = elementId
			? document.getElementById(elementId)
			: null;

		if (targetElement) {
			// Calcula posição do mouse relativa ao elemento
			mouseListener = (ev: MouseEvent) => {
				const rect = targetElement!.getBoundingClientRect();
				setMousePosition({
					x: ev.clientX - rect.left,
					y: ev.clientY - rect.top,
				});
			};
			targetElement.addEventListener("mousemove", mouseListener);
		} else {
			// Calcula posição do mouse relativa à janela
			mouseListener = (ev: MouseEvent) => {
				setMousePosition({ x: ev.clientX, y: ev.clientY });
			};
			window.addEventListener("mousemove", mouseListener);
		}

		// Limpa os event listeners ao desmontar o componente
		return () => {
			if (targetElement) {
				targetElement.removeEventListener("mousemove", mouseListener);
			} else {
				window.removeEventListener("mousemove", mouseListener);
			}
		};
	}, [elementId]);

	return mousePosition;
};

export default useMousePosition;
