
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="consejos" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center border border-emerald-100 shadow-inner">
          <div className="relative z-10">
            <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-stone-800 mb-6">Recibe consejos semanales gratuitos</h2>
            <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Únete a más de 5,000 personas que ya están mejorando su salud articular. Suscríbete y descarga el capítulo de "Primeros Pasos" gratis.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-8 py-4 rounded-full border-2 border-stone-200 focus:border-emerald-500 outline-none transition-all text-stone-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg whitespace-nowrap"
                >
                  ¡Quiero mi regalo!
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-4 text-emerald-700 bg-emerald-100/50 p-6 rounded-2xl animate-fade-up border border-emerald-200">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">¡Gracias! Revisa tu bandeja de entrada pronto.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
