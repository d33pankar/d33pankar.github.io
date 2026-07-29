# Progress

> Living status log. Update this as work lands. Newest entries on top.
> Last reviewed: 2026-07-29

## Status at a glance

| Area                         | State          | Notes                                             |
| ---------------------------- | -------------- | ------------------------------------------------- |
| IDE shell (chrome)           | ✅ Done         | TitleBar, ActivityBar, Explorer, Tabs, StatusBar, Terminal, Palette |
| Content sections (6 files)   | ✅ Rendering    | about, experience, education, skills, projects, contact |
| Theming (3 themes)           | ✅ Done         | dracula / github / solarized via CSS vars         |
| Hotkeys + command palette    | ✅ Done         | Cmd/Ctrl+K/P, B, J, \                             |
| Scroll-spy tabs              | ✅ Done         | Active tab syncs to scroll position               |
| Build / Docker / nginx       | ✅ Exists       | Multi-stage Dockerfile + SPA fallback             |
| **Real content in cv.js**    | ✅ Done         | Replaced with Deepankar's real data from resumes  |
| SEO / OpenGraph              | ⬜ Not started  | Only basic title/description via Helmet           |
| Tests                        | ⬜ None          | No runner configured                              |
| Dependency pruning           | ⬜ Not started  | Many unused shadcn/Radix packages                 |
| Deploy / CI                  | ⬜ Not started  | Image builds; no pipeline/domain yet              |

Legend: ✅ done · ⚠️ in progress / needs attention · ⬜ not started

## Known issues

- GitHub URL assumed as `github.com/d33pankar` (matches LinkedIn handle) — needs owner
  confirmation. No X/Twitter, personal site, or booking link yet.
- "Beyond work" section has no personal hobbies yet (only resume-backed threads).
- Stray `apps/web/package.json.bak` and a repo-root `.DS_Store`.
- No automated tests.
- SEO/OpenGraph image not yet added; favicon still the template's generic mark.

## Changelog

### 2026-07-29 (trekking + GitHub fix)
- Read the GitHub profile README (YadavDeepankar) and added a rich "In the mountains"
  trekking section to `beyond.md`: completed treks, adventure milestone (Bir Billing
  paragliding), a checkbox-style bucket list, and the mountains/distributed-systems line.
- Corrected the GitHub link: `github.com/d33pankar` → `github.com/YadavDeepankar` (the
  real handle, confirmed from the README).
- Recorded Instagram (`deepankar_007`), Hashnode blog (`bytesofdeepankar.hashnode.dev`),
  and the DAG portfolio (`yadavdeepankar.github.io`) in `persons_info.md` — pending a
  decision on whether to surface them on this site.
- Verified: lint + build pass.

### 2026-07-29 (scroll-to-section fix)
- Fixed clicking a sidebar file over-scrolling and hiding the section's top. `openFile`
  used `el.offsetTop` (page-relative, included title bar + tabs); now computes the target
  from container-relative bounding rects so the section top lands at the viewport top.
- Scroll-spy switched to the same viewport-coordinate probe for consistency.
- `openFile` now defers the scroll (double rAF) so first-time-opened sections (resume)
  mount before scrolling. Verified: lint + build pass.

### 2026-07-29 (resume viewer)
- Added a `resume.pdf` entry to the sidebar/tabs/palette (not open by default; opens on
  click). New `ResumePdf.jsx` shows the PDF in an iframe with a prominent, sticky
  **Download résumé** button on top; graceful empty state when no PDF exists.
- New PDF auto-detection: `public/Resume/` folder + a Vite plugin
  (`virtual:resume-manifest`) that lists PDFs sorted newest-first by mtime, so the latest
  file is always shown. Dev server hot-reloads on add/replace/delete; production picks up
  new PDFs on the next build.
- Supporting changes: `FILES` gained a `resume` entry with `defaultOpen:false`;
  `use-workspace` honors `defaultOpen`; explorer/tab PDF icon colors; resume view styles.
- Verified: `npm run lint` and `npm run build` both pass; `dist/Resume/` ships.

### 2026-07-29 (themes + larger default font)
- Added 4 themes (now 7 total): Nord, One Dark, Monokai, Tokyo Night — full chrome +
  syntax palettes in `index.css`, registered in `use-theme.jsx`, swatches in `TitleBar`.
- Introduced `--accent` / `--accent-soft` per theme and routed the previously hard-coded
  Dracula purple (active tab border, terminal accents, hover states, palette) through
  them so every theme looks cohesive. Terminal prompt colors now use syntax vars.
- Raised the whole site's default text: editor default font 13 → 15 (range 11–24), and
  bumped all chrome font sizes (+ related bar heights) by ~2 across `index.css`.
- Verified: `npm run lint` and `npm run build` both pass.

### 2026-07-29 (titlebar controls)
- Replaced the click-to-cycle theme button with a proper **theme dropdown** (swatch +
  active check, click-outside/Escape to close) in `TitleBar`.
- Added **text-size controls** (− / value / +) in the titlebar; click the value to reset.
  Backed by a new `hooks/use-font-size.jsx` that persists to localStorage and drives
  `--editor-font-size` / `--editor-line-height` CSS vars; `CodeView` now reads them.
- Added supporting styles in `index.css`. `Cmd/Ctrl+\` still cycles themes.
- Verified: `npm run lint` and `npm run build` both pass.

### 2026-07-29 (content overhaul)
- Replaced all template persona data in `cv.js` with Deepankar Yadav's real data,
  sourced from two resumes and finalized via `persons_info.md` review.
  - Identity, about, currently, stats, experience (EY/Cognizant/TCS), education
    (IIT Patna M.Tech + AKTU B.Tech), certifications/achievements, contact, social, meta.
  - Skills regrouped for a Data Engineer (Cloud & Big Data / Storage & Modeling /
    Programming / Orchestration & DevOps / Tools / Soft skills).
  - Projects converted to client case studies (American Express, eBay, Regeneron,
    Santander, Lloyds); Mastercard excluded per owner.
  - Added a new `beyond.md` section/tab for the "outside work" story.
- Adapted components to the new data shape: `EducationYml` (period/location/notes,
  dropped thesis/gpa), `AboutMd` (dynamic email), `SkillsTs`/`ProjectsTsx`/`ContactSh`
  copy, `Terminal` content, and `index.html` meta/title. Added `BeyondMd.jsx` +
  registered it in `HomePage`.
- Verified: `npm run lint` and `npm run build` both pass.

### 2026-07-29
- Added project documentation set under `docs/`:
  - `discovery.md` — project overview, architecture, current state.
  - `resource.md` — tech stack, key files, commands, references.
  - `dependency_map.md` — module graph + package dependencies.
  - `agents.md` — conventions and guardrails for contributors/agents.
  - `plan.md` — phased roadmap.
  - `progress.md` — this status log.
  - `README.md` — index for the docs.

## How to update this file

When you finish a change:
1. Flip the relevant row in "Status at a glance".
2. Add a dated bullet under "Changelog".
3. Add or clear anything in "Known issues".
