# Bisual ESLint Config JS/TS

**Requires ESLint 9+.** Apps still on ESLint 8.x must upgrade.

This package no longer depends on `eslint-config-airbnb-typescript` (incompatible with ESLint 9). Airbnb best practices live in [`airbnb-rules.js`](airbnb-rules.js); formatting stays with Prettier.

## Breaking changes for consumers (`0.2.0`)

This release is **not** a silent drop-in from `0.1.x`. Projects that use this package must adapt.

1. **Upgrade to ESLint 9+** (`eslint@^9`).
2. **Use flat config in the app** (`eslint.config.js`). ESLint 9 defaults to flat config.
3. **Bridge this package with `FlatCompat`** in each consumer (see below). This shareable config is still **eslintrc-shaped** (`index.js` with `extends` / `parser` / `rules`).
4. **Expect different lint results**: Airbnb TypeScript was replaced by [`airbnb-rules.js`](airbnb-rules.js) + Bisual overrides. Re-run lint after upgrading.

### Migration checklist

- [ ] `eslint` is `^9`
- [ ] `@bisual/eslint-config-js-ts` is `^0.2.0`
- [ ] Added `eslint.config.js` that loads this config via `FlatCompat`
- [ ] Retired `.eslintrc*` (or stopped relying on it as the primary config)
- [ ] (Angular) selector / template overrides still work
- [ ] Lint reviewed and green

## Config format (important)

| What this package ships | Format |
| --- | --- |
| [`index.js`](index.js) | **Legacy eslintrc** shareable config |

It is **not** a native flat export yet.

With ESLint 9, each consumer must load it through [`FlatCompat`](https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config) from `@eslint/eslintrc`. That is an **intentional intermediate** step: keep a stable eslintrc shareable config while apps move to ESLint 9.

**Planned follow-up:** publish a **native flat** export from this package (no FlatCompat required in consumers). Until then, FlatCompat in each project is the supported path.

## Airbnb rules (`airbnb-rules.js`)

[`airbnb-rules.js`](airbnb-rules.js) replaces `eslint-config-airbnb-typescript/base` for ESLint 9.

**This is an intentional curated subset, not a drop-in.** Removing Airbnb TypeScript was required for ESLint 9; the replacement keeps Airbnb **best-practice behavior** where practical. See [`CHANGELOG.md`](CHANGELOG.md) for the `0.2.0` behavior note.

### Included (Airbnb-equivalent)

Non-formatting rules from airbnb-base / airbnb-typescript, including the habitual ones called out in review:

- `prefer-destructuring`, `no-nested-ternary`, `no-restricted-syntax`
- `import/no-extraneous-dependencies` (with `.ts` / `.tsx` test patterns)
- `prefer-arrow-callback`, `arrow-body-style`, `no-restricted-exports`
- `no-restricted-properties`, `prefer-regex-literals`, `import/no-cycle`, `import/prefer-default-export`, etc.
- TypeScript stand-ins where Airbnb used `@typescript-eslint/*` (`return-await`, `only-throw-error`, `no-shadow`, …)

### Intentionally omitted (documented)

Linting is **not** a 1:1 clone of old Airbnb; some style/order rules are intentionally elsewhere or dropped:

| Omitted | Why |
| --- | --- |
| Formatting/layout (`indent`, `semi`, `quotes`, spacing, …) | Removed from ESLint 9 core; Prettier + `eslint-config-prettier` own this |
| `import/order`, `import/newline-after-import` | This package uses `simple-import-sort` instead |
| `no-underscore-dangle` | Conflicts with Bisual `naming-convention` requiring `_` on private members |

### Bisual overrides in `index.js`

After merging Airbnb rules, [`index.js`](index.js) still applies Bisual-specific overrides (e.g. `no-continue` / `no-plusplus` off, `class-methods-use-this` off, `@typescript-eslint/no-shadow` off, `import/no-unresolved` off). Those are deliberate product choices, not incomplete Airbnb coverage.

`airbnb-rules.js` exports **rules only**; plugins are declared in `index.js`.

## Installation

### Install Dependencies

```bash
  npm install -D @bisual/eslint-config-js-ts eslint@^9 @eslint/eslintrc @eslint/js
```

### ESLint Configuration (ESLint 9 + FlatCompat)

```js
// eslint.config.js
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.config({
    extends: ["@bisual/eslint-config-js-ts"],
    parserOptions: {
      // Shareable config points at its own tsconfig; override for your app.
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
    },
  }),
];
```

### Automatic Formatting Configuration

Follow these steps to enable automatic code formatting on save:

1. Create a folder named `.vscode` in the root of your project.
2. Inside `.vscode`, create a file named `settings.json`.
3. Add the following content to `settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["javascript", "typescript", "javascriptreact"]
}
```

## Angular

If you're working on an Angular project, follow these additional steps:

### Install Dependencies

```bash
  ng add @angular-eslint/schematics

  npm install -D @bisual/eslint-config-js-ts prettier-eslint eslint-config-prettier eslint-plugin-prettier @eslint/eslintrc @eslint/js
```

`ng add @angular-eslint/schematics` installs `@angular-eslint/template-parser` (and the rest of Angular ESLint). That package is an **optional peer** of this config: required only for Angular template linting, not for JS/TS apps.

### ESLint Configuration (ESLint 9 / `eslint.config.js`)

```js
// eslint.config.js
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    ignores: ["projects/**/*"],
  },
  ...compat
    .config({
      extends: ["@bisual/eslint-config-js-ts"],
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
      },
    })
    .map((config) => ({
      ...config,
      files: ["**/*.ts"],
    })),
  ...compat
    .config({
      extends: ["plugin:@angular-eslint/template/recommended"],
    })
    .map((config) => ({
      ...config,
      files: ["**/*.html"],
    })),
  ...compat
    .config({
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": ["error", { parser: "angular" }],
      },
    })
    .map((config) => ({
      ...config,
      files: ["**/*.html"],
      ignores: ["**/*inline-template-*.component.html"],
    })),
];
```

### Automatic Formatting Configuration

Add the following to `settings.json` inside `.vscode`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["javascript", "typescript"],
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    "editor.formatOnSave": false
  }
}
```

Make sure to install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in Visual Studio Code if you haven't already. If you encounter any issues, try restarting Visual Studio Code.
