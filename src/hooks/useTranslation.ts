import { useState, useEffect } from 'react';

type Translations = Record<string, Record<string, string>>;

const SUPPORTED_LANGS = ['en', 'de', 'fr', 'es', 'it', 'ja', 'ko', 'sv', 'no', 'fi'];

function getLanguage(): string {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (langParam && SUPPORTED_LANGS.includes(langParam)) return langParam;

  const browserLang = navigator.language.split('-')[0];
  if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

  return 'en';
}

const cache: Record<string, Translations> = {};

export function useTranslation() {
  const [lang] = useState(getLanguage);
  const [translations, setTranslations] = useState<Translations>(cache[lang] || {});
  const [loading, setLoading] = useState(!cache[lang]);

  useEffect(() => {
    if (cache[lang]) {
      setTranslations(cache[lang]);
      setLoading(false);
      return;
    }

    fetch(`/i18n/${lang}.json`)
      .then(r => r.json())
      .then(data => {
        cache[lang] = data;
        setTranslations(data);
        setLoading(false);

        if (data.meta?.title) document.title = data.meta.title;
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta && data.meta?.description) descMeta.setAttribute('content', data.meta.description);
      })
      .catch(() => {
        if (lang !== 'en') {
          fetch('/i18n/en.json')
            .then(r => r.json())
            .then(data => {
              cache['en'] = data;
              setTranslations(data);
              setLoading(false);
            });
        }
      });
  }, [lang]);

  const t = (section: string, key: string, fallback = ''): string => {
    return translations[section]?.[key] || fallback || key;
  };

  return { t, lang, loading, translations };
}

export default useTranslation;
