import Typewriter from 'typewriter-effect';
import FontelloIcon from './shared/FontelloIcon';
import ResponsiveIconScroll from './shared/ResponsiveIconScroll';

export default function MainSection() {
    return (
        <main className="w-full h-[calc(100vh-5rem)] gradient-background mt-20">
            <div className="flex flex-row wrapper pt-40">
                <aside>
                    <p className="text-3xl">Olá, eu sou o </p>
                    <p className="font-bold text-7xl mt-4 text-cyan-400">Gabriel</p>
                    <div className='flex flex-row gap-3 mt-6 font-[family-name:var(--font-geist-mono)]'>
                        <p className="text-5xl">Desenvolvedor</p>
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
                    <section className='flex flex-row mt-10'>
                        <button className="h-16 w-44 rounded-xl text-xl font-bold bg-[#0e76a8] shadow-md shadow-[#0005] hover:bg-[#0f6086] transition-all">
                            <FontelloIcon name={"icon-linkedin"} classStyling='mr-1 text-2xl' /> Linkedin
                        </button>
                        <button className="h-16 w-44 rounded-xl text-xl font-bold bg-[#24292e] mx-4 shadow-md shadow-[#0005] hover:bg-[#191d22] transition-all">
                            <FontelloIcon name={"icon-github-circled"} classStyling='mr-1 text-2xl' /> Github
                        </button>
                        <button className="h-16 w-44 rounded-xl text-xl font-bold bg-[#a33939] shadow-md shadow-[#0005] hover:bg-[#802626] transition-all">
                            <FontelloIcon name={"icon-doc-inv"} classStyling='mr-1' /> Currículo
                        </button>
                    </section>
                    <div className='flex flex-row mt-10 items-center'>
                        <p className='text-xl mr-4'>Veja mais!</p>
                        <ResponsiveIconScroll />
                    </div>
                </aside>
            </div>
        </main>
    );
}