import React from 'react';
import { Rocket, Brain, Sparkles, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Rocket className="h-5 w-5 text-violet-400" />
          <span className="font-semibold">Your Name</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500"
        >
          <Brain className="h-4 w-4" /> Hire Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
