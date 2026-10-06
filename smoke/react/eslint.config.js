const path = require("node:path");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const bisualDir = path.dirname(
  require.resolve("@bisual/eslint-config-js-ts/package.json")
);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  resolvePluginsRelativeTo: bisualDir,
});

module.exports = [
  ...compat.extends("@bisual/eslint-config-js-ts"),
  {
    settings: {
      react: { version: "18.0" },
      tailwindcss: {
        config: path.join(__dirname, "tailwind.config.js"),
      },
    },
  },
];
