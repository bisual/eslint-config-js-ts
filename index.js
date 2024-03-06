module.exports = {
  // eslint-configs
  extends: ['airbnb', 'plugin:prettier/recommended'],
  // eslint-plugins
  plugins: ['simple-import-sort'],
  // enabling/disabling/changing level of rules
  rules: {
    'class-methods-use-this': 'off',
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'prettier/prettier': [
      'error',
      // configure Prettier for ESLint
      {
        arrowParens: 'avoid',
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    radix: 'off',
  },
};
