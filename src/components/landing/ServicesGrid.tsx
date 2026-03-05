import { PenTool, LayoutGrid, Code, Layers, Hexagon, BarChart3 } from 'lucide-react';
import { useI18n } from '../../i18n';
import { ServiceCell } from './ServiceCell';

const serviceIcons = [PenTool, LayoutGrid, Code, Layers, Hexagon, BarChart3];

export function ServicesGrid() {
  const { t } = useI18n();

  return (
    <>
      <div className="bento-services-header" id="services">
        <div className="section-label">{t.services.label}</div>
        <h2 className="section-title">{t.services.title}</h2>
        <p className="section-desc">{t.services.description}</p>
      </div>

      <div className="bento-services-wrap">
        {t.services.items.map((service, i) => (
          <ServiceCell
            key={i}
            icon={serviceIcons[i]}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
}
