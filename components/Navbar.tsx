
import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Start', href: '#home' },
  { label: 'Profile', href: '#about' },
  { label: 'Journey', href: '#experience' },
  { label: 'Arsenal', href: '#skills' },
  { label: 'Works', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 py-3' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-black tracking-tighter text-white group">
            ABIDI<span className="text-cyan-500 group-hover:animate-pulse">.</span>
          </a>
          
          <div className="hidden lg:flex items-center bg-slate-900/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-slate-800 shadow-xl overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.href.substring(1) 
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://drive.google.com/drive/folders/1Ziw3gfRopdKXXP3Eoi5s4YuSAGiqS-ud?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-white hover:bg-slate-200 text-slate-950 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl active:scale-95"
            >
              Resume
            </a>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-slate-900 rounded-full border border-slate-800"
            >
              <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-slate-950 transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${
        mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {navItems.map((item) => (
          <a 
            key={item.label}
            href={item.href} 
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-black text-white hover:text-cyan-400 uppercase tracking-tighter transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};
