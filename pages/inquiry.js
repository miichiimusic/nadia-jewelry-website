// pages/inquiry.js

import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from '../styles/Inquiry.module.css';

export default function Inquiry() {
  const router = useRouter();
  const { product } = router.query;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    product: product || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, just show an alert
    alert('Thank you for your inquiry! We will contact you shortly.');
  };

  return (
    <main className={styles.inquirySection}>
      {/* ===== Top Banner Section ===== */}
      <section className={styles.topBanner}>
        <h1 className={styles.bannerTitle}>Custom Design Inquiry</h1>
        <p className={styles.bannerSubtitle}>
          {product ? `Interested in our ${product}? ` : 'Interested in a custom piece? '} 
          Let&apos;s discuss how we can make this design uniquely yours. Every piece is custom-designed to match your specifications and preferences. All products are made to order, ensuring perfect fit and personalization. We&apos;ll contact you shortly to discuss your vision and requirements.
        </p>
      </section>

      <div className={styles.inquiryCenter}>

        {/* Contact Form */}
        <div className={styles.formContainer}>
          <h2 className={styles.sectionHeading}>
            Fill out this form or simply email us at{' '}
            <a href="mailto:info@example.com" className={styles.contactLink}>info@example.com</a>
            {' '}or call us at{' '}
            <a href="tel:+19546002311" className={styles.contactLink}>+1-954-600-2311</a>
            . We&apos;ll contact you within 24 hours to discuss your vision and requirements.
          </h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formRow}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.formInput}
              />
              <input
                type="text"
                name="product"
                placeholder="Product Name"
                value={formData.product}
                onChange={handleInputChange}
                className={styles.formInput}
                readOnly={!!product}
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your vision for this piece..."
              value={formData.message}
              onChange={handleInputChange}
              className={styles.formTextarea}
              rows={4}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Send Inquiry
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className={styles.additionalInfo}>
          <h3>What to Expect</h3>
          <ul>
            <li>We&apos;ll respond within 24 hours to discuss your requirements</li>
            <li>Free consultation to understand your vision and preferences</li>
            <li>Custom design process with multiple revision opportunities</li>
            <li>Transparent pricing and timeline for your project</li>
            <li>Quality craftsmanship with premium materials</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
