import Icon from '@/components/ui/icon';

interface DashboardProps {
  t: (section: string, key: string, fallback?: string) => string;
  onRegisterClick: () => void;
}

const DashboardSection = ({ t, onRegisterClick }: DashboardProps) => {
  return (
    <section id="dashboard" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/10 to-red-900/5 rounded-2xl blur-xl" />
              <div className="relative glass-card rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-white font-semibold text-sm">{t('dashboard', 'liveTrading', 'Live Trading')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xs font-mono">{t('dashboard', 'marketOpen', 'Market Open')}</span>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-neutral-500 text-xs uppercase tracking-wider">BTC/USD</span>
                      <div className="text-2xl font-bold text-white font-mono mt-1">$67,234.89</div>
                      <span className="text-green-400 text-sm font-mono">{t('dashboard', 'priceChange', '+$1,234.56 (5.2%)')}</span>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-md text-xs font-semibold">
                        {t('dashboard', 'profit', '+24.5% Profit')}
                      </span>
                    </div>
                  </div>

                  <div className="h-32 flex items-end gap-1 pt-4">
                    {[30,45,35,55,40,65,50,70,55,80,60,75,85,70,90,95,80,88,92,85,95,90,88,92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          background: h > 70
                            ? 'linear-gradient(to top, rgba(229, 62, 62, 0.4), rgba(229, 62, 62, 0.8))'
                            : 'linear-gradient(to top, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
                        }}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                    {[
                      { label: 'Balance', value: '$12,450.00', icon: 'Wallet' },
                      { label: 'Trades', value: '1,234', icon: 'BarChart3' },
                      { label: 'Win Rate', value: '89.2%', icon: 'Target' },
                    ].map(item => (
                      <div key={item.label} className="bg-white/[0.02] rounded-lg p-3">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon name={item.icon} size={12} className="text-neutral-500" />
                          <span className="text-neutral-500 text-[10px] uppercase tracking-wider">{item.label}</span>
                        </div>
                        <span className="text-white font-bold text-sm font-mono">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5">
              <Icon name="LayoutDashboard" size={14} className="text-red-400" />
              <span className="text-red-400 text-xs font-medium uppercase tracking-wider">Dashboard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-gradient-white">{t('dashboard', 'title', 'Your Personal')} </span>
              <span className="text-gradient">{t('dashboard', 'titleHighlight', 'Trading Dashboard')}</span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed">
              {t('dashboard', 'text1', 'Access your complete trading ecosystem from one intuitive interface.')}
            </p>

            <p className="text-neutral-500 leading-relaxed">
              {t('dashboard', 'text2', 'Real-time data visualization, advanced charting tools, and instant execution.')}
            </p>

            <button
              onClick={onRegisterClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-xl transition-all duration-300 glow-red hover:glow-red-strong"
            >
              <Icon name="Rocket" size={18} />
              {t('dashboard', 'beginJourney', 'Begin Your Journey')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
