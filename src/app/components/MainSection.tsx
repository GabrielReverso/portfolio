import Typewriter from 'typewriter-effect';

export default function MainSection() {
    return (
        <main className="w-full h-[calc(100vh-5rem)] gradient-background mt-20">
            <div className="flex flex-row wrapper pt-36">
                <aside>
                    <p className="text-3xl">Olá, eu sou o </p>
                    <p className="font-bold text-7xl mt-4 text-cyan-400">Gabriel</p>
                    <div className='flex flex-row gap-3 mt-4 font-[family-name:var(--font-geist-mono)]'>
                        <p className="text-4xl">Desenvolvedor</p>
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
                </aside>
            </div>
        </main>
    );
}