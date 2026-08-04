import type { Metadata } from "next";
import Link from "next/link";
import { episodes } from "@/data/episodes";

export const metadata: Metadata = {
  title: "Podcast | The Walking Tenor",
  description: "Stories That Sing — a podcast hosted by Jesús Daniel Hernández, The Walking Tenor.",
};

export default function PodcastPage() {
  return (
    <>
      <section className="py-24 md:py-28 bg-cream text-center">
        <div className="max-w-[600px] mx-auto px-8">
          <span className="eyebrow block mb-4">The Podcast</span>
          <h1 className="text-4xl md:text-5xl text-teal-deep leading-tight mb-4">
            Stories That Sing
          </h1>
          <p className="text-[#544f46]">
            Cinematic narrative episodes uncovering the hidden histories
            behind famous songs — 7 to 12 minutes, hosted by Jesús Daniel
            Hernández.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream-dim">
        <div className="max-w-[1160px] mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {episodes.map((ep) => (
            <Link
              key={ep.slug}
              href={`/podcast/${ep.slug}`}
              className="bg-cream rounded-xl overflow-hidden hover:-translate-y-1 transition-transform block group"
            >
              <div
                className={`aspect-[16/10] bg-gradient-to-br ${ep.gradient} relative flex items-end p-4`}
              >
                <span className="text-[0.65rem] tracking-widest uppercase bg-cream/90 text-teal-deep px-2.5 py-1 rounded-full font-bold">
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
          <span className="border border-teal-deep text-teal-deep px-6 py-3 rounded-full text-sm font-bold">
            Spotify — coming soon
          </span>
          <span className="border border-teal-deep text-teal-deep px-6 py-3 rounded-full text-sm font-bold">
            Apple Podcasts — coming soon
          </span>
        </div>
      </section>
    </>
  );
}
