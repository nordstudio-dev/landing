import { useFadeIn } from '../../hooks/useFadeIn';

export function ContactHeader() {
  const topRef = useFadeIn();
  const detailsRef = useFadeIn();

  return (
    <>
      <div className="bento-contact-top fade-in" ref={topRef}>
        <div className="contact-badge">
          <span className="contact-badge-dot" />
          Taking new projects
        </div>
        <h1 className="contact-heading">Let's build<br />something together.</h1>
        <p className="contact-desc">
          Tell us about your project and we'll get back to you within 48 hours. No sales pitch, just a real conversation.
        </p>
      </div>

      <div className="bento-contact-details fade-in" ref={detailsRef}>
        <div>
          <p className="contact-origin-label">Made in Andorra</p>
          <p className="contact-origin">Proudly crafted from Andorra — small country, serious engineering.</p>
        </div>
      </div>
    </>
  );
}
