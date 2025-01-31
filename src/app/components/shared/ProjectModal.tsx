import { YouTubeEmbed } from "@next/third-parties/google";
import FontelloIcon from "./FontelloIcon";
import SimpleBar from 'simplebar-react';

import 'simplebar-react/dist/simplebar.min.css';
import Image from "next/image";
import openNewTab from "@/app/functions/NewTab";
import useWindowResize from "@/app/hooks/useWindowResize";
import { useEffect, useState } from "react";

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    type: string
}

export default function ProjectModal({ isVisible, onClose, type }: ModalProps) {

    const renderProject = () => {
        switch (type) {
            case "codap": {
                return <CodapModal />
            }
            case "powerbeast": {
                return <PowerBeastModal />
            }
            case "jira": {
                return <JiraModal />
            }
            case "cardapium": {
                return <CardapiumModal />
            }
            case "enciclopet": {
                return <EnciclopetModal />
            }
            default: {
                return <p>AAAAA</p>
            }
        }
    }

    return (
        <div className={`fixed z-50 top-0 left-0 bottom-0 right-0 h-screen w-screen bg-[#000b] ${isVisible ? "flex" : "hidden"} justify-center items-center backdrop-blur-sm`}>
            <div className="relative minimalistic animated-shadow w-[90%] h-[90%] md:w-[80%] md:h-[80%] rounded-2xl pt-16 pb-6 bg-[#0f0c29]">
                <div className="absolute top-4 right-4">
                    <button onClick={onClose}><FontelloIcon name={"icon-cancel"} classStyling="text-3xl" /></button>
                </div>
                <SimpleBar className="h-full overflow-y-auto overflow-x-hidden">
                    <div className="flex flex-col px-5 md:px-36 modal">
                        {renderProject()}
                    </div>
                </SimpleBar>
            </div>
        </div>
    );
}

function CodapModal() {
    const windowRef = useWindowResize()
    const [width, setWidth] = useState(700)

    useEffect(() => {
        if (windowRef.width >= 900) {
            setWidth(700)
        } else if (windowRef.width >= 700) {
            setWidth(500)
        } else {
            setWidth(300)
        }
    }, [windowRef])

    return (
        <>
            <h1 className="self-center font-bold text-3xl md:text-5xl text-cyan-400">CODAP</h1>
            <div className="flex flex-col mb-10">
                <div className="flex flex-col-reverse md:flex-row">
                    <Image className="self-center h-auto md:h-[500px] w-36 md:w-auto rounded-xl mr-0 mt-5 md:mt-0 md:mr-10 transition-all hover:scale-105" src={require("../../assets/Cody.webp")} alt="Imagem codap" loading="lazy" aria-hidden unoptimized style={{ filter: "drop-shadow(0 0 10px #00000070)" }} />
                    <div className="flex flex-col mt-5 md:my-auto">
                        <p className="text-lg md:text-2xl mb-5"><span onClick={() => openNewTab("https://codap.gabrielsimoesdeveloper.com.br")} className="project">Codap</span> é um aplicativo open-source Android desenvolvido em React Native por <span>Gabriel Reverso Pereira</span> e <span>Gabriel Simões</span> como proposta para o 14º desafio da engenharia da computação na Universidade de Ribeirão Preto (UNAERP), conquistando o primeiro lugar no desafio.</p>
                        <p className="text-lg md:text-2xl mb-5">O objetivo do <span onClick={() => openNewTab("https://codap.gabrielsimoesdeveloper.com.br")} className="project">Codap</span> é proporcionar uma educação prática em HTML, CSS e JavaScript para futuros desenvolvedores web. O aplicativo oferece diversas aulas interativas que permitem explorar e aprender sobre os fundamentos básicos e avançados do desenvolvimento web.</p>
                        <p className="text-lg md:text-2xl mb-3">Confira o site oficial: <span onClick={() => openNewTab("https://codap.gabrielsimoesdeveloper.com.br")}>https://codap.gabrielsimoesdeveloper.com.br</span></p>
                        <p className="text-lg md:text-2xl w-fit font-bold text-purple-400 cursor-pointer" onClick={() => openNewTab("https://github.com/gabrielsimoest/Codap")}><FontelloIcon name={"icon-github-circled"} />Repositório do GitHub</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-wrap md:flex-row items-center md:justify-center gap-10 my-10">
                    <Image className="h-auto md:h-[500px] w-60 md:w-auto rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Codap-1.webp")} alt="Imagem codap" loading="lazy" aria-hidden unoptimized />
                    <Image className="h-auto md:h-[500px] w-60 md:w-auto rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Codap-2.webp")} alt="Imagem codap" loading="lazy" aria-hidden unoptimized />
                    <Image className="h-auto md:h-[500px] w-60 md:w-auto rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Codap-4.webp")} alt="Imagem codap" loading="lazy" aria-hidden unoptimized />
                    <Image className="h-auto md:h-[500px] w-60 md:w-auto rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Codap-5.webp")} alt="Imagem codap" loading="lazy" aria-hidden unoptimized />
                </div>
            </div>
            <div className="flex flex-col w-full mb-10 pb-10 items-center">
                <YouTubeEmbed videoid="0AGsBIzTWEE" width={width} />
            </div>
        </>
    )
}

function PowerBeastModal() {
    const windowRef = useWindowResize()
    const [dragonWidth, setDragonWidth] = useState(700)
    const [align, setAlign] = useState("flex-row")

    useEffect(() => {
        if (windowRef.width <= 1500) {
            setDragonWidth(400)
            setAlign("flex-col-reverse")
        } else if (windowRef.width <= 1300) {
            setDragonWidth(400)
            setAlign("flex-col-reverse")
        } else {
            setDragonWidth(700)
            setAlign("flex-row")
        }
    }, [windowRef])

    return (
        <>
            <h1 className="self-center font-bold text-3xl md:text-5xl text-cyan-400">POWER BEAST</h1>
            <div className={`flex ${align} pt-8 mb-15`}>
                <Image className={`self-center h-auto w-56 lg:w-[500px] rounded-xl my-10 lg:my-0 mr-0 lg:mr-10 transition-all hover:scale-105`} src={require("../../assets/projects/powerbeast-icon.webp")} alt="Imagem Power Beast" loading="lazy" aria-hidden unoptimized style={{ filter: "drop-shadow(0 0 10px #00000060)" }} />
                <p className="text-lg md:text-2xl my-auto"><span onClick={() => openNewTab("https://powerbeast.com.br")} className="project">Power Beast</span> é um aplicativo de monitoramento e otimização de baterias de notebooks dedicado ao público gamer. Desenvolvido inicialmente em Go por <span>Gabriel Reverso Pereira</span> e <span>Felipe Granvile</span> como proposta para o 16º desafio de engenharia da computação na Universidade de Ribeirão Preto (UNAERP), onde alcançou o segundo lugar. Refeito recentemente utilizando React e Electron, proporcionando uma interface mais intuitiva e agradável aos usuários.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 mt-5 mb-16">
                <div className="my-auto">
                    <p className="text-lg md:text-2xl">Além de um otimizador e um overlay para monitoramento da bateria, o menu do <span onClick={() => openNewTab("https://powerbeast.com.br")} className="project">Power Beast</span> conta com as seguintes informações: </p>
                    <ul className="text-lg md:text-2xl list-inside list-disc pl-5 pt-5 marker:text-blue-500">
                        <li>Porcentagem da bateria</li>
                        <li>Vida útil</li>
                        <li>Tempo restante</li>
                        <li>Estado atual</li>
                    </ul>
                </div>
                <Image className={`self-center h-auto w-[95%] md:w-[${dragonWidth}px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105`} src={require("../../assets/projects/powerbeast-1.webp")} alt="Imagem Power Beast" loading="lazy" aria-hidden unoptimized />
            </div>
            <p className="text-lg md:text-2xl">Em informações avançadas é possível ver outras informações como: capacidade atual, capacidade de projeto, capacidade total e voltagem, além de informações da CPU e da memória RAM.</p>
            <div className="flex flex-col md:flex-wrap md:flex-row items-center md:justify-center gap-10 mt-10">
                <Image className="h-auto w-[90%] md:w-[45%] rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/powerbeast-2.webp")} alt="Imagem Power Beast" loading="lazy" aria-hidden unoptimized />
                <Image className="h-auto w-[90%] md:w-[45%] rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/powerbeast-3.webp")} alt="Imagem Power Beast" loading="lazy" aria-hidden unoptimized />
            </div>
            <p className="mb-10 mt-10 text-lg md:text-2xl">Confira o site oficial: <span onClick={() => openNewTab("https://powerbeast.com.br")}>powerbeast.com.br</span></p>
        </>
    )
}

function JiraModal() {
    const windowRef = useWindowResize()
    const [align, setAlign] = useState("flex-row")
    const [width, setWidth] = useState(700)

    useEffect(() => {
        if (windowRef.width <= 1250) {
            setAlign("flex-col-reverse")
        } else {
            setAlign("flex-row")
        }

        if (windowRef.width >= 900) {
            setWidth(700)
        } else if (windowRef.width >= 700) {
            setWidth(500)
        } else {
            setWidth(300)
        }

    }, [windowRef])

    return (
        <>
            <h1 className="self-center font-bold text-3xl md:text-5xl text-cyan-400">J.I.R.A</h1>
            <div className={`flex ${align} gap-10 pt-5 mb-15`}>
                <Image className="self-center h-auto w-[300px] lg:w-[400px] rounded-xl transition-all hover:scale-105" src={require("../../assets/projects/jira-logo.webp")} alt="Logo Jira" loading="lazy" aria-hidden unoptimized style={{ filter: "drop-shadow(0 0 20px #00000060)" }} />
                <div className="flex flex-col justify-around">
                    <p className="text-lg md:text-2xl"><span className="project no-link">J.I.R.A</span> é um manipulador róbotico com visão computacional, fabricado com impressora 3D e motorizado por ESP32. Inicialmente desenvolvido por <span>Otávio Ribeiro</span>, <span>Vitor Ferraz Marini</span> e <span>Felipe Granvile</span>, <span className="project no-link">J.I.R.A</span> é capaz de distinguir entre as cores azul, amarelo e vermelho e separar elas de acordo com seu algoritimo.</p>
                    <p className="text-lg md:text-2xl">Posteriormente, participei do desenvolvimento de um aplicativo multiplataforma utilizando React Native e Expo para o <span className="project no-link">J.I.R.A</span>. Este aplicativo permite controlar remotamente em tempo real o braço robótico através do aplicativo, utilizando uma comunicação HTTP com a ESP32.</p>
                </div>
            </div>
            <div className="flex flex-col w-full my-16 items-center">
                <YouTubeEmbed videoid="wC7iCR1UBZc" width={width} />
            </div>
        </>
    )
}

function CardapiumModal() {
    return (
        <>
            <h1 className="self-center font-bold text-3xl md:text-5xl text-cyan-400">CARDAPIUM</h1>
            <div className="flex flex-col pt-10 mb-15">
                <p className="text-lg md:text-2xl"><span className="project">Cardapium</span> é um site experimental desenvolvido por <span>Gabriel Reverso Pereira</span> e <span>Felipe Granvile</span>. Utilizando Vue.js e Tailwind, o site conta com um servidor PHP para simular um cardápio online.</p>
                <p className="text-lg md:text-2xl mt-5">O site possui código aberto e permite realizar login e cadastro. Além disso, os usuários podem efetuar pedidos de forma interativa.</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
                <Image className="h-auto w-[550px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Cardapium-1.webp")} alt="Imagem Cardapium" loading="lazy" aria-hidden unoptimized />
                <Image className="h-auto w-[550px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Cardapium-2.webp")} alt="Imagem Cardapium" loading="lazy" aria-hidden unoptimized />
            </div>
            <p className="my-10 text-lg md:text-2xl font-bold text-purple-400 cursor-pointer" onClick={() => openNewTab("https://github.com/GabrielReverso/cardapium")}><FontelloIcon name={"icon-github-circled"} />Repositório do GitHub</p>
        </>
    )
}

function EnciclopetModal() {
    const windowRef = useWindowResize()
    const [width, setWidth] = useState(700)

    useEffect(() => {
        if (windowRef.width >= 900) {
            setWidth(700)
        } else if (windowRef.width >= 700) {
            setWidth(500)
        } else {
            setWidth(300)
        }
    }, [windowRef])

    return (
        <>
            <h1 className="self-center font-bold text-3xl md:text-5xl text-cyan-400">ENCICLOPET</h1>
            <div className="flex flex-col pt-10 mb-15">
                <p className="text-lg md:text-2xl"><span className="project no-link">Enciclopet</span> é um aplicativo guia de raças multiplataforma desenvolvido em React Native e Expo por <span>Gabriel Reverso Pereira</span> e <span>Antony Lampa</span> como proposta para o 18º desafio da engenharia da computação na Universidade de Ribeirão Preto (UNAERP), chegando nas finais do desafio.</p>
                <p className="text-lg md:text-2xl mt-5">O aplicativo contém mais de 50 raças de cães e gatos para os usuários explorarem e descobrir. Além disso, possui uma seção dedicada às doenças mais comuns que os pets podem ter.</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
                <Image className="h-[400px] w-auto rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Enciclopet-1.webp")} alt="Imagem Enciclopet" loading="lazy" aria-hidden unoptimized />
                <Image className="h-[400px] w-auto rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Enciclopet-3.webp")} alt="Imagem Enciclopet" loading="lazy" aria-hidden unoptimized />
                <Image className="h-[400px] w-auto rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Enciclopet-4.webp")} alt="Imagem Enciclopet" loading="lazy" aria-hidden unoptimized />
                <Image className="h-[400px] w-auto rounded-xl shadow-lg shadow-black transition-all hover:scale-105" src={require("../../assets/projects/Enciclopet-2.webp")} alt="Imagem Enciclopet" loading="lazy" aria-hidden unoptimized />
            </div>
            <div className="flex flex-col w-full my-16 items-center">
                <YouTubeEmbed videoid="dbHEjlDOqZY" width={width} />
            </div>
        </>
    )
}