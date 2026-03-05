import { useFadeIn } from '../../hooks/useFadeIn';
import { useI18n } from '../../i18n';

export function StorySection() {
  const leftRef = useFadeIn();
  const rightRef = useFadeIn();
  const { t } = useI18n();

  return (
    <>
      <div className="bento-story-left fade-in" id="about" ref={leftRef}>
        <p className="story-quote" dangerouslySetInnerHTML={{ __html: t.story.quote }} />
        <p className="story-attr">{t.story.attribution}</p>
      </div>

      <div className="bento-story-right fade-in" ref={rightRef}>
        <div className="values-list">
          {t.story.values.map(v => (
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
