// Instagram bio link page — noindex intentional.
// This is a standalone link-in-bio page reachable only via direct URL
// (thewalkingtenor.com/links). Do not add it to nav, footer, or sitemap.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";
import styles from "./links.module.css";

export const metadata: Metadata = {
  title: "The Walking Tenor",
  robots: { index: false, follow: false },
};

export default function LinksPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>

        {/* Portrait */}
        <div className={styles.portraitFrame}>
          <div className={styles.portraitMid}>
            <div className={styles.portraitInner}>
              <Image
                src="/images/links/portrait.jpg"
                alt="Jesús Daniel Hernández, The Walking Tenor"
                width={900}
                height={900}
                sizes="190px"
                priority
                className={styles.portraitImg}
              />
            </div>
          </div>
        </div>

        {/* Identity */}
        <h1 className={styles.name}>THE WALKING TENOR</h1>
        <p className={styles.tagline}>
          Opera-trained tenor telling the hidden stories behind the songs you already love.
        </p>
        <p className={styles.identityCopy}>
          A Mexican-American tenor, U.S. Army wartime veteran, and storyteller bringing opera,
          Latin song, and American classics to life through concerts, recordings, and cinematic
          stories.
        </p>

        {/* Social icons */}
        <div className={styles.socials}>
          <a
            className={styles.socialBtn}
            href="https://www.instagram.com/thewalkingtenor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.3.06 2.2.27 2.97.57.8.32 1.48.75 2.15 1.42.67.67 1.1 1.35 1.42 2.15.3.77.5 1.66.57 2.97.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.3-.27 2.2-.57 2.97-.32.8-.75 1.48-1.42 2.15-.67.67-1.35 1.1-2.15 1.42-.77.3-1.66.5-2.97.57-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.3-.06-2.2-.27-2.97-.57-.8-.32-1.48-.75-2.15-1.42-.67-.67-1.1-1.35-1.42-2.15-.3-.77-.5-1.66-.57-2.97C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.3.27-2.2.57-2.97.32-.8.75-1.48 1.42-2.15.67-.67 1.35-1.1 2.15-1.42.77-.3 1.66-.5 2.97-.57C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.76.07-1.02.05-1.58.22-1.95.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.79 1.2-.14.37-.31.93-.36 1.95C2.87 8.28 2.87 8.65 2.87 11.8v.4c0 3.15 0 3.52.07 4.76.05 1.02.22 1.58.36 1.95.19.49.42.84.79 1.2.36.37.71.6 1.2.79.37.14.93.31 1.95.36 1.24.07 1.61.07 4.76.07h.4c3.15 0 3.52 0 4.76-.07 1.02-.05 1.58-.22 1.95-.36.49-.19.84-.42 1.2-.79.37-.36.6-.71.79-1.2.14-.37.31-.93.36-1.95.07-1.24.07-1.61.07-4.76v-.4c0-3.15 0-3.52-.07-4.76-.05-1.02-.22-1.58-.36-1.95-.19-.49-.42-.84-.79-1.2-.36-.37-.71-.6-1.2-.79-.37-.14-.93-.31-1.95-.36C15.52 4 15.15 4 12 4zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm5.85-2a1.08 1.08 0 1 1-2.15 0 1.08 1.08 0 0 1 2.15 0z" />
            </svg>
          </a>
          <a
            className={styles.socialBtn}
            href="https://www.tiktok.com/@thewalkingtenor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
              <path d="M16.6 5.8c-.9-.6-1.5-1.6-1.6-2.8h-3v13c0 1.3-1.1 2.4-2.4 2.4A2.4 2.4 0 0 1 7.2 16a2.4 2.4 0 0 1 3.6-2.1v-3.1a5.4 5.4 0 0 0-1.2-.1 5.5 5.5 0 1 0 5.5 5.5V9.4a8.3 8.3 0 0 0 4.8 1.5V7.9c-1.1 0-2.3-.4-3.3-1.1-.4-.3-.7-.6-1-1z" />
            </svg>
          </a>
          <a
            className={styles.socialBtn}
            href="https://www.youtube.com/jesusdanielhernandez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
              <path d="M21.6 7.2s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C15.9 3.8 12 3.8 12 3.8h0s-3.9 0-6.7.2c-.4 0-1.3.1-2.1 1-.6.7-.8 2.2-.8 2.2S2.2 9 2.2 10.8v1.4C2.2 14 2.4 15.8 2.4 15.8s.2 1.5.8 2.2c.8.9 1.9.9 2.4 1 1.7.2 7.4.2 7.4.2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.8.2-3.6v-1.4c0-1.8-.2-3.6-.2-3.6zM9.9 15V8.9l5.4 3.1-5.4 3z" />
            </svg>
          </a>
          <a
            className={styles.socialBtn}
            href="https://open.spotify.com/artist/7mWBwSLd3vxqFClliSvgFe?si=dCNNnZt7Q0e_Ir8sjuI7Mg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
          >
            <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4a.7.7 0 0 1-1 .2c-2.6-1.6-5.9-2-9.8-1.1a.7.7 0 1 1-.3-1.4c4.2-1 7.9-.5 10.8 1.3.4.2.5.7.3 1zm1.2-2.7a.9.9 0 0 1-1.2.3c-3-1.8-7.5-2.4-11-1.3a.9.9 0 1 1-.5-1.7c4-1.2 8.9-.6 12.4 1.5.4.2.6.8.3 1.2zm.1-2.8C14.5 8.8 9 8.6 5.7 9.6a1 1 0 1 1-.6-2c3.8-1.1 9.9-.9 13.8 1.4a1 1 0 1 1-1 1.9z" />
            </svg>
          </a>
          <a
            className={styles.socialBtn}
            href="https://www.facebook.com/TheWalkingTenor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
              <path d="M13.5 21v-7.8h2.6l.4-3.1h-3V8.2c0-.9.25-1.5 1.55-1.5H16.6V3.9c-.27-.04-1.2-.11-2.3-.11-2.27 0-3.82 1.38-3.82 3.93v2.19H8v3.1h2.48V21h3.02z" />
            </svg>
          </a>
        </div>

        {/* Identity pillars */}
        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <div className={styles.pillarTitle}>Army Veteran</div>
            <div className={styles.pillarSub}>Iraq / Operation Iraqi Freedom</div>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarTitle}>Tenor &amp; Recording Artist</div>
            <div className={styles.pillarSub}>Opera • Latin Song • American Classics</div>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarTitle}>Stories That Sing</div>
            <div className={styles.pillarSub}>Podcast • Concerts • Cinematic Storytelling</div>
          </div>
        </div>

        {/* CTA — Featured release */}
        <Link className={`${styles.cta} ${styles.ctaFeature}`} href="/music/america-the-beautiful">
          <span className={styles.ctaTag}>New Release</span>
          <span className={styles.ctaTitle}>America the Beautiful</span>
          <span className={styles.ctaSub}>
            A cinematic tenor-and-guitar interpretation of an American classic.
          </span>
        </Link>

        {/* CTA — Podcast */}
        <Link className={`${styles.cta} ${styles.ctaDark}`} href="/podcast">
          <span className={styles.ctaTitle}>Listen to the Podcast</span>
          <span className={styles.ctaSub}>Hidden stories behind the songs you already love.</span>
        </Link>

        {/* CTA — Music */}
        <Link className={`${styles.cta} ${styles.ctaDark}`} href="/music">
          <span className={styles.ctaTitle}>Listen to My Music</span>
          <span className={styles.ctaSub}>
            L&rsquo;orologio • America the Beautiful • more recordings.
          </span>
        </Link>

        <hr className={styles.rule} />

        {/* CTA — Booking */}
        <Link className={`${styles.cta} ${styles.ctaCream}`} href="/booking">
          <span className={styles.ctaTitle}>Book a Performance</span>
          <span className={styles.ctaSub}>
            Concerts, cultural events, ceremonies, memorials &amp; private engagements.
          </span>
        </Link>

        {/* CTA — Press kit (note: /press route doesn't exist; using /press-kit) */}
        <Link className={`${styles.cta} ${styles.ctaCream}`} href="/press-kit">
          <span className={styles.ctaTitle}>Press Kit &amp; Bio</span>
          <span className={styles.ctaSub}>
            Bio, photos, repertoire, recordings &amp; booking materials.
          </span>
        </Link>

        <hr className={styles.rule} />

        {/* Newsletter */}
        <NewsletterSignup />

        {/* Footer */}
        <footer className={styles.footer}>
          <div>© 2026 The Walking Tenor — Jesús Daniel Hernández</div>
          <div>
            <a href="mailto:admin@thewalkingtenor.com">admin@thewalkingtenor.com</a>
            {" · "}
            <a href="https://thewalkingtenor.com" target="_blank" rel="noopener noreferrer">
              thewalkingtenor.com
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
