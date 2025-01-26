"use client";

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainSection from './components/MainSection';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Projects from './components/Projects';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
      mirror: true
    })
  }, [])
  return (
    <div className="flex flex-col w-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <MainSection />
      <AboutMe />
      <Technologies />
      <div className='bg-slate-950 svg-background'>
        <Projects />
      </div>
    </div>
  );
}
