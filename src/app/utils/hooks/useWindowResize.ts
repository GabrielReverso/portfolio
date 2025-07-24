import { useState, useEffect } from "react";

/**
 * Hook que retorna as dimensões da janela (viewport) e as atualiza em tempo real
 * sempre que a janela for redimensionada.
 *
 * @returns Objeto com `width` e `height` da janela
 */
export default function useWindowResize() {
	const [windowSize, setWindowSize] = useState({
		width: 1024, // Valor inicial padrão
		height: 768,
	});

	useEffect(() => {
		// Função chamada ao redimensionar a janela
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Adiciona o listener de resize
		window.addEventListener("resize", handleResize);

		// Chamada inicial para garantir valores corretos
		handleResize();

		// Remove o listener ao desmontar
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}
