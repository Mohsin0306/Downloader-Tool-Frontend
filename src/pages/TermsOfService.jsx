import React from 'react';
import styles from './Legal.module.css';

export default function TermsOfService() {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <h1>Terms of Service</h1>
        <p className={styles.updated}>Last updated: {new Date().toLocaleDateString('en-US')}</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using VideoDownloader (&quot;the Service&quot;), you agree to be bound by these Terms of
            Service. If you do not agree, please do not use the Service.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            VideoDownloader provides a free tool that allows users to download videos from various
            platforms. The Service is provided &quot;as is&quot; and we do not guarantee uninterrupted
            availability or compatibility with all sources.
          </p>
        </section>

        <section>
          <h2>3. Acceptable Use</h2>
          <p>You agree to use the Service only for lawful purposes. You must NOT:</p>
          <ul>
            <li>Download content that infringes copyright or intellectual property rights</li>
            <li>Use the Service for commercial purposes without authorization</li>
            <li>Attempt to circumvent platform restrictions or terms of service</li>
            <li>Overload our servers or use automated scripts to abuse the Service</li>
            <li>Download content that is illegal, harmful, or violates others&apos; privacy</li>
          </ul>
        </section>

        <section>
          <h2>4. Personal Use Only</h2>
          <p>
            The Service is intended for personal, non-commercial use. Downloading content for redistribution,
            monetization, or commercial purposes may violate the terms of the source platforms and applicable
            laws.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Platforms</h2>
          <p>
            Content is fetched from third-party platforms (YouTube, Instagram, TikTok, etc.). Your use of
            the Service does not grant you rights beyond those allowed by those platforms. You are responsible
            for complying with their terms of service and applicable copyright laws.
          </p>
        </section>

        <section>
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
            WE DO NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
          </p>
        </section>

        <section>
          <h2>8. Changes to the Service and Terms</h2>
          <p>
            We may modify or discontinue the Service at any time. We may also update these Terms. Continued
            use of the Service after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            For questions about these Terms, please contact us at{' '}
            <a href="mailto:support@videodownloader.com">support@videodownloader.com</a>.
          </p>
        </section>
      </article>
    </div>
  );
}
