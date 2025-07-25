import { useState } from "react";
import openNewTab from "../utils/functions/NewTab";
import ExpandableCard from "../components/ExpandableCard";
import FontelloIcon from "../components/shared/FontelloIcon";
import ProjectModal from "../components/ProjectModal";
import useHeaderAnchor from "../utils/hooks/UseHeaderAnchor";

export default function Projects() {
	const [isVisible, setVisible] = useState(false);
	const [modalType, setModalType] = useState("codap");

	const projectRef = useHeaderAnchor("projects");

	return (
		<>
			<ProjectModal
				isVisible={isVisible}
				onClose={() => setVisible(false)}
				type={modalType}
			/>
			<div className="bg-slate-950 svg-background" ref={projectRef}>
				<section data-aos="fade" className="w-screen h-fit py-20">
					<div
						id="projects"
						className="wrapper flex flex-col items-center pt-10"
					>
						<h1 className="text-6xl text-cyan-500 font-bold mb-10">
							Projetos
						</h1>
						<p className="text-center text-3xl">
							Veja alguns dos projetos mais importantes que
							participei
						</p>
						<button
							onClick={() =>
								openNewTab("https://github.com/GabrielReverso")
							}
							className="minimalistic animated-shadow relative h-16 w-full md:w-80 rounded-xl text-xl font-bold bg-[#24292e] mt-8 shadow-md shadow-[#0005] hover:bg-[#191d22] transition-all"
						>
							<FontelloIcon
								name={"icon-github-circled"}
								classStyling="mr-1 text-2xl"
							/>{" "}
							GitHub - Conheça Todos!
						</button>
						<div className="w-full flex flex-wrap justify-center my-10">
							<ExpandableCard
								setModalVisible={(type) => {
									setVisible(true);
									setModalType(type);
								}}
								aosDelay="100"
								title="Codap"
								description="Aplicativo Android interativo para aprender desenvolvimento web"
							/>
							<ExpandableCard
								setModalVisible={(type) => {
									setVisible(true);
									setModalType(type);
								}}
								aosDelay="200"
								title="Power Beast"
								description="Aplicativo desktop para monitoramento de bateria e recursos do sistema"
							/>
							<ExpandableCard
								setModalVisible={(type) => {
									setVisible(true);
									setModalType(type);
								}}
								aosDelay="300"
								title="J.I.R.A"
								description="Braço robótico controlado remotamente por aplicativo mobile"
							/>
							<ExpandableCard
								setModalVisible={(type) => {
									setVisible(true);
									setModalType(type);
								}}
								aosDelay="400"
								title="Cardapium"
								description="Site demonstrativo de um cardápio virtual"
							/>
							<ExpandableCard
								setModalVisible={(type) => {
									setVisible(true);
									setModalType(type);
								}}
								aosDelay="500"
								title="Enciclopet"
								description="Guia de raças de cães e gatos para Android e iOS"
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
