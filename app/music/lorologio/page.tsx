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

      {/* EVOKING MY MEMORIES */}
      <section className="py-20 bg-cream">
        <div className="max-w-[700px] mx-auto px-8">
          <span className="eyebrow block mb-4">In His Own Words</span>
          <h2 className="text-3xl md:text-4xl text-teal-deep font-display mb-4">
            Evoking My Memories
          </h2>
          <div className="w-12 h-0.5 bg-gold mb-8" />
          <div className="space-y-6 text-[#3a3833] leading-relaxed text-[1.05rem]">
            <p>
              I remember very well the feeling I had the first day I stepped
              onto the stage at the Kennedy Center. It was a rehearsal for one
              of the operas I participated in during my time with the
              Domingo–Cafritz young artist program. A dream made reality. It
              was precisely how I dreamed it would be as a child when I used to
              pretend I was singing in a big theater. A big knot in my throat
              formed for the next memory that graced my mind. A beautiful
              recollection of my childhood when with my guitar, I would sing
              next to my lovely viejita linda, my grandma Bernarda and the way
              she used to correct me on the lyrics and style of the song when
              we used to sing together at our lovely house in my dear Ciudad
              Juárez. The song of <em>El reloj</em> (The clock) is a song I
              used to sing all the time with my grandma. Every time I sing this
              song it evokes beautiful memories, and for that reason, my first
              musical production is titled <em>L&rsquo;orologio</em> (The clock
              in Italian, with a never before recorded Italian translation of{" "}
              <em>El reloj</em>).
            </p>
            <p>
              This album highlights the Italian version of the song of{" "}
              <em>El reloj</em> by one of the great composers of Tamaulipas,
              México, Roberto Cantoral. The song was composed in 1956 while he
              sang with the trio Los Tres Caballeros.
            </p>
            <p>
              The inspiration for this Italian translation of{" "}
              <em>El reloj</em> came to be after a concert in Sora, Italy.
              During a late bohemian night, I grabbed my guitar and sang the
              song of <em>El reloj</em>. In the audience was my dear friend
              Leandro Allini, a wonderful musician, poet and true bohemian. He
              loved the song and interpretation of the song, and I asked him if
              he would do me the honor of composing a translation in Italian, so
              the Italian audiences could fully enjoy the magnificence of
              Roberto Cantoral&rsquo;s words. The translation was beautiful, so
              true to the original text in Spanish, and I couldn&rsquo;t wait
              to record it.
            </p>
            <p>
              In this album I offer you a personal tour of my life. In every
              song there is a significant moment in my life represented. From
              the deep-rooted songs of my body and soul like{" "}
              <em>La Llorona</em>, to <em>Amapola</em> a song that my uncle
              Bernardo, a tenor himself, made famous within the family,{" "}
              <em>La Paloma</em>, <em>Divina ilusión</em> and{" "}
              <em>Malagueña</em> pleasantly recall for me intimate moments
              when, with my guitar, I performed my first serenades with my
              family and the friends of my youth in my dear and lovely Ciudad
              Juárez.
            </p>
            <p>I hope you&rsquo;ll enjoy it.</p>
          </div>
          <p className="mt-10 text-right font-display italic text-teal-deep text-[1.05rem]">
            Jesús Daniel Hernández
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
