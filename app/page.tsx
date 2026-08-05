import Link from "next/link";
import Image from "next/image";
import StorySlider from "@/components/StorySlider";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-28 md:py-36 bg-gradient-to-b from-cream to-cream-dim overflow-hidden">
        <div className="max-w-[760px] mx-auto px-8 text-center relative z-10">
          <span className="eyebrow block mb-4">Tenor · Storyteller · Veteran</span>
          <h1 className="text-5xl md:text-7xl leading-[1.02] font-bold text-teal-deep">
            The Walking<br />
            <em className="italic text-terracotta">Tenor</em>
          </h1>
          <p className="font-display italic text-lg text-teal my-6">
            Music. Stories. Human heart.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/music"
              className="bg-terracotta text-cream px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-terracotta/30 hover:bg-terracotta/90 transition-colors"
            >
              Hear the music
            </Link>
            <Link
              href="/podcast"
              className="border-2 border-teal-deep text-teal-deep px-8 py-4 rounded-full font-bold text-sm hover:bg-teal-deep hover:text-cream transition-colors"
            >
              Listen to the podcast
            </Link>
          </div>
          <div className="mt-14 pt-8 border-t border-ink/10 flex justify-center gap-2.5 flex-wrap text-[0.82rem] font-semibold tracking-wide text-teal-deep">
            <span>Ciudad Juárez</span><span className="text-gold">·</span>
            <span>U.S. Army</span><span className="text-gold">·</span>
            <span>Iraq</span><span className="text-gold">·</span>
            <span>Plácido Domingo</span><span className="text-gold">·</span>
            <span>Washington National Opera</span>
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1160px] mx-auto px-8 grid md:grid-cols-2 gap-14 items-center">
          <StorySlider />
          <div>
            <span className="eyebrow block mb-3.5">The Story</span>
            <h2 className="text-3xl md:text-4xl text-teal-deep mb-4">
              From Ciudad Juárez to the opera stage
            </h2>
            <p className="text-[#544f46] leading-relaxed mb-4">
              A soldier&rsquo;s path, a singer&rsquo;s calling. Jesús Daniel
              Hernández built a life as an operatic tenor after service in the
              U.S. Army — from the Plácido Domingo&ndash;Cafritz Young Artist
              Program to stages performing Macbeth, La Traviata, Falstaff, and
              Lucrezia Borgia.
            </p>
            <Link
              href="/story"
              className="text-terracotta font-bold text-sm border-b-2 border-terracotta pb-0.5"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </section>

      {/* MUSIC TEASER */}
      <section className="py-24 bg-teal-deep">
        <div className="max-w-[1160px] mx-auto px-8">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <span className="eyebrow text-gold">Music</span>
            <h2 className="text-3xl md:text-4xl text-cream mt-3.5">Recordings</h2>
            <p className="text-cream/65 mt-3.5">
              Classical crossover work — where operatic voice meets new
              arrangements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "America the Beautiful", sub: "Tenor & flamenco guitar arrangement", status: "Out now", cover: "/america-the-beautiful-cover.jpg" },
              { title: "MERCI", sub: "Debut single", status: "Coming soon", cover: null },
              { title: "L’orologio", sub: "Album — Jesús Daniel Hernández", status: "Out now", cover: "/lorologio-card.jpg" },
            ].map((r) => (
              <div
                key={r.title}
                className="bg-cream/[0.04] border border-cream/10 rounded-xl overflow-hidden hover:-translate-y-1 hover:border-gold transition-all"
              >
                <div className="aspect-square relative flex items-end p-4">
                  {r.cover ? (
                    <Image
                      src={r.cover}
                      alt={r.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8a8474] to-teal-deep" />
                  )}
                  <span className="relative z-10 text-[0.65rem] tracking-widest uppercase bg-gold text-teal-deep px-2.5 py-1 rounded-full font-bold">
                    {r.status}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-cream text-lg">{r.title}</h3>
                  <p className="text-cream/60 text-sm mt-1.5">{r.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/music" className="text-gold font-bold text-sm border-b-2 border-gold pb-0.5">
              View all music →
            </Link>
          </div>
        </div>
      </section>

      {/* PODCAST TEASER */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1160px] mx-auto px-8 grid md:grid-cols-[1fr_1.3fr] gap-14 items-start">
          <div className="aspect-square rounded-lg overflow-hidden shadow-2xl relative">
            <Image
              src="/podcast-cover-static.webp"
              alt="The Walking Tenor — Stories That Sing Podcast"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 43vw, 100vw"
            />
          </div>
          <div>
            <span className="eyebrow block mb-3.5">The Podcast</span>
            <h2 className="text-3xl md:text-4xl text-teal-deep mb-4">Stories That Sing</h2>
            <p className="text-[#544f46] leading-relaxed mb-7">
              Cinematic narrative episodes uncovering the hidden histories
              behind famous songs — 7 to 12 minutes, hosted by Jesús Daniel
              Hernández.
            </p>
            <Link href="/podcast" className="text-terracotta font-bold text-sm border-b-2 border-terracotta pb-0.5">
              Listen to episodes →
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-24 bg-teal-deep text-center relative overflow-hidden">
        <div className="max-w-[520px] mx-auto px-8 relative z-10">
          <span className="eyebrow text-gold">Stay Connected</span>
          <h2 className="text-3xl md:text-4xl text-cream mt-4 mb-4">
            The story behind the story
          </h2>
          <p className="text-cream/65 mb-8 leading-relaxed">
            New music, podcast episodes, and updates — straight to your inbox.
          </p>
          <form className="flex gap-2.5 max-w-[420px] mx-auto flex-wrap justify-center">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 min-w-[220px] px-4.5 py-3.5 rounded-full border border-cream/25 bg-cream/[0.06] text-cream placeholder:text-cream/45"
            />
            <button
              type="submit"
              className="bg-terracotta text-cream px-6.5 py-3.5 rounded-full font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
