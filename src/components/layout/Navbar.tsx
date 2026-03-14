import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n';
import { LangSwitcher } from './LangSwitcher';

interface NavbarProps {
  variant: 'landing' | 'contact';
}

export function Navbar({ variant }: NavbarProps) {
  const { t } = useI18n();

  return (
    <nav>
      <div className="nav-inner">
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="Nord Studio" />
          Nord Studio
        </Link>

        {variant === 'landing' ? (
          <div className="nav-links">
            <a href="#services" className="nav-link">
              {t.nav.services}
            </a>
            <a href="#about" className="nav-link">
              {t.nav.about}
            </a>
            <LangSwitcher />
            <Link to="/contact" className="nav-cta">
              {t.nav.contact}
            </Link>
          </div>
        ) : (
          <div className="nav-contact-right">
            <LangSwitcher />
            <Link to="/" className="nav-back">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12.67 8H3.33M7.33 4l-4 4 4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t.nav.back}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
