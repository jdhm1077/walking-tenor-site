# The Walking Tenor — Website

Next.js 16 + Tailwind CSS v4 site for [thewalkingtenor.com](https://thewalkingtenor.com).

## Sprint 0 — what's built

- Design system in `app/globals.css` (colors, fonts wired to Tailwind via `@theme inline`)
- Shared `Nav` and `Footer` components (`/components`)
- Pages: Home (`/`), Story (`/story`), Music (`/music`), Podcast (`/podcast`), Blog (`/blog`), Booking (`/booking`)
- All content is placeholder copy/images pulled from our approved mockup — swap in real photos, bios, and links as you get them

## Getting started locally

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000

> Note: this needs real internet access to fetch Playfair Display and Lato
> from Google Fonts on first build — that will work fine on your machine and
> on Netlify, it just doesn't work inside Claude's sandboxed dev environment.

## Design tokens

| Token | Hex | Tailwind class |
|---|---|---|
| Teal | #1B6868 | bg-teal / text-teal |
| Teal Deep | #123F3F | bg-teal-deep |
| Terracotta | #C4573A | bg-terracotta |
| Cream | #FAF7F0 | bg-cream |
| Cream Dim | #EFE8D8 | bg-cream-dim |
| Gold | #C9A24A | text-gold |
| Ink | #211F1C | text-ink |

Fonts: Playfair Display (headings, font-display) + Lato (body, default).

## Next steps (Sprint 1 candidates)

- [ ] Swap placeholder portrait/blog images for real photos
- [ ] Wire up /booking form to Netlify Forms (or another handler)
- [ ] Add Decap CMS for git-based blog publishing
- [ ] Build out the individual release page pattern (see the standalone
      "America the Beautiful" landing page) as /music/[slug] dynamic routes
- [ ] Add real streaming links once Spotify/Apple Music are live
- [ ] Connect podcast episode data (from Spotify for Podcasters RSS)
- [ ] Push to GitHub, connect to Netlify, point thewalkingtenor.com DNS
- [ ] Set up 301 redirects from jesusdanielhernandez.com

## Deploying to Netlify

1. Push this repo to GitHub
2. In Netlify: Add new site → Import from GitHub
3. Build command: next build · Publish directory: .next
   (Netlify's Next.js runtime handles this automatically — no extra config needed)
4. Add your custom domain (thewalkingtenor.com) under Site settings → Domain management
