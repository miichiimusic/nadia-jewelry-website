import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Products.module.css';

export default function Products() {
  // Sample product data - you can replace with your actual products
  const products = [
    {
      id: 1,
      name: "Dual Wave Stackable Ring",
      image: "/g001.jpg",
      height: "tall"
    },
    {
      id: 2,
      name: "Rose Gold Pendant Necklace",
      image: "/g002.jpg",
      height: "medium"
    },
    {
      id: 3,
      name: "Minimalist Gold Chain",
      image: "/g003.jpg",
      height: "short"
    },
    {
      id: 4,
      name: "Diamond Stud Earrings",
      image: "/g004.jpg",
      height: "tall"
    },
    {
      id: 5,
      name: "Gold Hoop Earrings",
      image: "/g005.jpg",
      height: "medium"
    },
    {
      id: 6,
      name: "Pearl Drop Necklace",
      image: "/g006.jpg",
      height: "short"
    },
    {
      id: 7,
      name: "Stackable Gold Bands",
      image: "/g007.jpg",
      height: "tall"
    },
    {
      id: 8,
      name: "Gold Chain Bracelet",
      image: "/g008.jpg",
      height: "medium"
    },
    {
      id: 9,
      name: "Minimalist Gold Ring",
      image: "/g009.jpg",
      height: "short"
    },
    {
      id: 10,
      name: "Gold Pendant with Chain",
      image: "/g010.jpg",
      height: "tall"
    },
    {
      id: 11,
      name: "Gold Stud Earrings",
      image: "/g011.jpg",
      height: "medium"
    },
    {
      id: 12,
      name: "Gold Chain Necklace",
      image: "/g012.jpg",
      height: "short"
    },
    {
      id: 13,
      name: "Gold Bangle Bracelet",
      image: "/g013.jpg",
      height: "tall"
    },
    {
      id: 14,
      name: "Gold Drop Earrings",
      image: "/g014.jpg",
      height: "medium"
    },
    {
      id: 15,
      name: "Gold Chain Ring",
      image: "/g015.jpg",
      height: "short"
    },
    {
      id: 16,
      name: "Gold Pendant Necklace",
      image: "/g016.jpg",
      height: "tall"
    },
    {
      id: 17,
      name: "Gold Hoop Earrings",
      image: "/g017.jpg",
      height: "medium"
    },
    {
      id: 18,
      name: "Gold Chain Bracelet",
      image: "/g018.jpg",
      height: "short"
    },
  ];

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
          <Link href="/contact" className={styles.exploreLink}>
            EXPLORE
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
          <h2 className={styles.productsTitle}>Our Collection</h2>
          <p className={styles.productsSubtitle}>
            Discover our handcrafted jewelry pieces, each designed with timeless elegance and modern sophistication.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <div className={styles.container}>
        <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={`${styles.productCard} ${styles[product.height]}`}>
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
            </div>
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}
