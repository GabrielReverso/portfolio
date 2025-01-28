import navigate from "../functions/Navigate";
import openNewTab from "../functions/NewTab";
import openEmail from "../functions/OpenEmail";
import BackgroundShape from "./shared/BackgroundShape";
import FontelloIcon from "./shared/FontelloIcon";
import GoToStartShape from "./shared/GoToStartShape";

export default function Contact() {
    return (
        <div className="bg-slate-950">
            <section id="contact" data-aos="fade" className="relative w-screen py-32">
                <div className='text-xs lg:text-base w-1/3'>
                    <BackgroundShape
                        height='sm'
                        width='md'
                        rounded
                        color='#016bd6'
                        left={"10%"}
                        top={"5%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='sm'
                        width='sm'
                        rounded
                        color='#fff'
                        left={"6%"}
                        top={"15%"}
                        zIndex={2}
                        solid={false}
                    />
                    <BackgroundShape
                        height='md'
                        width='md'
                        rounded
                        color='#8101d6'
                        left={"17%"}
                        top={"40%"}
                        zIndex={3}
                    />
                    <BackgroundShape
                        height='lg'
                        width='lg'
                        rounded
                        color='#4f01d6'
                        left={"-2%"}
                        top={"45%"}
                        zIndex={4}
                    />
                </div>
                <div className="wrapper flex flex-col items-center">
                    <div className="w-1/2">
                        <h1 className="text-center text-6xl text-cyan-500 font-bold mb-10">Contato</h1>
                        <p className="text-center text-3xl">O que está esperando? Entre já em contato e torne seu projeto em realidade!</p>
                        {/* <p className="text-center text-3xl">Imagine seu projeto digital virarando realidade. Próximo passo? Entre já em contato!</p> */}
                    </div>
                    <div className='flex flex-row mt-12 w-1/2'>
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
                        color='#0193d6'
                        left={"85%"}
                        top={"10%"}
                        zIndex={1}
                    />
                    <BackgroundShape
                        height='lg'
                        width='lg'
                        rounded
                        color='#fff'
                        left={"90%"}
                        top={"40%"}
                        zIndex={2}
                        solid={false}
                    />
                    <BackgroundShape
                        height='sm'
                        width='sm'
                        rounded
                        color='#af01d6'
                        left={"75%"}
                        top={"-5%"}
                        zIndex={3}
                    />
                    <BackgroundShape
                        height='sm'
                        width='md'
                        rounded
                        color='#fff'
                        left={"73%"}
                        top={"50%"}
                        zIndex={4}
                        solid={false}
                    />
                    <GoToStartShape
                        height='md'
                        width='sm'
                        color='#8101d6'
                        left={"80%"}
                        top={"80%"}
                        zIndex={5}
                        onClick={() => navigate("#home")}
                    />
                </div>
            </section>
        </div>
    );
}