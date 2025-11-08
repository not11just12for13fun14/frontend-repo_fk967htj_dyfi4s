import React from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Stellar Navigator',
    desc: 'A WebGL experiment mapping exoplanets with AI-generated insights.',
    tags: ['Three.js', 'Python', 'FastAPI'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Nebula Notes',
    desc: 'An AI-assisted note system for observational astronomy.',
    tags: ['React', 'Vector DB', 'LLM'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Orbit Sketch',
    desc: 'A creative coding tool to design orbital patterns and dynamics.',
    tags: ['D3', 'Canvas', 'Physics'],
    link: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0a0a10] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-violet-600/20 p-2 text-violet-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Featured Projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500/30 hover:bg-white/10">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 rounded-md bg-violet-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-violet-500">
                  <ExternalLink className="h-3.5 w-3.5" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 transition hover:bg-white/10">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
