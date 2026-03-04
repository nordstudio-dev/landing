import { useFadeIn } from '../../hooks/useFadeIn';

const values = [
  {
    num: '01',
    title: "Ship, don't slide",
    description: 'We build real products, not pitch decks. Every engagement produces working software.',
  },
  {
    num: '02',
    title: 'Opinionated by default',
    description: 'Strong decisions made early save months later. We bring a point of view to every project.',
  },
  {
    num: '03',
    title: 'Built to last',
    description: 'Clean architecture, deterministic systems, engineering standards. Your codebase should outlive the hype.',
  },
];

export function StorySection() {
  const leftRef = useFadeIn();
  const rightRef = useFadeIn();

  return (
    <>
      <div className="bento-story-left fade-in" id="about" ref={leftRef}>
        <p className="story-quote">
          We believe great products come from{' '}
          <strong>clear thinking and honest craft</strong>. No fluff, no
          over-engineering — just ideas built with intention and shipped with
          confidence.
        </p>
        <p className="story-attr">— Nord Studio, est. 2025 · Andorra</p>
      </div>

      <div className="bento-story-right fade-in" ref={rightRef}>
        <div className="values-list">
          {values.map((v) => (
            <div className="value-item" key={v.num}>
              <span className="value-num">{v.num}</span>
              <div className="value-text">
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
