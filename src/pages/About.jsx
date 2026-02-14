import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Zap, Shield, Globe } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1>About VideoDownloader</h1>
        <p className={styles.tagline}>
          A free, fast, and easy way to download videos from 1000+ websites.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>What We Do</h2>
          <p>
            VideoDownloader lets you save videos from YouTube, Instagram, TikTok, Facebook, and many more
            platforms. Simply paste a link, pick your quality, and download. No signup required.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Us</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Zap size={24} aria-hidden />
              </div>
              <h3>Fast & Free</h3>
              <p>No subscriptions, no limits. Download as many videos as you need.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Shield size={24} aria-hidden />
              </div>
              <h3>Privacy-First</h3>
              <p>We don&apos;t store your links or require personal information.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Globe size={24} aria-hidden />
              </div>
              <h3>1000+ Sites</h3>
              <p>Powered by yt-dlp – supports virtually any video platform.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>How It Works</h2>
          <ol className={styles.steps}>
            <li>Copy the video URL from any supported platform</li>
            <li>Paste it into our input and click Fetch Video</li>
            <li>Select quality (if available) and click Download</li>
          </ol>
          <Link to="/" className={styles.cta}>
            <Download size={20} aria-hidden />
            Start Downloading
          </Link>
        </section>
      </div>
    </div>
  );
}
