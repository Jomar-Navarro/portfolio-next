@AGENTS.md

# Portfolio — Jomar Navarro

Portfolio personale Next.js 16 / React 19 / Tailwind v4.

## Stack
- **Framework**: Next.js 16 (App Router, RSC dove possibile)
- **UI**: React 19, Tailwind CSS v4, Motion for React v12
- **Language**: TypeScript 5 strict
- **Test**: Vitest (`npm run test`)
- **CI**: GitHub Actions (tsc → lint → test → build)

## Struttura
```
components/   → UI components (Hero, About, Experience, Projects, Skills, Contact, Footer, Header, Icon, ThemeContext)
data/         → Dati separati dai componenti, con tipi TypeScript esportati
  *.test.ts   → Test Vitest sui contratti dei dati
src/app/      → Next.js App Router: layout, page, opengraph-image, sitemap, robots
public/       → Asset statici
.github/      → CI/CD workflow
```

## Regole architetturali
- I dati hardcoded vanno in `data/<nome>.ts`, mai nei componenti
- Ogni file in `data/` ha il suo `*.test.ts` corrispondente
- Usare `next/image` con `fill` + `sizes` per tutte le immagini — mai `<img>` nativo
- Gli elementi con `gradient-border` devono avere `relative` nella className (il `::before` è `position: absolute`)
- I link/bottoni icon-only devono avere `aria-label`

## Design system
Le utility CSS custom sono in `src/app/globals.css` (`@layer utilities`):
- `.glass` → `backdrop-filter: blur(20px)` + `background: var(--glass-bg)` + bordo e shadow
- `.gradient-border` → `::before` con gradiente viola/cyan (richiede `relative` sul parent)
- `.gradient-text` → background-clip gradient da `--gradient-from` a `--gradient-to`
- `.glow-violet` / `.glow-cyan` → box-shadow colorati
- Orb animations: `.orb-animate-1/2/3` in globals.css

Le variabili CSS del tema dark sono in `globals.css` (`:root` e `.dark`). Il file `default_theme.css` è stato rimosso — non reimportarlo.

## ThemeContext
- Usa lazy initializer `useState(() => localStorage.getItem('theme') ?? 'dark')` per leggere il tema senza useEffect
- Un `useEffect` rimane per applicare la classe su `document.documentElement` e salvare in localStorage
- `layout.tsx` ha uno script inline in `<head>` che applica il tema prima dell'hydration React (evita FOUC)
- `<html>` ha `suppressHydrationWarning` perché la classe `dark` viene aggiunta dallo script prima che React idrati

## SEO
- Metadata completo in `src/app/layout.tsx`: title template, OG, Twitter card, canonical, robots
- OG image dinamica generata da `src/app/opengraph-image.tsx` via `next/og` (edge runtime)
- `src/app/sitemap.ts` e `src/app/robots.ts` generati automaticamente
- Base URL: `process.env.NEXT_PUBLIC_BASE_URL ?? "https://jomarnavarro.dev"` — impostare su Vercel

## Comandi
```bash
npm run dev      # sviluppo locale
npm run test     # vitest (11 test, ~300ms)
npm run lint     # eslint — deve essere 0 errori prima di ogni PR
npx tsc --noEmit # type check — deve essere 0 errori prima di ogni PR
npm run build    # build produzione
```

## CI/CD
GitHub Actions (`.github/workflows/ci.yml`) esegue su ogni push/PR a main:
1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run test`
4. `npm run build`

La CI deve essere verde prima di ogni merge.

## Cosa NON fare
- Non importare `default_theme.css` — è stato rimosso perché sovrascriveva le variabili custom
- Non usare `<img>` nativo — usare sempre `next/image`
- Non aggiungere dati hardcoded nei componenti — vanno in `data/`
- Non rimuovere `relative` dagli elementi con `gradient-border`
- Non usare `transition-all` sul nav dell'Header (usa `transition-[background,border-color,box-shadow]`)
- Non aggiungere `shadow-xl shadow-violet-500/10` insieme a `glass` — `.glass` sovrascrive già box-shadow
