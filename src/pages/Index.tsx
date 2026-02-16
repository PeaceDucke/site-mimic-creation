import { useRef } from 'react';
import useTranslation from '@/hooks/useTranslation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CalculatorSection from '@/components/CalculatorSection';
import AIToolsSection from '@/components/AIToolsSection';
import DashboardSection from '@/components/DashboardSection';
import MasterySection from '@/components/MasterySection';
import ReviewsSection from '@/components/ReviewsSection';
import CountdownSection from '@/components/CountdownSection';

import Footer from '@/components/Footer';

const Index = () => {
  const { t, loading } = useTranslation();
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-2 border-red-500/20 rounded-lg rotate-45 animate-spin-slow" />
            <div className="absolute inset-2 border-2 border-red-500/40 rounded-md rotate-45 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
          </div>
          <span className="text-neutral-500 text-sm">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={topRef} className="min-h-screen bg-[#080808] relative noise-bg grid-pattern">
      <AnimatedBackground />

      <div className="relative z-10">
        <Header t={t} onRegisterClick={scrollToTop} />
        <HeroSection t={t} />
        <CalculatorSection t={t} />
        <AIToolsSection t={t} />
        <DashboardSection t={t} onRegisterClick={scrollToTop} />
        <MasterySection t={t} />
        <ReviewsSection t={t} onRegisterClick={scrollToTop} />
        <CountdownSection t={t} onRegisterClick={scrollToTop} />

        <Footer />
      </div>
    </div>
  );
};

export default Index;