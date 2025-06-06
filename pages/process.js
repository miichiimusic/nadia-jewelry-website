// pages/process.js

import Image from 'next/image';
import Link from 'next/link';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import styles from '../styles/Process.module.css';

export default function Process() {
  const steps = [
    {
      id: 1,
      label: 'STEP ONE',
      title: 'Share Your Vision',
      description:
        'Tell us what you have in mind — send inspiration, sketches, or simply describe the piece you’ve been dreaming of.',
      imageSrc: '/step1.jpg',
      alt: 'Client consultation',
    },
    {
      id: 2,
      label: 'STEP TWO',
      title: 'Personal Consultation',
      description:
        'We’ll connect via phone or text to refine your ideas and explore materials, styles, and budget together.',
      imageSrc: '/step2.jpg',
      alt: 'Hand drawing of jewelry design',
    },
    {
      id: 3,
      label: 'STEP THREE',
      title: 'Design & Approval',
      description:
        'Our designers create detailed sketches or 3D renderings for your review. Once you approve, we finalize the model and prepare for crafting.',
      imageSrc: '/step3.jpg',
      alt: 'Client approving CAD model',
    },
    {
      id: 4,
      label: 'STEP FOUR',
      title: 'Craftsmanship & Delivery',
      description:
        'Master artisans bring your piece to life using the finest materials. After quality checks, we deliver your custom creation in our signature box.',
      imageSrc: '/step4.jpg',
      alt: 'Finished custom jewelry piece',
    },
  ];

  return (
    <main className={styles.processSection}>
      {/* ===== Top Banner Section ===== */}
      <section className={styles.topBanner}>
        <h1 className={styles.bannerTitle}>Our Design Process</h1>
        <p className={styles.bannerSubtitle}>
          A thoughtful, guided process that transforms your vision into a timeless piece of jewelry.
        </p>
        <Link href="#get-started" className={styles.ctaLink}>
          START YOUR DESIGN
        </Link>
      </section>

      {/* ===== Steps ===== */}
      {steps.map((step) => (
        <section key={step.id} className={styles.stepSection}>
          <div className={styles.stepText}>
            <span className={styles.stepLabel}>{step.label}</span>
            <h2 className={styles.stepTitle}>{step.title}</h2>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
          <div className={styles.stepImage}>
            <Image
              src={step.imageSrc}
              alt={step.alt}
              width={800}
              height={600}
              className={styles.image}
              placeholder="empty"
            />
          </div>
        </section>
      ))}

      {/* ===== FAQ Section ===== */}
      <FaqSection />

      {/* ===== Contact + Newsletter Section (wrapped to adjust spacing) ===== */}
      <div className={styles.contactWrapper}>
        <ContactSection />
      </div>
      {/* ===== End Contact + Newsletter ===== */}
    </main>
  );
}