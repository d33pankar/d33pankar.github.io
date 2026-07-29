# Discovery

> Snapshot of what this project is, how it is built, and its current state.
> Last reviewed: 2026-07-29

## 1. What this is

A personal portfolio website styled as a **VS Code editor**. Instead of the usual
hero/sections layout, the site renders the owner's CV as a set of "open files" inside
a faithful IDE shell: title bar, activity bar, file explorer, editor tabs, a scrollable
editor surface, an integrated terminal, a status bar, and a command palette.

Each portfolio section is presented as a source file with syntax highlighting:

| File shown in the "editor" | Portfolio content            |
| -------------------------- | ---------------------------- |
| `about.md`                 | Bio / intro                  |
| `experience.json`          | Work history                 |
| `education.yml`            | Degrees & certifications     |
| `skills.ts`                | Skills grouped by category   |
| `projects.tsx`             | Side projects                |
| `contact.sh`               | Contact + social links       |

## 2. Repository shape

```
portfolio/
├── apps/
│   ├── package.json            # npm workspaces root (workspaces: apps/*)
│   ├── package-lock.json
│   └── web/                    # the only app today
│       ├── Dockerfile          # node:22 build -> nginx:alpine serve
│       ├── nginx.conf          # SPA fallback
│       ├── index.html
│       ├── vite.config.js
│       ├── tailwind.config.js
│       ├── postcss.config.js
│       ├── eslint.config.js
│       ├── components.json     # shadcn/ui config
│       ├── public/
│       ├── dist/               # build output
│       └── src/
│           ├── main.jsx
│           ├── App.jsx
│           ├── index.css
│           ├── data/cv.js              # single source of all content
│           ├── pages/HomePage.jsx      # the only route
│           ├── hooks/                  # workspace / theme / hotkeys
│           ├── components/ide/         # IDE chrome
│           ├── components/files/       # per-"file" content
│           ├── components/editor/      # CodeView + syntax tokens
│           ├── components/ui/          # shadcn/ui primitives (~55 files)
│           └── lib/utils.js            # cn() helper
```

It is an **npm workspaces monorepo** with a single package (`apps/web`), so it is ready
to grow (e.g. a future `apps/api` or shared `packages/*`) without restructuring.

## 3. Architecture findings

### Rendering model
- `main.jsx` → `App.jsx` mounts providers and the router.
- Provider order: `ThemeProvider` → `WorkspaceProvider` → `Router`.
- A **single route `/`** renders `HomePage.jsx`, which assembles the whole IDE layout.
- `HomePage` maps every open tab id to its content component and stacks them in one
  scrollable surface (`.editor-scroll`). It is effectively a long single page, with the
  IDE chrome giving the illusion of multiple files.

### Content model
- **All portfolio content lives in one module: `src/data/cv.js`.**
  - `cv` — the data object: `identity`, `about`, `currently`, `stats`, `experience`,
    `education`, `certifications`, `skills`, `projects`, `contact`, `social`, `meta`.
  - `FILES` — the manifest describing each virtual file (`id`, `name`, `path`,
    `language`, `icon`). This drives the file explorer, the tabs, and the section order.
- To edit the portfolio, you edit `cv.js`. The UI components are presentation only.

### State (React context)
- `use-workspace.jsx` — open tabs, active file, sidebar/terminal/palette toggles,
  `openFile`/`closeTab`/`reopenAll`, and **scroll-spy** that syncs the active tab to the
  scroll position (with a short lock window after programmatic scrolls).
- `use-theme.jsx` — 3 themes (`dracula`, `github`, `solarized`), persisted to
  `localStorage` under `cv.theme`, applied via `data-theme` on `<html>`.
- `use-hotkeys.jsx` — global shortcuts: `Cmd/Ctrl+K` or `+P` (palette), `+B` (sidebar),
  `+J` (terminal), `+\` (cycle theme), `Esc` (close palette).

### Presentation layer
- `components/editor/CodeView.jsx` — the shared frame every "file" renders through:
  breadcrumbs, line numbers, hover highlight, optional footer.
- `components/editor/tokens.jsx` — tiny span primitives for syntax coloring
  (`K` keyword, `S` string, `N` number, `C` comment, `MdH1`, `MdLink`, etc.). All colors
  are CSS variables so they respond to the active theme.
- `components/files/*` — one component per virtual file; each pulls from `cv` and renders
  "code" lines through `CodeView` + tokens.
- `components/ide/*` — the chrome: `TitleBar`, `ActivityBar`, `FileExplorer`,
  `EditorTabs`, `StatusBar`, `Terminal`, `CommandPalette`.
- `components/ui/*` — shadcn/ui + Radix primitives (large set, mostly unused scaffolding
  that ships with the shadcn setup).

### Theming
- Themes are pure CSS: `data-theme` on `<html>` switches CSS variables consumed across
  the chrome (`--chrome-*`) and syntax layer (`--syntax-*`). No re-render needed.

## 4. Current state

- Core experience is **built and working**: IDE shell, all six content files, theming,
  hotkeys, command palette, scroll-spy tabs.
- Build/deploy path exists: multi-stage `Dockerfile` + `nginx.conf` SPA fallback.
- **Content is still placeholder/mixed.** `cv.js` contains a sample persona ("Alex
  Morgan"-style data) mixed with the owner's real identity (`Deepankar Yadav`,
  `deepankar.exclusive@gmail.com`). Social links and project handles still point at
  the sample `alexmorgan` accounts. This is the main thing to finish.
- No tests, no README, no `.kiro/` steering files.
- A leftover `apps/web/package.json.bak` and a root `.DS_Store` exist.

## 5. Open questions / decisions to confirm

- Is the real content (experience, education, projects, links) ready to replace the
  sample data in `cv.js`?
- Keep the full shadcn/ui `components/ui/*` set, or prune unused primitives to slim the
  bundle?
- Any need for a contact form backend, or are mailto/social links enough?
- Analytics, SEO/OpenGraph images, and a custom domain — in scope?
