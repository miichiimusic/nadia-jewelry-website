// pages/about.js

import Image from 'next/image';
import ContactSection from '../components/ContactSection';
import styles from '../styles/About.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* ===== Page Title (“About”) ===== */}
      <div className={styles.titleWrapper}>
        <span className={styles.line}></span>
        <h2 className={styles.aboutPageTitle}>ABOUT</h2>
        <span className={styles.line}></span>
      </div>

      {/* ===== Single About Item ===== */}
      <div className={styles.aboutContainer}>
        <div className={styles.aboutItem}>
          <Image
            src="/bio_photo.jpg"       /* put /about1.jpg into /public/ */
            alt="Our Origin"
            quality={100}
            width={600}
            height={400}
            className={styles.aboutImage}
            placeholder="empty"
          />
          <div className={styles.aboutText}>
            <p>
              Founder Leonardo Ortegon grew up immersed in the world of jewelry. Born in Colombia and raised in South Florida from the age of 13, his earliest memories as a teenager were spent behind the counter of his aunt’s jewelry store—watching, listening, and slowly absorbing the rhythm of the trade. It was there that he first understood the emotional weight jewelry could carry and the trust that clients placed in the people who made it. That early exposure turned into a passion, and by 19, Leonardo had stepped into a more formal role at his cousin’s store, Precious Moments Jewelers. Over the next decade, he worked across every part of the business: diamond sales, custom design, CAD rendering, bench repairs, vendor sourcing, and customer service. Eventually, he took on the day-to-day management of the store, gaining not just technical expertise but a real-world understanding of what makes a jewelry business thrive.
            </p>
            <p>
              That experience laid the foundation for Gemsite—a brand built to offer a more thoughtful and design-driven approach to fine jewelry. Every piece reflects Leonardo’s belief in quiet elegance, refined simplicity, and personal connection. Whether custom-made or ready-to-wear, York Paris pieces are created with care, intention, and a deep respect for the people who wear them. The brand is not about trends or excess—it’s about meaningful design, made to last and made to matter.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Contact + Newsletter Section ===== */}
      <ContactSection />
    </main>
  );
}