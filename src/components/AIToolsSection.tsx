import Icon from '@/components/ui/icon';

interface AIToolsProps {
  t: (section: string, key: string, fallback?: string) => string;
}

const tools = [
  { icon: 'Brain', titleKey: 'tool1Title', descKey: 'tool1Desc', titleFallback: 'Predictive Market Analysis', descFallback: 'Our AI algorithms analyze millions of data points to forecast market trends.' },
  { icon: 'Briefcase', titleKey: 'tool2Title', descKey: 'tool2Desc', titleFallback: 'Automated Portfolio Management', descFallback: 'Set your risk preferences and let our system balance your portfolio.' },
  { icon: 'Radio', titleKey: 'tool3Title', descKey: 'tool3Desc', titleFallback: 'Real-Time Signal Detection', descFallback: 'Get instant alerts on trading opportunities across all markets 24/7.' },
];

const AIToolsSection = ({ t }: AIToolsProps) => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
            <Icon name="Cpu" size={14} className="text-red-400" />
            <span className="text-red-400 text-xs font-medium uppercase tracking-wider">AI Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-white">{t('aiTools', 'title', 'AI-Powered Tools for')} </span>
            <span className="text-gradient">{t('aiTools', 'titleHighlight', 'Smarter Trading')}</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            {t('aiTools', 'description', 'Cutting-edge AI with intuitive design for real-time insights and automated strategies.')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="group relative glass-card rounded-2xl p-8 hover:border-red-500/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors duration-500">
                  <Icon name={tool.icon} size={28} className="text-red-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {t('aiTools', tool.titleKey, tool.titleFallback)}
                </h3>

                <p className="text-neutral-400 leading-relaxed text-sm">
                  {t('aiTools', tool.descKey, tool.descFallback)}
                </p>

                <div className="mt-6 flex items-center gap-2 text-red-400 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>

              <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="w-full h-full border border-red-500 rounded-lg rotate-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
