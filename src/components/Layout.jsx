import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, Info, Mail } from 'lucide-react';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logo}>
            VideoDownloader
          </Link>
          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <a href="/#features" className={styles.navLink}>Features</a>
            <a href="/#how-it-works" className={styles.navLink}>How It Works</a>
            <Link to="/about" className={styles.navLink}>About</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <Link to="/" className={styles.footerLogo}>
              VideoDownloader
            </Link>
            <p className={styles.footerTagline}>
              Free video downloader for YouTube, Instagram, TikTok, and 1000+ sites.
            </p>
            <nav className={styles.footerNav}>
              <Link to="/privacy-policy" className={styles.footerLink}>
                <FileText size={16} aria-hidden />
                Privacy Policy
              </Link>
              <Link to="/terms" className={styles.footerLink}>
                <Scale size={16} aria-hidden />
                Terms of Service
              </Link>
              <Link to="/about" className={styles.footerLink}>
                <Info size={16} aria-hidden />
                About Us
              </Link>
              <a href="mailto:support@videodownloader.com" className={styles.footerLink}>
                <Mail size={16} aria-hidden />
                Contact
              </a>
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} VideoDownloader. All rights reserved.</p>
            <p className={styles.footerNote}>
              For personal use only. Respect copyright and platform terms of service.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
