# Portfolio Docs

Documentation and planning for the **VS Code-themed portfolio** website.
The app itself lives in [`../apps/web`](../apps/web).

## Index

| Doc                                    | What's inside                                              |
| -------------------------------------- | ---------------------------------------------------------- |
| [discovery.md](./discovery.md)         | What the project is, architecture, and current state.      |
| [resource.md](./resource.md)           | Tech stack, key files, commands, config, external links.   |
| [dependency_map.md](./dependency_map.md) | Module graph + external package dependencies.            |
| [agents.md](./agents.md)               | Conventions and guardrails for contributors and AI agents. |
| [plan.md](./plan.md)                   | Phased roadmap to ship.                                    |
| [progress.md](./progress.md)           | Living status log and changelog.                           |

## TL;DR

- **Stack:** React 18 + Vite 7 + Tailwind + shadcn/ui, single-page SPA in `apps/web`.
- **Metaphor:** the site looks like a VS Code editor; each CV section is an "open file".
- **Content:** all portfolio content is single-sourced in
  [`apps/web/src/data/cv.js`](../apps/web/src/data/cv.js).
- **Run it:** `cd apps/web && npm install && npm run dev` → http://localhost:3000

## Suggested reading order

1. `discovery.md` — get the mental model.
2. `agents.md` — learn the rules before editing.
3. `resource.md` / `dependency_map.md` — find your way around.
4. `plan.md` / `progress.md` — see what's next and what's done.

## Where to start working

Most tasks are content edits in `cv.js`. See `plan.md` Phase 1 for the top priority:
replacing leftover sample data with the owner's real information.
