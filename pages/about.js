// pages/about.js

import Image from 'next/image';
import ContactSection from '../components/ContactSection';
import styles from '../styles/About.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* ===== Page Title (“Timeline”) ===== */}
      <div className={styles.titleWrapper}>
        <span className={styles.line}></span>
        <h2 className={styles.aboutPageTitle}>ABOUT</h2>
        <span className={styles.line}></span>
      </div>
      <div className={styles.aboutContainer}>
        {/* ––––– Item #1 ––––– */}
        <div className={styles.aboutItem}>
          <Image
            src="/about1.jpg"       /* put /about1.jpg into /public/ */
            alt="Our Origin"
            quality={100}    
            width={600}
            height={400}
            className={styles.aboutImage}
            placeholder="empty"
          />
          <div className={styles.aboutText}>
            <p>
              York Paris is a contemporary jewelry house rooted in tradition and refined by modern design. Each piece reflects a quiet elegance—understated, personal, and intentional.
            </p>
            <p>
              The name captures the brand’s dual spirit: “York” evokes structure and strength, while “Paris” suggests elegance, emotion, and artistry. Together, they represent a balance of contrast—masculine and feminine, bold and soft, timeless and modern.
            </p>
            <p>
              York Paris offers both custom and ready-to-wear pieces, crafted with precision and designed to tell a story. It’s more than jewelry—it’s a perspective.
            </p>
          </div>
        </div>

        {/* ––––– Item #2 ––––– */}
        <div className={styles.aboutItem}>
          <Image
            src="/about2.jpg"       /* put /about2.jpg into /public/ */
            alt="Our Philosophy"
            quality={100} 
            width={600}
            height={400}
            className={styles.aboutImage}
            placeholder="empty"
          />
          <div className={styles.aboutText}>
            <p>
              Founder Leonardo Ortegon grew up in the jewelry world. Born in Colombia and raised in South Florida, his earliest memories are tied to his family’s store—learning, watching, and slowly mastering the craft.
            </p>
            <p>
              By 19, he was working full-time at Precious Moments Jewelers, gaining hands-on experience in diamond sales, CAD design, bench work, and customer service. Over time, he recognized a need for jewelry that combined design integrity with personal meaning.
            </p>
            <p>
              York Paris is Leonardo’s response—a brand shaped by legacy and driven by vision. His background in both jewelry and music production informs his approach: blending precision with creativity, structure with emotion.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Contact + Newsletter Section ===== */}
      <ContactSection />
    </main>
  );
}