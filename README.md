# Studio IA

## Vision
Studio IA is a premium ADU design and project management studio based in Santa Barbara, California.

## Current Priorities
1. Build the best ADU website in Santa Barbara.
2. Rank #1 locally for ADU-related searches.
3. Deliver an exceptional client experience.
4. Build a portfolio of architecturally beautiful projects.
5. Develop systems that scale as the company grows.

## Guiding Principle
Design first. Build second. Trust always.

## Company docs
- [BRAND.md](./BRAND.md)
- [MESSAGING.md](./MESSAGING.md)
- [BUSINESS_MODEL.md](./BUSINESS_MODEL.md)
- [WEBSITE.md](./WEBSITE.md)
- [OPERATIONS.md](./OPERATIONS.md)
- [TODO.md](./TODO.md)
- [AGENTS.md](./AGENTS.md)
- [CURSOR_WEBSITE_REWRITE_PROMPT.md](./CURSOR_WEBSITE_REWRITE_PROMPT.md)

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
- `/services` + `/services/[slug]` — ADU service pages
- `/process` — Design. Coordinate. Deliver.
- `/areas` + `/areas/[slug]` — Local landing pages
- `/work` + `/work/[slug]` — Case studies
- `/about` — Studio & founder
- `/faq` — Homeowner FAQ
- `/contact` — Consultation
- `/sitemap.xml`, `/robots.txt`

### Deploy

Set the same env vars on Railway/Vercel. Point `NEXT_PUBLIC_SITE_URL` to your live domain after DNS is live.
