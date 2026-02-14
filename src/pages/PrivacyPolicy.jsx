import React from 'react';
import styles from './Legal.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: {new Date().toLocaleDateString('en-US')}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            VideoDownloader (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard information when you use our video
            downloader service.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            Our service is designed to be privacy-friendly. We do not require account creation or personal
            information to download videos. When you use our service:
          </p>
          <ul>
            <li><strong>Video URLs:</strong> We process the video links you paste solely to fetch and download the requested content. We do not store these URLs permanently.</li>
            <li><strong>Usage Data:</strong> Our servers may temporarily log requests (e.g., IP address, timestamp) for operational and security purposes. This data is not sold or shared for marketing.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide the video downloading service you request</li>
            <li>Improve our service and fix technical issues</li>
            <li>Ensure security and prevent abuse</li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies and Tracking</h2>
          <p>
            We use minimal cookies. Essential cookies may be used for session management. We do not use
            third-party advertising or tracking cookies.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Services</h2>
          <p>
            We use yt-dlp and similar tools to fetch videos from third-party platforms. When you download
            content, you are subject to the privacy policies of those platforms (e.g., YouTube, Instagram).
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We do not store your video URLs or download history beyond what is necessary for the immediate
            request. Logs may be retained for a limited period for security and debugging.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, or delete personal data.
            Since we collect minimal data, you can simply refrain from using our service if you prefer not
            to share any information.
          </p>
        </section>

        <section>
          <h2>8. Children</h2>
          <p>
            Our service is not directed at children under 13. We do not knowingly collect information from
            children.
          </p>
        </section>

        <section>
          <h2>9. Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated policy on this
            page and update the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            For questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:support@videodownloader.com">support@videodownloader.com</a>.
          </p>
        </section>
      </article>
    </div>
  );
}
