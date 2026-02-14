import Icon from '@/components/ui/icon';

interface ReviewsProps {
  t: (section: string, key: string, fallback?: string) => string;
  onRegisterClick: () => void;
}

const reviews = [
  { name: 'Sarah M.', location: 'London, UK', text: 'Haltrovex completely changed how I approach trading. The AI does the heavy lifting while I focus on my strategy.', profit: '+34.2%', avatar: 'S' },
  { name: 'Klaus W.', location: 'Berlin, DE', text: 'Incredible platform. The automated portfolio management has consistently outperformed my manual trading.', profit: '+28.7%', avatar: 'K' },
  { name: 'Yuki T.', location: 'Tokyo, JP', text: 'The real-time signals are amazingly accurate. Best investment tool I have used in my 10 years of trading.', profit: '+41.5%', avatar: 'Y' },
  { name: 'Marco P.', location: 'Milan, IT', text: 'Simple to set up, powerful results. Haltrovex delivers exactly what it promises — smart, automated trading.', profit: '+22.8%', avatar: 'M' },
];

const ReviewsSection = ({ t, onRegisterClick }: ReviewsProps) => {
  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
            <Icon name="MessageSquare" size={14} className="text-red-400" />
            <span className="text-red-400 text-xs font-medium uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-white">
            {t('reviews', 'title', 'Real Results from Real Traders')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="group glass-card rounded-2xl p-6 hover:border-red-500/15 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/30 to-red-900/30 flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-neutral-500 text-xs">{review.location}</div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(s => (
                  <Icon key={s} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-neutral-500">Profit</span>
                <span className="text-green-400 font-bold text-sm font-mono">{review.profit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-400 mb-6">
            {t('reviews', 'joinText', 'Ready to join our community of successful traders?')}
          </p>
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-xl transition-all duration-300 glow-red hover:glow-red-strong"
          >
            <Icon name="ArrowRight" size={18} />
            {t('reviews', 'joinNow', 'Join Haltrovex Now')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
