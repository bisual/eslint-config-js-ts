/**
 * Parity with `eslint-config-airbnb-typescript/base` (what 0.1.58 extended).
 *
 * Important: that package did **not** extend `eslint-config-airbnb` or
 * `eslint-config-airbnb-base`. It only remapped selected core rules to
 * `@typescript-eslint/*` and tweaked a few `import/*` rules for TypeScript.
 *
 * Re-importing the full airbnb-base surface (as early 0.2.0 did) floods
 * projects with rules that were never active in 0.1.58
 * (`prefer-destructuring`, `no-restricted-syntax` / ForOf, `import/prefer-default-export`, …).
 *
 * Formatting remaps from airbnb-typescript (`indent`, `quotes`, `semi`, …) are
 * omitted on purpose: Prettier + `eslint-config-prettier` own those.
 *
 * `naming-convention`, `no-unused-vars`, and `no-use-before-define` are owned by
 * Bisual overrides in `index.js` (same as 0.1.58 after local rules won).
 */
module.exports = {
  rules: {
    // --- TypeScript remaps (airbnb-typescript/lib/shared.js, behavioral only) ---

    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",

    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],

    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",

    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",

    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],

    "no-implied-eval": "off",
    "no-new-func": "off",
    "@typescript-eslint/no-implied-eval": "error",

    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",

    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",

    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",

    // index.js turns this off (Bisual); kept here for parity with airbnb-typescript
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    "no-throw-literal": "off",
    // typescript-eslint v8 rename of `@typescript-eslint/no-throw-literal`
    "@typescript-eslint/only-throw-error": "error",

    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",

    // airbnb-base had `require-await` off; keep the TS twin off too
    "require-await": "off",
    "@typescript-eslint/require-await": "off",

    "no-return-await": "off",
    "@typescript-eslint/return-await": ["error", "in-try-catch"],

    // --- Import tweaks from airbnb-typescript (TS extensions) ---

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**",
          "tests/**",
          "spec/**",
          "**/__tests__/**",
          "**/__mocks__/**",
          "test.{js,jsx,ts,tsx}",
          "test-*.{js,jsx,ts,tsx}",
          "**/*{.,_}{test,spec}.{js,jsx,ts,tsx}",
          "**/jest.config.js",
          "**/jest.setup.js",
          "**/vue.config.js",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
          "**/rollup.config.js",
          "**/rollup.config.*.js",
          "**/gulpfile.js",
          "**/gulpfile.*.js",
          "**/Gruntfile{,.js}",
          "**/protractor.conf.js",
          "**/protractor.conf.*.js",
          "**/karma.conf.js",
          "**/.eslintrc.{js,cjs}",
          "**/eslint.config.{js,cjs,mjs}",
        ],
        optionalDependencies: false,
      },
    ],
  },

  // Same TS overrides as airbnb-typescript/base (compiler / import plugin noise)
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "constructor-super": "off",
        "getter-return": "off",
        "no-const-assign": "off",
        "no-dupe-args": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-symbol": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-undef": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "valid-typeof": "off",
        "import/named": "off",
        "import/no-named-as-default-member": "off",
        "import/no-unresolved": "off",
      },
    },
  ],
};
