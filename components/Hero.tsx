
import React from 'react';
import { siteData } from '../data';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 text-center lg:text-left animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-8 uppercase tracking-widest shadow-lg shadow-cyan-900/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            Seeking PFE Internship 2026
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-[0.9] lg:leading-[1]">
            Mohamed <span className="gradient-text">Abidi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
            {siteData.headline}
          </p>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start mb-14">
            <a href="#contact" className="group relative px-10 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-2xl shadow-cyan-900/40 overflow-hidden">
              <span className="relative z-10">Start Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href={siteData.links.cv} target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold border border-slate-700 transition-all flex items-center gap-2">
              Get Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {siteData.heroPills.map((pill, i) => (
              <span 
                key={pill} 
                className="px-4 py-1.5 bg-slate-900/60 border border-slate-800/80 rounded-full text-[13px] font-medium text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all cursor-default"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-up">
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] group">
            {/* Artistic Floating Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-14 -right-14 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Image Container with Dynamic Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-blue-600/20 to-transparent rounded-[4rem] rotate-6 scale-95 transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-100"></div>
            <div className="absolute inset-0 bg-slate-900/90 rounded-[4rem] -rotate-3 transition-transform duration-1000 group-hover:rotate-0 border border-slate-800"></div>
            
            <div className="relative w-full h-full bg-slate-900 rounded-[4rem] overflow-hidden border border-slate-700/50 shadow-3xl flex items-center justify-center">
               <img 
                 src="me.png" 
                 alt={siteData.name}
                 className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 scale-105 group-hover:scale-100"
               />
               {/* Fluid Gradient Overlay to blend white background of original photo */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent mix-blend-multiply opacity-60"></div>
               <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay"></div>
            </div>

            {/* Interactive Stats Badge */}
            <div className="absolute -bottom-4 -left-4 bg-slate-950/95 border border-slate-700/50 p-6 rounded-3xl shadow-2xl backdrop-blur-xl animate-float ring-1 ring-cyan-500/20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
                <div>
                  <p className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.2em] mb-0.5">Specialization</p>
                  <p className="text-sm text-white font-extrabold tracking-tight">V2X & Embedded Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Discover</span>
      </div>
    </section>
  );
};
