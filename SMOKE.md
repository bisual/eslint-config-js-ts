# Smoke test results (`0.2.0`)

Re-run: **2026-10-06** (local). ESLint 9 + FlatCompat.

## 1) React / TypeScript (minimal fixture + FlatCompat)

**Setup:** `/tmp/eslint-smoke-react` with:

- `eslint@^9.39.5`
- `@bisual/eslint-config-js-ts` via `file:…/eslint-config-js-ts`
- `@eslint/eslintrc` + `@eslint/js`
- `tailwindcss@3` + `tailwind.config.js` (required by `plugin:tailwindcss/recommended`)
- `resolvePluginsRelativeTo` → Bisual package directory

**Command:** `npx eslint src/App.tsx --max-warnings=99999`

| | |
| --- | --- |
| Config load | OK |
| Exit code | `1` (rule violations on dirty sample — expected) |
| Wall time | ~8s |

**Sample file** `src/App.tsx` (deliberately “dirty”):

| Rule | Result |
| --- | --- |
| `prefer-destructuring` | error (Use object destructuring) |
| `no-nested-ternary` | error |
| `import/no-extraneous-dependencies` | error (react in devDependencies) |
| `eqeqeq` | error (`==`) |
| `import/prefer-default-export` | error |
| `unicorn/filename-case` | error |
| `@typescript-eslint/consistent-type-imports` | error |
| `prettier/prettier` | errors (quotes) |
| `no-console` | warning |

**Summary:** 12 problems (11 errors, 1 warning). No config/schema failures.

**Verdict:** FlatCompat + shareable config works; Airbnb-subset rules fire as expected.

## 2) Angular (`wurth-modyf/frontend-modyf`, ESLint 9.39.5)

**Setup:** `file:../../eslint-config-js-ts`, FlatCompat, `resolvePluginsRelativeTo` → Bisual package, `projectService: true` + `tsconfigRootDir` (replaces Bisual’s `parserOptions.project` to avoid hang).

**Command:** `npx eslint src/main.ts src/app/components/main/main.component.ts --max-warnings=99999`

| | |
| --- | --- |
| Config load | OK |
| `@typescript-eslint/only-throw-error` | enabled (`[2]` / error) |
| `projectService` | `true` |
| Exit code | `1` (rule violations — expected) |
| Wall time | ~15s |

**Rule findings:**

| File | Rule |
| --- | --- |
| `main.component.ts` | `simple-import-sort/imports`, `import/prefer-default-export`, `@angular-eslint/prefer-on-push-component-change-detection` |
| `main.ts` | `simple-import-sort/imports`, `arrow-body-style`, `no-restricted-globals`, `unicorn/prefer-top-level-await`, `no-console` |

**Summary:** 9 problems (7 errors, 2 warnings). No config/schema failures; no type-info crash.

### Historical fixes (still relevant)

1. Use `eslint-plugin-tailwindcss@^3.18` in the shareable package (v4 breaks FlatCompat/eslintrc with `Unexpected top-level property "name"`).
2. Prefer `projectService` over stripping `project` so `@typescript-eslint/only-throw-error` can stay on.

**Verdict:** Angular + FlatCompat runs with type-aware `only-throw-error` enabled via `projectService`.

## Notes for reviewers

- Airbnb habitual rules (`prefer-destructuring`, `no-nested-ternary`, `import/no-extraneous-dependencies`, …) confirmed on React smoke.
- Subset vs full Airbnb is **documented** in README + CHANGELOG (intentional omissions only for format / import-order / underscore).
- No `"@bisual/eslint-config-js-ts": "file:"` in **this** package’s `devDependencies` (the Angular app uses `file:` for local testing).
