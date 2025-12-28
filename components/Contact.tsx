
import React, { useState } from 'react';
import { siteData } from '../data';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteData.email}?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(
      `From: ${formData.name}\nOrganization: ${formData.org}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8 italic">Let's <span className="gradient-text">Talk.</span></h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-lg">
              Open for collaboration, internship opportunities, or just a technical discussion about Embedded Systems and V2X.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Direct Mail', value: siteData.email, link: `mailto:${siteData.email}` },
                { label: 'LinkedIn', value: 'Mohamed Abidi', link: siteData.links.linkedin },
                { label: 'GitHub', value: 'ABIDI4Mohamed', link: siteData.links.github },
              ].map((info) => (
                <a key={info.label} href={info.link} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900 transition-all">
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">{info.label}</p>
                    <p className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{info.value}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md rounded-[3rem] border border-slate-800 p-10 md:p-14 shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Identity</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    placeholder="Email@domain.com"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Affiliation</label>
                <input 
                  type="text" 
                  name="org"
                  value={formData.org}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  placeholder="Organization or Subject"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white hover:bg-cyan-500 hover:text-white text-slate-950 font-black uppercase tracking-widest py-6 rounded-2xl transition-all shadow-2xl hover:shadow-cyan-900/20 active:scale-[0.98]"
              >
                Dispatch Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
