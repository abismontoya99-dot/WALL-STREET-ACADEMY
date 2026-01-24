
import React from 'react';

const stocks = [
  { symbol: 'AAPL', price: '189.43', change: '+1.2%' },
  { symbol: 'TSLA', price: '175.22', change: '-0.8%' },
  { symbol: 'NVDA', price: '875.30', change: '+3.5%' },
  { symbol: 'AMZN', price: '178.15', change: '+0.5%' },
  { symbol: 'BTC/USD', price: '64,231', change: '+2.1%' },
  { symbol: 'SPY', price: '512.40', change: '+0.9%' },
  { symbol: 'QQQ', price: '438.10', change: '+1.4%' },
  { symbol: 'MSFT', price: '415.50', change: '+0.3%' },
];

const TickerTape: React.FC = () => {
  return (
    <div className="bg-black/80 backdrop-blur-md border-b border-white/5 py-2 overflow-hidden flex whitespace-nowrap z-50 relative">
      <div className="flex animate-marquee gap-12">
        {[...stocks, ...stocks].map((s, i) => (
          <div key={i} className="flex items-center gap-3 text-[10px] font-bold">
            <span className="text-gray-400 tracking-widest uppercase">{s.symbol}</span>
            <span className="text-white tabular-nums">{s.price}</span>
            <span className={s.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
              {s.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
