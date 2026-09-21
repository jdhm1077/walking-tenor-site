import Link from "next/link";

const links = [
  { href: "/story", label: "Story" },
  { href: "/music", label: "Music" },
  { href: "/performances", label: "Performances" },
  { href: "/podcast", label: "Podcast" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-ink/10">
      {/* Primary row: logo + links (sm and up in a single row) */}
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 flex items-center justify-between py-3 md:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-bold text-base md:text-lg text-teal-deep shrink-0"
        >
          <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-teal-deep text-gold flex items-center justify-center text-[0.65rem] font-bold">
            WT
          </span>
          <span className="hidden md:inline">The Walking Tenor</span>
        </Link>

        {/* sm+ single-row links — tighter gap, slightly smaller font */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.8rem] lg:text-sm font-semibold text-ink hover:text-terracotta transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="bg-terracotta text-cream px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-[0.8rem] lg:text-sm font-bold hover:bg-terracotta/90 transition-colors whitespace-nowrap"
          >
            Booking
          </Link>
        </div>
      </div>

      {/* Mobile-only link bar (below sm) — horizontally scrollable so nothing hides */}
      <div className="sm:hidden border-t border-ink/8 overflow-x-auto">
        <div className="flex items-center gap-5 px-5 py-2.5 min-w-max">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-semibold text-ink hover:text-terracotta transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="bg-terracotta text-cream px-3.5 py-1.5 rounded-full text-xs font-bold hover:bg-terracotta/90 transition-colors whitespace-nowrap"
          >
            Booking
          </Link>
        </div>
      </div>
    </nav>
  );
}
