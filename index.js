const confusingBrowserGlobals = require("confusing-browser-globals");
const airbnbSpirit = require("./airbnb-rules");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    // https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs
    "plugin:unicorn/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "react-hooks",
    "tsdoc",
    "prettier",
    "simple-import-sort",
    "unicorn",
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    ...airbnbSpirit.rules,

    "no-console": "warn",

    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],

    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { overrides: { constructors: "no-public" } },
    ],
    "func-names": ["warn", "as-needed"],
    "no-restricted-globals": ["error", "isFinite", "isNaN"].concat(
      confusingBrowserGlobals
    ),
    // TypeScript's `!` non-null assertion operator asserts to the type system that an expression is non-nullable, as in not null or undefined
    "@typescript-eslint/no-non-null-assertion": "error",
    "class-methods-use-this": "off",
    // Solo se puede tener una clase por archivo
    "max-classes-per-file": ["error", 1],
    // No se pueden usar funciones asíncronas dentro de un bucle
    "no-await-in-loop": "error",
    // Poder utilizar el `continue` en los bucles
    "no-continue": "off",
    // Poder hacer `++` y `--`
    "no-plusplus": "off",
    // too many false positives with aliases/root dirs
    "import/no-unresolved": "off",

    curly: "error",

    "object-shorthand": ["error", "always"],
    "no-useless-rename": ["error"],

    // Override Airbnb spirit default: allow shadowing in this config
    "@typescript-eslint/no-shadow": "off",

    // Regla para el orden de los miembros en las clases
    // Atributos → Constructor → Public → Protected → Private
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          // Atributos
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          // Constructor
          "constructor",
          // Métodos públicos
          "public-instance-method",
          // Métodos protegidos
          "protected-instance-method",
          // Métodos privados
          "private-instance-method",
        ],
      },
    ],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],

    "@typescript-eslint/naming-convention": [
      "error",
      {
        // Los nombres de las clases deben ser en PascalCase
        selector: "class",
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      // las variables en camelCase
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      // las variables privadas en camelCase con un guión bajo al principio
      {
        selector: "memberLike",
        format: ["camelCase"],
        leadingUnderscore: "forbid",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],

    // I want correct tsdoc syntax
    "tsdoc/syntax": "warn",

    "react/prop-types": "off",

    // have to disable since it can report incorrect errors
    "no-empty-function": "off",

    // I prefer shorthand syntax
    "@typescript-eslint/array-type": ["error", { default: "array" }],

    // ban-types was removed in typescript-eslint v8; keep empty object types allowed
    "@typescript-eslint/no-empty-object-type": "off",

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",

    // Easy autofixable import sorting.
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
