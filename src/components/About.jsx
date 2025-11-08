import React from 'react';
import { Telescope, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">About Me</h2>
          <p className="mt-4 text-white/80">
            I'm a creative developer blending astronomy, artificial intelligence, and interactive design. My work
            explores data-driven storytelling and 3D experiences inspired by the cosmos.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-violet-300">
                <Telescope className="h-5 w-5" />
                <span className="text-sm font-medium">Astronomy</span>
              </div>
              <p className="mt-2 text-sm text-white/70">Observational data, ephemerides, and space-inspired interfaces.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-violet-300">
                <BrainCircuit className="h-5 w-5" />
                <span className="text-sm font-medium">AI</span>
              </div>
              <p className="mt-2 text-sm text-white/70">LLM tooling, generative visuals, and intelligent UX patterns.</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10 p-1">
          <div className="rounded-2xl bg-[#0b0b12] p-8">
            <ul className="grid gap-3 text-sm text-white/80">
              <li>• Creative Coding (WebGL, Canvas, Shaders)</li>
              <li>• Full‑stack Apps (React, FastAPI, MongoDB)</li>
              <li>• Data Viz and Scientific UI</li>
              <li>• Design Systems and Motion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
