interface Props {
    title: string
    description: string
}

export default function ExpandableCard({ title = "codap", description = "codap" }: Props) {
    return (
        <div className="animated-shadow relative h-96 w-72 bg-black rounded-2xl">

        </div>
    );
}