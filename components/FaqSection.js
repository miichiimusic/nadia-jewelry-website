// components/FaqSection.js

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from '../styles/Faq.module.css';

export default function FaqSection() {
  const items = [
    {
      question: 'How involved can I be in the process?',
      answer:
        'You can be as involved as you like! From the initial sketch to final adjustments, we welcome your feedback at every stage so that the end result perfectly matches your vision.',
    },
    {
      question: 'What makes your designs different?',
      answer:
        'Each piece is designed from scratch around you, your story, your style, and your intention. Nothing is pre-designed or mass-produced.',
    },
    {
      question: 'What materials do you work with?',
      answer:
        'We work with a wide range of high-quality materials, including gold, platinum, silver and both natural and lab-grown stones. Each piece is tailored to your preferences, and we’ll guide you through selecting the right materials for your design.',
    },
    {
      question: 'How long does the process take?',
      answer:
        'On average, a fully custom piece takes 1-2 weeks from initial consultation to delivery. Rush timelines are possible—please contact us directly if you need your piece sooner.',
    },
    {
      question: 'Is custom designing more expensive?',
      answer:
        'Not at all. We don’t upcharge for design work, and the process we use to create your piece is the same as what’s used for fine jewelry in retail, just more personal, with no unnecessary markups.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.faqSection}>
      {/* ===== Intro Block ===== */}
      <div className={styles.intro}>
        {/* New pre‐title above the main FAQ heading */}
        <p className={styles.faqPreTitle}>FREQUENTLY ASKED QUESTIONS</p>

        <h2 className={styles.faqHeading}>What Sets Us Apart</h2>
        <p className={styles.faqText}>
          We approach custom jewelry with intention, artistry, and a deep respect for your
          vision. This section answers the most common questions while highlighting the values,
          quality, and care that define every piece we create.
        </p>
      </div>

      {/* ===== FAQ Items ===== */}
      <div className={styles.faqList}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleItem(idx)}
              aria-expanded={activeIndex === idx}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span className={styles.iconWrapper}>
                {activeIndex === idx ? (
                  <Minus size={16} strokeWidth={1} />
                ) : (
                  <Plus size={16} strokeWidth={1} />
                )}
              </span>
            </button>

            {activeIndex === idx && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}