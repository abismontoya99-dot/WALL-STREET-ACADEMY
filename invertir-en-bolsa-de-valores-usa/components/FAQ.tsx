
import React, { useState } from 'react';

const faqs = [
  {
    question: "¿Es seguro realizar el pago a través de Hotmart?",
    answer: "Absolutamente. Hotmart es la plataforma de productos digitales más grande y segura de Latinoamérica y España. Tus datos están cifrados y protegidos bajo los estándares internacionales de seguridad bancaria."
  },
  {
    question: "¿Cómo recibo el acceso al curso?",
    answer: "El acceso es inmediato. Una vez que Hotmart confirme tu pago, recibirás un correo electrónico con tus credenciales para ingresar a nuestra área de alumnos privada. Si pagas con tarjeta o PayPal, el acceso llega en menos de 2 minutos."
  },
  {
    question: "¿Qué métodos de pago están disponibles?",
    answer: "Dependiendo de tu país, puedes pagar con Tarjeta de Crédito, Débito, PayPal, Google Pay y en muchos casos opciones locales como OXXO (México), Baloto (Colombia), PagoEfectivo (Perú) o Sencillito (Chile)."
  },
  {
    question: "¿Tengo garantía si el curso no cumple mis expectativas?",
    answer: "Sí, cuentas con nuestra Garantía de Hierro de 7 días. Si por cualquier razón decides que el curso no es para ti, puedes solicitar el reembolso total de tu dinero directamente en la plataforma de Hotmart sin preguntas."
  },
  {
    question: "¿Necesito conocimientos previos de economía?",
    answer: "No. El curso está diseñado para llevarte desde los conceptos más básicos (qué es una acción) hasta las estrategias más avanzadas de Smart Money Concepts que usan las instituciones."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-2 italic">Dudas resueltas</h2>
          <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 tracking-tighter">PREGUNTAS <span className="text-white/40">FRECUENTES.</span></h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass rounded-2xl border transition-all duration-500 overflow-hidden ${openIndex === i ? 'border-amber-500/40 bg-amber-500/5' : 'border-white/5 hover:border-white/10'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 md:p-6 text-left flex justify-between items-center gap-4"
              >
                <span className="text-sm md:text-base font-bold text-white uppercase tracking-tight leading-snug">{faq.question}</span>
                <div className={`shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-500 ${openIndex === i ? 'rotate-180 bg-amber-500 border-amber-500 text-black' : 'text-white'}`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-0 text-sm md:text-base text-gray-400 font-light leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
