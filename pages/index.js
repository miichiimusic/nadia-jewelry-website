import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ===== New Top Hero Section (Text Left, Image Right; custom background) ===== */}
      <section
        className={`${styles.heroSection} ${styles.coloredHeroSection}`}
      >
        <div className={`${styles.heroLeft} ${styles.newHeroLeft}`}>
          <h1 className={styles.heroHeading}>Custom-Made Fine Jewelry</h1>
          <p className={styles.heroText}>
            From concept to creation, we craft one-of-a-kind jewelry, made to order with precision, beauty, and meaning.
          </p>
          <a href="#get-started" className={styles.heroPreTitle}>
      DESIGNED JUST FOR YOU
    </a>
        </div>
        <div className={styles.heroRight}>
          {/* Put your actual image file (e.g. new_hero_image.jpg) into /public/ */}
          <Image
            src="/new_hero_image.jpg"
            alt="New Hero Image"
            width={800}
            height={600}
            className={styles.heroImage}
            placeholder="empty"
          />
        </div>
      </section>
      
      {/* ==== Section #1 (Text Left, Image Right; mobile flips) ==== */}
      <section className={`${styles.heroSection}`}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeading}>Made Just for You</h1>
          <p className={styles.heroText}>
            Distinct pieces made with intention, shaped by your vision, and
            crafted to last.
          </p>
          <a href="#get-started" className={styles.heroLink}>
            Get Started
          </a>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="/gold_earrings.jpg"
            alt="Gold earrings"
            width={800}
            height={600}
            className={styles.heroImage}
            placeholder="empty"
          />
        </div>
      </section>

      {/* ==== Section #2 (Image Left, Text Right) ==== */}
      <section className={`${styles.heroSection} ${styles.reverseOnMobile}`}>
        <div className={styles.heroRight}>
          <Image
            src="/sapphire_earrings.jpg"
            alt="Sapphire earrings"
            width={800}
            height={600}
            className={styles.heroImage}
            placeholder="empty"
          />
        </div>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeading}>Our Design Ethos</h1>
          <p className={styles.heroText}>
            We create one-of-a-kind pieces that reflect your story, blending artistic vision with timeless design.
          </p>
          <a href="#get-started" className={styles.heroLink}>
            Get Started
          </a>
        </div>
      </section>

      {/* ==== Section #3 (duplicate of #1; mobile flips) ==== */}
      <section className={`${styles.heroSection}`}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeading}>The Custom Experience</h1>
          <p className={styles.heroText}>
            From concept to creation, we guide you through a personalized process that turns ideas into treasures.
          </p>
          <a href="#get-started" className={styles.heroLink}>
            Get Started
          </a>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="/black_white_model.jpg"
            alt="Gold earrings"
            width={800}
            height={600}
            className={styles.heroImage}
            placeholder="empty"
          />
        </div>
      </section>

      {/* ==== Section #4 (duplicate of #2; no mobile flip needed) ==== */}
      <section className={`${styles.heroSection} ${styles.reverseOnMobile}`}>
        <div className={styles.heroRight}>
          <Image
            src="/color_model.jpg"
            alt="Sapphire earrings"
            width={800}
            height={600}
            className={styles.heroImage}
            placeholder="empty"
          />
        </div>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeading}>Materials & Craftsmanship</h1>
          <p className={styles.heroText}>
            We source the finest stones and metals, handcrafted by master artisans to ensure each detail is flawless.
          </p>
          <a href="#get-started" className={styles.heroLink}>
            Get Started
          </a>
        </div>
      </section>

      {/* =============== Info Section (3 Columns) =============== */}
<section className={styles.infoSection}>
  {/* ––––– Info Item #1 ––––– */}
  <div className={styles.infoItem}>
    <h3 className={styles.infoHeading}>Satisfaction Guarantee</h3>
    <p className={styles.infoText}>
      We promise you’ll love your custom piece—or we’ll make it right.
    </p>
    <a href="#learn-more" className={styles.infoLink}>
      Learn More
    </a>
  </div>

  {/* ––––– Info Item #2 ––––– */}
  <div className={styles.infoItem}>
    <h3 className={styles.infoHeading}>Expert Craftsmanship</h3>
    <p className={styles.infoText}>
      Each design is handcrafted by artisans with decades of experience.
    </p>
    <a href="#learn-more" className={styles.infoLink}>
      Learn More
    </a>
  </div>

  {/* ––––– Info Item #3 ––––– */}
  <div className={styles.infoItem}>
    <h3 className={styles.infoHeading}>Premium Materials</h3>
    <p className={styles.infoText}>
      We source only the finest metals and stones for lasting beauty.
    </p>
    <a href="#learn-more" className={styles.infoLink}>
      Learn More
    </a>
  </div>
</section>
{/* ============================================================ */}

      {/* =============== Feature Section (2 Columns) =============== */}
<section className={styles.featureSection}>
  {/* ––––– Feature Item #1 ––––– */}
  <div className={styles.featureItem}>
    <Image
      src="/our_promise.jpg"      /* ← put your image in /public/ */
      alt="Feature 1"
      width={800}
      height={600}
      className={styles.featureImage}
      placeholder="empty"
    />
    <h2 className={styles.featureHeading}>Guidance, Not Guesswork</h2>
    <p className={styles.featureText}>
      We share insights on materials, design options, and craftsmanship so you can make confident, meaningful choices.
    </p>
    <a href="#get-started" className={styles.heroLink}>
      Get Started
    </a>
  </div>

  {/* ––––– Feature Item #2 ––––– */}
  <div className={styles.featureItem}>
    <Image
      src="/fashion_news.jpg"      /* ← put your second image in /public/ */
      alt="Feature 2"
      width={800}
      height={600}
      quality={100} 
      className={styles.featureImage}
      placeholder="empty"
    />
    <h2 className={styles.featureHeading}>The Foundation of Craft</h2>
    <p className={styles.featureText}>
      We focus on refined materials, precise craftsmanship, and timeless design to ensure your vision is built to last.
    </p>
    <a href="#get-started" className={styles.heroLink}>
      Get Started
    </a>
  </div>
</section>
{/* ============================================================== */}
    </main>
  );
}