# Plan

> Roadmap to take the VS Code-themed portfolio from "working shell with sample data" to
> "polished, personal, shippable".
> Last reviewed: 2026-07-29

## Guiding principles

- Content is single-sourced in `cv.js`; ship real content before polish.
- Keep the IDE metaphor consistent — every feature should feel like a real editor affordance.
- Every phase ends with `npm run lint` + `npm run build` green.

---

## Phase 0 — Housekeeping (quick wins)

- [ ] Remove `apps/web/package.json.bak`.
- [ ] Add/verify `.gitignore` covers `.DS_Store`, `node_modules/`, `dist/`.
- [ ] Confirm `vite.config.js` `@/` alias and dev port are correct.
- [ ] Add a top-level `README.md` (or link to `docs/README.md`).

## Phase 1 — Real content (highest priority)

- [ ] Reconcile `cv.js`: replace all sample `alexmorgan` data with the owner's real info.
- [ ] `identity`: fix name/handle/role/tagline/location/avatar initials (currently `AM`).
- [ ] `experience`: real roles, companies, dates, highlights.
- [ ] `education` + `certifications`: real entries.
- [ ] `skills`: real stack, grouped by category.
- [ ] `projects`: real projects, repos, links, statuses.
- [ ] `contact` + `social`: real email, real GitHub/LinkedIn/X handles (fix the
      mismatched `linkedin.com/in/d33pankar` vs `in/alexmorgan` label).
- [ ] `meta`: correct repo, version, last-updated.

## Phase 2 — Correctness & polish

- [ ] Verify every virtual file renders its section with accurate syntax highlighting.
- [ ] Check the command palette lists all files/actions and navigation works.
- [ ] Confirm scroll-spy highlights the correct tab while scrolling.
- [ ] Validate all three themes (dracula / github / solarized) across every section.
- [ ] Responsive/mobile pass — the IDE layout should degrade gracefully on small screens.
- [ ] Keyboard shortcuts documented in-app (e.g. a help entry in the palette).

## Phase 3 — SEO, sharing & analytics

- [ ] Fill out `react-helmet` meta: description, canonical, OpenGraph, Twitter cards.
- [ ] Add an OG/social preview image.
- [ ] Set `favicon.svg` and title to the real identity.
- [ ] (Optional) Lightweight, privacy-friendly analytics.

## Phase 4 — Quality & confidence

- [ ] Decide on tests: add Vitest for hooks (`use-workspace` scroll-spy, `use-theme`).
- [ ] (Optional) Playwright smoke test: load page, open palette, switch theme, open a file.
- [ ] Audit dependencies: prune unused shadcn/Radix packages to slim the bundle.
- [ ] Lighthouse pass (performance, a11y, best practices, SEO).

## Phase 5 — Deploy

- [ ] Verify Docker image builds and serves (`docker build` → `docker run`).
- [ ] Choose hosting (static host or the nginx container) and wire a domain.
- [ ] Set up CI: lint + build on push; deploy on main.
- [ ] Post-deploy smoke check on the live URL.

---

## Backlog / ideas

- "Split editor" view to show two sections side by side.
- Minimap in the editor gutter.
- A working integrated terminal that responds to a few fun commands (`whoami`, `ls`).
- Copy-as-JSON / download-resume action from the command palette.
- More themes (Nord, Monokai, One Dark).

## Sequencing note

Phase 1 unblocks everything user-facing and should go first. Phase 0 can run alongside it.
Phases 2–5 are ordered but 3 and 4 can overlap.
