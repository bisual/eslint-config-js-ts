# Changelog

## 0.2.1

### Fixed

- Slimmed [`airbnb-rules.js`](airbnb-rules.js) to match what `eslint-config-airbnb-typescript/base` actually enabled in `0.1.x` (selected `@typescript-eslint/*` remaps + `import/extensions` / `import/no-extraneous-dependencies` + TS file overrides).
- Removed the accidental full airbnb-base surface from early `0.2.0` that flooded VS Code (`prefer-destructuring`, `no-restricted-syntax` / ForOf, `import/prefer-default-export`, `prefer-arrow-callback`, `arrow-body-style`, `import/no-cycle`, etc.).
- Wired those TS `overrides` through [`index.js`](index.js).

**Parity target:** `airbnb-typescript/base` from `0.1.58`, not `eslint-config-airbnb` / `airbnb-base`.

**Still included:** TS remaps (`return-await`, `only-throw-error`, `no-empty-function`, …), import tweaks with `.ts`/`.tsx`, and compiler-covered rule disables for `*.ts`/`*.tsx`.

**Still omitted (unchanged intent):**

| Omitted | Why |
| --- | --- |
| Full airbnb-base (rules listed above) | Never active via `airbnb-typescript/base` in `0.1.x` |
| Formatting/layout (`indent`, `semi`, `quotes`, spacing, …) | Prettier owns formatting |
| `import/order`, `import/newline-after-import` | This package uses `simple-import-sort` |

**Bisual overrides in `index.js`** (unchanged): e.g. `no-continue` / `no-plusplus` off, `class-methods-use-this` off, `@typescript-eslint/no-shadow` off, `import/no-unresolved` off.

## 0.2.0

### Breaking

- Requires **ESLint 9+**.
- Shareable config remains **eslintrc-shaped**; consumers must load it with **FlatCompat** in `eslint.config.js` (intermediate step until a native flat export exists).
- Removed dependency on `eslint-config-airbnb-typescript` (incompatible with ESLint 9 / typescript-eslint 8).
- Replaced Airbnb TypeScript with [`airbnb-rules.js`](airbnb-rules.js).
