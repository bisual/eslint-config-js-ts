# Changelog

## 0.2.0

### Breaking

- Requires **ESLint 9+**.
- Shareable config remains **eslintrc-shaped**; consumers must load it with **FlatCompat** in `eslint.config.js` (intermediate step until a native flat export exists).
- Removed dependency on `eslint-config-airbnb-typescript` (incompatible with ESLint 9 / typescript-eslint 8).

### Behavior: Airbnb replacement

[`airbnb-rules.js`](airbnb-rules.js) is an **intentional curated subset**, not a drop-in of `airbnb-typescript/base`.

**Included:** non-formatting Airbnb best practices that still exist on ESLint 9, including habitual rules such as `prefer-destructuring`, `no-nested-ternary`, `no-restricted-syntax`, `import/no-extraneous-dependencies`, plus TypeScript equivalents where Airbnb used `@typescript-eslint/*`.

**Intentionally omitted (stricter / different tooling elsewhere):**

| Omitted | Why |
| --- | --- |
| Formatting/layout (`indent`, `semi`, `quotes`, spacing, …) | Removed from ESLint 9 core; Prettier owns formatting |
| `import/order`, `import/newline-after-import` | This package uses `simple-import-sort` |
| `no-underscore-dangle` | Conflicts with Bisual private-member `_` naming |

**Bisual overrides in `index.js`** (deliberate product choices vs stock Airbnb): e.g. `no-continue` / `no-plusplus` off, `class-methods-use-this` off, `@typescript-eslint/no-shadow` off, `import/no-unresolved` off.

Expect **different lint output** vs `0.1.x` (not necessarily “more laxo” overall: many Airbnb rules remain; a few style/order rules are covered by Prettier / simple-import-sort / Bisual naming instead).
