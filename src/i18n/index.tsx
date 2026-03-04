import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import en from './locales/en.json';
import ca from './locales/ca.json';
import fr from './locales/fr.json';

export type Locale = 'en' | 'ca' | 'fr';
export type Translations = typeof en;

const locales: Record<Locale, Translations> = { en, ca, fr };

const STORAGE_KEY = 'nord-lang';
const SUPPORTED: Locale[] = ['ca', 'fr', 'en'];

function detectLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored as Locale)) return stored as Locale;

  for (const lang of navigator.languages) {
    const code = lang.slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(code as Locale)) return code as Locale;
  }

  return 'en';
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    const t = locales[locale];
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: locales[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
