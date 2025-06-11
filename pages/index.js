import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

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
          <a href="/contact" className={styles.heroPreTitle}>
      GET STARTED
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

      {/* ==== Section #3 (duplicate of #1; mobile flips; custom background) ==== */}
<section
  className={`${styles.heroSection} ${styles.customExperienceSection}`}
>
  <div className={styles.heroLeft}>
    <Image
      src="/rose_pendant.jpg"
      alt="Rose Pendant"
      width={800}
      height={600}
      quality={100} 
      className={styles.customExperienceImage}
      placeholder="empty"
    />

    <h1 className={styles.heroHeading}>The Custom Experience</h1>
    <p className={styles.heroText}>
      We translate your ideas into heirlooms, offering a bespoke process that is as memorable as the jewelry itself.
    </p>
  </div>
  <div className={styles.heroRight}>
    <Image
      src="/black_white_model.jpg"
      alt="Black & white model"
      width={800}
      height={600}
      className={styles.heroImage}
      placeholder="empty"
    />
  </div>
</section>

     {/* ==== Section #2 (Image Left, Text Right) ==== */}
      <section className={`${styles.heroSection} ${styles.reverseOnMobile} ${styles.ethosSection}`}>
        <div className={styles.heroRight}>
          <Image
            src="/pink_diamond_ring.jpg"
            alt="Pink diamond ring"
            width={800}
            height={600}
            quality={100} 
            className={styles.heroImage}
            placeholder="empty"
          />
        </div>
        <div className={`${styles.heroLeft} ${styles.ethosLeft}`}>
          <h1 className={styles.heroHeading}>Our Design Ethos</h1>
          <p className={styles.heroText}>
            Jewelry should reflect a personal story, where artistic vision meets timeless form and meaning is built into every detail.
          </p>
        </div>
      </section>

      {/* ==== Section #4 (Materials & Craftsmanship; image on top in both columns) ==== */}
<section className={`${styles.heroSection} ${styles.materialsSection}`}>
  {/* ––––– Column #1 ––––– */}
  <div className={`${styles.heroLeft} ${styles.withTopImage}`}>
  <Image
    src="/lapiz.jpg"
    alt="York Paris Cocktail Ring"
    width={800}
    height={600}
    quality={100}
    className={styles.topImage}
    placeholder="empty"
  />
  <Link href="/contact" className={styles.textLink}>
    <h1 className={styles.heroHeading}>York Paris Cocktail Ring</h1>
    <p className={styles.heroText}>
      18K White Gold Ring with a Custom Cut Lapiz Stone
    </p>
    <span className={styles.heroLink}>$1,795</span>
  </Link>
</div>

  {/* ––––– Column #2 (duplicate of column #1 for now) ––––– */}
  <div className={`${styles.heroLeft} ${styles.withTopImage}`}>
  <Image
    src="/jade_earrings.jpg"
    alt="Orbit Turquoise Earrings"
    width={800}
    height={600}
    quality={100}
    className={styles.topImage}
    placeholder="empty"
  />
  <Link href="/contact" className={styles.textLink}>
    <h1 className={styles.heroHeading}>Orbit Turquoise Earrings</h1>
    <p className={styles.heroText}>
      18K Yellow Gold Earrings with Custom Cut Cabochon Turquoise Stones
    </p>
    <span className={styles.heroLink}>$1,250</span>
  </Link>
</div>
</section>
      
      {/* ==== Section #1 (Text Left, Image Right; colored background + mobile ratio) ==== */}
<section className={`${styles.heroSection} ${styles.madeSection}`}>
  <div className={`${styles.heroLeft} ${styles.madeLeft}`}>
    <h1 className={styles.heroHeading}>Made Just for You</h1>
    <p className={styles.heroText}>
      Distinct pieces made with intention, shaped by your vision, and crafted to last.
    </p>
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

      {/* =============== Info Section (3 Columns) =============== */}
<section className={styles.infoSection}>
  {/* ––––– Info Item #1 ––––– */}
  <div className={styles.infoItem}>
    <h3 className={styles.infoHeading}>Satisfaction Guarantee</h3>
    <p className={styles.infoText}>
      We promise you’ll love your custom piece, or we’ll make it right.
    </p>
  </div>

  {/* ––––– Info Item #2 ––––– */}
  <div className={styles.infoItem}>
    <h3 className={styles.infoHeading}>Expert Craftsmanship</h3>
    <p className={styles.infoText}>
      Each design is crafted by jewelers with years of hands-on experience.
    </p>
  </div>

  {/* ––––– Info Item #3 ––––– */}
  <div className={styles.infoItem}>
    <h3 className={styles.infoHeading}>Design-First Approach</h3>
    <p className={styles.infoText}>
      We balance form and individuality to create something personal.
    </p>
  </div>
</section>
{/* ============================================================ */}

      {/* =============== Feature Section (2 Columns) =============== */}
<section className={styles.featureSection}>
  {/* ––––– Feature Item #1 ––––– */}
  <div className={styles.featureItem}>
    <Image
      src="/about1.jpg"      /* ← put your image in /public/ */
      alt="Feature 1"
      width={800}
      height={600}
      quality={100} 
      className={styles.featureImage}
      placeholder="empty"
    />
    <Link href="/contact" className={styles.textLink}>
    <h2 className={styles.featureHeading}>The York Paris Philosophy</h2>
    <p className={styles.featureText}>
      We are built on refined simplicity, thoughtful design, and personal meaning. Each piece is made to last, feel intentional, and speak to the individual who wears it.
    </p>
    </Link>
  </div>

  {/* ––––– Feature Item #2 ––––– */}
  <div className={styles.featureItem}>
    <Image
      src="/about2.jpg"      /* ← put your second image in /public/ */
      alt="Feature 2"
      width={800}
      height={600}
      quality={100} 
      className={styles.featureImage}
      placeholder="empty"
    />
    <Link href="/contact" className={styles.textLink}>
    <h2 className={styles.featureHeading}>Every Piece Has a Story</h2>
    <p className={styles.featureText}>
      Jewelry becomes personal when it captures a feeling or a memory. At York Paris, storytelling is woven into every design, crafted to feel meaningful and lasting.
    </p>
    </Link>
  </div>
</section>
{/* ============================================================== */}
    </main>
  );
}