// components/ContactSection.js

import { Mail, Calendar, Phone } from 'lucide-react';
import contactStyles from '../styles/Contact.module.css';

export default function ContactSection() {
  return (
    <section className={contactStyles.contactSection}>
      <div className={contactStyles.contactCenter}>
        {/* Contact Us Heading & Text */}
        <h1 className={contactStyles.contactHeading}>Contact Us</h1>
        <p className={contactStyles.contactText}>
          Connect with a team member for personalized support.
        </p>

        {/* Contact items (Email / Consultation / Phone) */}
        <div className={contactStyles.contactItems}>
          <div className={contactStyles.contactItem}>
            <Mail size={20} className={contactStyles.icon} />
            <a href="mailto:info@example.com" className={contactStyles.contactLink}>
              Send us an Email
            </a>
          </div>
          <div className={contactStyles.contactItem}>
            <Calendar size={20} className={contactStyles.icon} />
            <a href="/book-appointment" className={contactStyles.contactLink}>
              Book a Consultation
            </a>
          </div>
          <div className={contactStyles.contactItem}>
            <Phone size={20} className={contactStyles.icon} />
            <a href="tel:+18887952533" className={contactStyles.contactLink}>
              +1-888-795-2533
            </a>
          </div>
        </div>

        {/* Newsletter block */}
        <div className={contactStyles.newsletterContainer}>
          <h2 className={contactStyles.newsletterHeading}>NEWSLETTER</h2>
          <p className={contactStyles.newsletterText}>
            Subscribe to our newsletter to explore the world of York Paris with its timeless creations and stories of exceptional design.
          </p>
          <form
            className={contactStyles.newsletterForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email Address"
              className={contactStyles.newsletterInput}
            />
            <button type="submit" className={contactStyles.newsletterButton}>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}