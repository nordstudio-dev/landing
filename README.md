# Nord Studio — Landing

[![Netlify Status](https://api.netlify.com/api/v1/badges/eb4cde65-41b5-47c4-986e-bae772c381de/deploy-status)](https://app.netlify.com/projects/leafy-rolypoly-2de089/deploys)

Studio landing page built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript 5.9
- Vite 7
- React Router 7
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server                    |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview production build            |
| `npm run lint`    | Run ESLint                          |

## Project Structure

```
src/
├── components/
│   ├── contact/      # Contact form and header
│   ├── landing/      # Hero, services, story, CTA
│   ├── layout/       # Navbar, footer
│   └── shared/       # Reusable components
├── hooks/            # useFadeIn, useDecorativeGrid
├── pages/            # LandingPage, ContactPage
└── styles/           # tokens, reset, layout, animations, components
```
