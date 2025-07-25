import FontelloIcon from "./shared/FontelloIcon";

interface Props {
	type: "academic" | "job";
	title: string;
	description: string;
	start: string;
	end: string;
	local?: string;
}

export default function Experience({
	type,
	title,
	description,
	start,
	end,
	local = "",
}: Props) {
	return (
		<div className="flex flex-col my-10 w-full md:w-auto">
			<div className="flex flex-col md:flex-row">
				<div className="aspect-square mb-4 md:mb-0 ml-4 md:ml-0 w-10 md:w-auto md:h-16 rounded-full bg-blue-500 flex justify-center items-center">
					<FontelloIcon
						classStyling="text-lg md:text-3xl"
						style={{
							right: type === "academic" ? "0.1rem" : "0",
							position: "relative",
						}}
						name={
							type === "academic"
								? "icon-graduation-cap"
								: "icon-briefcase"
						}
					/>
				</div>
				<div className="flex flex-col justify-between ml-4 md:ml-5">
					<p className="text-2xl font-bold text-cyan-600">{title}</p>
					<p className="text-xl font-bold">{description}</p>
				</div>
				<p className="text-sm ml-4 mt-2">
					{start} - {end}
				</p>
			</div>
			{local && (
				<p className="mt-3 ml-4 md:ml-[5.25rem] text-lg">{local}</p>
			)}
		</div>
	);
}
