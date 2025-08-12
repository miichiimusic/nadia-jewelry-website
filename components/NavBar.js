// components/NavBar.js

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import MenuOverlay from './MenuOverlay';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Updated navigation links
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
    { href: '/education', label: 'Education' },
  ];
  // Replace with an actual image path in /public
  const imageSrc = '/new_hero_image.jpg';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }

      // mark atTop only if within 10px of very top
      setAtTop(currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Only apply "solid" when visible is true AND not atTop.
  // If hidden, force heroBg so the bar never flashes white while hiding.
  let bgClass;
  if (!visible) {
    bgClass = styles.heroBg;
  } else {
    bgClass = atTop ? styles.heroBg : styles.solid;
  }

  const classNames = [
    styles.navbar,
    visible ? styles.visible : styles.hidden,
    bgClass,
  ].join(' ');

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={classNames}>
        <div className={styles.inner}>
          {/* Left: hamburger icon */}
          <button className={styles.iconButton} onClick={toggleMenu}>
            <Menu size={24} strokeWidth={1} />
          </button> 

          {/* Center: brand name */}
          <Link href="/" className={styles.brand}>
            Nadia
          </Link>

          {/* Right: phone icon */}
          <a href="tel:+19546002311" className={styles.iconButton}>
            <Phone size={24} strokeWidth={1} />
          </a>
        </div>
      </header>

      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={links}
        imageSrc={imageSrc}
      />
    </>
  );
}