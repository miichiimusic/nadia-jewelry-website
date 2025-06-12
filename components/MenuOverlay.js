// components/MenuOverlay.js

import { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from '../styles/MenuOverlay.module.css';

export default function MenuOverlay({ isOpen, onClose, links, imageSrc }) {
  useEffect(() => {
    // Disable background scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      aria-hidden={!isOpen}
    >
      {/* Top bar with CLOSE on the left */}
      <div className={styles.header}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} strokeWidth={1} />
          <span className={styles.closeText}>CLOSE</span>
        </button>
      </div>

      {/* Main overlay content */}
      <div className={styles.content}>
        {/* Left side: brand above links */}
        <div className={styles.linksContainer}>
          <div className={styles.overlayBrand}>Your Brand</div>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.linkItem}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: image */}
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt="Menu image" className={styles.menuImage} />
        </div>
      </div>
    </div>
  );
}