# fabricevanboeckel.com

Personal portfolio website for Fabrice Van Boeckel — Data Scientist specialising in NLP, econometrics, and legal/economic evidence.

Live at **[fabricevanboeckel.com](https://fabricevanboeckel.com)** (GitHub Pages via `CNAME`).

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (build & dev server)
- **Tailwind CSS v4**
- **Radix UI** primitives + **shadcn/ui** components
- **React Router DOM v6** (hash-based routing for GitHub Pages compatibility)
- **i18n** — EN / FR / NL via a locale route prefix (`/:locale`)

## Project structure

```
src/
  App.tsx              # Router setup + locale guard
  content/site.ts      # All copy: hero, projects, publications, about, toolbox
  pages/               # Home, Work, About, NotFound
  components/
    site/              # Layout, header, footer
    ui/                # Radix-based UI primitives
  lib/
    i18n.ts            # Locale type & helpers
    useDocumentMeta.ts # <title> / meta tag updater
  assets/              # Project images
public/
  CNAME                # fabricevanboeckel.com
  .nojekyll            # Required for GitHub Pages + Vite
```

## Getting started

```bash
bun install
bun run dev
```

Other scripts:

| Command | Description |
|---|---|
| `bun run build` | Production build → `dist/` |
| `bun run preview` | Preview production build locally |
| `bun run lint` | ESLint |
| `bun run format` | Prettier |

## Updating content

All site copy and structured data lives in [src/content/site.ts](src/content/site.ts). Adding a project, publication, or translating a string is a single-file edit — no CMS needed.

## Deployment

Pushes to `main` deploy automatically via the GitHub Pages configuration in the repo settings. The hash-based router (`HashRouter`) avoids 404s on deep links without a server-side redirect.
