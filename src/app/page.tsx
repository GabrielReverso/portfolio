"use client";

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainSection from './components/MainSection';
import Header from './components/Header';

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out"
    })
  }, [])
  return (
    <div className="flex w-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <MainSection />
    </div>
  );
}
