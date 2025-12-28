
import React from 'react';
import { siteData } from '../data';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">Journey</h2>
            <p className="text-slate-500 max-w-md">My professional background and academic internships in engineering.</p>
          </div>
          <div className="h-px flex-1 bg-slate-800 hidden md:block mx-10 mb-6"></div>
          <div className="text-cyan-400 font-mono text-sm uppercase tracking-widest bg-cyan-950/20 px-4 py-2 rounded-full border border-cyan-500/20">
            Timeline
          </div>
        </div>

        <div className="space-y-16">
          {siteData.experience.map((exp, idx) => (
            <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-8 relative">
              {/* Date Column */}
              <div className="md:col-span-2">
                <span className="text-3xl font-black text-slate-800 group-hover:text-cyan-500 transition-colors duration-500">
                  {exp.year}
                </span>
              </div>
              
              {/* Content Column */}
              <div className="md:col-span-10 relative pl-8 md:pl-12 border-l border-slate-800 group-hover:border-cyan-500/50 transition-colors duration-500">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-cyan-500 group-hover:scale-125 transition-all duration-500"></div>
                
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{exp.role}</h3>
                  <p className="text-xl text-cyan-400/80 font-medium">{exp.company}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <div key={i} className="text-slate-400 leading-relaxed flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-transparent hover:border-slate-800 hover:bg-slate-900/60 transition-all">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500/40 flex-shrink-0"></span>
                      <span className="text-sm md:text-base">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
