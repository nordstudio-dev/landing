import { Link } from 'react-router-dom';
import { useFadeIn } from '../../hooks/useFadeIn';
import { ArrowIcon } from '../shared/ArrowIcon';

export function CtaBanner() {
  const ref = useFadeIn();

  return (
    <div className="bento-cta fade-in" ref={ref}>
      <h2 className="cta-title">Ready to build something?</h2>
      <p className="cta-desc">Tell us about your project. We'll figure out the rest.</p>
      <Link
        to="/contact"
        className="btn-primary"
        style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
      >
        Start a conversation
        <ArrowIcon />
      </Link>
    </div>
  );
}
