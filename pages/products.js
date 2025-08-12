import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Products.module.css';

export default function Products() {
  // Sample product data - you can replace with your actual products
  const products = [
    {
      id: 1,
      name: "Dual Wave Stackable Ring",
      image: "/1.jpg",
      height: "tall"
    },
    {
      id: 2,
      name: "Rose Gold Pendant Necklace",
      image: "/2.jpg",
      height: "medium"
    },
    {
      id: 3,
      name: "Minimalist Gold Chain",
      image: "/3.jpg",
      height: "short"
    },
    {
      id: 4,
      name: "Diamond Stud Earrings",
      image: "/4.jpg",
      height: "tall"
    },
    {
      id: 5,
      name: "Gold Hoop Earrings",
      image: "/5.jpg",
      height: "medium"
    },
    {
      id: 6,
      name: "Pearl Drop Necklace",
      image: "/6.jpg",
      height: "short"
    },
    {
      id: 7,
      name: "Stackable Gold Bands",
      image: "/7.jpg",
      height: "tall"
    },
    {
      id: 8,
      name: "Gold Chain Bracelet",
      image: "/8.jpg",
      height: "medium"
    },
    {
      id: 9,
      name: "Minimalist Gold Ring",
      image: "/9.jpg",
      height: "short"
    },
    {
      id: 10,
      name: "Gold Pendant with Chain",
      image: "/10.jpg",
      height: "tall"
    },
    {
      id: 11,
      name: "Gold Stud Earrings",
      image: "/11.jpg",
      height: "medium"
    },
    {
      id: 12,
      name: "Gold Chain Necklace",
      image: "/12.jpg",
      height: "short"
    },
    {
      id: 13,
      name: "Gold Bangle Bracelet",
      image: "/13.jpg",
      height: "tall"
    },
    {
      id: 14,
      name: "Gold Drop Earrings",
      image: "/14.jpg",
      height: "medium"
    },
    {
      id: 15,
      name: "Gold Chain Ring",
      image: "/15.jpg",
      height: "short"
    },
    {
      id: 16,
      name: "Gold Pendant Necklace",
      image: "/16.jpg",
      height: "tall"
    },
    {
      id: 17,
      name: "Gold Hoop Earrings",
      image: "/17.jpg",
      height: "medium"
    },
    {
      id: 18,
      name: "Gold Chain Bracelet",
      image: "/18.jpg",
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
                width={300}
                height={400}
                className={styles.productImage}
                placeholder="empty"
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
