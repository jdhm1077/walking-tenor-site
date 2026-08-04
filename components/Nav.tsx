import Link from "next/link";

const links = [
  { href: "/story", label: "Story" },
  { href: "/music", label: "Music" },
  { href: "/podcast", label: "Podcast" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-[1160px] mx-auto px-8 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-lg text-teal-deep">
          <span className="w-9 h-9 rounded-full bg-teal-deep text-gold flex items-center justify-center text-[0.68rem] font-bold">
            WT
          </span>
          The Walking Tenor
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink hover:text-terracotta transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="bg-terracotta text-cream px-5 py-2.5 rounded-full text-sm font-bold hover:bg-terracotta/90 transition-colors"
          >
            Booking
          </Link>
        </div>
      </div>
    </nav>
  );
}
