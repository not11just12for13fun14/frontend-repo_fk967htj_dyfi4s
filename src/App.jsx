import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-[#0a0a10] py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Your Name — Crafted with React, Tailwind, and a love for the cosmos.
      </footer>
    </div>
  );
}

export default App;
