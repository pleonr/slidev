# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A pnpm workspace holding multiple independent [Slidev](https://sli.dev) presentation decks (`slides/*`), managed collectively via [`slidev-workspace`](https://github.com/leochiu-a/slidev-workspace). Each deck under `slides/` is its own Slidev project (own `package.json`, own `pnpm-lock.yaml`), built to static HTML and deployed together to GitHub Pages behind a workspace preview app that lists/searches all decks.

Content is course material (in Portuguese) for classes taught by the repo owner — deck names correspond to subjects (e.g. `api`, `javascript`, `linux`, `linuxHpc`, `css`, `html`, `git`, `welcome`, `brief`, `microservicos`, `sistemasdistribuidos`). Several decks (`algoritmos`, `auth`, `frontend`, `nodejs`, `orm`, `pagamentos`, `poo`, `solid`, `ux`) exist as drafts under `slides/` but are excluded from the active workspace — see the note on drafts below.

## Commands

Run from the repo root (workspace-level, operates on all decks via `slidev-workspace`):

```bash
pnpm install       # install everything (root + all slides/* packages)
pnpm preview       # slidev-workspace preview (alias of its "dev" command) — launches the workspace preview UI
pnpm build         # slidev-workspace build — builds the preview app + all non-draft decks into dist/
pnpm build <name>  # build only specific deck(s), e.g. `pnpm build api javascript`
pnpm export-og     # slidev-workspace export-og — regenerates og-image.png for every deck (uses Playwright/Chromium)
```

Note: the root `package.json` has no `dev` script (only `preview`); `pnpm dev` only exists inside individual deck directories.

Run from inside a single deck (`slides/<name>/`) to work on just that deck:

```bash
pnpm dev           # slidev --open — dev server at http://localhost:3030 for this deck only
pnpm build         # slidev build — builds this deck alone
pnpm export        # slidev export — exports to PDF (per each deck's `export:` frontmatter config)
```

There is no lint or test suite in this repo.

## Architecture

- **Workspace root** (`slidev-workspace.yaml`, `pnpm-workspace.yaml`): defines `baseUrl`, the hero/sidebar text shown in the preview app, and that packages live under `slides/**`. `pnpm-workspace.yaml` also pins a `catalog:` of shared versions (`vue`, `@slidev/cli`, themes) that individual deck `package.json` files can reference.
- **Each deck** (`slides/<name>/`) is a self-contained Slidev project: `slides.md` (entry deck, YAML frontmatter + markdown slides separated by `---`), plus optional `components/` (Vue components used in slides), `pages/` (sub-decks included via `src: ./file.md` frontmatter, letting a long deck be split across files), `snippets/` (code snippets embedded into slides), `public/` (static assets), and its own `netlify.toml`/`vercel.json` (present for historical reasons — actual deployment is via GitHub Pages, not Netlify/Vercel).
- **Shared cover slide**: `slides/cover/cover.md` is a single title-slide template (author bio, social links, `image-right` layout) referenced by nearly every deck's `slides.md` via `src: ../cover/cover.md` as the first slide. Edit it once to change the intro slide across all decks.
- **Draft decks**: `algoritmos`, `auth`, `frontend`, `nodejs`, `orm`, `pagamentos`, `poo`, `solid`, `ux` live under `slides/` but are listed as exclusions in both `pnpm-workspace.yaml` (`packages:`, via `!slides/<name>`) and `slidev-workspace.yaml` (`exclude:`). They're not pnpm workspace members and are skipped by dev/build/preview/export-og — treat them as in-progress content, not dead code. Removing a deck from draft status means deleting it from both exclusion lists.
- **Deployment**: `.github/workflows/*` builds the whole workspace (`pnpm build`) with Playwright/Chromium installed (needed for `export`/OG-image generation) and publishes `dist/` to GitHub Pages on push to `main`. `dist/` and `_gh-pages/` at the repo root are build/deploy artifacts, not source — don't hand-edit them.
- **pnpm quirks**: `.npmrc` sets `shamefully-hoist=true` and `auto-install-peers=true`, required for Slidev's dependency resolution across the workspace. `allowBuilds` in `pnpm-workspace.yaml` (`esbuild`, `playwright-chromium`, `vue-demi` set to `false`) skips their postinstall build steps — this replaced the old `pnpm.neverBuiltDependencies` field in `package.json` under pnpm v11; don't reintroduce that field alongside `allowBuilds` or pnpm throws `ERR_PNPM_CONFIG_CONFLICT_BUILT_DEPENDENCIES`. If a deck's install/build breaks, check that its own `pnpm-lock.yaml` is in sync with its `package.json` — deck-level lockfile drift has been the recurring cause of build fixes in this repo's history.

## Conventions when adding/editing a deck

- New decks go under `slides/<name>/` with a `package.json` matching the pattern in existing decks (`slidev build` / `slidev --open` / `slidev export` scripts, `@slidev/cli`, `@slidev/theme-default`, `@slidev/theme-seriph`, `vue` as deps — versions from the workspace `catalog:` where possible).
- Start `slides.md` with `src: ../cover/cover.md` as the first slide unless intentionally deviating from the shared intro.
- Content is written in Portuguese to match the rest of the corpus.
