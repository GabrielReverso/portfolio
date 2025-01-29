import Typewriter from 'typewriter-effect';
import FontelloIcon from './shared/FontelloIcon';
import ResponsiveIconScroll from './shared/ResponsiveIconScroll';
import Image from 'next/image';
import useMousePosition from '../hooks/UseMousePosition';
import { useWindow } from '../hooks/UseWindow';
import BackgroundShape from './shared/BackgroundShape';
import { isMobile } from "react-device-detect";
import openNewTab from '../functions/NewTab';
import download from '../functions/Download';


export default function MainSection() {

    let mouseDistanceX = 0
    let mouseDistanceY = 0

    if (!isMobile) {
        const { x, y } = useMousePosition("home");
        const windowRef = useWindow();
        mouseDistanceX = x / (windowRef?.innerWidth || 1);
        mouseDistanceY = y / (windowRef?.innerHeight || 1);
    }

    return (
        <main id='home' className="w-full min-h-[800px] h-[calc(100vh-5rem)] gradient-background mt-20 overflow-y-hidden" style={{ overflowX: "hidden" }}>
            <div className="flex flex-row wrapper">
                <aside id="main-section" className='pt-10 md:pt-40'>
                    <p className="text-2xl md:text-3xl">Olá, eu sou o </p>
                    <p className="font-bold text-6xl md:text-7xl mt-4 text-cyan-400">Gabriel</p>
                    <div className='flex flex-row gap-3 mt-6 items-center font-[family-name:var(--font-geist-mono)]'>
                        <p className="text-[1.7rem] md:text-5xl">Desenvolvedor</p>
                        <Typewriter
                            options={{ loop: true }}
                            onInit={(typewriter) => {
                                typewriter.typeString('<span class="Typewriter__mobile">Mobile</span>')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString('<span class="Typewriter__desktop">Desktop</span>')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString('<span class="Typewriter__web">Web</span>')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </div>
                    <section className='flex flex-col items-center md:flex-row mt-10'>
                        <button onClick={() => openNewTab("https://www.linkedin.com/in/gabriel-reverso-pereira")} className="h-16 w-full md:w-44 rounded-xl text-xl font-bold bg-[#0e76a8] shadow-md shadow-[#0005] hover:bg-[#0f6086] transition-all">
                            <FontelloIcon name={"icon-linkedin"} classStyling='mr-1 text-2xl' /> Linkedin
                        </button>
                        <button onClick={() => openNewTab("https://github.com/GabrielReverso")} className="h-16 w-full md:w-44 rounded-xl text-xl font-bold bg-[#24292e] mx-0 my-5 md:mx-4 md:my-0 shadow-md shadow-[#0005] hover:bg-[#191d22] transition-all">
                            <FontelloIcon name={"icon-github-circled"} classStyling='mr-1 text-2xl' /> Github
                        </button>
                        <button onClick={() => {
                            console.log("Starting download...");
                            download("Gabriel_Reverso_Pereira_-_Desenvolvimento_de_Software_e_Web.pdf")
                        }}
                            className="h-16 w-full md:w-44 rounded-xl text-xl font-bold bg-[#a33939] shadow-md shadow-[#0005] hover:bg-[#802626] transition-all"
                        >
                            <FontelloIcon name={"icon-download"} classStyling='mr-1' /> Currículo
                        </button>
                    </section>
                    <div className='flex flex-row mt-10 items-center'>
                        <p className='text-xl mr-4'>Veja mais!</p>
                        <ResponsiveIconScroll />
                    </div>
                </aside>
                <picture className='ml-0 mt-10 md:ml-1 lg:mt-0 relative text-[0.6rem] md:text-xs lg:text-base'>
                    <BackgroundShape
                        height='xl'
                        width='lg'
                        rounded
                        color='#053eb0'
                        left={"65%"}
                        top={"40%"}
                        zIndex={1}
                        translate={
                            {
                                x: mouseDistanceX * -50,
                                y: mouseDistanceY * -50
                            }
                        }
                    />
                    <BackgroundShape
                        height='md'
                        width='md'
                        rounded
                        color='#016bd6'
                        left={"10%"}
                        top={"70%"}
                        zIndex={1}
                        translate={
                            {
                                x: mouseDistanceX * -30,
                                y: mouseDistanceY * -30
                            }
                        }
                    />
                    <BackgroundShape
                        height='md'
                        width='sm'
                        rounded
                        color='#9a01d6'
                        left={"70%"}
                        top={"10%"}
                        zIndex={1}
                        translate={
                            {
                                x: mouseDistanceX * -25,
                                y: mouseDistanceY * -25
                            }
                        }
                    />
                    <BackgroundShape
                        height='sm'
                        width='sm'
                        rounded
                        color='#5f0b81'
                        left={"-10%"}
                        top={"8%"}
                        zIndex={1}
                        translate={
                            {
                                x: mouseDistanceX * -40,
                                y: mouseDistanceY * -40
                            }
                        }
                    />
                    <BackgroundShape
                        height='xl'
                        width='xl'
                        rounded
                        color='#6037ad'
                        left={"10%"}
                        top={"2%"}
                        zIndex={1}
                        translate={
                            {
                                x: mouseDistanceX * -25,
                                y: mouseDistanceY * -25
                            }
                        }
                    />
                    <BackgroundShape
                        height='xl'
                        width='xl'
                        rounded
                        color='white'
                        left={"18%"}
                        top={"10%"}
                        zIndex={1}
                        solid={false}
                        translate={
                            {
                                x: mouseDistanceX * -20,
                                y: mouseDistanceY * -20
                            }
                        }
                    />
                    <Image
                        /* className='w-40 h-56' */
                        className='min-w-[400px] min-h-[400px] md:min-w-[928px] md:min-h-[928px] relative z-10'
                        aria-hidden
                        src={require("../assets/gabriel.webp")}
                        alt="Imagem de Gabriel"
                        /* loading='lazy' */
                        unoptimized
                        priority
                        style={{
                            transform: `translate(${mouseDistanceX * -10}px, ${mouseDistanceY * -10}px)`
                        }}
                    />
                    {/*                     <img
                        className='aspect-square h-[40rem]'
                        src={require("../assets/gabriel.webp")}
                        alt=""
                        
                        style={{
                            transform: `translate(${mouseDistanceX * -30}px, ${mouseDistanceY * -30}px)`
                        }}
                    /> */}
                </picture>
            </div>
        </main>
    );
}