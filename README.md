# pedrovcunha.github.io

Personal bio site. React + TypeScript + Vite, deployed to GitHub Pages via GitHub Actions.

## Stack

- **React 19 + TypeScript** — component per section, content data separated from markup in `src/data/`
- **Vite** — dev server and build
- **Plain CSS** (`src/index.css`) — design tokens as CSS custom properties, no framework
- **GitHub Actions** (`.github/workflows/deploy.yml`) — builds and deploys to Pages on every push to `main`

## Local development

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  components/   one component per page section (Hero, Engineering, Experience, ...)
  data/         content arrays (stats, career changelog) kept separate from JSX
  hooks/        useReveal — scroll-in animation, visible-by-default if JS fails
  index.css     all design tokens + styles
public/
  assets/       headshot.jpg
  favicon.svg
```

## Deploying (one-time setup)

This repo is meant to live at `github.com/pedrovcunha/pedrovcunha.github.io` so it serves at
the root domain. Steps to go live:

1. Push this repo to `pedrovcunha/pedrovcunha.github.io` on GitHub (must be that exact repo
   name for a user-page root domain).
2. In the repo, go to **Settings -> Pages**, and under **Build and deployment -> Source**,
   select **GitHub Actions** (not "Deploy from a branch").
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys
   automatically. Check the **Actions** tab to watch it run.
4. After the first successful run, the site is live at `https://pedrovcunha.github.io`.

Every subsequent push to `main` redeploys automatically — no manual build/upload step.

## Known open items

- The Showcase section currently reads "Live demo coming soon" — the existing 3D graph
  project still needs to be migrated in (or rebuilt) and linked once it has a real home.
- Fonts (Fraunces, Work Sans, JetBrains Mono) load from Google Fonts at runtime.
