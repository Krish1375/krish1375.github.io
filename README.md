# Krish Shah — Neural Canvas Portfolio

Single-page portfolio for Data Science / AI Engineering, built with Next.js, Tailwind CSS, Framer Motion, Lenis, and D3.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Import this repository in [Vercel](https://vercel.com).
2. Framework preset: **Next.js** (default).
3. Deploy — no extra environment variables required.

To use a custom domain, connect it in the Vercel project settings.

## Content

All copy and project data live in [`lib/data.ts`](lib/data.ts). Update that file to change text, links, projects, journey steps, and skills.

Optional assets:

- `public/cv.pdf` — resume for the Download CV button
- `public/profile.jpeg` — kept for reference; hero uses animated neural canvas

## Previous stack

This project replaced a Vite + React portfolio. GitHub Pages (`gh-pages`) is no longer the default deploy path; use Vercel or any Node host that supports Next.js.
