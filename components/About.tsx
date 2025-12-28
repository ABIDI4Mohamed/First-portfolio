
import React from 'react';
import { siteData } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 light-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-950 to-transparent opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[2px] bg-cyan-600"></div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">The Profile</h2>
        </div>
        
        <div className="space-y-10">
          <p className="text-2xl md:text-3xl font-medium leading-tight text-slate-800 italic">
            "{siteData.about.p1}"
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {siteData.about.p2}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[
            { label: 'Specialization', value: 'Embedded Systems' },
            { label: 'Degree', value: 'Electrical Eng.' },
            { label: 'Campus', value: 'ENSEM Casablanca' },
            { label: 'Target', value: 'PFE Internship' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[10px] text-cyan-600 font-bold uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-sm font-extrabold text-slate-900 leading-tight">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
