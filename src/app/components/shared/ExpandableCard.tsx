import { useState } from "react";

interface Props {
    title: string
    description: string
    aosDelay: string
    setModalVisible: (type: string) => void
}

export default function ExpandableCard({ title, description, aosDelay, setModalVisible }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const type = title.toLowerCase().trim().replace(/[^a-z0-9]/g, '')

    return (
        <>
            <div
                data-aos="fade"
                data-aos-delay={aosDelay}
                className="animated-shadow relative h-96 w-72 bg-black rounded-2xl transition-all ease-in-out duration-200 m-10 select-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="bg-black w-full h-full rounded-2xl">
                    <div className={`image-${type} w-full h-full rounded-2xl`}>
                        <div className="card-background-gradient flex flex-col justify-end h-full w-full rounded-2xl transition-all ease-in-out duration-200 py-5 px-7 hover:backdrop-blur-sm">
                            <p className="text-3xl font-bold font-[family-name:var(--font-geist-mono)]">{title.charAt(0).toUpperCase() + title.slice(1)}</p>
                            <p className={`text-base font-[family-name:var(--font-geist-mono)] ${isHovered ? "flex" : "hidden"} mt-1`}>{description}</p>
                            <button onClick={() => setModalVisible(type)} className={`w-fit text-base font-[family-name:var(--font-geist-mono)] ${isHovered ? "flex" : "hidden"} my-3 p-1.5 border rounded-lg border-white`}>
                                Veja mais!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}