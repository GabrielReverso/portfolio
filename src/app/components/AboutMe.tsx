import { useEffect, useState } from 'react';
import openNewTab from '../functions/NewTab';
import openEmail from '../functions/OpenEmail';
import BackgroundShape from './shared/BackgroundShape';
import FontelloIcon from './shared/FontelloIcon';

export default function AboutMe() {
    return (
        <div className='bg-slate-950'>
            <section data-aos="fade-up" id="about-me" className="relative flex flex-row items-center justify-center w-screen">
                <div className='text-xs lg:text-base w-1/3'>
                    <BackgroundShape
                        height='md'
                        width='md'
                        rounded
                        color='#016bd6'
                        left={"10%"}
                        top={"70%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='lg'
                        width='lg'
                        rounded
                        solid={false}
                        color='white'
                        left={"12%"}
                        top={"10%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='xl'
                        width='xl'
                        rounded
                        color='#5f0b81'
                        left={"3%"}
                        top={"15%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='sm'
                        width='sm'
                        rounded
                        color='#053eb0'
                        left={"22%"}
                        top={"53%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='sm'
                        width='sm'
                        rounded
                        color='#9a01d6'
                        left={"5%"}
                        top={"65%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='md'
                        width='md'
                        rounded
                        solid={false}
                        color='white'
                        left={"-2%"}
                        top={"40%"}
                        zIndex={1}
                    />
                </div>
                <div id='about-me-div' className="flex flex-col py-20 md:py-40 mx-10">
                    <p className="text-2xl md:text-3xl mb-2 font-bold">Sobre mim</p>
                    <p className="text-4xl md:text-5xl mb-3 text-cyan-400 font-bold">Gabriel Reverso Pereira</p>
                    <p className="text-2xl md:text-3xl mb-5 text-rose-300 font-bold">Ribeirão Preto, SP</p>
                    <p className="text-lg md:text-xl my-1.5">Sou estudante de <span className="not-link text-cyan-600 font-bold">Engenharia da Computação</span> na <span onClick={() => openNewTab("https://www.unaerp.br")} className="text-purple-500 font-bold">UNAERP</span> e formado em <span className="not-link text-cyan-600 font-bold">Técnico de Automação Industrial</span>. Tenho experiência em projetos que reforçaram minha paixão pelo desenvolvimento de software.</p>
                    <p className="text-lg md:text-xl my-1.5">Adoro desafios e resolver problemas de forma criativa. Trabalho com desenvolvimento web e mobile, utilizando tecnologias como <span onClick={() => openNewTab("https://react.dev")} className="text-purple-500 font-bold">React</span>, <span onClick={() => openNewTab("https://reactnative.dev")} className="text-purple-500 font-bold">React Native</span> e <span onClick={() => openNewTab("https://nextjs.org")} className="text-purple-500 font-bold">Next.js</span>, além de gostar de explorar outros frameworks para adiquirir novos conhecimentos.</p>
                    <p className="text-lg md:text-xl my-1.5">Nos momentos de lazer, me dedico a jogos e cultivo minha paixão por plantas carnívoras. Se quiser saber mais ou colaborar comigo, entre em contato pelo <span onClick={() => openNewTab("https://www.linkedin.com/in/gabriel-reverso-pereira")} className="text-purple-500 font-bold">LinkedIn</span> ou <span onClick={() => openEmail("reversogabrielpereira@gmail.com")} className="text-purple-500 font-bold">e-mail</span>!</p>

                    <div className='flex flex-row mt-10'>
                        <button onClick={() => openNewTab("https://www.linkedin.com/in/gabriel-reverso-pereira")} className="h-16 w-full rounded-xl text-xl font-bold bg-[#0e76a8] shadow-md shadow-[#0005] hover:bg-[#0f6086] transition-all">
                            <FontelloIcon name={"icon-linkedin"} classStyling='mr-1 text-2xl' /> Linkedin
                        </button>
                        <button onClick={() => openEmail("reversogabrielpereira@gmail.com")} className="h-16 w-full rounded-xl text-xl font-bold bg-[#a33939] ml-4 shadow-md shadow-[#0005] hover:bg-[#802626] transition-all">
                            <FontelloIcon name={"icon-mail-alt"} classStyling='mr-1 text-2xl' /> E-mail
                        </button>
                    </div>
                </div>
                <div className='text-base w-1/3'>
                    <BackgroundShape
                        height='lg'
                        width='md'
                        rounded
                        color='#016bd6'
                        left={"85%"}
                        top={"10%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='md'
                        width='md'
                        rounded
                        color='#9a01d6'
                        left={"78%"}
                        top={"65%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='lg'
                        width='lg'
                        rounded
                        solid={false}
                        color='white'
                        left={"70%"}
                        top={"70%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='md'
                        width='lg'
                        rounded
                        color='#5f0b81'
                        left={"78%"}
                        top={"30%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='lg'
                        width='lg'
                        rounded
                        color='#053eb0'
                        left={"90%"}
                        top={"50%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='md'
                        width='md'
                        rounded
                        solid={false}
                        color='white'
                        left={"75%"}
                        top={"20%"}
                        zIndex={1}
                    />
                </div>
            </section>
        </div>
    );
}