import FontelloIcon from "./FontelloIcon"

interface Props {
    type: "academic" | "job"
    title: string
    description: string
    start: string
    end: string
    local?: string
}

export default function Experience({ type, title, description, start, end, local = "" }: Props) {
    return (
        <div className="flex flex-col my-10">
            <div className="flex flex-row h-16">
                <div className="aspect-square h-full rounded-full bg-blue-500 flex justify-center items-center">
                    <FontelloIcon style={{ fontSize: "1.8rem", right: type === "academic" ? "0.1rem" : "0", position: "relative" }} name={type === "academic" ? "icon-graduation-cap" : "icon-briefcase"} />
                </div>
                <div className="h-full flex flex-col justify-between ml-5">
                    <p className="text-2xl font-bold text-cyan-600">{title}</p>
                    <p className="text-xl font-bold">{description}</p>
                </div>
                <p className="text-sm ml-4 mt-2">{start} - {end}</p>
            </div>
            {local && <p className="mt-3 ml-[5.25rem] text-lg">{local}</p>}
        </div>
    );
}