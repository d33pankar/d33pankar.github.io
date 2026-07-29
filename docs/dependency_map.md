# Dependency Map

> How the modules wire together, plus the external package dependencies.
> Last reviewed: 2026-07-29

## 1. Runtime module graph

```
index.html
  └── src/main.jsx
        └── App.jsx
              ├── ThemeProvider            (hooks/use-theme.jsx)
              │     └── WorkspaceProvider   (hooks/use-workspace.jsx)  ← reads data/cv.js (FILES)
              │           └── Router (react-router-dom)
              │                 └── "/" → pages/HomePage.jsx
              │
              └── HomePage.jsx
                    ├── useWorkspace()      ← scrollerRef, openTabs
                    ├── useHotkeys()        ← use-theme + use-workspace
                    ├── ide/TitleBar
                    ├── ide/ActivityBar
                    ├── ide/FileExplorer     ← FILES manifest, openFile()
                    ├── ide/EditorTabs       ← openTabs, activeId, closeTab()
                    ├── ide/StatusBar
                    ├── ide/Terminal
                    ├── ide/CommandPalette   ← FILES, theme, toggles (cmdk)
                    └── editor-scroll
                          └── for each open tab → files/<Component>
                                ├── files/AboutMd        ← cv.about
                                ├── files/ExperienceJson ← cv.experience
                                ├── files/EducationYml   ← cv.education / certifications
                                ├── files/SkillsTs       ← cv.skills
                                ├── files/ProjectsTsx    ← cv.projects
                                └── files/ContactSh      ← cv.contact / social
                                      └── each renders through:
                                            editor/CodeView  (frame)
                                            editor/tokens    (syntax spans)
```

## 2. Core dependency rules

- **`data/cv.js` is the root data node.** `FILES` is consumed by `use-workspace`,
  `FileExplorer`, `EditorTabs`, `CommandPalette`, and `HomePage`. `cv` is consumed by
  every `files/*` component and the `Helmet` title in `HomePage`.
- **`editor/CodeView.jsx` + `editor/tokens.jsx`** are shared leaf modules; every
  `files/*` component depends on them, they depend on nothing app-specific (just React
  and lucide icons).
- **Contexts flow one way.** `use-theme` and `use-workspace` are providers at the top;
  everything below consumes them via hooks. `use-hotkeys` composes both.
- **Theme has no JS dependents for styling** — it only sets `data-theme`; the visual
  wiring is CSS variables in `index.css`.

## 3. Where content flows

```
data/cv.js
  ├── FILES ──► use-workspace ──► FileExplorer / EditorTabs / CommandPalette / HomePage
  └── cv ─────► files/* (AboutMd, ExperienceJson, EducationYml, SkillsTs, ProjectsTsx, ContactSh)
                     └──► editor/CodeView + editor/tokens ──► DOM (themed via CSS vars)
```

To change portfolio content, touch **only** `data/cv.js`. To change *presentation*,
touch `files/*`, `editor/*`, or `index.css`.

## 4. External packages (from apps/web/package.json)

### Production — actively used
| Package                              | Role                                  |
| ------------------------------------ | ------------------------------------- |
| react, react-dom `^18.3.1`           | UI runtime                            |
| react-router-dom `^7.13.0`           | Routing (single route)                |
| react-helmet `^6.1.0`                | Document title / meta                 |
| lucide-react `^0.469.0`              | Icons throughout the chrome           |
| cmdk `^1.1.1`                        | Command palette                       |
| framer-motion `^11.15.0`             | Animations                            |
| clsx `^2.1.1` + tailwind-merge `^2.6`| `cn()` class merging                  |
| class-variance-authority `^0.7.1`    | Variant styling (shadcn)              |
| tailwindcss-animate `^1.0.7`         | Animation utilities                   |

### Production — shadcn/ui scaffolding (available, largely unused)
Radix UI primitives (`@radix-ui/react-*`: accordion, dialog, dropdown-menu, popover,
select, tabs, tooltip, toast, and ~20 more), plus `sonner`, `vaul`, `input-otp`,
`embla-carousel-react`, `react-day-picker`, `date-fns`, `recharts`,
`react-resizable-panels`, `react-hook-form`, `zod`, `@hookform/resolvers`,
`next-themes`. These back the `components/ui/*` set and are candidates for pruning.

### Dev / build
| Package                                              | Role                     |
| ---------------------------------------------------- | ------------------------ |
| vite `^7.3.1`, `@vitejs/plugin-react` `^5.1.4`       | Build + dev server       |
| tailwindcss `^3.4.17`, postcss `^8.4`, autoprefixer  | Styling pipeline         |
| eslint `^9.39.4` + react/react-hooks/import plugins  | Linting                  |
| eslint-import-resolver-alias                         | Resolve `@/` in lint     |
| terser `^5.37`                                       | Minification             |
| @babel/parser·traverse·generator·types               | Tooling (codegen/AST)    |
| @types/node, @types/react, @types/react-dom          | Editor type hints        |

## 5. Observations / risks

- **Heavy dependency surface vs. usage.** Most Radix/shadcn packages ship but are not
  imported by the IDE experience. Pruning would cut install size and bundle weight.
- **No test dependencies.** No Vitest/Playwright despite being listed as skills in
  content. Add if regression safety becomes a concern.
- **Single point of change** (`cv.js`) is a strength — low coupling for content edits.
- **Version alignment:** React 18 (not 19) with react-router 7 and Vite 7 — a modern but
  intentionally conservative combo. Keep them in step when upgrading.
