import Experience from "./shared/Experience";

export default function Curriculum() {
    return (
        <div id="curriculum" className="bg-slate-950">
            <section data-aos="fade-up" className="w-screen h-fit py-20">
                <div className="wrapper flex flex-col pt-10">
                    <p className="text-2xl md:text-3xl mb-2 font-bold">Saiba mais</p>
                    <h1 className="text-6xl mb-3 font-bold text-cyan-400">Meu Currículo</h1>
                    <p className="text-lg md:text-xl my-1.5">Veja minha experiência acadêmica e profissional</p>
                    <div className="flex flex-row justify-between">
                        <aside className="flex flex-col w-[45%]">
                            <h1 className="text-4xl font-bold text-violet-500 mt-10">Acadêmico</h1>
                            <Experience
                                type={"academic"}
                                title="Engenharia da computação"
                                description="Bacharel"
                                start="2022"
                                end="2027"
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
                        <aside className="flex flex-col w-[45%]">
                            <h1 className="text-4xl font-bold text-violet-500 mt-10">Profissional</h1>
                            <Experience
                                type={"job"}
                                title="Desenvolvimento do site JAL Corp"
                                description="Serviço independente"
                                start="2025"
                                end="2025"
                            />
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}