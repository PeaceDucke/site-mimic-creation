import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface HeroProps {
  t: (section: string, key: string, fallback?: string) => string;
}

const HeroSection = ({ t }: HeroProps) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-medium">
                {t('hero', 'brandInfo', 'Official Platform')} haltrovex-official.org
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-gradient-white">{t('hero', 'title', 'Haltrovex — Official AI Trading Platform').split('—')[0]}</span>
              <br />
              <span className="text-gradient">
                {t('hero', 'title', 'AI Trading Platform').includes('—') 
                  ? t('hero', 'title', '').split('—')[1]?.trim()
                  : 'AI Trading Platform'}
              </span>
            </h1>

            <p className="text-lg text-neutral-400 leading-relaxed max-w-lg">
              {t('hero', 'subtitle', 'AI-driven trading platform designed for users who want simplified access to crypto, forex, stocks, and commodities through intelligent automation.')}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border-2 border-black flex items-center justify-center">
                      <Icon name="User" size={12} className="text-neutral-400" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-neutral-400">50K+ traders</span>
              </div>

              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
                <span className="text-sm text-neutral-400 ml-1">{t('hero', 'excellent', 'Excellent')}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { value: '$2.4B+', label: 'Volume' },
                { value: '99.9%', label: 'Uptime' },
                { value: '0.01s', label: 'Execution' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-red-900/10 rounded-2xl blur-xl" />
            <div className="relative glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Icon name="UserPlus" size={20} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{t('form', 'heading', 'Fill out the form to start')}</h3>
                  <p className="text-neutral-500 text-xs">{t('form', 'security', 'Your data is encrypted')}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder={t('form', 'firstName', 'First Name')}
                      value={formData.firstName}
                      onChange={e => setFormData(d => ({ ...d, firstName: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={t('form', 'lastName', 'Last Name')}
                      value={formData.lastName}
                      onChange={e => setFormData(d => ({ ...d, lastName: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                </div>

                <input
                  type="email"
                  placeholder={t('form', 'email', 'Email Address')}
                  value={formData.email}
                  onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all"
                />

                <input
                  type="tel"
                  placeholder={t('form', 'phone', 'Phone Number')}
                  value={formData.phone}
                  onChange={e => setFormData(d => ({ ...d, phone: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-lg transition-all duration-300 glow-red hover:glow-red-strong text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Icon name="Rocket" size={18} />
                  {t('form', 'submit', 'REGISTER NOW')}
                </button>

                <p className="text-[11px] text-neutral-600 leading-relaxed text-center">
                  {t('form', 'disclaimer', 'By providing your information, you acknowledge that you have read, understood and accepted the Terms of Use and Privacy Policy.')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
