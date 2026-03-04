import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDecorativeGrid } from '../../hooks/useDecorativeGrid';
import { ArrowIcon } from '../shared/ArrowIcon';

export function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { verticals, horizontals } = useDecorativeGrid(gridRef);

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
        Based in Andorra
      </div>

      <h1>Build and deploy<br />your ideas.</h1>

      <p className="hero-sub">
        We design, brand, and engineer digital products from concept to production. Strategy that ships.
      </p>

      <div className="hero-actions">
        <Link to="/contact" className="btn-primary">
          Get in touch
          <ArrowIcon />
        </Link>
        <a href="#services" className="btn-secondary">What we do</a>
      </div>
    </div>
  );
}
