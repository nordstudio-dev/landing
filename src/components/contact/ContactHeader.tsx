import { useFadeIn } from '../../hooks/useFadeIn';
import { useI18n } from '../../i18n';

export function ContactHeader() {
  const topRef = useFadeIn();
  const detailsRef = useFadeIn();
  const { t } = useI18n();

  return (
    <>
      <div className="bento-contact-top fade-in" ref={topRef}>
        <div className="contact-badge">
          <span className="contact-badge-dot" />
          {t.contact.badge}
        </div>
        <h1 className="contact-heading" dangerouslySetInnerHTML={{ __html: t.contact.heading }} />
        <p className="contact-desc">{t.contact.description}</p>
      </div>

      <div className="bento-contact-details fade-in" ref={detailsRef}>
        <div>
          <p className="contact-origin-label">{t.contact.originLabel}</p>
          <p className="contact-origin">{t.contact.originText}</p>
        </div>
      </div>
    </>
  );
}
