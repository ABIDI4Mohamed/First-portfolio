
import React from 'react';
import { siteData } from '../data';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">Formation</h2>
            <p className="text-slate-500 max-w-md">My academic path in electrical engineering and preparatory studies.</p>
          </div>
          <div className="h-px flex-1 bg-slate-800 hidden md:block mx-10 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.education.map((edu, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all group">
              <span className="text-cyan-400 font-mono text-sm block mb-4">{edu.period}</span>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-tight">{edu.institution}</h3>
              <p className="text-slate-300 font-medium mb-2">{edu.degree}</p>
              {edu.spec && (
                <p className="text-slate-500 text-sm italic">Spec: {edu.spec}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
