
import React from 'react';
import { siteData } from '../data';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Creations</h2>
          <div className="hidden sm:block text-right">
            <p className="text-slate-500 text-sm font-mono">01 // SELECT WORKS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {siteData.projects.map((project, idx) => (
            <div key={idx} className="group relative bg-slate-900/40 rounded-[2.5rem] border border-slate-800 p-3 overflow-hidden transition-all duration-700 hover:border-cyan-500/30 hover:shadow-3xl hover:shadow-cyan-900/10">
              {/* Image / Header Area */}
              <div className="relative h-72 rounded-[2rem] overflow-hidden bg-slate-950 flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="text-8xl font-black text-slate-900 select-none tracking-tighter leading-none">{idx + 1}</div>
                
                {/* Floating Tags */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-bold text-cyan-400 rounded-lg uppercase tracking-widest shadow-xl">
                      {tag}
                    </span>
                  ))}
                </div>

                <img 
                  src={`https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop`} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
                />
              </div>
              
              <div className="p-10">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all text-sm group/btn">
                      Live Preview
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center py-4 rounded-2xl bg-slate-800 text-slate-500 font-bold text-sm cursor-not-allowed border border-slate-700">
                      Closed Access
                    </div>
                  )}
                  {project.code ? (
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:text-white text-slate-300 font-bold transition-all text-sm">
                      Repository
                    </a>
                  ) : (
                    <div className="flex items-center justify-center py-4 rounded-2xl border border-slate-800 text-slate-600 font-bold text-sm cursor-not-allowed">
                      Private Code
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
