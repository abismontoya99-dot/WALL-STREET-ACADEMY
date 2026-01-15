
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Syllabus from './components/Syllabus';
import ChartShowcase from './components/ChartShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Course Stats Banner */}
        <div className="bg-amber-500 py-6 overflow-hidden whitespace-nowrap">
          <div className="flex animate-[marquee_20s_linear_infinite] gap-20 items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-black font-black text-2xl tracking-tighter italic">
                S&P 500 ALCISTA • NASDAQ +2.4% • NYSE ABIERTO • ÍNDICE DE VOLATILIDAD ESTABLE • 
              </span>
            ))}
          </div>
        </div>

        <Features />
        
        <Syllabus />

        {/* Full Width Image Section */}
        <div className="h-[60vh] relative overflow-hidden">
          <div className="absolute inset-0 z-[-1]">
             <img 
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" 
              alt="Datos" 
              className="w-full h-full object-cover fixed top-0 left-0 brightness-50"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-6 bg-black/40">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">NO ADIVINES. <span className="text-amber-500">EJECUTA.</span></h2>
              <p className="text-lg font-light text-gray-300">Únete a más de 15,000 traders que han escalado con éxito su cartera utilizando nuestros sistemas.</p>
            </div>
          </div>
        </div>

        <ChartShowcase />
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto glass p-20 rounded-[4rem] border border-amber-500/20 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none uppercase">¿LISTO PARA <span className="text-gradient italic">GANAR?</span></h2>
              <p className="text-xl text-gray-400 mb-12">Cupos limitados disponibles para la generación del Q4 2024. No dejes pasar otro año.</p>
              <a 
                href="https://go.hotmart.com/B103361602G" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-amber-500 hover:bg-amber-600 text-black font-black px-16 py-6 rounded-full text-xl transition-all hover:scale-105 shadow-[0_0_50px_rgba(245,158,11,0.3)] uppercase inline-block"
              >
                Asegura tu Lugar
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Customer Service Chatbot */}
      <Chatbot />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.5);
          border-radius: 10px;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
