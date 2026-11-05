# Changelog

## 0.2.0

### Breaking

- Requires **ESLint 9+**.
- Shareable config remains **eslintrc-shaped**; consumers must load it with **FlatCompat** in `eslint.config.js` (intermediate step until a native flat export exists).
- Removed dependency on `eslint-config-airbnb-typescript` (incompatible with ESLint 9 / typescript-eslint 8).

### Behavior: Airbnb replacement

[`airbnb-rules.js`](airbnb-rules.js) replaces `eslint-config-airbnb-typescript/base` for ESLint 9.

**Parity target:** what `airbnb-typescript/base` actually enabled in `0.1.x` (selected `@typescript-eslint/*` remaps + `import/extensions` / `import/no-extraneous-dependencies` + TS overrides). It does **not** re-enable the full `eslint-config-airbnb` / `airbnb-base` surface — that was never part of `0.1.x` and caused excessive VS Code noise in early `0.2.0`.

**Included:** TS remaps (`return-await`, `only-throw-error`, `no-empty-function`, …), import tweaks with `.ts`/`.tsx`, and compiler-covered rule disables for `*.ts`/`*.tsx`.

**Intentionally omitted:**

| Omitted | Why |
| --- | --- |
| Full airbnb-base (`prefer-destructuring`, `no-restricted-syntax`, `import/prefer-default-export`, …) | Never active via `airbnb-typescript/base` in `0.1.x` |
| Formatting/layout (`indent`, `semi`, `quotes`, spacing, …) | Prettier owns formatting |
| `import/order`, `import/newline-after-import` | This package uses `simple-import-sort` |

**Bisual overrides in `index.js`** (deliberate product choices): e.g. `no-continue` / `no-plusplus` off, `class-methods-use-this` off, `@typescript-eslint/no-shadow` off, `import/no-unresolved` off.
