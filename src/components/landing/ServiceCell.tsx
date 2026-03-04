import type { LucideIcon } from 'lucide-react';
import { useFadeIn } from '../../hooks/useFadeIn';

interface ServiceCellProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCell({ icon: Icon, title, description }: ServiceCellProps) {
  const ref = useFadeIn();

  return (
    <div className="cell fade-in" ref={ref}>
      <div className="cell-icon">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="cell-arrow">&rarr;</div>
    </div>
  );
}
