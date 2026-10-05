# Studio IAR

## Vision
Studio IAR is a Santa Barbara-based interior design studio offering design consulting, material sourcing, and project coordination for residential and hospitality projects — with a local specialty in ADU coordination.

## Current Priorities
1. Present the full studio clearly: interiors first, ADU as specialty.
2. Rank locally for interior design and ADU-related searches.
3. Deliver an exceptional client experience.
4. Build a portfolio of residential and hospitality-caliber work.
5. Develop systems that scale as the company grows.

## Guiding Principle
Design first. Coordinate with care. Trust always.

## Company docs
- [BRAND.md](./BRAND.md)
- [MESSAGING.md](./MESSAGING.md)
- [BUSINESS_MODEL.md](./BUSINESS_MODEL.md)
- [WEBSITE.md](./WEBSITE.md)
- [OPERATIONS.md](./OPERATIONS.md)
- [TODO.md](./TODO.md)
- [AGENTS.md](./AGENTS.md)

## Development

Built with **Next.js** (App Router) and **React**.

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (no trailing slash) |
| `NEXT_PUBLIC_CONTACT_PHONE` | Display phone number |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email |

### Site map

- `/` — Home
- `/services` + `/services/[slug]` — Interiors & ADU service pages
- `/process` — Design. Source. Coordinate.
- `/areas` + `/areas/[slug]` — Local landing pages (ADU specialty SEO)
- `/work` + `/work/[slug]` — Case studies
- `/about` — Studio & founder
- `/faq` — Client FAQ
- `/contact` — Consultation
- `/sitemap.xml`, `/robots.txt`

### Deploy

Set the same env vars on Railway/Vercel. Point `NEXT_PUBLIC_SITE_URL` to your live domain after DNS is live.
