// pages/contact.js

import { Mail, Calendar, Phone } from 'lucide-react';
import styles from '../styles/Contact.module.css';
import pageStyles from '../styles/ContactPage.module.css';

export default function Contact() {
  return (
    <main className={`${styles.contactSection} ${pageStyles.contactWrapper}`}>
      {/* Centered contact info */}
      <div className={styles.contactCenter}>
        <h1 className={styles.contactHeading}>Contact Us</h1>
        <p className={styles.contactText}>
          Connect with a team member for personalized support.
        </p>
        <div className={styles.contactItems}>
          <div className={styles.contactItem}>
            <Mail size={20} className={styles.icon} />
            <a href="mailto:info@example.com" className={styles.contactLink}>
              Send us an Email
            </a>
          </div>
          <div className={styles.contactItem}>
            <Calendar size={20} className={styles.icon} />
            <a href="/book-appointment" className={styles.contactLink}>
              Book a Consultation
            </a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={20} className={styles.icon} />
            <a href="tel:+18887952533" className={styles.contactLink}>
              +1-888-795-2533
            </a>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className={styles.newsletterContainer}>
          <h2 className={styles.newsletterHeading}>NEWSLETTER</h2>
          <p className={styles.newsletterText}>
            Subscribe to our newsletter to explore the world of York Paris with its timeless creations and stories of exceptional design.
          </p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}