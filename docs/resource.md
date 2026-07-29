# Resources

> Tech stack, key files, commands, and external references for the portfolio.
> Last reviewed: 2026-07-29

## 1. Tech stack

| Layer        | Choice                                             |
| ------------ | -------------------------------------------------- |
| Language     | JavaScript (JSX), ES modules                       |
| Framework    | React 18.3                                         |
| Build tool   | Vite 7 (`@vitejs/plugin-react`)                    |
| Routing      | react-router-dom 7 (single `/` route)             |
| Styling      | Tailwind CSS 3.4 + `tailwindcss-animate`, CSS vars |
| UI kit       | shadcn/ui on Radix UI primitives                   |
| Animation    | framer-motion 11                                   |
| Icons        | lucide-react                                       |
| Command menu | cmdk                                               |
| Head/SEO     | react-helmet                                       |
| Forms        | react-hook-form + zod + `@hookform/resolvers`      |
| Toasts       | sonner                                             |
| Lint         | ESLint 9 (react, react-hooks, import plugins)      |
| Deploy       | Docker multi-stage → nginx:alpine                  |

## 2. Key files (start here)

| File                                      | Why it matters                                              |
| ----------------------------------------- | ----------------------------------------------------------- |
| `apps/web/src/data/cv.js`                 | **Single source of all content** + the `FILES` manifest.    |
| `apps/web/src/pages/HomePage.jsx`         | Assembles the IDE layout; maps file ids → content components.|
| `apps/web/src/hooks/use-workspace.jsx`    | Tabs, active file, toggles, scroll-spy.                     |
| `apps/web/src/hooks/use-theme.jsx`        | Theme list, persistence, `data-theme` application.          |
| `apps/web/src/hooks/use-hotkeys.jsx`      | Global keyboard shortcuts.                                  |
| `apps/web/src/components/editor/CodeView.jsx` | Shared render frame for every virtual file.             |
| `apps/web/src/components/editor/tokens.jsx`   | Syntax-highlight span primitives (theme-aware).         |
| `apps/web/src/index.css`                  | Theme CSS variables (`--chrome-*`, `--syntax-*`) + layout.  |
| `apps/web/src/App.jsx`                     | Provider composition + router.                              |

## 3. Directory guide

- `components/ide/*` — IDE chrome: `TitleBar`, `ActivityBar`, `FileExplorer`,
  `EditorTabs`, `StatusBar`, `Terminal`, `CommandPalette`.
- `components/files/*` — one component per virtual file (`AboutMd`, `ExperienceJson`,
  `EducationYml`, `SkillsTs`, `ProjectsTsx`, `ContactSh`).
- `components/editor/*` — `CodeView` + `tokens`.
- `components/ui/*` — shadcn/ui primitives (~55 files, mostly scaffolding).
- `lib/utils.js` — `cn()` class-merge helper (clsx + tailwind-merge).

## 4. Commands

Run from `apps/web/`:

```bash
npm install          # install deps
npm run dev          # dev server on http://localhost:3000
npm run build        # production build to dist/
npm run start        # preview the built app on :3000
npm run lint         # eslint (quiet)
npm run lint:warn    # eslint with warnings
```

Docker:

```bash
docker build -t portfolio apps/web      # multi-stage build -> nginx
docker run -p 8080:80 portfolio         # serve on http://localhost:8080
```

## 5. Config files

| File                          | Purpose                                  |
| ----------------------------- | ---------------------------------------- |
| `apps/web/vite.config.js`     | Vite config + `@` path alias to `src`.   |
| `apps/web/tailwind.config.js` | Tailwind theme/content globs.            |
| `apps/web/postcss.config.js`  | Tailwind + autoprefixer pipeline.        |
| `apps/web/eslint.config.js`   | Lint rules (flat config, ESLint 9).      |
| `apps/web/components.json`    | shadcn/ui generator config.              |
| `apps/web/nginx.conf`         | SPA fallback for the nginx image.        |

## 6. Conventions

- Path alias `@/` → `apps/web/src/`. Import as `@/components/...`, `@/hooks/...`.
- Colors come from **CSS variables**, never hard-coded hex, so theme switching works.
- Content changes go in `cv.js`, not in components.
- File extensions are `.jsx` throughout (no TypeScript despite `skills.ts`/`projects.tsx`
  being *displayed* file names).

## 7. External references

- React — https://react.dev
- Vite — https://vite.dev
- Tailwind CSS — https://tailwindcss.com
- shadcn/ui — https://ui.shadcn.com
- Radix UI — https://www.radix-ui.com
- framer-motion — https://www.framer.com/motion/
- lucide icons — https://lucide.dev
- cmdk — https://cmdk.paco.me
- react-router — https://reactrouter.com

## 8. Housekeeping items

- `apps/web/package.json.bak` — stray backup, safe to remove.
- `.DS_Store` (repo root) — macOS artifact, should be gitignored/removed.
