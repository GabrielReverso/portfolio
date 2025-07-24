import { useEffect, useState, useRef } from "react";

/**
 * Hook que detecta se um elemento está visível na viewport usando IntersectionObserver.
 *
 * @param options - Configurações do IntersectionObserver (threshold, rootMargin, etc.)
 * @returns Uma tupla com:
 * - ref: Referência que deve ser atribuída ao elemento a ser observado
 * - isVisible: Booleano que indica se o elemento está visível na tela
 */
export default function useIsVisible(
	options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement | null>, boolean] {
	const [isVisible, setIsVisible] = useState(false); // Estado de visibilidade
	const ref = useRef<HTMLDivElement>(null); // Referência do elemento observado

	useEffect(() => {
		// Cria o observer com as opções fornecidas
		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting);
		}, options);

		// Inicia observação se o elemento existir
		if (ref.current) {
			observer.observe(ref.current);
		}

		// Limpa o observer ao desmontar ou mudar dependências
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [options, ref]);

	// Retorna a referência e o estado de visibilidade
	return [ref, isVisible];
}
