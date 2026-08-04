import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60 pt-14 pb-8">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="font-display italic text-gold text-lg mb-2.5">
              The Walking Tenor
            </div>
            <p className="text-sm leading-relaxed max-w-[240px]">
              Music. Stories. Human heart.
            </p>
          </div>
          <div>
            <h4 className="text-cream text-[0.8rem] tracking-wider uppercase mb-3.5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/story" className="hover:text-gold transition-colors">Story</Link></li>
              <li><Link href="/music" className="hover:text-gold transition-colors">Music</Link></li>
              <li><Link href="/podcast" className="hover:text-gold transition-colors">Podcast</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cream text-[0.8rem] tracking-wider uppercase mb-3.5">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://instagram.com/thewalkingtenor" target="_blank" rel="noopener" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Spotify</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cream text-[0.8rem] tracking-wider uppercase mb-3.5">
              Booking
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/booking" className="hover:text-gold transition-colors">Inquire</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Press kit</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 flex flex-wrap justify-between gap-2 text-[0.78rem]">
          <span>© {new Date().getFullYear()} The Walking Tenor. All rights reserved.</span>
          <span>jesusdanielhernandez.com → thewalkingtenor.com</span>
        </div>
      </div>
    </footer>
  );
}
