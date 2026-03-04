import { useI18n } from '../../i18n';

export function Footer() {
  const { t } = useI18n();

  return (
    <div className="bento-footer">
      <div className="footer-left">{t.footer.copyright}</div>
      <div className="footer-right">
        <a href="mailto:info@nordstudio.dev" className="footer-link">info@nordstudio.dev</a>
      </div>
    </div>
  );
}
