import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Innovation from "@/components/Innovation";
import Research from "@/components/Research";
import Education from "@/components/Education";
import CoreStrengths from "@/components/CoreStrengths";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-hidden">
      <Navbar />
      <Hero />
      <CredibilityStrip />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Innovation />
      <Research />
      <Education />
      <CoreStrengths />
      <Contact />
      <Footer />
    </main>
  );
}
