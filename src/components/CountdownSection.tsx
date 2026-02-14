import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface CountdownProps {
  t: (section: string, key: string, fallback?: string) => string;
  onRegisterClick: () => void;
}

const CountdownSection = ({ t, onRegisterClick }: CountdownProps) => {
  const [time, setTime] = useState({ days: 2, hours: 14, minutes: 37, seconds: 52 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 2, hours: 14, minutes: 37, seconds: 52 };
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-red-950/20 to-red-950/10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-6">
          <Icon name="Clock" size={16} className="text-red-400" />
          <span className="text-red-300 text-sm font-semibold">
            {t('countdown', 'badge', 'Limited Time Offer')}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {t('countdown', 'title', 'Exclusive Welcome Bonus Ending Soon!')}
        </h2>
        <p className="text-neutral-400 mb-10">
          {t('countdown', 'subtitle', 'New users get premium features free for 30 days')}
        </p>

        <div className="flex justify-center gap-4 sm:gap-6 mb-10">
          {[
            { val: pad(time.days), label: t('countdown', 'days', 'Days') },
            { val: pad(time.hours), label: t('countdown', 'hours', 'Hours') },
            { val: pad(time.minutes), label: t('countdown', 'minutes', 'Minutes') },
            { val: pad(time.seconds), label: t('countdown', 'seconds', 'Seconds') },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-4 sm:p-6 min-w-[70px] sm:min-w-[90px]">
              <div className="text-3xl sm:text-4xl font-bold text-white font-mono">
                {item.val}
              </div>
              <div className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onRegisterClick}
          className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-xl transition-all duration-300 glow-red-strong hover:scale-[1.02] text-lg"
        >
          <Icon name="Gift" size={20} />
          {t('countdown', 'claimBonus', 'Claim Your Bonus')}
        </button>

        <p className="text-neutral-500 text-sm mt-4">
          {t('countdown', 'spotsRemaining', 'Only 47 spots remaining at this bonus level!')}
        </p>
      </div>
    </section>
  );
};

export default CountdownSection;
