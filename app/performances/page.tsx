import type { Metadata } from "next";
import Link from "next/link";
import {
  performances,
  isUpcoming,
  formatDateParts,
  type Performance,
} from "@/data/performances";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Performances | The Walking Tenor",
  description:
    "Upcoming and past performances by Jesús Daniel Hernández, The Walking Tenor — opera, storytelling concerts, and classical crossover.",
};

function EventCard({
  perf,
  muted = false,
}: {
  perf: Performance;
  muted?: boolean;
}) {
  const { month, day, year } = formatDateParts(perf.date);

  return (
    <article
      className={`rounded-xl border overflow-hidden transition-opacity ${
        muted ? "border-ink/8 opacity-60" : "border-ink/12 bg-cream"
      }`}
    >
      {/* Date header */}
      <div className={`px-6 py-4 flex items-start gap-5 ${muted ? "bg-ink/5" : "bg-teal-deep"}`}>
        <div className="shrink-0 text-center w-14">
          <div className={`text-[0.62rem] font-bold tracking-[0.18em] ${muted ? "text-ink/40" : "text-gold"}`}>
            {month}
          </div>
          <div className={`text-4xl font-bold leading-none font-display ${muted ? "text-ink/50" : "text-cream"}`}>
            {day}
          </div>
          <div className={`text-[0.65rem] mt-0.5 ${muted ? "text-ink/30" : "text-cream/50"}`}>
            {year}
          </div>
        </div>
        <div className="pt-0.5 flex-1 min-w-0">
          <h2 className={`font-display text-xl leading-snug ${muted ? "text-ink/60" : "text-cream"}`}>
            {perf.title}
          </h2>
          {perf.subtitle && (
            <p className={`text-sm mt-1 ${muted ? "text-ink/40" : "text-gold"}`}>
              {perf.subtitle}
            </p>
          )}
          {perf.time && (
            <p className={`text-sm mt-1 ${muted ? "text-ink/35" : "text-cream/60"}`}>
              {perf.time}
            </p>
          )}
        </div>
      </div>

      {/* Body */}
      <div className={`p-6 space-y-5 ${muted ? "bg-ink/[0.02]" : ""}`}>
        {/* Venue */}
        <div className="space-y-0.5">
          {perf.series && (
            <p className="text-[0.7rem] font-bold tracking-widest uppercase text-gold">
              {perf.series}
            </p>
          )}
          {perf.venue && (
            <p className="font-semibold text-teal-deep text-[0.95rem]">
              {perf.venue}
            </p>
          )}
          {perf.address ? (
            <p className="text-[#6b665e] text-sm">{perf.address}</p>
          ) : (
            <p className="text-[#6b665e] text-sm">{perf.city}</p>
          )}
          {perf.address && (
            <p className="text-[#6b665e] text-sm">{perf.city}</p>
          )}
          {perf.presenter && (
            <p className="text-[#6b665e] text-sm">
              Presented by {perf.presenter}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-[#3a3833] leading-relaxed text-[0.95rem]">
          {perf.description}
        </p>

        {/* Extra fields */}
        {(perf.featuredArtists ||
          perf.pianist ||
          perf.specialGuest ||
          perf.program) && (
          <div className="space-y-3 pt-1 border-t border-ink/8">
            {perf.featuredArtists && (
              <div>
                <p className="text-[0.7rem] font-bold tracking-widest uppercase text-ink/40 mb-1">
                  Featured Artists
                </p>
                <p className="text-[#3a3833] text-sm">
                  {perf.featuredArtists.join(" · ")}
                </p>
              </div>
            )}
            {perf.pianist && (
              <div>
                <p className="text-[0.7rem] font-bold tracking-widest uppercase text-ink/40 mb-1">
                  Pianist
                </p>
                <p className="text-[#3a3833] text-sm">{perf.pianist}</p>
              </div>
            )}
            {perf.specialGuest && (
              <div>
                <p className="text-[0.7rem] font-bold tracking-widest uppercase text-ink/40 mb-1">
                  Special Appearance
                </p>
                <p className="text-[#3a3833] text-sm">{perf.specialGuest}</p>
              </div>
            )}
            {perf.program && (
              <div>
                <p className="text-[0.7rem] font-bold tracking-widest uppercase text-ink/40 mb-1.5">
                  Program includes
                </p>
                <ul className="flex flex-wrap gap-x-3 gap-y-1">
                  {perf.program.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#3a3833] before:content-['·'] before:mr-1.5 before:text-gold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="pt-1">
          {perf.link ? (
            <a
              href={perf.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-teal-deep text-teal-deep text-sm font-bold px-5 py-2.5 rounded-full hover:bg-teal-deep hover:text-cream transition-colors"
            >
              {perf.linkText ?? "Event Details"}
            </a>
          ) : (
            <span className="text-sm italic text-ink/35">
              Details coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PerformancesPage() {
  const upcoming = performances.filter((p) => isUpcoming(p.date));
  const past = performances.filter((p) => !isUpcoming(p.date));

  return (
    <>
      {/* ── HERO ── */}
      <section className="py-20 md:py-24 bg-teal-deep text-center">
        <div className="max-w-[640px] mx-auto px-8">
          <span className="eyebrow text-gold block mb-4">Live Performances</span>
          <h1 className="text-4xl md:text-5xl text-cream leading-tight mb-4">
            Upcoming Performances
          </h1>
          <p className="text-cream/65 leading-relaxed">
            Concerts, storytelling programs, and operatic productions — find
            Jesús Daniel Hernández on stage near you.
          </p>
        </div>
      </section>

      {/* ── UPCOMING ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-[860px] mx-auto px-8">
          {upcoming.length > 0 ? (
            <div className="space-y-8">
              {upcoming.map((perf) => (
                <EventCard key={perf.id} perf={perf} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#544f46] text-lg">
                No upcoming performances scheduled.
              </p>
              <p className="text-[#544f46] mt-2">
                Check back soon or{" "}
                <Link href="/booking" className="text-terracotta font-bold underline underline-offset-2">
                  get in touch
                </Link>{" "}
                to discuss booking.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── PAST PERFORMANCES ── */}
      {past.length > 0 && (
        <section className="py-16 bg-cream-dim">
          <div className="max-w-[860px] mx-auto px-8">
            <h2 className="text-xl font-display text-ink/50 mb-8 text-center tracking-wide">
              Past Performances
            </h2>
            <div className="space-y-6">
              {[...past].reverse().map((perf) => (
                <EventCard key={perf.id} perf={perf} muted />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOOKING CTA ── */}
      <section className="py-20 bg-teal-deep text-center">
        <div className="max-w-[520px] mx-auto px-8">
          <h2 className="text-3xl text-cream mb-4">
            Interested in presenting?
          </h2>
          <p className="text-cream/65 mb-8 leading-relaxed">
            Contact us to discuss booking, program options, and availability.
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
