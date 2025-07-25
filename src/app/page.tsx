"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSection from "./sections/MainSection";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Curriculum from "./sections/Curriculum";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			easing: "ease-in-out",
			mirror: true,
		});
	}, []);
	return (
		<div
			className="flex flex-col w-screen font-[family-name:var(--font-geist-sans)]"
			style={{ overflowX: "hidden" }}
		>
			<Header />
			<MainSection />
			<AboutMe />
			<Technologies />
			<Projects />
			<Curriculum />
			<Contact />
			<Footer />
		</div>
	);
}
