import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Products.module.css';
import homeStyles from '../styles/Home.module.css';
import { getAllProducts } from '../lib/products';

export default function Home() {
  // Get products from shared data file
  const products = getAllProducts();

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.customExperienceSection}`}>
        <div className={styles.heroLeft}>
          <Image
            src="/nadia-stackable.jpg"
            alt="Nadia Ring"
            width={800}
            height={600}
            quality={100} 
            className={styles.customExperienceImage}
            placeholder="empty"
          />

          <h1 className={styles.heroHeading}>Nadia Dual Wave Stackable Ring</h1>
          <p className={styles.heroText}>
            Two fluid gold bands embrace a brilliant round lab-grown diamond in a modern, minimalist design.
          </p>
          <Link href="/products/eternity-diamond-ring-3" className={styles.exploreLink}>
            INQUIRE
          </Link>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="/model.jpg"
            alt="Model"
            width={800}
            height={600}
            className={styles.heroImage}
            placeholder="empty"
          />
        </div>
      </section>

      {/* Products Title Section */}
      <section className={styles.productsTitleSection}>
        <div className={styles.container}>
          <h2 className={styles.productsTitle}>Nadia&apos;s Design Collage</h2>
          <p className={styles.productsSubtitle}>
          A curated mix of signature designs, each one ready to be tailored to your style.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <div className={styles.container}>
        <div className={styles.productsGrid}>
        {products.map((product) => (
          <Link 
            href={`/products/${product.slug}`} 
            key={product.id} 
            className={`${styles.productCard} ${styles[product.height]} ${styles.clickableCard}`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={1000}
                quality={100}
                className={styles.productImage}
                placeholder="empty"
                sizes="(max-width: 900px) 50vw, 33vw"
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>${product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
        </div>
      </div>

      {/* ==== Section #2 (Image Left, Text Right) ==== */}
      <section className={`${homeStyles.heroSection} ${homeStyles.reverseOnMobile} ${homeStyles.ethosSection}`}>
        <div className={homeStyles.heroRight}>
          <Image
            src="/pink_diamond_ring.jpg"
            alt="Pink diamond ring"
            width={800}
            height={600}
            quality={100} 
            className={homeStyles.heroImage}
            placeholder="empty"
          />
        </div>
        <div className={`${homeStyles.heroLeft} ${homeStyles.ethosLeft}`}>
          <h1 className={homeStyles.heroHeading}>Our Design Ethos</h1>
          <p className={homeStyles.heroText}>
            Jewelry should reflect a personal story, where artistic vision meets timeless form and meaning is built into every detail.
          </p>
        </div>
      </section>

      {/* ==== Section #4 (Materials & Craftsmanship; image on top in both columns) ==== */}
      <section className={`${homeStyles.heroSection} ${homeStyles.materialsSection}`}>
        {/* ––––– Column #1 ––––– */}
        <div className={`${homeStyles.heroLeft} ${homeStyles.withTopImage}`}>
          <Image
            src="/lapiz.jpg"
            alt="York Paris Cocktail Ring"
            width={800}
            height={600}
            quality={100}
            className={homeStyles.topImage}
            placeholder="empty"
          />
          <Link href="/inquiry" className={homeStyles.textLink}>
            <h1 className={homeStyles.heroHeading}>York Paris Cocktail Ring</h1>
            <p className={homeStyles.heroText}>
              18K White Gold Ring with a Custom Cut Lapiz Stone
            </p>
            <span className={homeStyles.heroLink}>$1,795</span>
            <span className={homeStyles.exploreLink}>INQUIRE</span>
          </Link>
        </div>

        {/* ––––– Column #2 (duplicate of column #1 for now) ––––– */}
        <div className={`${homeStyles.heroLeft} ${homeStyles.withTopImage}`}>
          <Image
            src="/jade_earrings.jpg"
            alt="Orbit Turquoise Earrings"
            width={800}
            height={600}
            quality={100}
            className={homeStyles.topImage}
            placeholder="empty"
          />
          <Link href="/inquiry" className={homeStyles.textLink}>
            <h1 className={homeStyles.heroHeading}>Orbit Turquoise Earrings</h1>
            <p className={homeStyles.heroText}>
              18K Yellow Gold Earrings with Custom Cut Cabochon Turquoise Stones
            </p>
            <span className={homeStyles.heroLink}>$1,250</span>
            <span className={homeStyles.exploreLink}>INQUIRE</span>
          </Link>
        </div>
      </section>
      
      {/* ==== Section #1 (Text Left, Image Right; colored background + mobile ratio) ==== */}
      <section className={`${homeStyles.heroSection} ${homeStyles.madeSection}`}>
        <div className={`${homeStyles.heroLeft} ${homeStyles.madeLeft}`}>
          <h1 className={homeStyles.heroHeading}>Made Just for You</h1>
          <p className={homeStyles.heroText}>
            Distinct pieces made with intention, shaped by your vision, and crafted to last.
          </p>
        </div>
        <div className={homeStyles.heroRight}>
          <Image
            src="/gold_earrings.jpg"
            alt="Gold earrings"
            width={800}
            height={600}
            className={homeStyles.heroImage}
            placeholder="empty"
          />
        </div>
      </section>

      {/* =============== Info Section (3 Columns) =============== */}
      <section className={homeStyles.infoSection}>
        {/* ––––– Info Item #1 ––––– */}
        <div className={homeStyles.infoItem}>
          <h3 className={homeStyles.infoHeading}>Satisfaction Guarantee</h3>
          <p className={homeStyles.infoText}>
            We promise you&apos;ll love your custom piece, or we&apos;ll make it right.
          </p>
        </div>

        {/* ––––– Info Item #2 ––––– */}
        <div className={homeStyles.infoItem}>
          <h3 className={homeStyles.infoHeading}>Expert Craftsmanship</h3>
          <p className={homeStyles.infoText}>
            Each design is crafted by jewelers with years of hands-on experience.
          </p>
        </div>

        {/* ––––– Info Item #3 ––––– */}
        <div className={homeStyles.infoItem}>
          <h3 className={homeStyles.infoHeading}>Design-First Approach</h3>
          <p className={homeStyles.infoText}>
            We balance form and individuality to create something personal.
          </p>
        </div>
      </section>
      {/* ============================================================ */}

      {/* =============== Feature Section (2 Columns) =============== */}
      <section className={homeStyles.featureSection}>
        {/* ––––– Feature Item #1 ––––– */}
        <div className={homeStyles.featureItem}>
          <Image
            src="/about1.jpg"      /* ← put your image in /public/ */
            alt="Feature 1"
            width={800}
            height={600}
            quality={100} 
            className={homeStyles.featureImage}
            placeholder="empty"
          />
          <Link href="/contact" className={homeStyles.textLink}>
            <h2 className={homeStyles.featureHeading}>The York Paris Philosophy</h2>
            <p className={homeStyles.featureText}>
              We are built on refined simplicity, thoughtful design, and personal meaning. Each piece is made to last, feel intentional, and speak to the individual who wears it.
            </p>
          </Link>
        </div>

        {/* ––––– Feature Item #2 ––––– */}
        <div className={homeStyles.featureItem}>
          <Image
            src="/about2.jpg"      /* ← put your second image in /public/ */
            alt="Feature 2"
            width={800}
            height={600}
            quality={100} 
            className={homeStyles.featureImage}
            placeholder="empty"
          />
          <Link href="/contact" className={homeStyles.textLink}>
            <h2 className={homeStyles.featureHeading}>Every Piece Has a Story</h2>
            <p className={homeStyles.featureText}>
              Jewelry becomes personal when it captures a feeling or a memory. At Your Brand, storytelling is woven into every design, crafted to feel meaningful and lasting.
            </p>
          </Link>
        </div>
      </section>
      {/* ============================================================== */}
    </main>
  );
}