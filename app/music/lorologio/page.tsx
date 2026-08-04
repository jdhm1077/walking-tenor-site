import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "L'orologio | The Walking Tenor",
  description:
    "A romantic classical crossover album inspired by time, memory, and the songs that stay with us — featuring tenor Jesús Daniel Hernández.",
};

export default function LorologioPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-teal to-teal-deep text-center">
        <div className="max-w-[640px] mx-auto px-8">
          <span className="inline-block text-[0.65rem] tracking-widest uppercase bg-gold text-teal-deep px-3 py-1.5 rounded-full font-bold mb-6">
            Out Now
          </span>
          <h1 className="text-4xl md:text-6xl text-cream leading-tight mb-4">
            L&rsquo;orologio
          </h1>
          <p className="text-cream/70 text-lg font-display italic">
            Album &mdash; Jesús Daniel Hernández
          </p>
        </div>
      </section>

      {/* EMBED */}
      <section className="py-20 bg-cream">
        <div className="max-w-[700px] mx-auto px-8 flex flex-col items-center gap-3">
          <span className="eyebrow text-terracotta block mb-2">Listen</span>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height={450}
            style={{
              width: "100%",
              maxWidth: 660,
              overflow: "hidden",
              borderRadius: 10,
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/lorologio/1508194093"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-cream-dim">
        <div className="max-w-[660px] mx-auto px-8">
          <span className="eyebrow block mb-4">About the Album</span>
          <p className="text-[#3a3833] leading-relaxed text-[1.05rem]">
            A romantic classical crossover album inspired by time, memory, and
            the songs that stay with us.{" "}
            <em>L&rsquo;orologio</em> brings together tenor voice, nostalgia,
            and timeless melodies through the emotional lens of{" "}
            <strong>Jesús Daniel Hernández</strong>.
          </p>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="py-16 bg-cream text-center">
        <Link
          href="/music"
          className="text-terracotta font-bold text-sm border-b-2 border-terracotta pb-0.5"
        >
          ← Back to Music
        </Link>
      </section>
    </>
  );
}
