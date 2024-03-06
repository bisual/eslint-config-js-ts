module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    "airbnb-typescript/base",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: './tsconfig.json',
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  rules: {
    "quotes": [
      2,
      "double",
      {
        "avoidEscape": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/naming-convention": "off"
  },
};