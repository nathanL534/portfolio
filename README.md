Developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

1) Install dependencies
```bash
npm i
```

2) Run the development server
```bash
npm run dev
```

3) Build for production
```bash
npm run build && npm run start
```

## Tech Stack
- Next.js App Router, TypeScript
- Tailwind CSS v4
- Framer Motion animations
- next-themes (dark/light mode)
- react-hook-form + zod (forms/validation)
- next-seo + next-sitemap (SEO/sitemap)

## Content Structure
- `components/sections/*`: Page sections (Hero, About, Projects, Skills, Experience, Resume, Contact)
- `components/ui/*`: Magic UI-inspired effects (GradientText, BorderBeam, TypingAnimation, NumberTicker)
- `data/*`: TS modules for projects, skills, and experience

## Deployment (Vercel)
1) Push to GitHub
2) Import the repo in Vercel (Framework: Next.js)
3) Set env `NEXT_PUBLIC_SITE_URL` (optional)
4) Deploy

## SEO
Edit `next-seo.config.ts` with your domain and social handles. Generate sitemap/robots:
```bash
npx next-sitemap
```
