import type { Metadata } from "next";
import Link from "next/link";
import { episodes } from "@/data/episodes";
import Image from "next/image";
import "../podcast-cover.css";
import PodcastCover from "@/components/PodcastCover";

export const metadata: Metadata = {
  title: "Podcast | The Walking Tenor",
  description: "Stories That Sing — a podcast hosted by Jesús Daniel Hernández, The Walking Tenor.",
};

export default function PodcastPage() {
  return (
    <>
      <section className="py-24 md:py-28 bg-teal-deep text-center">
        <div className="max-w-[600px] mx-auto px-8 flex flex-col items-center">
          <Image
            src="/podcast-cover-static.webp"
            alt="The Walking Tenor — Stories That Sing Podcast"
            width={380}
            height={380}
            className="rounded-xl shadow-2xl"
            priority
          />
          <span className="eyebrow text-gold block mt-10 mb-4">The Podcast</span>
          <h1 className="text-4xl md:text-5xl text-cream leading-tight mb-4">
            Stories That Sing
          </h1>
          <p className="text-cream/65 mb-8">
            Cinematic narrative episodes uncovering the hidden histories
            behind famous songs — 7 to 12 minutes, hosted by Jesús Daniel
            Hernández.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="https://open.spotify.com/show/0343LeVZviUhv63BzlZBjd?si=3e3d3fece58c4b14"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DB954] text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-[filter]"
            >
              Listen on Spotify
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/welcome-to-the-walking-tenor-podcast/id6799499875?i=1000781106645"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9933CC] text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-[filter]"
            >
              Listen on Apple Podcasts
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-dim">
        <div className="max-w-[1160px] mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {episodes.map((ep) => (
            <Link
              key={ep.slug}
              href={`/podcast/${ep.slug}`}
              className="twt-card bg-cream rounded-xl overflow-hidden hover:-translate-y-1 transition-transform block group"
            >
              <div className="aspect-square relative overflow-hidden flex items-end p-4">
                <PodcastCover
                  mini
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", borderRadius: 0, boxShadow: "none" }}
                />
                <span className="relative z-10 text-[0.65rem] tracking-widest uppercase bg-cream/90 text-teal-deep px-2.5 py-1 rounded-full font-bold">
                  Episode {ep.num}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-teal-deep text-[1.05rem] font-display font-semibold leading-snug group-hover:text-terracotta transition-colors">
                  {ep.title}
                </h3>
                <p className="text-[#78725f] text-sm mt-2.5 leading-relaxed">
                  {ep.teaser}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <p className="text-[#544f46] mb-5">Listen on your favorite platform</p>
        <div className="flex gap-4 justify-center flex-wrap px-8">
          <a
            href="https://open.spotify.com/show/0343LeVZviUhv63BzlZBjd?si=3e3d3fece58c4b14"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-deep text-teal-deep px-6 py-3 rounded-full text-sm font-bold hover:bg-teal-deep hover:text-cream transition-colors"
          >
            Spotify
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/welcome-to-the-walking-tenor-podcast/id6799499875?i=1000781106645"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-deep text-teal-deep px-6 py-3 rounded-full text-sm font-bold hover:bg-teal-deep hover:text-cream transition-colors"
          >
            Apple Podcasts
          </a>
        </div>
      </section>
    </>
  );
}
