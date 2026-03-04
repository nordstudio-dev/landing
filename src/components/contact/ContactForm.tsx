import { useState, useRef, type FormEvent } from 'react';

const CONTACT_EMAIL = 'info@nordstudio.dev';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const isDisabled = status === 'sending' || status === 'sent';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: formData.get('email'),
          name: formData.get('name'),
          phone: formData.get('phone') || 'Not provided',
          website: formData.get('website') || 'Not provided',
          budget: formData.get('budget') || 'Not selected',
          interest: formData.get('interest') || 'Not selected',
          message: formData.get('message'),
          _subject: 'New project inquiry — Nord Studio',
        }),
      });

      const data = await response.json();

      if (data.success === 'true' || response.ok) {
        setStatus('sent');
        setTimeout(() => {
          setStatus('idle');
          form.reset();
        }, 4000);
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  }

  return (
    <form ref={formRef} className="form-animate" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Company email</label>
        <input type="email" className="form-input" placeholder="Email address" name="email" required disabled={isDisabled} />
      </div>

      <div className="form-group">
        <div className="form-row">
          <div>
            <label className="form-label">Your name</label>
            <input type="text" className="form-input" placeholder="Jane Smith" name="name" required disabled={isDisabled} />
          </div>
          <div>
            <label className="form-label">Phone <span className="optional">(Optional)</span></label>
            <input type="tel" className="form-input" placeholder="+376 123 456" name="phone" disabled={isDisabled} />
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="form-row">
          <div>
            <label className="form-label">Company website</label>
            <input type="url" className="form-input" placeholder="https://yourcompany.com" name="website" disabled={isDisabled} />
          </div>
          <div>
            <label className="form-label">Budget range</label>
            <select className="form-select" name="budget" defaultValue="" disabled={isDisabled}>
              <option value="" disabled>Select a range</option>
              <option value="<10k">&lt; €10,000</option>
              <option value="10k-25k">€10,000 – €25,000</option>
              <option value="25k-50k">€25,000 – €50,000</option>
              <option value="50k-100k">€50,000 – €100,000</option>
              <option value=">100k">&gt; €100,000</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">What are you looking for?</label>
        <select className="form-select" name="interest" defaultValue="" disabled={isDisabled}>
          <option value="" disabled>Select a service</option>
          <option value="branding">Branding &amp; Identity</option>
          <option value="design">Product Design</option>
          <option value="development">Web Development</option>
          <option value="infrastructure">Cloud &amp; Infrastructure</option>
          <option value="ai">AI Integration</option>
          <option value="strategy">Strategy &amp; Consulting</option>
          <option value="full">Full product build</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Tell us about your project</label>
        <textarea className="form-input" placeholder="What are you building? What problem are you solving?" name="message" required disabled={isDisabled} />
      </div>

      <button
        type="submit"
        className={`form-submit${status === 'sent' ? ' sent' : ''}${status === 'error' ? ' error' : ''}`}
        disabled={isDisabled}
      >
        {{ idle: 'Submit', sending: 'Sending...', sent: "Sent — we'll be in touch!", error: 'Error — try again' }[status]}
      </button>
    </form>
  );
}
