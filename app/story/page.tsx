import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Story | The Walking Tenor",
  description:
    "From Ciudad Juárez to the opera stage — the transformation story of Jesús Daniel Hernández, The Walking Tenor.",
};

const timeline = [
  {
    num: "01",
    place: "Ciudad Juárez",
    note: "A childhood shaped by rancheras, family, and the dream of singing.",
  },
  {
    num: "02",
    place: "The Three Tenors",
    note: "A television concert opens the door to opera.",
  },
  {
    num: "03",
    place: "Crossing Borders",
    note: "At sixteen, Jesús begins a new life in the United States.",
  },
  {
    num: "04",
    place: "U.S. Army and Iraq",
    note: "Service, discipline, and a night when an old dream returns.",
  },
  {
    num: "05",
    place: "The Dressing Room Audition",
    note: "A chance meeting with Plácido Domingo changes everything.",
  },
  {
    num: "06",
    place: "Washington National Opera",
    note: "Training, performances, and the beginning of an operatic career.",
  },
  {
    num: "07",
    place: "The Walking Tenor",
    note: "Music, stories, and a life where every road becomes part of the song.",
  },
];

export default function StoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 md:pt-24 pb-10 bg-gradient-to-b from-cream-dim to-cream text-center">
        <div className="max-w-[720px] mx-auto px-8">
          <span className="eyebrow block mb-4">The Walking Tenor Story</span>
          <h1 className="text-4xl md:text-5xl text-teal-deep leading-tight mb-5">
            A voice carried across borders
          </h1>
          <p className="text-[#544f46] leading-relaxed text-[1.05rem] max-w-[600px] mx-auto">
            From a boy singing rancheras in Ciudad Juárez to a soldier in
            Iraq—and finally to the opera stage—Jesús Daniel Hernández's story
            is one of distance, discipline, reinvention, and a dream that
            refused to disappear.
          </p>
        </div>
      </section>

      {/* STORY BODY */}
      <section className="pt-10 pb-24 bg-cream">
        <div className="max-w-[720px] mx-auto px-8 space-y-6 text-[#3a3833] leading-relaxed text-[1.05rem]">
          <p>
            Jesús Daniel Hernández grew up in Ciudad Juárez, México, dreaming
            of singing like Pedro Infante and Jorge Negrete. Music followed him
            through school hallways, family life, and the first guitar he bought
            at fourteen. Then a television broadcast of the Three Tenors opened
            the door to another world: opera.
          </p>
          <p>
            At sixteen, he immigrated to the United States. Life demanded work,
            responsibility, and sacrifice, and the dream of becoming a singer
            was often placed aside—but never abandoned.
          </p>
          <p>
            In 2003, Jesús enlisted in the U.S. Army and later volunteered to
            serve in Iraq during Operation Iraqi Freedom. One night near Camp
            Taji, while reading <em>The Alchemist</em>, the dream he had carried
            since childhood returned with new urgency. He realized that service
            had shaped him, but music was still calling him forward.
          </p>
          <p>
            Years later, while stationed in Texas, Jesús attended a concert by
            Plácido Domingo. A brief backstage meeting became an unexpected
            audition in Domingo's dressing room—and ultimately led to an
            invitation to join the Domingo–Cafritz Young Artist Program at
            Washington National Opera.
          </p>
          <p>
            There, Jesús began the next chapter of his life, appearing in
            productions including <em>Macbeth</em>, <em>La Traviata</em>,{" "}
            <em>Falstaff</em>, and <em>Lucrezia Borgia</em>. But the soldier
            and the singer were never separate identities. Both demanded
            courage, discipline, endurance, and faith in something larger than
            oneself.
          </p>
          <p>
            Today, as The Walking Tenor, Jesús brings those worlds together
            through music, storytelling, and performance—following the songs,
            memories, and human stories that connect us across cultures and
            generations.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="pt-24 pb-8 bg-teal-deep">
        <div className="max-w-[660px] mx-auto px-8 text-center">
          <div className="w-8 h-0.5 bg-terracotta mx-auto mb-8" />
          <blockquote className="font-display italic text-cream text-2xl md:text-3xl leading-snug">
            &ldquo;The dream disappeared from view many times. It never
            disappeared from me.&rdquo;
          </blockquote>
          <div className="w-8 h-0.5 bg-terracotta mx-auto mt-8" />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="pt-8 pb-20 bg-teal-deep">
        <div className="max-w-[800px] mx-auto px-8">
          <h2 className="text-2xl text-cream text-center mb-12 font-display">
            The road so far
          </h2>
          <div className="space-y-0">
            {timeline.map((m) => (
              <div
                key={m.num}
                className="flex gap-6 py-6 border-b border-cream/10 last:border-none"
              >
                <div className="w-8 shrink-0 font-display font-bold text-gold">
                  {m.num}
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

      {/* CLOSING */}
      <section className="py-24 bg-cream">
        <div className="max-w-[660px] mx-auto px-8 text-center">
          <span className="eyebrow block mb-4">What comes next</span>
          <h2 className="text-3xl md:text-4xl text-teal-deep font-display mb-5">
            The story continues
          </h2>
          <p className="text-[#544f46] leading-relaxed text-[1.05rem] mb-10">
            The Walking Tenor is not only about where Jesús has been. It is
            about where music can still lead—to forgotten songs, unexpected
            histories, shared memories, and the people whose voices continue to
            travel long after the final note.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/podcast"
              className="bg-terracotta text-cream px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-terracotta/30 hover:bg-terracotta/90 transition-colors"
            >
              Listen to the podcast
            </Link>
            <Link
              href="/music"
              className="border-2 border-teal-deep text-teal-deep px-8 py-4 rounded-full font-bold text-sm hover:bg-teal-deep hover:text-cream transition-colors"
            >
              Explore the music
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
