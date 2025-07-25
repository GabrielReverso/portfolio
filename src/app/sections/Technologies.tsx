import LogoLink from "../components/shared/LogoLink";
import useHeaderAnchor from "../utils/hooks/UseHeaderAnchor";

export default function Technologies() {
	const technologiesRef = useHeaderAnchor("technologies");

	return (
		<div id="technologies" className="bg-slate-950">
			<section
				ref={technologiesRef}
				data-aos="fade-up"
				className="w-screen py-20"
			>
				<div className="flex flex-col items-center justify-center wrapper w-screen h-fit px-5">
					<h1 className="text-center text-5xl md:text-6xl mb-10 font-bold text-violet-500">
						Tecnologias
					</h1>
					<p className="text-center text-2xl md:text-3xl mb-10">
						Principais tecnologias que costumo trabalhar
					</p>
					<div className="flex flex-wrap justify-center logo-container mb-20">
						<LogoLink
							important
							link="https://react.dev"
							logoName="react"
						/>
						<LogoLink
							important
							link="https://reactnative.dev"
							logoName="react-native"
						/>
						<LogoLink
							important
							link="https://nextjs.org"
							logoName="next"
						/>
						<LogoLink
							important
							link="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
							logoName="html"
						/>
						<LogoLink
							important
							link="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
							logoName="css"
						/>
						<LogoLink
							important
							link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
							logoName="javascript"
						/>
						<LogoLink
							important
							link="https://www.typescriptlang.org"
							logoName="typescript"
						/>
						<LogoLink
							important
							link="https://tailwindcss.com"
							logoName="tailwind"
						/>
					</div>
					<p className="text-center text-2xl md:text-3xl mb-10">
						Outras tecnologias e linguagens que conheço
					</p>
					<div className="flex flex-wrap justify-center logo-container mb-0 md:mb-20">
						<LogoLink link="https://vuejs.org" logoName="vue" />
						<LogoLink link="https://vite.dev" logoName="vite" />
						<LogoLink
							link="https://www.electronjs.org"
							logoName="electron"
						/>
						<LogoLink link="https://expo.dev" logoName="expo" />
						<LogoLink
							link="https://pt.wikipedia.org/wiki/C_(linguagem_de_programação)"
							logoName="c"
						/>
						<LogoLink
							link="https://pt.wikipedia.org/wiki/C%2B%2B"
							logoName="cpp"
						/>
						<LogoLink link="https://go.dev" logoName="golang" />
						<LogoLink
							link="https://www.python.org"
							logoName="python"
						/>
						<LogoLink
							link="https://www.java.com/pt-BR/"
							logoName="java"
						/>
						<LogoLink link="https://www.php.net" logoName="php" />
						<LogoLink
							link="https://www.mysql.com"
							logoName="mysql"
						/>
						<LogoLink
							link="https://www.sqlite.org"
							logoName="sqlite"
						/>
						<LogoLink
							link="https://sass-lang.com"
							logoName="sass"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
