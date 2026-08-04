import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "America the Beautiful | The Walking Tenor",
  description:
    "A Latin-flavored classical crossover rendition of America the Beautiful, featuring tenor vocals by Jesús Daniel Hernández and flamenco guitar by Michael Bard.",
};

export default function AmericaTheBeautifulPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-teal to-teal-deep text-center">
        <div className="max-w-[640px] mx-auto px-8">
          <span className="inline-block text-[0.65rem] tracking-widest uppercase bg-gold text-teal-deep px-3 py-1.5 rounded-full font-bold mb-6">
            Out Now
          </span>
          <h1 className="text-4xl md:text-6xl text-cream leading-tight mb-4">
            America the Beautiful
          </h1>
          <p className="text-cream/70 text-lg font-display italic">
            Tenor &amp; flamenco guitar arrangement, featuring Michael Bard
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
            height={175}
            style={{
              width: "100%",
              maxWidth: 660,
              overflow: "hidden",
              borderRadius: 10,
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/song/america-the-beautiful-feat-michael-bard/6795277956"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-cream-dim">
        <div className="max-w-[660px] mx-auto px-8">
          <span className="eyebrow block mb-4">About the Song</span>
          <p className="text-[#3a3833] leading-relaxed text-[1.05rem]">
            A Latin-flavored classical crossover rendition of{" "}
            <em>America the Beautiful</em>, featuring tenor vocals by{" "}
            <strong>Jesús Daniel Hernández</strong> and flamenco guitar by{" "}
            <strong>Michael Bard</strong>, created for the United States&rsquo;
            250th anniversary with{" "}
            <strong>Corazón Latino</strong> and{" "}
            <strong>Heart Theatre</strong>.
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
