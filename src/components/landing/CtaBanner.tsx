import { Link } from 'react-router-dom';
import { useFadeIn } from '../../hooks/useFadeIn';
import { useI18n } from '../../i18n';
import { ArrowIcon } from '../shared/ArrowIcon';

export function CtaBanner() {
  const ref = useFadeIn();
  const { t } = useI18n();

  return (
    <div className="bento-cta fade-in" ref={ref}>
      <h2 className="cta-title">{t.cta.title}</h2>
      <p className="cta-desc">{t.cta.description}</p>
      <Link
        to="/contact"
        className="btn-primary"
        style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
      >
        {t.cta.button}
        <ArrowIcon />
      </Link>
    </div>
  );
}
