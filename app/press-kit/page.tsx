import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BioCopyButton from "./BioCopyButton";

export const metadata: Metadata = {
  title: "Press Kit | The Walking Tenor",
  description:
    "Biography, photos, and press materials for Jesús Daniel Hernández, The Walking Tenor.",
};

const SHORT_BIO_PLAIN =
  "Jesús Daniel Hernández is a Mexican-American tenor, U.S. Army wartime veteran, recording artist, and creator of The Walking Tenor. Known for his warm lirico-spinto voice and emotionally direct storytelling, he performs opera, Latin American song, Neapolitan repertoire, American classics, and classical crossover music. His operatic roles include Andrea Chénier, Pinkerton in Madama Butterfly, Rodolfo in La bohème, Macduff in Macbeth, and Roméo in Roméo et Juliette. His recordings include the album L’orologio and his new release America the Beautiful, a cinematic interpretation for tenor and guitar. He is also the host and creator of The Walking Tenor Podcast, a bilingual project exploring the hidden human stories behind beloved songs and musical traditions.";

const EXTENDED_BIO_PLAIN = `Jesús Daniel Hernández is a Mexican-American tenor, U.S. Army wartime veteran, recording artist, and storyteller whose work brings opera, Latin song, American classics, and cinematic storytelling into the same human space.

Born in Ciudad Juárez, Mexico, and shaped by a life that has crossed borders, battlefields, stages, and family memory, Hernández sings with the perspective of an artist who understands that music is never only sound. It is inheritance, survival, longing, humor, grief, faith, and the road home.

He served in the U.S. Army, including service in Iraq during Operation Iraqi Freedom, before continuing his path as a classical singer. His military background remains part of his artistic identity: discipline, resilience, service, and the ability to carry a story with honesty and emotional force.

Hernández's vocal work is rooted in the tenor tradition, with a warm lirico-spinto voice suited to opera, Neapolitan song, Latin American repertoire, classical crossover, and American standards. His operatic roles include Andrea Chénier in the title role, Pinkerton in Madama Butterfly, Rodolfo in La bohème, Macduff in Macbeth, and Roméo in Roméo et Juliette. These roles reflect the dramatic and lyrical range at the center of his performing identity.

His career path included the Domingo-Cafritz Young Artist Program at Washington National Opera, an important early chapter in his development, while his artistic identity today is defined by the full road he has traveled: soldier, singer, recording artist, storyteller, and creator of The Walking Tenor.

As The Walking Tenor, he creates performances that move between concert, story, and lived experience. His programs connect Italian song, Mexican and Latin American classics, American songs, and operatic repertoire through spoken storytelling, inviting audiences not only to hear beautiful music, but to understand why these songs still matter.

His recordings include the album L’orologio, inspired by romantic Italian and Latin song, and his new release America the Beautiful, a cinematic interpretation for tenor and guitar. He is also the host and creator of The Walking Tenor Podcast, a bilingual storytelling project exploring the hidden human stories behind beloved songs, singers, and musical traditions.

Through his concerts, recordings, podcast, and creative projects, Hernández continues to build a bridge between opera and everyday life, between Mexico and the United States, between memory and performance, and between the songs people already love and the deeper stories they carry.`;

const youtubeVideos = [
  {
    id: "Y6saGb8rBmc",
    title: "Addio fiorito asil — Madame Butterfly",
  },
  {
    id: "SVoushyWt7Q",
    title: "Bésame Mucho",
  },
  {
    id: "_wS1Wfc5BN0",
    title: "Core n’ grato! Canzone Napoletana di Salvatore Cardillo",
  },
  {
    id: "Nv-bvyJr5UE",
    title:
      "What a Wonderful World — Tribute to essential workers and Military",
  },
  {
    id: "QPKDxGPQ6Dk",
    title: "Ah la paterna mano - Macbeth",
  },
];

const headshots = [
  {
    src: "/images/press-kit/headshot-studio.PNG",
    label: "Studio headshot",
    file: "headshot-studio.PNG",
    href: "/images/press-kit/headshot-studio.PNG",
  },
  {
    src: "/images/press-kit/headshot-candid.png",
    label: "Candid headshot",
    file: "headshot-candid.png",
    href: "/images/press-kit/headshot-candid.png",
    objectPosition: "75% 20%",
  },
  {
    src: "/images/press-kit/guitar-headshot.png",
    label: "Artistic headshot",
    file: "guitar-headshot.png",
    href: "/images/press-kit/guitar-headshot.png",
  },
];

const downloads = [
  {
    label: "Biography PDF",
    file: "jesus-daniel-hernandez-bio.pdf",
    href: "/images/press-kit/jesus-daniel-hernandez-bio.pdf",
  },
  {
    label: "Studio headshot",
    file: "headshot-studio.PNG",
    href: "/images/press-kit/headshot-studio.PNG",
  },
  {
    label: "Candid headshot",
    file: "headshot-candid.png",
    href: "/images/press-kit/headshot-candid.png",
  },
  {
    label: "Artistic headshot",
    file: "guitar-headshot.png",
    href: "/images/press-kit/guitar-headshot.png",
  },
  {
    label: "Repertoire / resume PDF",
    file: "jesus-daniel-hernandezresume.pdf",
    href: "/images/press-kit/jesus-daniel-hernandezresume.pdf",
  },
];

export default function PressKitPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="bg-teal-deep pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-[1160px] mx-auto px-8">
          <div className="text-center mb-10">
            <span className="eyebrow text-gold block mb-4">
              For media and presenters
            </span>
            <h1 className="text-5xl md:text-6xl text-cream leading-tight mb-4">
              Press Kit
            </h1>
            <p className="text-cream/65 text-lg">
              Biography, photos, and materials for print and digital media.
            </p>
          </div>
          <div className="border-2 border-gold/70 p-1 max-w-[960px] mx-auto">
            <div className="relative w-full aspect-[16/10] bg-teal">
              <Image
                src="/images/press-kit/hero.jpg"
                alt="Jesús Daniel Hernández performing guitar on stage"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BIOGRAPHY ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-[840px] mx-auto px-8">
          <h2 className="text-3xl md:text-4xl text-teal-deep text-center mb-14">
            Biography
          </h2>

          {/* Short bio */}
          <div className="mb-14 pb-14 border-b border-ink/10">
            <div className="flex flex-wrap items-start gap-4 justify-between mb-6">
              <h3 className="text-xl text-teal-deep">Short biography</h3>
              <BioCopyButton text={SHORT_BIO_PLAIN} />
            </div>
            <p className="text-[#3a3833] leading-relaxed text-[1.05rem]">
              Jesús Daniel Hernández is a Mexican-American tenor, U.S. Army
              wartime veteran, recording artist, and creator of The Walking
              Tenor. Known for his warm lirico-spinto voice and emotionally
              direct storytelling, he performs opera, Latin American song,
              Neapolitan repertoire, American classics, and classical crossover
              music. His operatic roles include <em>Andrea Chénier</em>,
              Pinkerton in <em>Madama Butterfly</em>, Rodolfo in{" "}
              <em>La bohème</em>, Macduff in <em>Macbeth</em>, and Roméo in{" "}
              <em>Roméo et Juliette</em>. His recordings include the album{" "}
              <em>L&rsquo;orologio</em> and his new release{" "}
              <em>America the Beautiful</em>, a cinematic interpretation for
              tenor and guitar. He is also the host and creator of The Walking
              Tenor Podcast, a bilingual project exploring the hidden human
              stories behind beloved songs and musical traditions.
            </p>
          </div>

          {/* Extended bio */}
          <div>
            <div className="flex flex-wrap items-start gap-4 justify-between mb-6">
              <h3 className="text-xl text-teal-deep">Extended biography</h3>
              <BioCopyButton text={EXTENDED_BIO_PLAIN} />
            </div>
            <div className="space-y-5 text-[#3a3833] leading-relaxed text-[1.05rem]">
              <p>
                Jesús Daniel Hernández is a Mexican-American tenor, U.S. Army
                wartime veteran, recording artist, and storyteller whose work
                brings opera, Latin song, American classics, and cinematic
                storytelling into the same human space.
              </p>
              <p>
                Born in Ciudad Juárez, Mexico, and shaped by a life that has
                crossed borders, battlefields, stages, and family memory,
                Hernández sings with the perspective of an artist who
                understands that music is never only sound. It is inheritance,
                survival, longing, humor, grief, faith, and the road home.
              </p>
              <p>
                He served in the U.S. Army, including service in Iraq during
                Operation Iraqi Freedom, before continuing his path as a
                classical singer. His military background remains part of his
                artistic identity: discipline, resilience, service, and the
                ability to carry a story with honesty and emotional force.
              </p>
              <p>
                Hernández&rsquo;s vocal work is rooted in the tenor tradition,
                with a warm lirico-spinto voice suited to opera, Neapolitan
                song, Latin American repertoire, classical crossover, and
                American standards. His operatic roles include{" "}
                <em>Andrea Chénier</em> in the title role, Pinkerton in{" "}
                <em>Madama Butterfly</em>, Rodolfo in <em>La bohème</em>,
                Macduff in <em>Macbeth</em>, and Roméo in{" "}
                <em>Roméo et Juliette</em>. These roles reflect the dramatic and
                lyrical range at the center of his performing identity.
              </p>
              <p>
                His career path included the Domingo-Cafritz Young Artist
                Program at Washington National Opera, an important early chapter
                in his development, while his artistic identity today is defined
                by the full road he has traveled: soldier, singer, recording
                artist, storyteller, and creator of The Walking Tenor.
              </p>
              <p>
                As The Walking Tenor, he creates performances that move between
                concert, story, and lived experience. His programs connect
                Italian song, Mexican and Latin American classics, American
                songs, and operatic repertoire through spoken storytelling,
                inviting audiences not only to hear beautiful music, but to
                understand why these songs still matter.
              </p>
              <p>
                His recordings include the album <em>L&rsquo;orologio</em>,
                inspired by romantic Italian and Latin song, and his new release{" "}
                <em>America the Beautiful</em>, a cinematic interpretation for
                tenor and guitar. He is also the host and creator of The Walking
                Tenor Podcast, a bilingual storytelling project exploring the
                hidden human stories behind beloved songs, singers, and musical
                traditions.
              </p>
              <p>
                Through his concerts, recordings, podcast, and creative
                projects, Hernández continues to build a bridge between opera
                and everyday life, between Mexico and the United States, between
                memory and performance, and between the songs people already
                love and the deeper stories they carry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HEADSHOTS ── */}
      <section className="py-20 bg-cream-dim">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className="text-3xl md:text-4xl text-teal-deep text-center mb-12">
            Headshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {headshots.map((shot) => (
              <div key={shot.label}>
                <div className="relative aspect-square border border-ink/10 overflow-hidden bg-teal-deep/10">
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    className="object-cover"
                    style={shot.objectPosition ? { objectPosition: shot.objectPosition } : undefined}
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#544f46] text-sm">{shot.label}</span>
                  <a
                    href={shot.href}
                    download={shot.file}
                    className="text-teal-deep text-sm hover:text-terracotta transition-colors underline underline-offset-2"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ESSENTIAL LINKS ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1160px] mx-auto px-8">
          <h2 className="text-3xl md:text-4xl text-teal-deep text-center mb-12">
            Essential links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[840px] mx-auto">
            {/* Podcast */}
            <div className="bg-teal-deep rounded-xl p-8 flex flex-col gap-6">
              <div>
                <div className="eyebrow text-gold mb-3">Podcast</div>
                <h3 className="text-cream text-2xl leading-snug mb-2">
                  The Walking Tenor Podcast
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  Bilingual storytelling — the hidden histories behind beloved
                  songs and musical traditions.
                </p>
              </div>
              <Link
                href="/podcast"
                className="self-start text-gold text-sm font-bold hover:text-cream transition-colors"
              >
                Listen &rarr;
              </Link>
            </div>

            {/* YouTube */}
            <div className="bg-teal-deep rounded-xl p-8">
              <div className="eyebrow text-gold mb-5">YouTube</div>
              <ul>
                {youtubeVideos.map((v) => (
                  <li key={v.id} className="border-b border-cream/10 last:border-none">
                    <a
                      href={`https://www.youtube.com/watch?v=${v.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-3 py-3 text-cream/85 text-sm hover:text-gold transition-colors leading-snug"
                    >
                      <span>{v.title}</span>
                      <span className="text-cream/40 shrink-0 mt-0.5">&#8599;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DOWNLOADS ── */}
      <section className="py-20 bg-cream-dim">
        <div className="max-w-[840px] mx-auto px-8">
          <h2 className="text-3xl md:text-4xl text-teal-deep text-center mb-12">
            Downloads
          </h2>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {downloads.map((d) => (
              <li
                key={d.label}
                className="flex items-center justify-between py-4 gap-4"
              >
                <span className="text-[#3a3833]">{d.label}</span>
                <a
                  href={d.href}
                  download={d.file}
                  className="text-teal-deep text-sm font-bold hover:text-terracotta transition-colors underline underline-offset-2 shrink-0"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. CLOSING CONTACT ── */}
      <section className="py-24 bg-teal-deep text-center">
        <div className="max-w-[560px] mx-auto px-8">
          <h2 className="text-3xl md:text-4xl text-cream mb-4">
            Need something specific?
          </h2>
          <p className="text-cream/65 mb-10 leading-relaxed">
            Contact for additional materials, custom formats, or booking.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-terracotta text-cream px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-terracotta/30 hover:bg-terracotta/90 transition-colors"
          >
            Send booking inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
