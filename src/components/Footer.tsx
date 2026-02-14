import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-red-500/20 rounded-lg rotate-45" />
                <div className="absolute inset-1 bg-red-500/40 rounded-md rotate-45" />
                <span className="relative text-white font-bold text-lg z-10">H</span>
              </div>
              <span className="text-white font-bold text-xl">Haltrovex</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm mb-4">
              Advanced AI-powered trading platform providing automated solutions for crypto, forex and stock markets.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-neutral-400 text-xs">All systems operational</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              {['Features', 'Dashboard', 'Security', 'Pricing'].map(item => (
                <li key={item}>
                  <a href="#" className="text-neutral-500 hover:text-red-400 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Use', 'Privacy Policy', 'Risk Disclosure', 'Compliance'].map(item => (
                <li key={item}>
                  <a href="#" className="text-neutral-500 hover:text-red-400 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            &copy; {new Date().getFullYear()} Haltrovex. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-neutral-600 text-xs">
            <Icon name="Globe" size={12} />
            <span>haltrovex-official.org</span>
          </div>
        </div>

        <div className="mt-8 p-4 bg-white/[0.02] rounded-lg border border-white/5">
          <p className="text-neutral-600 text-[10px] leading-relaxed text-center">
            Risk Disclaimer: Trading involves significant risk. Past performance does not guarantee future results.
            This platform uses AI algorithms that may not always predict market movements accurately.
            Only invest what you can afford to lose. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
