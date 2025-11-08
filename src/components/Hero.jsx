import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-[#0b0b12] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(124,58,237,0.35),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-sm text-white/80">Astronomy • AI • Creative Coding</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Exploring the cosmos with code
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          I build immersive, intelligent experiences at the intersection of space, machine learning,
          and web technology.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500"
          >
            <Rocket className="h-4 w-4" /> View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
