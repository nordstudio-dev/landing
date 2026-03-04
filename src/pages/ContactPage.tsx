import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContactHeader } from '../components/contact/ContactHeader';
import { ContactForm } from '../components/contact/ContactForm';

export function ContactPage() {
  return (
    <>
      <Navbar variant="contact" />
      <div className="bento-page">
        <div className="bento-content">
          <ContactHeader />
          <div className="bento-contact-right">
            <ContactForm />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
