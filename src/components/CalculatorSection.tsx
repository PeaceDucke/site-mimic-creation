import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface CalculatorProps {
  t: (section: string, key: string, fallback?: string) => string;
}

const CalculatorSection = ({ t }: CalculatorProps) => {
  const [days, setDays] = useState(30);
  const dailyRate = 0.032;
  const baseInvestment = 250;
  const earnings = Math.round(baseInvestment * dailyRate * days);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
            {t('calculator', 'title', 'Calculate Your Potential Earnings')}
          </h2>
          <p className="text-neutral-400">
            {t('calculator', 'subtitle', 'Adjust the slider to see estimated daily earnings')}
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 sm:p-10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-neutral-400 text-sm">{t('calculator', 'tradingDays', 'Trading Days:')}</span>
            <span className="text-white font-bold text-2xl font-mono">{days}</span>
          </div>

          <div className="relative mb-8">
            <input
              type="range"
              min={1}
              max={365}
              value={days}
              onChange={e => setDays(Number(e.target.value))}
              className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(229,62,62,0.5)] [&::-webkit-slider-thumb]:cursor-pointer"
              style={{
                background: `linear-gradient(to right, #e53e3e ${(days/365)*100}%, rgba(255,255,255,0.05) ${(days/365)*100}%)`
              }}
            />
            <div className="flex justify-between mt-2 text-xs text-neutral-600">
              <span>1</span>
              <span>90</span>
              <span>180</span>
              <span>365</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-transparent rounded-xl p-6 border border-red-500/10">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-neutral-400 text-sm block mb-1">
                  {t('calculator', 'estimatedEarnings', 'Estimated Earnings:')}
                </span>
                <div className="text-4xl sm:text-5xl font-bold text-white font-mono">
                  ${earnings.toLocaleString()}
                </div>
              </div>
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-red-500/10 items-center justify-center">
                <Icon name="TrendingUp" size={32} className="text-red-400" />
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-600 mt-4 text-center">
            {t('calculator', 'note', '* Based on average platform performance. Actual results may vary.')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
