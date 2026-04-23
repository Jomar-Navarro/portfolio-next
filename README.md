# Jomar Navarro — Portfolio

Portfolio personale di Jomar Navarro, Junior Full-Stack Developer specializzato in AI Integration.

## Stack

| Layer | Tecnologie |
|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |
| Animazioni | Motion for React (v12) |
| Styling | Glass morphism custom, CSS layers, dark/light mode |
| Deploy | Vercel |

## Features

- Glass morphism design system custom (`globals.css` utilities)
- Animazioni scroll-driven e 3D tilt sulle project card
- Dark/Light mode con persistenza `localStorage`
- Dati separati dai componenti (`/data`)
- `next/image` con ottimizzazione automatica
- Metadata SEO completo + Open Graph + sitemap/robots
- CI/CD con GitHub Actions (typecheck + lint + build)
- Fully responsive

## Struttura

```
components/   → UI components (Hero, About, Experience, Projects, Skills, Contact, Footer)
data/         → Dati hardcoded separati (hero, about, experience, projects, skills, contact, footer)
src/app/      → Next.js App Router (layout, page, sitemap, robots)
public/       → Asset statici
```

## Run locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build   # build produzione
npm run lint    # ESLint
npx tsc --noEmit # TypeScript check
```

Il deploy è automatico su Vercel ad ogni push su `main`.

## Contatti

- Email: jomarnavarro201@gmail.com
- LinkedIn: [linkedin.com/in/jomar-navarro](https://www.linkedin.com/in/jomar-navarro/)
- GitHub: [github.com/Jomar-Navarro](https://github.com/Jomar-Navarro)
