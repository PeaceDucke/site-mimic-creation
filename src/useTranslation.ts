import { translations, type LanguageCode } from './translations';

export const useTranslation = (lang: LanguageCode) => {
  const t = translations[lang] || translations.en;
  return { t, lang };
};

export const languages = [
  { countryCode: 'US', code: 'en', name: 'English' },
  { countryCode: 'DE', code: 'de', name: 'Deutsch' },
  { countryCode: 'SE', code: 'sv', name: 'Svenska' },
  { countryCode: 'NO', code: 'no', name: 'Norsk' },
  { countryCode: 'JP', code: 'ja', name: '日本語' },
  { countryCode: 'KR', code: 'ko', name: '한국어' },
  { countryCode: 'IT', code: 'it', name: 'Italiano' },
  { countryCode: 'FR', code: 'fr', name: 'Français' },
  { countryCode: 'MX', code: 'es', name: 'Español' }
] as const;