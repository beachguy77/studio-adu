# Studio IA

Portfolio site for ADU design and construction services in Santa Barbara County.

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
| `NEXT_PUBLIC_CONTACT_PHONE` | Display phone number (e.g. `(805) 555-0123`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email address |

Copy `.env.example` to `.env.local` for local development. Set the same values in your host (e.g. Vercel) for production.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production server |
| `npm run lint` | Run ESLint |

## Deploy

Push to GitHub and connect to [Vercel](https://vercel.com) (recommended for Next.js), Netlify, or Cloudflare Pages.

## Contact form

The contact form is a client-side placeholder. When deploying, wire it to Formspree or a Next.js Server Action.

## Content to replace

- Phone and email via `.env.local` / deploy env vars (see above)
- Portfolio project photos and copy in `src/lib/content.ts`
