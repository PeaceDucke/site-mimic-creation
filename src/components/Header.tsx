import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  t: (section: string, key: string, fallback?: string) => string;
  onRegisterClick: () => void;
}

const Header = ({ t, onRegisterClick }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-red-500/20 rounded-lg rotate-45 group-hover:rotate-[55deg] transition-transform duration-500" />
              <div className="absolute inset-1 bg-red-500/40 rounded-md rotate-45 group-hover:rotate-[55deg] transition-transform duration-700" />
              <span className="relative text-white font-bold text-lg z-10">H</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Haltrovex
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '#features', label: t('aiTools', 'title', 'AI Tools') },
              { href: '#dashboard', label: t('dashboard', 'title', 'Dashboard') },
              { href: '#steps', label: t('mastery', 'title', 'How It Works').split(' ').slice(0, 3).join(' ') },
              { href: '#reviews', label: t('reviews', 'title', 'Reviews') },
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onRegisterClick}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 glow-red hover:glow-red-strong"
            >
              <Icon name="Zap" size={16} />
              {t('form', 'submit', 'REGISTER NOW')}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
            >
              <Icon name={mobileOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-dark border-t border-white/5 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {[
              { href: '#features', label: 'Features' },
              { href: '#dashboard', label: 'Dashboard' },
              { href: '#steps', label: 'How It Works' },
              { href: '#reviews', label: 'Reviews' },
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { onRegisterClick(); setMobileOpen(false); }}
              className="w-full mt-2 px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all glow-red"
            >
              {t('form', 'submit', 'REGISTER NOW')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
