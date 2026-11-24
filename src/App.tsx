import React from 'react';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { AmbientBackground } from './components/AmbientBackground';
import { BackToTop } from './components/BackToTop';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FBFBFD] text-[#111318]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[#111318] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <AmbientBackground />
      <Navbar />

      <main id="main-content">
        <Hero />
        <div aria-hidden="true" className="hairline-divider mx-auto h-px max-w-6xl" />
        <About />
        <div aria-hidden="true" className="hairline-divider mx-auto h-px max-w-6xl" />
        <Projects />
        <div aria-hidden="true" className="hairline-divider mx-auto h-px max-w-6xl" />
        <Skills />
        <div aria-hidden="true" className="hairline-divider mx-auto h-px max-w-6xl" />
        <Experience />
        <div aria-hidden="true" className="hairline-divider mx-auto h-px max-w-6xl" />
        <Achievements />
        <div aria-hidden="true" className="hairline-divider mx-auto h-px max-w-6xl" />
        <Contact />
      </main>

      <BackToTop />
    </div>
  );
};

export default App;
