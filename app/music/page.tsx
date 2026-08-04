import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Music | The Walking Tenor",
  description: "Classical crossover recordings from Jesús Daniel Hernández, The Walking Tenor.",
};

const releases = [
  {
    title: "America the Beautiful",
    sub: "Tenor & flamenco guitar arrangement",
    status: "Out now",
    live: true,
    href: "/music/america-the-beautiful",
    cover: "/america-the-beautiful-cover.jpg",
  },
  {
    title: "MERCI",
    sub: "Debut single",
    status: "Coming soon",
    live: false,
    href: "#",
  },
  {
    title: "L'orologio",
    sub: "Album — Jesús Daniel Hernández",
    status: "Out now",
    live: true,
    href: "/music/lorologio",
    cover: "/lorologio-card.jpg",
  },
];

export default function MusicPage() {
  return (
    <>
      <section className="py-24 md:py-28 bg-teal-deep text-center">
        <div className="max-w-[600px] mx-auto px-8">
          <span className="eyebrow text-gold block mb-4">Music</span>
          <h1 className="text-4xl md:text-5xl text-cream leading-tight mb-4">
            Recordings
          </h1>
          <p className="text-cream/65">
            Classical crossover work — where operatic voice meets new
            arrangements, from flamenco guitar to full orchestration.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-[1160px] mx-auto px-8 grid md:grid-cols-3 gap-6">
          {releases.map((r) => (
            <a
              key={r.title}
              href={r.href}
              className="bg-cream-dim border border-ink/10 rounded-xl overflow-hidden hover:-translate-y-1 hover:border-gold transition-all block"
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
                  <div
                    className={`absolute inset-0 ${
                      r.live
                        ? "bg-gradient-to-br from-teal to-teal-deep"
                        : "bg-gradient-to-br from-[#8a8474] to-teal-deep"
                    }`}
                  />
                )}
                <span className="relative z-10 text-[0.65rem] tracking-widest uppercase bg-gold text-teal-deep px-2.5 py-1 rounded-full font-bold">
                  {r.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-teal-deep text-lg font-display font-semibold">
                  {r.title}
                </h3>
                <p className="text-[#6b665e] text-sm mt-1.5">{r.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
