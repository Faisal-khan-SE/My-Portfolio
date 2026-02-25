/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="bg-mesh" />
      <div className="bg-noise" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/5 relative z-10">
        <p className="font-display tracking-widest uppercase opacity-60">
          © {new Date().getFullYear()} Muhammad Faisal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
