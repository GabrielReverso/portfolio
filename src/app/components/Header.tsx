import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import FontelloIcon from "./shared/FontelloIcon";
import navigate from "../functions/Navigate";

export default function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false)

    return (
        <>
            <header className="fixed h-20 w-screen top-0 bg-[#0f0c29] shadow-lg shadow-[#0003] z-30">
                <div className="flex flex-row items-center justify-between wrapper">
                    <p className="text-xl font-bold">{isMobile ? "Gabriel Reverso" : "Gabriel Reverso Pereira"}</p>
                    <nav id="nav-header" className="flex-row gap-6">
                        <p onClick={() => navigate("#home")} className={`text-lg font-bold hover:cursor-pointer`}>Home</p>
                        <p onClick={() => navigate("#about-me")} className="text-lg font-bold hover:cursor-pointer">Sobre mim</p>
                        <p onClick={() => navigate("#technologies")} className="text-lg font-bold hover:cursor-pointer">Tecnologias</p>
                        <p onClick={() => navigate("#projects")} className="text-lg font-bold hover:cursor-pointer">Projetos</p>
                        <p onClick={() => navigate("#curriculum")} className="text-lg font-bold hover:cursor-pointer">Currículo</p>
                        <p onClick={() => navigate("#contact")} className="text-lg font-bold hover:cursor-pointer">Contato</p>
                    </nav>
                    <div onClick={() => setMenuVisible(true)} id="header-menu-button" className="flex-col justify-center items-center aspect-square h-[60%] rounded-lg bg-[#251f57] shadow-sm shadow-black hover:bg-[#191442] transition-all">
                        <span className="w-1/2 h-1 bg-[#f0f0f0] rounded-full"></span>
                        <span className="w-1/2 h-1 bg-[#f0f0f0] rounded-full my-1.5"></span>
                        <span className="w-1/2 h-1 bg-[#f0f0f0] rounded-full"></span>
                    </div>
                </div>
            </header>
            <div id="menu-wrapper" className={`w-screen h-screen fixed z-40 flex flex-row ${isMenuVisible ? "left-0" : "left-[100%]"} transition-all`}>
                <div onClick={() => setMenuVisible(false)} id="touchable-area" className="h-full w-full"></div>
                <nav id="nav-side" className={`flex flex-col bg-[#251f57] w-[500px] h-full`}>
                    <div className="m-4 self-end" onClick={() => setMenuVisible(false)}>
                        <FontelloIcon name={"icon-cancel-circled-outline"} classStyling="text-4xl text-[#f0f0f0]" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <p onClick={() => navigate("#home")} className="text-lg font-bold hover:cursor-pointer">Home</p>
                        <p onClick={() => navigate("#about-me")} className="text-lg font-bold hover:cursor-pointer">Sobre mim</p>
                        <p onClick={() => navigate("#technologies")} className="text-lg font-bold hover:cursor-pointer">Tecnologias</p>
                        <p onClick={() => navigate("#projects")} className="text-lg font-bold hover:cursor-pointer">Projetos</p>
                        <p onClick={() => navigate("#curriculum")} className="text-lg font-bold hover:cursor-pointer">Currículo</p>
                        <p onClick={() => navigate("#contact")} className="text-lg font-bold hover:cursor-pointer">Contato</p>
                    </div>
                </nav>
            </div>
        </>
    );
}