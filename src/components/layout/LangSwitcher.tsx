import { useState, useEffect, useRef } from 'react';
import { useI18n, type Locale } from '../../i18n';

const labels: Record<Locale, string> = { ca: 'CA', fr: 'FR', en: 'EN' };
const options: { value: Locale; label: string }[] = [
  { value: 'ca', label: 'Català' },
  { value: 'fr', label: 'Français' },
  { value: 'en', label: 'English' },
];

export function LangSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {labels[locale]}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`lang-chevron${open ? ' open' : ''}`}>
          <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown" role="listbox" aria-label="Language">
          {options.map((opt) => (
            <button
              key={opt.value}
              className={`lang-option${locale === opt.value ? ' active' : ''}`}
              role="option"
              aria-selected={locale === opt.value}
              onClick={() => { setLocale(opt.value); setOpen(false); }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
