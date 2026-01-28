
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'modules', 'analytics', 'success'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
            closeMobileMenu();
          }}
        >
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black italic group-hover:rotate-12 transition-transform">B</div>
          <span className="text-xl font-extrabold tracking-tighter uppercase">INVERTIR EN <span className="text-amber-500">BOLSA USA</span></span>
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
        
        <button className="md:hidden text-white p-2" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={closeMobileMenu}
              className={`text-lg font-black uppercase tracking-[0.2em] transition-colors
                ${activeSection === item.href.substring(1) ? 'text-amber-500' : 'text-gray-400'}
              `}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://go.hotmart.com/B103361602G" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-amber-500 text-black font-black px-12 py-4 rounded-full text-sm uppercase"
          >
            Inscribirme al Curso
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
