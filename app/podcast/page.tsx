import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast | The Walking Tenor",
  description: "Stories That Sing — a podcast hosted by Jesús Daniel Hernández, The Walking Tenor.",
};

const episodes = [
  { num: "01", title: "The Song That Almost Didn't Exist", sub: "The incredible story behind a song you thought you knew." },
  { num: "02", title: "Placeholder Episode Title", sub: "Episode description goes here." },
  { num: "03", title: "Placeholder Episode Title", sub: "Episode description goes here." },
  { num: "04", title: "Placeholder Episode Title", sub: "Episode description goes here." },
  { num: "05", title: "Why Boleros Make You Cry", sub: "A deep dive into heartbreak, beauty, and the power of boleros." },
  { num: "06", title: "Placeholder Episode Title", sub: "Episode description goes here." },
  { num: "07", title: "When Frank Sinatra Covered a Mariachi Song", sub: "The time \u201cOl\u2019 Blue Eyes\u201d surprised the world." },
  { num: "10", title: "The Banned Notes That Became Hits", sub: "The songs almost silenced \u2014 and how they changed music forever." },
];

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

      <section className="py-20 bg-teal-deep">
        <div className="max-w-[760px] mx-auto px-8">
          <div className="border-t border-cream/10">
            {episodes.map((ep) => (
              <div
                key={ep.num}
                className="flex items-center gap-5 py-5 border-b border-cream/10"
              >
                <div className="font-display font-bold text-gold text-base w-9">
                  {ep.num}
                </div>
                <div>
                  <div className="text-cream font-semibold text-[0.95rem]">
                    {ep.title}
                  </div>
                  <div className="text-cream/55 text-sm mt-0.5">{ep.sub}</div>
                </div>
              </div>
            ))}
          </div>
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
