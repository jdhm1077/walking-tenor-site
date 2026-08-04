import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | The Walking Tenor",
  description: "Notes from the road — reflections on music, performance, and building a life on stage.",
};

const posts = [
  { tag: "Performance", title: "What Opera Taught Me About Discipline", date: "Placeholder post", grad: "from-terracotta to-gold" },
  { tag: "Behind the Music", title: "Recording America the Beautiful with Flamenco Guitar", date: "Placeholder post", grad: "from-teal to-teal-deep" },
  { tag: "Life", title: "From the Army to the Opera Stage", date: "Placeholder post", grad: "from-gold to-terracotta" },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-24 md:py-28 bg-cream-dim text-center">
        <div className="max-w-[600px] mx-auto px-8">
          <span className="eyebrow block mb-4">Blog</span>
          <h1 className="text-4xl md:text-5xl text-teal-deep leading-tight mb-4">
            Notes from the road
          </h1>
          <p className="text-[#544f46]">
            Reflections on music, performance, and building a life on stage.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-[1160px] mx-auto px-8 grid md:grid-cols-3 gap-7">
          {posts.map((p) => (
            <div
              key={p.title}
              className="bg-cream-dim rounded-xl overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${p.grad}`} />
              <div className="p-5">
                <div className="text-[0.68rem] tracking-wider uppercase text-terracotta font-bold">
                  {p.tag}
                </div>
                <h3 className="text-teal-deep text-[1.05rem] font-display font-semibold mt-2 leading-snug">
                  {p.title}
                </h3>
                <div className="text-[#78725f] text-[0.78rem] mt-2.5">{p.date}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#78725f] text-sm mt-14 italic">
          More posts coming soon — this section will connect to a git-based
          CMS for easy publishing.
        </p>
      </section>
    </>
  );
}
