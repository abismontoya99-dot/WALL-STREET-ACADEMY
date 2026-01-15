
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Módulos', href: '#modules' },
  { label: 'Análisis', href: '#analytics' },
  { label: 'Casos de Éxito', href: '#success' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Lógica para detectar sección activa
      const sections = ['home', 'modules', 'analytics', 'success'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black italic group-hover:rotate-12 transition-transform">W</div>
          <span className="text-xl font-extrabold tracking-tighter uppercase">WALL STREET <span className="text-amber-500">ACADEMY</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`text-[11px] font-bold transition-all uppercase tracking-[0.2em] relative py-2
                ${activeSection === item.href.substring(1) ? 'text-amber-500' : 'text-gray-400 hover:text-white'}
              `}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 animate-pulse"></span>
              )}
            </a>
          ))}
          <a 
            href="https://go.hotmart.com/B103361602G" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-black px-8 py-2.5 rounded-full text-xs transition-all hover:scale-105 active:scale-95 uppercase text-center shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            Únete Ahora
          </a>
        </div>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
