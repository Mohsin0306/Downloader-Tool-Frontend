import React, { useState } from 'react';
import { Youtube, Instagram, Music2, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Home.module.css';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [media, setMedia] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('best');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  async function fetchInfo(e) {
    e?.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setMedia(null);
    setCarouselIndex(0);

    try {
      const res = await fetch(
        `${API_BASE}/video/info?url=${encodeURIComponent(url.trim())}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to fetch video info');

      setMedia(data);
      setSelectedFormat(data.formats?.[0]?.id || 'best');
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  async function handleDownload() {
    if (!media || !url.trim() || isDownloading) return;

    let downloadUrl;
    let filename;

    if (media.type === 'carousel') {
      const item = media.items[carouselIndex];
      downloadUrl = `${API_BASE}/video/download?url=${encodeURIComponent(
        url.trim()
      )}&index=${item.index}`;
      filename = `slide_${item.index}`;
    } else {
      downloadUrl = `${API_BASE}/video/download?url=${encodeURIComponent(
        url.trim()
      )}&format=${encodeURIComponent(selectedFormat)}`;
      filename = `${media.title || 'video'}.${media.formats?.[0]?.ext || 'mp4'}`.replace(/[<>:"/\\|?*]/g, '_');
    }

    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error('Download failed');
      const contentLength = response.headers.get('Content-Length');
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      const reader = response.body.getReader();
      const chunks = [];
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (total > 0) {
          setDownloadProgress(Math.min(99, Math.round((received / total) * 100)));
        }
      }

      setDownloadProgress(100);
      const blob = new Blob(chunks);
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      setError(err.message || 'Download failed');
    } finally {
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  }

  return (
    <>
      <div className={styles.main}>
        <section className={styles.hero} id="download">
          <div className={styles.heroBg}>
            <div className={styles.heroOrb1} />
            <div className={styles.heroOrb2} />
            <div className={styles.heroOrb3} />
            <div className={styles.heroGrid} />
          </div>
          <div className={styles.heroInner}>
            <div className={styles.heroBadge}>Free & Fast • 1000+ Sites Supported</div>
            <h1 className={styles.heroTitle}>
              Download <span>Any Video</span> in Seconds
            </h1>
            <p className={styles.heroSubtitle}>
              YouTube, Instagram, TikTok, Facebook & more. Paste a link, pick your quality, and download. No signup required.
            </p>

            <form onSubmit={fetchInfo} className={styles.heroForm}>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste video link here (e.g. youtube.com, instagram.com, tiktok.com...)"
                className={styles.heroInput}
                disabled={loading}
              />
              <button type="submit" className={styles.heroBtn} disabled={loading}>
                {loading ? 'Fetching...' : 'Fetch Video'}
              </button>
            </form>

            <div className={styles.heroPlatforms}>
              <span className={styles.heroPlatform}>YouTube</span>
              <span className={styles.heroPlatform}>Instagram</span>
              <span className={styles.heroPlatform}>TikTok</span>
              <span className={styles.heroPlatform}>Facebook</span>
            </div>
          </div>
        </section>

        <section className={styles.downloaderSection}>
          {error && <p className={styles.error}>{error}</p>}

            {media?.type === 'carousel' && (
              <div className={styles.card}>
                <h2 className={styles.videoTitle}>{media.title}</h2>
                <p className={styles.carouselCount}>{media.items.length} slides</p>

                <div className={styles.carousel}>
                  <div className={styles.carouselSlide}>
                    {media.items[carouselIndex]?.thumbnail ? (
                      <img
                        src={`${API_BASE}/video/thumbnail?url=${encodeURIComponent(media.items[carouselIndex].thumbnail)}`}
                        alt={`Slide ${carouselIndex + 1}`}
                        className={styles.carouselImg}
                      />
                    ) : (
                      <div className={styles.carouselPlaceholder}>Slide {carouselIndex + 1}</div>
                    )}
                  </div>
                  <div className={styles.carouselControls}>
                    <button
                      type="button"
                      className={styles.carouselBtn}
                      onClick={() => setCarouselIndex((i) => (i <= 0 ? media.items.length - 1 : i - 1))}
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={24} strokeWidth={2.5} aria-hidden />
                    </button>
                    <button
                      type="button"
                      className={styles.carouselBtn}
                      onClick={() => setCarouselIndex((i) => (i >= media.items.length - 1 ? 0 : i + 1))}
                      aria-label="Next slide"
                    >
                      <ChevronRight size={24} strokeWidth={2.5} aria-hidden />
                    </button>
                  </div>
                </div>

                <div className={styles.carouselDots}>
                  {media.items.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`${styles.carouselDot} ${i === carouselIndex ? styles.carouselDotActive : ''}`}
                      onClick={() => setCarouselIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className={styles.carouselActions}>
                  <button onClick={handleDownload} className={styles.downloadBtn} disabled={isDownloading}>
                    {isDownloading ? 'Downloading...' : `Download Slide ${carouselIndex + 1}`}
                  </button>
                  <button
                    onClick={() => {
                      media.items.forEach((item, i) => {
                        setTimeout(() => {
                          const a = document.createElement('a');
                          a.href = `${API_BASE}/video/download?url=${encodeURIComponent(url.trim())}&index=${item.index}`;
                          a.download = `slide_${item.index}`;
                          a.target = '_blank';
                          document.body.appendChild(a);
                          a.click();
                          document.body.removeChild(a);
                        }, i * 800);
                      });
                    }}
                    className={styles.downloadAllBtn}
                  >
                    Download All {media.items.length} Slides
                  </button>
                </div>
              </div>
            )}

            {media?.type === 'video' && (
              <div className={styles.card}>
                <div className={styles.thumbRow}>
                  {media.thumbnail ? (
                    <img
                      src={`${API_BASE}/video/thumbnail?url=${encodeURIComponent(media.thumbnail)}`}
                      alt={media.title}
                      className={styles.thumbnail}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : (
                    <div className={styles.thumbnailPlaceholder}>No preview</div>
                  )}
                  <div className={styles.meta}>
                    <h2 className={styles.videoTitle}>{media.title}</h2>
                    {media.uploader && (
                      <p className={styles.uploader}>{media.uploader}</p>
                    )}
                    {media.duration && (
                      <p className={styles.duration}>
                        {Math.floor(media.duration / 60)}:
                        {String(media.duration % 60).padStart(2, '0')}
                      </p>
                    )}
                  </div>
                </div>

                {media.formats?.length > 1 && (
                  <div className={styles.formatRow}>
                    <label className={styles.label}>Quality:</label>
                    <select
                      value={selectedFormat}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className={styles.select}
                    >
                      {media.formats.map((f) => (
                        <option key={f.id} value={f.id}>
                          {f.label || `${f.quality} (${f.ext})`}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <button onClick={handleDownload} className={styles.downloadBtn} disabled={isDownloading}>
                  {isDownloading ? 'Downloading...' : 'Download Video'}
                </button>
              </div>
            )}
        </section>

        <section className={styles.featuresSection} id="features">
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Supported Platforms</h2>
            <p className={styles.sectionSubtitle}>
              Our tool supports 1000+ websites for video and media downloading
            </p>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Youtube size={28} strokeWidth={2} aria-hidden />
                </div>
                <h3>YouTube</h3>
                <p>Download videos, shorts, and live streams in multiple qualities</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Instagram size={28} strokeWidth={2} aria-hidden />
                </div>
                <h3>Instagram</h3>
                <p>Reels, posts, stories, and carousel slides</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Music2 size={28} strokeWidth={2} aria-hidden />
                </div>
                <h3>TikTok</h3>
                <p>Download TikTok videos without watermark</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Facebook size={28} strokeWidth={2} aria-hidden />
                </div>
                <h3>Facebook</h3>
                <p>Videos from Facebook and Facebook Watch</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.howSection} id="how-it-works">
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.stepsList}>
              <div className={styles.step}>
                <span className={styles.stepNum}>1</span>
                <div>
                  <h3>Copy the URL</h3>
                  <p>Copy the video link from YouTube, Instagram, TikTok, or any supported platform</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>2</span>
                <div>
                  <h3>Paste and Fetch</h3>
                  <p>Paste the link in the input above and click Fetch Video to load details</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>3</span>
                <div>
                  <h3>Download</h3>
                  <p>Select your preferred quality (if available) and click Download</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {isDownloading && (
        <div className={styles.downloadOverlay}>
          <div className={styles.downloadLoader}>
            <div className={styles.downloadSpinner} aria-hidden="true" />
            <p className={styles.downloadLoaderText}>Preparing download...</p>
            <div className={styles.downloadProgressTrack}>
              <div
                className={`${styles.downloadProgressBar} ${downloadProgress > 0 ? '' : styles.downloadProgressIndeterminate}`}
                style={downloadProgress > 0 ? { width: `${downloadProgress}%` } : {}}
              />
            </div>
            <p className={styles.downloadLoaderHint}>
              {downloadProgress > 0 ? `${downloadProgress}%` : 'Loading'} – File will appear in Chrome download bar when ready
            </p>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
