# Bisual ESLint Config JS/TS

**Requires ESLint 9+.** Apps still on ESLint 8.x must upgrade.

This package no longer depends on `eslint-config-airbnb-typescript` (incompatible with ESLint 9). It keeps Airbnb-style best practices via a curated local rule set; formatting stays with Prettier.

## Airbnb rules (`airbnb-rules.js`)

[`airbnb-rules.js`](airbnb-rules.js) is a local module with curated Airbnb-style **best-practice** rules that still work on ESLint 9 (and TypeScript equivalents where needed).

- Included: things like `eqeqeq`, `no-eval`, `no-param-reassign`, `prefer-const`, `no-var`, import hygiene, etc.
- Not included: formatting/layout rules removed from ESLint core (`indent`, `semi`, `quotes`, …). Those are handled by Prettier.
- Wired into the main config from [`index.js`](index.js) via `require("./airbnb-rules")` and merged into `rules`.

You normally extend `@bisual/eslint-config-js-ts` and get these rules automatically. You do not need to import `airbnb-rules.js` yourself unless you want to reuse that set alone.

## Installation

### Install Dependencies

```bash
  npm install -D @bisual/eslint-config-js-ts eslint@^9
```

### ESLint Configuration (flat config — ESLint 9)

ESLint 9 uses flat config by default. Load this shareable (eslintrc-style) config with `FlatCompat`:

```bash
  npm install -D @eslint/eslintrc @eslint/js
```

```js
// eslint.config.js
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends("@bisual/eslint-config-js-ts"),
];
```

### Legacy `.eslintrc` (only if you still enable eslintrc)

```json
{
  "extends": ["@bisual/eslint-config-js-ts"]
}
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
