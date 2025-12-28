
import React from 'react';
import { siteData } from '../data';

export const Certifications: React.FC = () => {
  // Helper to determine width for linguistic "power levels"
  const getLevelWidth = (level: string) => {
    if (level.includes('Native')) return '100%';
    if (level.includes('Fluent')) return '95%';
    if (level.includes('B2')) return '75%';
    return '50%';
  };

  return (
    <section id="certifications" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Certifications Side */}
          <div className="lg:col-span-7">
            <div className="mb-14 flex items-end justify-between">
              <div>
                <p className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-3">Validation</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">Certifications</h2>
              </div>
              <a 
                href={siteData.links.certificates} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-xs font-bold uppercase tracking-widest group"
              >
                Access Files
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteData.certifications.map((cert, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-cyan-500/10 transition-colors"></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174L3 12l1.26 1.826m15.48 0L21 12l-1.26-1.826M12 4.5v15m0 0l-3.75-3.75M12 19.5l3.75-3.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 leading-snug group-hover:text-cyan-100 transition-colors">{cert.title}</h4>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Side */}
          <div className="lg:col-span-5">
            <div className="mb-14">
              <p className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-3">Global Reach</p>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">Linguistic</h2>
            </div>
            
            <div className="space-y-6">
              {siteData.languages.map((lang, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all font-mono text-xs">
                        0{idx + 1}
                      </span>
                      <span className="text-xl font-black text-white group-hover:translate-x-1 transition-transform">{lang.name}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-900/50 px-3 py-1 rounded-md border border-slate-800 group-hover:text-cyan-400 transition-colors">
                      {lang.level}
                    </span>
                  </div>
                  
                  {/* Interactive Level Bar */}
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/50">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 relative transition-all duration-1000 ease-out group-hover:brightness-125"
                      style={{ width: getLevelWidth(lang.level) }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Language Footer Quote */}
            <div className="mt-12 p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/50 italic text-slate-500 text-sm leading-relaxed">
              "Continuous improvement in communication skills is key to effective teamwork and international collaboration in complex engineering environments."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
