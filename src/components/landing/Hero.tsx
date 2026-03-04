import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDecorativeGrid } from '../../hooks/useDecorativeGrid';
import { useI18n } from '../../i18n';
import { ArrowIcon } from '../shared/ArrowIcon';

export function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { verticals, horizontals } = useDecorativeGrid(gridRef);
  const { t } = useI18n();

  return (
    <div className="bento-hero">
      <div className="grid-container" ref={gridRef}>
        {verticals.map((left, i) => (
          <div
            key={`v-${i}`}
            className="g-v"
            style={i === 12 ? { right: 0 } : { left: `${left}%` }}
          />
        ))}
        {horizontals.map((top, i) => (
          <div key={`h-${i}`} className="g-h" style={{ top: `${top}px` }} />
        ))}
      </div>

      <div className="hero-badge">
        <span className="hero-badge-dot" />
        {t.hero.badge}
      </div>

      <h1 dangerouslySetInnerHTML={{ __html: t.hero.headline }} />

      <p className="hero-sub">{t.hero.subheading}</p>

      <div className="hero-actions">
        <Link to="/contact" className="btn-primary">
          {t.hero.ctaPrimary}
          <ArrowIcon />
        </Link>
        <a href="#services" className="btn-secondary">
          {t.hero.ctaSecondary}
        </a>
      </div>
    </div>
  );
}
