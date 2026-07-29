# Agents Guide

> Working rules for AI agents (and humans) contributing to this repo.
> Last reviewed: 2026-07-29

## 1. What you are working on

A portfolio website styled as a **VS Code editor**. The whole experience is a single
React SPA in `apps/web`. Read `docs/discovery.md` first for the mental model, then this
file for conventions.

**Golden rule:** portfolio content lives in `apps/web/src/data/cv.js`. Presentation lives
in components. Don't mix the two.

## 2. Setup & commands (run from `apps/web/`)

```bash
npm install        # install
npm run dev        # dev server on :3000
npm run build      # production build -> dist/
npm run lint       # eslint --quiet  (run before finishing)
```

- Do **not** start long-running processes (`npm run dev`) inside automated steps; ask the
  user to run them. Prefer `npm run build` and `npm run lint` for verification.
- There is no test runner configured. Do not assume `npm test` works.

## 3. Project conventions

- **Language:** JavaScript + JSX only. Files are `.jsx` even when the *displayed* file
  name is `skills.ts` / `projects.tsx`. Do not introduce TypeScript without asking.
- **Imports:** use the `@/` alias for everything under `src` (e.g. `@/hooks/use-theme.jsx`).
  Keep the explicit `.jsx` extension — existing imports include it.
- **Styling:** Tailwind utility classes. Colors must come from **CSS variables**
  (`var(--chrome-*)`, `var(--syntax-*)`), never hard-coded hex, so theme switching keeps
  working. Add new theme variables in `src/index.css` for all three themes.
- **Class merging:** use `cn()` from `@/lib/utils.js`.
- **Icons:** `lucide-react`.
- **State:** consume the existing contexts (`use-workspace`, `use-theme`) rather than
  adding new global state. Add a new hook only if genuinely needed.

## 4. Editing content

To change any portfolio text, edit `src/data/cv.js`:

- `cv.identity`, `cv.about`, `cv.experience`, `cv.education`, `cv.certifications`,
  `cv.skills`, `cv.projects`, `cv.contact`, `cv.social`, `cv.meta`.
- To add a **new virtual file** (section):
  1. Add an entry to the `FILES` array (`id`, `name`, `path`, `language`, `icon`).
  2. Create `components/files/<Name>.jsx` that renders `cv` data via `CodeView` + tokens.
  3. Register it in the `sections` map in `pages/HomePage.jsx`.
  4. Add its icon color to `fileColors` in `editor/CodeView.jsx` if the ext is new.

> ⚠️ Known content issue: `cv.js` currently mixes the real owner (`Deepankar Yadav`,
> `deepankar.exclusive@gmail.com`) with leftover sample data (an `alexmorgan` persona,
> sample projects, sample social links). When touching content, reconcile toward the real
> owner and remove placeholder handles. Confirm real values with the user before invented
> data.

## 5. Adding syntax highlighting

- Use the span primitives in `editor/tokens.jsx` (`K`, `S`, `N`, `C`, `F`, `T`, `MdH1`,
  `MdLink`, `Quote`, `Indent`, ...). Each maps to a `--syntax-*` variable.
- If you need a new token color, add the CSS variable to **all three** themes in
  `index.css`, then add the primitive in `tokens.jsx`.
- Content in `files/*` is authored as an array of "lines" passed as children to
  `CodeView`; each child becomes one numbered line.

## 6. Guardrails

- **Do not** commit or push unless the user explicitly asks.
- **Do not** echo secrets. There are none expected here, but treat `contact` info and any
  future `.env` with care.
- **Do not** mass-delete the `components/ui/*` set without confirming — pruning unused
  shadcn primitives is welcome but should be a deliberate, reviewed change.
- Keep diffs focused. A content edit shouldn't reformat unrelated components.
- Match the existing terse, single-line JSX style in `HomePage.jsx` and friends where it
  already exists; don't reflow it wholesale.

## 7. Definition of done

- `npm run lint` passes.
- `npm run build` succeeds.
- Theme switching still works (check all three themes if you touched colors/CSS vars).
- No placeholder/sample data reintroduced.
- `docs/progress.md` updated with what changed.

## 8. Map of the codebase

See `docs/dependency_map.md` for the full module graph and `docs/resource.md` for the
key-file table. Quick pointers:

- Layout entry: `pages/HomePage.jsx`
- Content: `data/cv.js`
- Chrome: `components/ide/*`
- Sections: `components/files/*`
- Render frame: `components/editor/CodeView.jsx` + `tokens.jsx`
- State: `hooks/*`
- Theme CSS: `index.css`
