import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/ProductDetail.module.css';
import { getProductBySlug } from '../../lib/products';

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Get the product based on the slug
  const product = getProductBySlug(slug);

  // If product not found or still loading
  if (!product) {
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  const handleInquiry = () => {
    // Redirect to the custom inquiry page with product information
    router.push(`/inquiry?product=${product.name}`);
  };

  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/products">Products</Link>
        <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className={styles.container}>
        <div className={styles.productLayout}>
          {/* Product Image */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={1000}
                quality={100}
                className={styles.productImage}
                placeholder="empty"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className={styles.detailsSection}>
            <h1 className={styles.productTitle}>{product.name}</h1>
            <p className={styles.productFullName}>{product.fullName}</p>
            
            <div className={styles.priceSection}>
              <span className={styles.price}>${product.price.toLocaleString()}</span>
            </div>

            <div className={styles.description}>
              <p>{product.description}</p>
            </div>

            {/* Features */}
            <div className={styles.features}>
              <h3>Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className={styles.specifications}>
              <h3>Specifications</h3>
              <div className={styles.specsGrid}>
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className={styles.specItem}>
                    <span className={styles.specLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span className={styles.specValue}>{value}</span>
                  </div>
                ))}
              </div>
            </div>




            {/* Action Button */}
            <div className={styles.actionButtons}>
              <button 
                onClick={handleInquiry}
                className={styles.inquiryButton}
              >
                Inquire About This Piece
              </button>
            </div>

            {/* Additional Info */}
            <div className={styles.additionalInfo}>
              <div className={styles.infoItem}>
                <h4>Free Consultation</h4>
                <p>Schedule a personalized consultation to discuss your perfect piece.</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Custom Sizing</h4>
                <p>All pieces can be custom-sized to ensure the perfect fit.</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Lab-Grown Diamonds</h4>
                <p>Ethically sourced, environmentally friendly, and identical to mined diamonds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
