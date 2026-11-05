# Bisual ESLint Config JS/TS

**Requires ESLint 9+.** Apps still on ESLint 8.x must upgrade.

This package no longer depends on `eslint-config-airbnb-typescript` (incompatible with ESLint 9). [`airbnb-rules.js`](airbnb-rules.js) mirrors what `airbnb-typescript/base` actually enabled in `0.1.x` (TS remaps + a few `import/*` tweaks) — **not** the full `eslint-config-airbnb` / `airbnb-base` surface. Formatting stays with Prettier.

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

**Parity target is `airbnb-typescript/base`, not `eslint-config-airbnb`.** In `0.1.x` this package extended `airbnb-typescript/base`, which never pulled in the full airbnb-base rule set. Early `0.2.0` mistakenly re-enabled many of those rules and flooded VS Code; the file is now slimmed back to that historical surface.

### Included (parity with `airbnb-typescript/base`)

- TypeScript remaps: `default-param-last`, `dot-notation`, `no-array-constructor`, `no-dupe-class-members`, `no-empty-function`, `no-implied-eval`, `no-loss-of-precision`, `no-loop-func`, `no-redeclare`, `no-shadow`, `only-throw-error` (v8 name for `no-throw-literal`), `no-unused-expressions`, `no-useless-constructor`, `return-await`
- Import tweaks: `import/extensions` (with `.ts` / `.tsx`), `import/no-extraneous-dependencies` (with TS test patterns)
- TS file overrides that turn off rules already covered by the TypeScript compiler / import plugin

### Intentionally omitted

| Omitted | Why |
| --- | --- |
| Full airbnb-base (`prefer-destructuring`, `no-restricted-syntax` / ForOf, `import/prefer-default-export`, `prefer-arrow-callback`, …) | Never enabled by `airbnb-typescript/base` in `0.1.x` |
| Formatting/layout (`indent`, `semi`, `quotes`, spacing, …) | Prettier + `eslint-config-prettier` |
| `import/order`, `import/newline-after-import` | This package uses `simple-import-sort` |
| `naming-convention`, `no-unused-vars`, `no-use-before-define` | Owned by Bisual overrides in `index.js` |

### Bisual overrides in `index.js`

[`index.js`](index.js) still applies Bisual-specific rules/overrides (e.g. `no-continue` / `no-plusplus` off, `class-methods-use-this` off, `@typescript-eslint/no-shadow` off, `import/no-unresolved` off, `max-classes-per-file`, `no-await-in-loop`). Those are deliberate product choices.

`airbnb-rules.js` exports **rules + TS overrides**; plugins are declared in `index.js`.

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
