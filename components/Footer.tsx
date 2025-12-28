
import React from 'react';
import { siteData } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-slate-950 border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-white tracking-tighter mb-2">ABIDI<span className="text-cyan-500">.</span></h4>
            <p className="text-slate-500 font-medium text-sm">Engineering student @ ENSEM Casablanca</p>
          </div>
          
          <div className="flex items-center gap-10">
            {Object.entries(siteData.links).map(([key, url]) => (
              <a 
                key={key} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 hover:text-white font-black text-xs uppercase tracking-widest transition-colors"
              >
                {key}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
              Handcrafted with Precision & React
            </p>
            <p className="text-slate-800 text-[10px] font-bold uppercase mt-1">
              &copy; {new Date().getFullYear()} Mohamed Abidi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
