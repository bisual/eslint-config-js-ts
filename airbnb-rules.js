/**
 * Airbnb-style best-practice rules for ESLint 9+.
 *
 * Goal: replace `eslint-config-airbnb-typescript/base` as closely as practical
 * without depending on abandoned Airbnb shareable configs.
 *
 * Intentionally omitted:
 * - Formatting/layout rules removed from ESLint core (Prettier + eslint-config-prettier).
 * - `import/order` / `import/newline-after-import` (this package uses `simple-import-sort`).
 * - `no-underscore-dangle` (conflicts with Bisual private-member `_` naming convention).
 */
module.exports = {
  // Plugins are declared in index.js; this module only exports rule values.
  rules: {
    // Best practices (airbnb-base/rules/best-practices)
    "array-callback-return": ["error", { allowImplicit: true }],
    "block-scoped-var": "error",
    "class-methods-use-this": ["error", { exceptMethods: [] }],
    "consistent-return": "error",
    "default-case": ["error", { commentPattern: "^no default$" }],
    "default-case-last": "error",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "max-classes-per-file": ["error", 1],
    "no-alert": "warn",
    "no-caller": "error",
    "no-constructor-return": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implied-eval": "off",
    "no-new-func": "off",
    "@typescript-eslint/no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc",
          "accumulator",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "$scope",
          "staticContext",
        ],
      },
    ],
    "no-proto": "error",
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead.",
      },
    ],
    "no-return-assign": ["error", "always"],
    // ESLint core no-return-await is deprecated; use the TS equivalent
    "no-return-await": "off",
    "@typescript-eslint/return-await": ["error", "in-try-catch"],
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "off",
    "@typescript-eslint/only-throw-error": "error",
    "no-unmodified-loop-condition": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
    radix: "error",
    "vars-on-top": "error",
    yoda: "error",

    // Errors (airbnb-base/rules/errors) — non-formatting extras beyond recommended
    "no-await-in-loop": "error",
    "no-promise-executor-return": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable-loop": ["error", { ignore: [] }],
    "no-unsafe-optional-chaining": [
      "error",
      { disallowArithmeticOperators: true },
    ],

    // Variables (airbnb-base/rules/variables)
    "no-label-var": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-undef-init": "error",

    // ES6 (airbnb-base/rules/es6)
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: false },
    ],
    "no-duplicate-imports": "off",
    "no-restricted-exports": [
      "error",
      {
        restrictedNamedExports: ["default", "then"],
      },
    ],
    "no-useless-computed-key": "error",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "symbol-description": "error",

    // Style subset that is NOT formatting (airbnb-base/rules/style)
    "func-names": "warn",
    "new-cap": [
      "error",
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List",
        ],
      },
    ],
    "no-bitwise": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-nested-ternary": "error",
    "no-plusplus": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "ForOfStatement",
        message:
          "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "/"],
        },
        block: {
          exceptions: ["-", "+"],
          markers: ["=", "!", ":", "::"],
          balanced: true,
        },
      },
    ],

    // Imports (airbnb-base/rules/imports) — non-stylistic / non-order
    "import/export": "error",
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
    "import/first": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-cycle": ["error", { maxDepth: Infinity }],
    "import/no-duplicates": "error",
    "import/no-dynamic-require": "error",
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
    "import/no-import-module-exports": ["error", { exceptions: [] }],
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-relative-packages": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": ["error", { commonjs: true }],
    "import/no-webpack-loader-syntax": "error",
    "import/prefer-default-export": "error",
  },
};
