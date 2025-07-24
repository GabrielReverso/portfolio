/* import { useEffect } from "react";
import useHeaderAnchorStore from "@/app/stores/headerAnchorStore";
import useIsVisible from "./UseIsVisible";
 */
/**
 * Hook personalizado que define a âncora ativa no cabeçalho
 * com base na visibilidade de um elemento na tela.
 *
 * @param anchor - Nome da âncora a ser ativada
 * @param options - Opções do IntersectionObserver (threshold, rootMargin, etc.)
 * @returns `elementRef` - Referência que deve ser atribuída ao elemento observado
 */
/* export default function useHeaderAnchor(
	anchor: string,
	options: IntersectionObserverInit = { threshold: 0.001 }
) {
	// Observa a visibilidade do elemento na viewport
	const [elementRef, isVisible] = useIsVisible(options);

	// Função para atualizar a âncora ativa na store
	const setAnchor = useHeaderAnchorStore((s) => s.setActiveAnchor);

	useEffect(() => {
		// Quando o elemento estiver visível, define a âncora como ativa
		if (isVisible) {
			setAnchor(anchor);
		}
	}, [isVisible]);

	// Retorna a referência que será usada no elemento DOM
	return elementRef;
}
 */
