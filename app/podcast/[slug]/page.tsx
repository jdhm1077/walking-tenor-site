import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { episodes } from "@/data/episodes";
import RedCirclePlayer from "./RedCirclePlayer";

export function generateStaticParams() {
  return episodes.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const episode = episodes.find((ep) => ep.slug === slug);
  if (!episode) return {};
  return {
    title: `${episode.title} | Stories That Sing`,
    description: episode.teaser,
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = episodes.find((ep) => ep.slug === slug);
  if (!episode) notFound();

  return (
    <>
      <section className={`py-20 md:py-24 bg-gradient-to-br ${episode.gradient} relative`}>
        <div className="max-w-[760px] mx-auto px-8 text-center relative z-10">
          <span className="inline-block text-[0.68rem] tracking-widest uppercase bg-cream/90 text-teal-deep px-3 py-1.5 rounded-full font-bold mb-5">
            Episode {episode.num}
          </span>
          <h1 className="text-3xl md:text-5xl text-cream leading-tight font-display font-bold">
            {episode.title}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-[700px] mx-auto px-8">
          <h2 className="eyebrow mb-4">Synopsis</h2>
          <div className="mb-12">
            {episode.synopsisParagraphs ? (
              episode.synopsisParagraphs.map((para, i) => (
                <p key={i} className="text-[#3a3833] text-[1.05rem] leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))
            ) : (
              <p className="text-[#3a3833] text-[1.05rem] leading-relaxed">
                {episode.synopsis}
              </p>
            )}
          </div>

          {episode.redcircleShowId && episode.redcircleEpisodeId && (
            <RedCirclePlayer
              showId={episode.redcircleShowId}
              episodeId={episode.redcircleEpisodeId}
            />
          )}

          <div className="bg-cream-dim rounded-xl p-7 text-center mb-12">
            <p className="text-[#544f46] mb-5 text-sm">
              Listen on your favorite platform
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="https://open.spotify.com/show/0343LeVZviUhv63BzlZBjd?si=3e3d3fece58c4b14"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-teal-deep text-teal-deep px-5 py-2.5 rounded-full text-sm font-bold hover:bg-teal-deep hover:text-cream transition-colors"
              >
                Spotify
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/welcome-to-the-walking-tenor-podcast/id6799499875?i=1000781106645"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-teal-deep text-teal-deep px-5 py-2.5 rounded-full text-sm font-bold hover:bg-teal-deep hover:text-cream transition-colors"
              >
                Apple Podcasts
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/podcast"
              className="text-terracotta font-bold text-sm border-b-2 border-terracotta pb-0.5"
            >
              ← More episodes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
