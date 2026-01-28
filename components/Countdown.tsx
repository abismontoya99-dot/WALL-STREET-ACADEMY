
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset circular
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-amber-500/5 border-y border-amber-500/20 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs">La oferta de lanzamiento expira en:</span>
        </div>
        
        <div className="flex gap-6 items-center">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tighter">{format(timeLeft.hours)}</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Horas</div>
          </div>
          <div className="text-4xl font-light text-amber-500/50">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tighter">{format(timeLeft.minutes)}</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Minutos</div>
          </div>
          <div className="text-4xl font-light text-amber-500/50">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tighter">{format(timeLeft.seconds)}</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Segundos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
