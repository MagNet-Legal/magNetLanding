# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — installs dependencies and (via the `prepare` script) installs the husky git hooks. Required one-time step before committing.
- `npm run dev` — start the Vite dev server (port 5173, falls back to the next available port if taken).
- `npm run build` — production build. Outputs to `docs/`, not the default `dist/`, because this site is served via GitHub Pages from `docs/` (see `CNAME`). The `postbuild` script then copies `docs/index.html` to `docs/404.html` so client-side routes resolve correctly on GitHub Pages, which has no server-side rewrite support.
- `npm run preview` — preview the production build locally.
- `npm run lint` — ESLint over the repo (`eslint.config.js`).
- `npm run format` — Prettier write over the repo.
- No test suite is configured in this repo. Should one be added, apply the same test-before-push discipline as `magnet-app-front/CLAUDE.md`'s "Test coverage before opening a PR": new/changed logic should have real test coverage before a PR ships, not added only after a reviewer flags the gap.

## Pre-commit hooks

Husky + lint-staged run ESLint (`--fix --max-warnings 0`) and Prettier on staged `src/**/*.{ts,tsx}` and `src/**/*.{json,md,css}` files, plus a gitleaks secret scan (allowlist in `.gitleaks.toml`), before every commit. gitleaks is a separate binary (`brew install gitleaks`), not an npm package — if it isn't installed, the hook skips the secret scan with a warning instead of blocking the commit. Fix issues the hooks raise rather than bypassing them (e.g. `git commit --no-verify`).

## Impeccable Live — known failure modes

Live has not been configured in this repo yet (`.impeccable/live/` does not
exist), so the first run will report `config_missing` and need one-time setup.

The **generic** Live failure modes — the poll loop dying silently, restarting the
helper server with `live.mjs` (not `live-server.mjs`, which leaves a stale token),
verifying the scaffold target before writing, never chaining the write and the
`--reply`, running Carbonize cleanup before the next poll, and a "does nothing"
style change being a cached stylesheet — are documented in
`magnet-app-front/CLAUDE.md`'s Impeccable Live section and apply here too. All
fail silently; check for them.

**Two hazards specific to this repo:**

- **Never build or commit while the live script is injected.** Live injects a
  `<script src="http://localhost:8400/live.js?token=…">` tag into `index.html`,
  which is the build entry. `npm run build` outputs to `docs/`, which GitHub
  Pages publishes — so building or committing mid-session would ship a localhost
  script tag to the live marketing site. Stop Live (`live-server.mjs stop`, which
  strips the injection) and confirm `index.html` is clean before building,
  committing, or opening a PR.
- **Port 5173 is not guaranteed here.** `npm run dev` falls back to the next free
  port if 5173 is taken (which it will be whenever `magnet-app-front` is also
  running). Confirm the actual dev URL before pointing Live at it. The Live
  helper server is hardcoded to **8400 and is shared** — do not run Live in both
  repos at once. Scaffold auto-matching is also especially unreliable here:
  every route is a flat top-level component with the same utility-class strings
  recurring across pages, so `--text` is often the only disambiguator and
  icon/logo elements have none.

## GitHub workflow

- Work on a feature branch and open the PR early rather than waiting until the work is finished.
- `main` is protected: merging requires one approval from the `MagNetLegal` account, enforced via `.github/CODEOWNERS` (`* @MagNetLegal`). `enforce_admins` is on, so there is no bypass, including for repo admins. `MagNetLegal` should never be the PR author.
- Never merge to `main` without that review.

## Architecture

- Single-page Vite + React 18 + TypeScript + Tailwind app with no nested folder structure under `src/` — every route is a flat top-level component: `HomePage.tsx`, `Press.tsx`, `PricingPlans.tsx`, `PrivacyPolicy.tsx`, `TermsOfService.tsx`, `Newsletter.tsx`, `ClientMatch.tsx`.
- `App.tsx` owns routing via `react-router-dom` and renders **two separate `<Routes>` blocks**: the first switches over all page routes, the second matches only `/` and renders the shared footer. That's how the footer is shown on the home page only, without a shared layout/wrapper component — a route that should also show the footer needs to be added to both blocks.
- `vite.config.ts`'s `base` is conditional on `command`: `'./'` for `build` (needed for the GitHub Pages build served from `docs/`), `'/'` for `dev`.
- The `.bolt/` directory (`config.json`, `prompt`) indicates this project was originally scaffolded from StackBlitz Bolt's `bolt-vite-react-ts` template.
