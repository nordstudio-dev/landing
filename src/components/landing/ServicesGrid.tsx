import { PenTool, LayoutGrid, Code, Layers, Hexagon, BarChart3 } from 'lucide-react';
import { ServiceCell } from './ServiceCell';

const services = [
  {
    icon: PenTool,
    title: 'Branding & Identity',
    description: 'Naming, visual identity, brand systems, and guidelines that make your product instantly recognizable.',
  },
  {
    icon: LayoutGrid,
    title: 'Product Design',
    description: 'UX research, UI design, design systems, and prototyping. Interfaces that feel inevitable, not designed.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Full-stack engineering with modern frameworks. React, Next.js, Node — performant, accessible, scalable.',
  },
  {
    icon: Layers,
    title: 'Cloud & Infrastructure',
    description: 'GCP, AWS, CI/CD pipelines, monitoring, and DevOps. Your product runs smooth at any scale.',
  },
  {
    icon: Hexagon,
    title: 'AI Integration',
    description: 'LLM agents, conversational AI, intelligent workflows. We bring AI from hype to production.',
  },
  {
    icon: BarChart3,
    title: 'Strategy & Consulting',
    description: 'Product strategy, technical audits, and roadmap planning. Make the right decisions before writing code.',
  },
];

export function ServicesGrid() {
  return (
    <>
      <div className="bento-services-header" id="services">
        <div className="section-label">Services</div>
        <h2 className="section-title">Your product, delivered.</h2>
        <p className="section-desc">
          From the first sketch to production deploy. We handle the full spectrum so you can focus on what matters.
        </p>
      </div>

      <div className="bento-services-wrap">
        {services.map((service) => (
          <ServiceCell key={service.title} {...service} />
        ))}
      </div>
    </>
  );
}
