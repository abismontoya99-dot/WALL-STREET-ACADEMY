
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías integrar un webhook de Mailchimp/ActiveCampaign si lo tuvieras
    window.open('https://go.hotmart.com/B103361602G', '_blank');
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-t from-black to-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass p-12 md:p-20 rounded-[3rem] border border-amber-500/10 text-center shadow-3xl">
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 italic">Última Llamada de Leonardo</h2>
          <h3 className="text-3xl md:text-6xl font-black uppercase mb-8 tracking-tighter leading-[0.9]">
            TU NUEVA VIDA <br/><span className="text-white">COMIENZA AQUÍ.</span>
          </h3>
          <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto font-light leading-relaxed">
            No dejes que el miedo a perder sea mayor a tu deseo de ganar. Accede ahora y domina Wall Street de una vez por todas.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu mejor correo electrónico"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-amber-500 transition-all text-center text-lg font-light"
            />
            <button 
              type="submit"
              className="w-full bg-amber-500 hover:bg-white text-black font-black px-8 py-5 rounded-2xl text-xl uppercase transition-all duration-500 shadow-[0_15px_50px_rgba(245,158,11,0.3)] hover:scale-105"
            >
              Comprar Ahora con Descuento
            </button>
          </form>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
             <div className="flex items-center gap-2">
                <img src="https://logodownload.org/wp-content/uploads/2014/07/visa-logo-1.png" alt="Visa" className="h-4 object-contain invert" />
             </div>
             <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 object-contain invert" />
             </div>
             <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-5 object-contain invert" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
