import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story | The Walking Tenor",
  description: "From Ciudad Juárez to the opera stage — the story of Jesús Daniel Hernández, The Walking Tenor.",
};

const milestones = [
  { place: "Ciudad Juárez", note: "Where the story begins" },
  { place: "U.S. Army", note: "Service before the stage" },
  { place: "Iraq", note: "A tour that reshaped everything" },
  { place: "Plácido Domingo", note: "Cafritz Young Artist Program" },
  { place: "Washington National Opera", note: "Macbeth, La Traviata, Falstaff, Lucrezia Borgia" },
];

export default function StoryPage() {
  return (
    <>
      <section className="py-24 md:py-28 bg-gradient-to-b from-cream-dim to-cream text-center">
        <div className="max-w-[720px] mx-auto px-8">
          <span className="eyebrow block mb-4">The Walking Tenor Story</span>
          <h1 className="text-4xl md:text-5xl text-teal-deep leading-tight">
            From Ciudad Juárez to the opera stage
          </h1>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-[720px] mx-auto px-8 space-y-6 text-[#3a3833] leading-relaxed text-[1.05rem]">
          <p>
            A soldier&rsquo;s path, a singer&rsquo;s calling. Jesús Daniel
            Hernández&rsquo;s journey began far from any opera house — in
            Ciudad Juárez, and later in the ranks of the U.S. Army, including
            a tour in Iraq that would shape the way he sees resilience, duty,
            and beauty for the rest of his life.
          </p>
          <p>
            After his service, that same discipline found a new stage.
            Hernández trained through the Plácido Domingo&ndash;Cafritz Young
            Artist Program and went on to perform with the Washington
            National Opera in productions of Macbeth, La Traviata, Falstaff,
            and Lucrezia Borgia — building a career as a classical tenor
            rooted in a distinctly American, distinctly personal story.
          </p>
          <p>
            Today, as The Walking Tenor, that journey continues — through
            classical crossover recordings, the Stories That Sing podcast,
            and a body of work that honors both the operatic tradition and
            the road that led him there.
          </p>
        </div>
      </section>

      <section className="py-20 bg-teal-deep">
        <div className="max-w-[800px] mx-auto px-8">
          <h2 className="text-2xl text-cream text-center mb-12 font-display">
            The path so far
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div
                key={m.place}
                className="flex gap-6 py-6 border-b border-cream/10 last:border-none"
              >
                <div className="w-8 shrink-0 font-display font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-cream font-semibold">{m.place}</div>
                  <div className="text-cream/60 text-sm mt-1">{m.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
