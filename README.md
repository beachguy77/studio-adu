# Studio IA

Premium ADU design and construction site for Santa Barbara County.

Built with **Next.js** (App Router) and **React**.

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (no trailing slash) |
| `NEXT_PUBLIC_CONTACT_PHONE` | Display phone number |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email |

## Site map

- `/` — Home
- `/services` + `/services/[slug]` — ADU service pages
- `/areas` + `/areas/[slug]` — Local landing pages
- `/work` + `/work/[slug]` — Case studies
- `/about` — Studio & founder
- `/contact` — Consultation
- `/sitemap.xml`, `/robots.txt`

## Deploy

Set the same env vars on Railway/Vercel. Point `NEXT_PUBLIC_SITE_URL` to your live domain after DNS is live.
