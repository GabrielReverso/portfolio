import Carousel from "../components/carousel/Carousel";
import Experience from "../components/Experience";
import FontelloIcon from "../components/shared/FontelloIcon";
import useHeaderAnchor from "../utils/hooks/UseHeaderAnchor";

export default function Curriculum() {
	const curriculumRef = useHeaderAnchor("curriculum");
	return (
		<div id="curriculum" className="bg-slate-950">
			<section
				ref={curriculumRef}
				data-aos="fade-up"
				className="w-screen h-fit pt-20"
			>
				<div className="wrapper flex flex-col pt-10">
					<p className="text-2xl lg:text-3xl mb-2 font-bold">
						Saiba mais
					</p>
					<h1 className="text-5xl lg:text-6xl mb-3 font-bold text-cyan-400">
						Meu Currículo
					</h1>
					<p className="text-lg lg:text-xl my-1.5">
						Veja minha experiência acadêmica e profissional
					</p>
					<div className="flex flex-col lg:flex-row gap-10 justify-between">
						<aside className="flex flex-col w-full">
							<h1 className="ml-4 md:ml-0 text-3xl lg:text-4xl font-bold mt-10 text-violet-400">
								<FontelloIcon
									classStyling="text-gray-50 mr-2"
									name={"icon-minus"}
								/>
								Acadêmico
							</h1>
							<Experience
								type={"academic"}
								title="Engenharia da computação"
								description="Bacharel"
								start="2022"
								end="2026"
								local="Universidade de Ribeirão Preto - UNAERP"
							/>
							<Experience
								type={"academic"}
								title="Técnico em automação industrial"
								description="Ensino técnico integrado ao médio"
								start="2018"
								end="2020"
								local="ETEC José Martimiano da Silva"
							/>
						</aside>
						<aside className="flex flex-col w-full">
							<h1 className="ml-4 md:ml-0 text-3xl lg:text-4xl font-bold mt-0 lg:mt-10 text-violet-400">
								<FontelloIcon
									classStyling="text-gray-50 mr-2"
									name={"icon-minus"}
								/>
								Profissional
							</h1>
							<Experience
								type={"job"}
								title="Desenvolvimento do site JAL Corp"
								description="Freelancer"
								start="2025"
								end="2025"
							/>
						</aside>
					</div>
				</div>
			</section>
			{/* <section data-aos="fade-up" className="w-screen h-fit pt-16 pb-36">
                <div className="wrapper flex flex-col pt-10">
                    <h1 className="text-5xl lg:text-6xl text-center mb-16 font-bold text-cyan-400">
                        Certificados
                    </h1>
                    <Carousel />
                </div>
            </section> */}
		</div>
	);
}
