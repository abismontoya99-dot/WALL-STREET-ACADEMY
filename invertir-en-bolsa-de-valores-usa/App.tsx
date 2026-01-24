
import React from 'react';
import Navbar from './components/Navbar';
import TickerTape from './components/TickerTape';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Features from './components/Features';
import Syllabus from './components/Syllabus';
import ChartShowcase from './components/ChartShowcase';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import FloatingCTA from './components/FloatingCTA';
import CompoundCalculator from './components/CreativeStudio';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500 selection:text-black flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20">
        <TickerTape />
        <Hero />
        
        {/* Pain/Empathy Section */}
        <section id="revelation" className="py-12 md:py-16 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2">
               <div className="relative">
                  <div className="absolute -inset-4 bg-amber-500/10 blur-2xl rounded-full"></div>
                  <img 
                    src="https://img.freepik.com/premium-photo/forex-trading-chart-background-exchange-digital-money-fund_1029476-2652.jpg" 
                    alt="TradingView" 
                    className="relative rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl w-full aspect-video object-cover"
                  />
               </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] italic">El Factor Humano</h2>
              <h3 className="text-2xl md:text-4xl font-black uppercase leading-tight tracking-tighter">Sabemos lo que es <span className="text-gray-600">quemar una cuenta.</span></h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                Intentaste con indicadores gratuitos, seguiste consejos de YouTube y cada vez que comprabas, el mercado caía. No es mala suerte. Es que te enseñaron a ser la <strong>liquidez</strong> de las instituciones. Nosotros estuvimos ahí hasta que entendimos la única verdad: El rastro del dinero profesional.
              </p>
              <div className="flex gap-4 items-center pt-2">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center font-black text-black italic text-xs">L</div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest italic">Leonardo, Tu Mentor en Wall Street</p>
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        <CompoundCalculator />
        
        <Syllabus />

        {/* The Revelation Section - Compactada */}
        <section className="relative h-[45vh] md:h-[40vh] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
             <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
              alt="Análisis Institucional" 
              className="w-full h-full object-cover brightness-[0.15]"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase leading-tight tracking-tighter">
              EL SECRETO QUE <br/><span className="text-amber-500">ELLOS NO QUIEREN</span> QUE SEPAS.
            </h2>
            <a 
              href="https://go.hotmart.com/B103361602G" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-amber-500 text-amber-500 font-black rounded-full uppercase text-[10px] md:text-xs tracking-widest hover:bg-amber-500 hover:text-black transition-all inline-block shadow-[0_0_40px_rgba(245,158,11,0.2)]"
            >
              Ver La Prueba Real
            </a>
          </div>
        </section>

        <ChartShowcase />
        
        <Testimonials />
        
        <FAQ />

        {/* Garantía - Espacios más ajustados */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-[#0a0a0a] to-black border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-amber-500/20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
              <div className="shrink-0 relative group">
                <div className="absolute inset-0 bg-amber-500/30 blur-3xl rounded-full animate-pulse group-hover:bg-amber-500/50 transition-all duration-700"></div>
                <img 
                  src="https://ciencursosonline.es/wp-content/uploads/2022/06/sello-garantia-hotmart.png" 
                  alt="Sello Garantía" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 filter drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                />
              </div>
              
              <div className="space-y-4 relative z-10">
                <h4 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                  RIESGO <br/><span className="text-amber-500">CERO ABSOLUTO.</span>
                </h4>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
                  Tienes <strong>7 días completos</strong> para devorar el curso. Si no te gusta, pides el reembolso y listo. Sin preguntas.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-300">Respaldo Hotmart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Countdown />
        <Newsletter />
      </main>

      <Footer />
      <Chatbot />
      <FloatingCTA />

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        html, body {
            max-width: 100%;
            overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default App;
