import { createContext, useContext } from 'react';
import type en from './locales/en.json';

export type Locale = 'en' | 'ca' | 'fr';
export type Translations = typeof en;

export interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
