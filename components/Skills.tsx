
import React from 'react';
import { siteData } from '../data';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 italic">Technical Stack</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A comprehensive overview of my expertise in embedded systems, telecommunications, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
          {siteData.skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-slate-950 p-10 hover:bg-slate-900 transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-cyan-600 rounded-full group-hover:h-12 transition-all"></div>
                <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 rounded-xl text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
