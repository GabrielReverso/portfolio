import { YouTubeEmbed } from "@next/third-parties/google";
import FontelloIcon from "./FontelloIcon";
import SimpleBar from 'simplebar-react';

import 'simplebar-react/dist/simplebar.min.css';
import Image from "next/image";
import openNewTab from "@/app/functions/NewTab";

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
            <div className="relative minimalistic animated-shadow w-[80%] h-[80%] rounded-2xl py-12 bg-[#0f0c29]">
                <div className="absolute top-4 right-4">
                    <button onClick={onClose}><FontelloIcon name={"icon-cancel-circled-outline"} classStyling="text-3xl" /></button>
                </div>
                <SimpleBar className="h-full overflow-y-auto">
                    <div className="flex flex-col px-16 modal">
                        {renderProject()}
                    </div>
                </SimpleBar>
            </div>
        </div>
    );
}

function CodapModal() {
    return (
        <>
            <h1 className="self-center font-bold text-5xl text-cyan-400">CODAP</h1>
            <div className="flex flex-row justify-around pt-10 mb-10">
                <Image className="h-[500px] w-auto rounded-xl mr-10 shadow-lg shadow-black" src={require("../../assets/projects/Codap-1.webp")} alt="Imagem codap" loading="lazy" aria-hidden unoptimized />
                <Image className="h-[500px] w-auto rounded-xl mr-10 shadow-lg shadow-black" src={require("../../assets/projects/Codap-3.webp")} alt="Imagem codap" loading="lazy" aria-hidden unoptimized />
                <Image className="h-[500px] w-auto rounded-xl mr-10 shadow-lg shadow-black" src={require("../../assets/projects/Codap-2.webp")} alt="Imagem codap" loading="lazy" aria-hidden unoptimized />
                <div className="flex flex-col justify-evenly">
                    <p className="text-2xl"><span onClick={() => openNewTab("https://codap.gabrielsimoesdeveloper.com.br")} className="project">Codap</span> é um aplicativo open-source Android desenvolvido em React Native por <span>Gabriel Reverso Pereira</span> e <span>Gabriel Simões</span> como proposta para o 14º desafio da engenharia da computação na Universidade de Ribeirão Preto (UNAERP), conquistando o primeiro lugar no desafio.</p>
                    <p className="text-2xl">O objetivo do <span onClick={() => openNewTab("https://codap.gabrielsimoesdeveloper.com.br")} className="project">Codap</span> é proporcionar uma educação prática em HTML, CSS e JavaScript para futuros desenvolvedores web. O aplicativo oferece diversas aulas interativas que permitem explorar e aprender sobre os fundamentos básicos e avançados do desenvolvimento web.</p>
                </div>
            </div>
            <div className="flex flex-row">
                <p className="text-2xl mb-10">Veja um vídeo demonstrativo do Codap:</p>
            </div>
            <div className="flex justify-center h-[400px] w-full">
                <YouTubeEmbed videoid="2yJgwwDcgV8" width={800} />
            </div>
        </>
    )
}

function PowerBeastModal() {
    return (
        <>
            <h1 className="self-center font-bold text-4xl text-cyan-400">POWER BEAST</h1>
            <div className="flex flex-row">
                <p className="text-2xl">Power Beast é um aplicativo de monitoramento e otimização de baterias de notebooks dedicado ao público gamer. Desenvolvido inicialmente em Go por Gabriel Reverso Pereira e Felipe Granvile como proposta para o 16º desafio de engenharia da computação na Universidade de Ribeirão Preto (UNAERP), onde alcançou o segundo lugar. Refeito recentemente utilizando React e Electron, proporcionando uma interface mais intuitiva e agradável aos usuários.</p>
            </div>
            <div className="flex flex-row">
                <div>
                    <p className="text-2xl">Além de um otimizador e um overlay para monitoramento da bateria, o Power Beast conta com as seguintes informações: </p>
                    <ul className="text-2xl pl-5">
                        <li>Porcentagem da bateria</li>
                        <li>Vida útil</li>
                        <li>Carga atual, total e de projeto</li>
                        <li>Voltagem</li>
                        <li>Estado (carregando e descarregando)</li>
                        <li>Uso de CPU</li>
                        <li>Uso de RAM</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

function JiraModal() {
    return (
        <>
            <h1 className="self-center font-bold text-4xl text-cyan-400">J.I.R.A</h1>
            <div className="flex flex-row">
                <p className="text-2xl">J.I.R.A é um manipulador róbotico com visão computacional, fabricado com impressora 3D e motorizado por ESP32. Inicialmente desenvolvido por Otávio Ribeiro, Vitor Ferraz Marini e Felipe Granvile, J.I.R.A é capaz de distinguir entre as cores azul, amarelo e vermelho e separar elas de acordo com seu algoritimo.</p>
            </div>
            <div className="flex flex-row">
                <p className="text-2xl">Posteriormente, participei do desenvolvimento de um aplicativo multiplataforma utilizando React Native e Expo para o J.I.R.A. Este aplicativo permite controlar remotamente em tempo real o braço robótico através do aplicativo, utilizando uma comunicação HTTP com a ESP32.</p>
            </div>
        </>
    )
}

function CardapiumModal() {
    return (
        <>
            <h1 className="self-center font-bold text-4xl text-cyan-400">CARDAPIUM</h1>
            <div className="flex flex-row">
                <p className="text-2xl">Cardapium é um site experimental desenvolvido por Gabriel Reverso Pereira e Felipe Granvile. Utilizando Vue.js e Tailwind, o site conta com um servidor PHP para simular um cardápio online.</p>
            </div>
            <div className="flex flex-row">
                <p className="text-2xl">O site possui código aberto e permite realizar login e cadastro. Além disso, os usuários podem efetuar pedidos de forma interativa.</p>
            </div>
        </>
    )
}

function EnciclopetModal() {
    return (
        <>
            <h1 className="self-center font-bold text-4xl text-cyan-400">ENCICLOPET</h1>
            <div className="flex flex-row">
                <p className="text-2xl">Enciclopet é um aplicativo guia de raças multiplataforma desenvolvido em React Native e Expo por Gabriel Reverso Pereira e Antony Lampa como proposta para o 18º desafio da engenharia da computação na Universidade de Ribeirão Preto (UNAERP), chegando nas finais do desafio.</p>
            </div>
            <div className="flex flex-row">
                <p className="text-2xl">O aplicativo contém mais de 50 raças de cães e gatos para os usuários explorarem e descobrir. Além disso, possui uma seção dedicada às doenças mais comuns que os pets podem ter.</p>
            </div>
        </>
    )
}