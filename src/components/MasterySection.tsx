import Icon from '@/components/ui/icon';

interface MasteryProps {
  t: (section: string, key: string, fallback?: string) => string;
}

const steps = [
  { icon: 'UserPlus', num: '01', titleKey: 'step1Title', descKey: 'step1Desc', titleFallback: 'Create Your Account', descFallback: 'Sign up in minutes and complete a simple verification process.' },
  { icon: 'Settings', num: '02', titleKey: 'step2Title', descKey: 'step2Desc', titleFallback: 'Configure Your Strategy', descFallback: 'Choose from pre-built AI strategies or customize your own.' },
  { icon: 'Play', num: '03', titleKey: 'step3Title', descKey: 'step3Desc', titleFallback: 'Start Trading Automatically', descFallback: 'Watch as our AI executes trades, optimizing for maximum returns.' },
];

const MasterySection = ({ t }: MasteryProps) => {
  return (
    <section id="steps" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-400 text-sm font-medium mb-4">
            {t('mastery', 'subtitle', 'Join thousands of traders who transformed their approach')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-white">
            {t('mastery', 'title', 'Master the Markets in Three Simple Steps')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < 2 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px">
                  <div className="w-full h-px bg-gradient-to-r from-red-500/30 to-transparent" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500/30 rounded-full" />
                </div>
              )}

              <div className="glass-card rounded-2xl p-8 hover:border-red-500/20 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Icon name={step.icon} size={24} className="text-red-400" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-mono font-bold text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded-md">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t('mastery', step.titleKey, step.titleFallback)}
                  </h3>
                </div>

                <p className="text-neutral-400 leading-relaxed">
                  {t('mastery', step.descKey, step.descFallback)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto text-center">
          <p className="text-neutral-300 leading-relaxed mb-4">
            {t('mastery', 'description1', 'Haltrovex handles the complexity while you maintain full control. Our technology works 24/7, analyzing markets with precision.')}
          </p>
          <p className="text-neutral-500 leading-relaxed">
            {t('mastery', 'description2', 'Whether you\'re a beginner or an experienced trader, Haltrovex adapts to your needs.')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterySection;
