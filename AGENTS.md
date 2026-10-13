This file gives AI coding assistants (Claude Code, etc.) and new developers a
fast on-ramp to this repository. Keep it short, factual, and up to date — when
behavior here drifts from the code, update this document in the same PR.

## AI Coding Agent Ground Rules

1. Ask, don't assume. If something is unclear, ask before writing a single line. Never make silent assumptions about intent, architecture, or requirements.

2. Simplest solution first. Always implement the simplest thing that could work. Do not add abstractions or flexibility that weren't explicitly requested.

3. Don't touch unrelated code. If a file or function is not directly part of the current task, do not modify it, even if you think it could be improved.

4. Flag uncertainty explicitly. If you are not confident about an approach or technical detail, say so before proceeding. Confidence without certainty causes more damage than admitting a gap.

## Project Overview

Shopgate Connect **app extension** for the theme-ios11 PWA. On out-of-stock
products it grays out the product image and overlays a configurable "sold out"
badge. It is **frontend-only** — no backend steps, no pipelines. Coverage: PDP,
product lists, product sliders and the favorites list.

## Tech Stack

- React 17 function components + hooks.
- `@shopgate/engage` (theme-ios11 PWA platform, 7.31 line) — portals, the
  `useProductListEntry` hook, selectors (`getProductStock`), `makeStyles`
  (`@shopgate/engage/styles`).
- `react-redux` (`useSelector`) + `reselect` for the show/hide decision.
- ESLint via `@shopgate/eslint-config`.
- No TypeScript, no backend, no CI config in the repo.

## Common Commands

Run from `frontend/`:
- Install dev deps (for linting): `npm install`
- Lint: `npm run lint`

There is no test or build script in this repo. The extension is built and run
through the surrounding **Shopgate Platform SDK** project, not from here — e.g.
from the SDK project root: `sgconnect extension attach
@shopgate-project/out-of-stock-badges` then `sgconnect frontend start` (verify
before use; those commands act on the sandbox app).

## Repository Structure

Map of the non-obvious wiring (not a folder listing):

- `extension-config.json` — manifest. `components[]` registers the single
  portal; `configuration` declares the admin settings (`textColor`, `bgColor`,
  `badgeText`, `hideBadge`), all `destination: frontend`.
- `frontend/portals/ComponentProductImage/` — registered to the portal
  `component.product-image`, which wraps **every** engage `ProductImage` (PDP,
  category/search grids, sliders, favorites, liveshopping, …). The product comes
  from `useProductListEntry()`: every product surface wraps its items in a
  `ProductListEntryProvider`, and on the PDP that entry is already the selected
  variant (`variantId || productId`).
- `frontend/components/Badge/` — presentational. Grays the image
  (`opacity: 0.5`) and overlays the badge with `config.badgeText`.
- `frontend/selectors/index.js` — `showBadge` (reselect) from `getProductStock`:
  out of stock = `ignoreQuantity === false && quantity <= 0`.
- Config is read via `import config from '../../config.json'` (generated, git-ignored).

## Internal Knowledge Base

Additional internal documentation may be available in the Knowledge Base:

https://gitlab.localdev.cc/internal/knowledge-base

Future AI coding assistants and developers should check this Knowledge Base when they need context about cross-service dependencies, shared platform conventions, infrastructure, deployment, authentication/authorization, internal libraries, or service contracts.

Do not copy Knowledge Base content into this file. Keep AGENTS.md focused on this repository.

## Local Development Notes

- `frontend/config.json` is **generated** (git-ignored) from the `configuration`
  block. Until a merchant sets values in Merchant Admin, the `default` values
  from `extension-config.json` apply. It only exists after the frontend has been
  started once with the extension attached.

## Testing Notes

No automated tests are present. If you add tests, use the org setup
(`@shopgate/pwa-unit-test` + a one-line `frontend/jest.config.js`) and add a
`test` script — do not add a `jest` script or a local babel config without tests.

## Project-Specific Pitfalls

- Only `component.product-image` is used. Do not add `product-item.image` back:
  it nests around `ProductImage` on grid cards and would draw a second badge.
  Known gap: the Products widget in **list** layout (engage `ProductList` item)
  renders a plain `Image` without that portal, so it shows no badge.
- Because the portal is global, `ComponentProductImage` skips
  `productListType === 'cart'` — the theme's cart page wraps its items in
  `ProductListTypeProvider type="cart"`. Removing that check would make
  out-of-stock badges appear on cart thumbnails.
- Badge size scales with the image width (thumbnails are 80–120 px in favorites,
  much wider on the PDP): font size uses container query units (`cqw`) with a
  `@supports` fallback, and long words may wrap. `containerType` sits on the
  absolutely positioned overlay on purpose — on the wrapper it would collapse
  parents that size themselves by their content.
- Parent/variant products: there is no aggregate variant stock, and parents
  usually carry `ignoreQuantity: true` → no badge on the parent. The PDP reflects
  the **selected variant's** stock.
- Config must be a **default** import from `config.json` (the ESLint config
  forbids named JSON imports). Never commit the generated `frontend/config.json`.
  `frontend/.eslintrc` tells `import/no-unresolved` to ignore `config.json`, so
  lint is clean with and without the generated file. Do **not** use an
  `eslint-disable` comment instead — once the file exists it fails as an unused
  directive.
- The extension `id` has **no** `ext-` prefix (only the repo is `ext-...`); keep
  `frontend/package.json` `name` identical to the manifest `id`.
- `CHANGELOG.md` lists officially released versions only.

## Editing Guidelines for AI Agents

- Do not commit `frontend/config.json` (generated).
- Follow the Shopgate PWA conventions and reuse existing `@shopgate/*` components,
  hooks and selectors before writing new ones.
- Keep the extension merchant-agnostic: no hardcoded branding, keep wording generic.
