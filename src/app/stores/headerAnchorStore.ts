/* import { create } from "zustand";

// Define o formato do estado para controlar o link ativo no cabeçalho
interface HeaderAnchorStore {
	activeAnchor: string; // Âncora/link atualmente ativo
	setActiveAnchor: (anchor: string) => void; // Função para atualizar a âncora ativa
}

// Cria a store com Zustand para gerenciar a âncora ativa do cabeçalho
const useHeaderAnchorStore = create<HeaderAnchorStore>((set) => ({
	activeAnchor: "", // Valor inicial da âncora

	setActiveAnchor(anchor) {
		// Atualiza a âncora ativa com o novo valor
		return set({ activeAnchor: anchor });
	},
}));

export default useHeaderAnchorStore; // Exporta o hook para uso nos componentes
 */
