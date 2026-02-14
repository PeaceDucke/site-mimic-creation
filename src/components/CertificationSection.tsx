import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface CertificationProps {
  t: (section: string, key: string, fallback?: string) => string;
}

const certifications = [
  { icon: 'Shield', label: 'SSL Encrypted', detail: '256-bit encryption' },
  { icon: 'Lock', label: 'Regulated', detail: 'Financial compliance' },
  { icon: 'CheckCircle', label: 'Verified Platform', detail: 'Independently audited' },
  { icon: 'Database', label: 'Secure Storage', detail: 'Cold wallet protection' },
];

const CertificationSection = ({ t }: CertificationProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-6">
              <Icon name="ShieldCheck" size={32} className="text-red-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
              {t('certification', 'title', 'Certified & Regulated Trading Platform')}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              {t('certification', 'description', 'Haltrovex operates under strict financial regulations and maintains the highest security standards.')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white/[0.02] rounded-xl p-5 text-center border border-white/5 hover:border-red-500/10 transition-colors">
                <Icon name={cert.icon} size={24} className="text-red-400 mx-auto mb-3" />
                <div className="text-white font-semibold text-sm mb-1">{cert.label}</div>
                <div className="text-neutral-500 text-xs">{cert.detail}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
            >
              <Icon name={expanded ? 'ChevronUp' : 'ChevronDown'} size={16} />
              {expanded
                ? t('certification', 'hideDetails', 'Hide Details')
                : t('certification', 'viewCertificate', 'View Certificate')
              }
            </button>

            {expanded && (
              <div className="mt-6 p-6 bg-white/[0.02] rounded-xl border border-white/5 text-left animate-fade-in">
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-neutral-500">Platform:</span>
                    <span className="text-white ml-2">Haltrovex Official</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">Website:</span>
                    <span className="text-red-400 ml-2">haltrovex-official.org</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">Security:</span>
                    <span className="text-white ml-2">AES-256 Encryption</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">Uptime:</span>
                    <span className="text-white ml-2">99.99% SLA</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
