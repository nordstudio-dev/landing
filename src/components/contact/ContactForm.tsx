import { useState, useRef, type FormEvent } from 'react';
import { useI18n } from '../../i18n';

const CONTACT_EMAIL = 'info@nordstudio.dev';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useI18n();

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

  const statusLabels: Record<FormStatus, string> = {
    idle: t.form.submit,
    sending: t.form.sending,
    sent: t.form.sent,
    error: t.form.error,
  };

  return (
    <form ref={formRef} className="form-animate" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">{t.form.emailLabel}</label>
        <input type="email" className="form-input" placeholder={t.form.emailPlaceholder} name="email" required disabled={isDisabled} />
      </div>

      <div className="form-group">
        <div className="form-row">
          <div>
            <label className="form-label">{t.form.nameLabel}</label>
            <input type="text" className="form-input" placeholder={t.form.namePlaceholder} name="name" required disabled={isDisabled} />
          </div>
          <div>
            <label className="form-label">{t.form.phoneLabel} <span className="optional">{t.form.phoneOptional}</span></label>
            <input type="tel" className="form-input" placeholder={t.form.phonePlaceholder} name="phone" disabled={isDisabled} />
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="form-row">
          <div>
            <label className="form-label">{t.form.websiteLabel}</label>
            <input type="url" className="form-input" placeholder={t.form.websitePlaceholder} name="website" disabled={isDisabled} />
          </div>
          <div>
            <label className="form-label">{t.form.budgetLabel}</label>
            <select className="form-select" name="budget" defaultValue="" disabled={isDisabled}>
              <option value="" disabled>{t.form.budgetPlaceholder}</option>
              {t.form.budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">{t.form.interestLabel}</label>
        <select className="form-select" name="interest" defaultValue="" disabled={isDisabled}>
          <option value="" disabled>{t.form.interestPlaceholder}</option>
          {t.form.interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">{t.form.messageLabel}</label>
        <textarea className="form-input" placeholder={t.form.messagePlaceholder} name="message" required disabled={isDisabled} />
      </div>

      <button
        type="submit"
        className={`form-submit${status === 'sent' ? ' sent' : ''}${status === 'error' ? ' error' : ''}`}
        disabled={isDisabled}
      >
        {statusLabels[status]}
      </button>
    </form>
  );
}
