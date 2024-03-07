const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "jsx-a11y", "react-hooks", "tsdoc", "prettier"],
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
    // react: {
    //   version: react ? "detect" : "17.0.0",
    // },
  },
  rules: {
    "no-console": "warn",
    "no-use-before-define": "warn",

    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],

    "no-restricted-globals": ["error", "isFinite", "isNaN"].concat(
      confusingBrowserGlobals
    ),

    // too many false positives with aliases/root dirs
    "import/no-unresolved": "off",

    curly: "error",

    "object-shorthand": ["error", "always"],
    "no-useless-rename": ["error"],

    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/naming-convention": "off"
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
      rules: {
        // Regla para las variables que sean en camelCase
        // '@typescript-eslint/camelcase': 'on',


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
              "private-instance-method"
            ]
          }
        ],

        "camelcase": "on",
        
        "no-unused-vars": [
          "error",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            varsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],

        '@typescript-eslint/naming-convention': [
          'error',
          {
            // Los nombres de las clases deben ser en PascalCase
            selector: 'class',
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
        ],
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
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

        // I prefer using `interface` over `type = {}`
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],

        // Allow expressions to work with react hooks. Annoying to have to
        // typedef each arrow function in a `useEffect` or `useCallback` when
        // it can be derived.
        // "@typescript-eslint/explicit-function-return-type": [
        //   "error",
        //   {
        //     allowExpressions: true,
        //     // allow FC definitions for React
        //     allowTypedFunctionExpressions: true,
        //   },
        // ],

        // not a big fan of requiring unknown objects to require the index signature
        "@typescript-eslint/ban-types": "off",

        // This is a "better" version of the `noUnusedLocals` and
        // `noUnusedParameters` from the tsconfig.json since it can catch
        // unused vars in rest parameters that weren't meant to be omitted. I
        // must manually rename to be _name so I know it was intentionally
        // omitted
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "warn",
          { ignoreTypeReferences: true },
        ],
      },
    },
    // {
    //   files: ["**/*.js", "**/*.jsx"],
    //   rules: {
    //     "no-unused-vars": [
    //       "error",
    //       {
    //         vars: "all",
    //         varsIgnorePattern: "^_",
    //         args: "after-used",
    //         varsIgnorePattern: "^_",
    //         ignoreRestSiblings: true,
    //       },
    //     ],
    //   },
    // },
  ],
};