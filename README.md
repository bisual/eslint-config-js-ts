# Bisual ESLint Config JS/TS

## Installation

### Install Dependencies

To get started, install the following dependencies by running this command in your terminal:

```bash
  npm install -D @bisual/eslint-config-js-ts eslint
```

### ESLint Configuration

Create a file named .eslintrc.json at the root of your project and add the following content:

```json
{
  "extends": ["@bisual/eslint-config-js-ts"]
}
```

### Automatic Formatting Configuration

Follow these steps to enable automatic code formatting on save:

1. Create a folder named .vscode in the root of your project.
2. Inside .vscode, create a file named settings.json.
3. Add the following content to settings.json:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["javascript", "typescript", "javascriptreact"]
  // javascriptreact -> para archivos con extensión .jsx o .tsx
}
```

## Angular

If you're working on an Angular project, follow these additional steps:

### Install Dependencies

Run the following commands in your terminal:

```bash
  ng add @angular-eslint/schematics

  npm install -D @bisual/eslint-config-js-ts prettier-eslint eslint-config-prettier eslint-plugin-prettier
```

### ESLint Configuration

Add the following configuration to the .eslintrc.json file:

```json
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "@bisual/eslint-config-js-ts"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    },
    {
      "files": ["*.html"],
      "excludedFiles": ["*inline-template-*.component.html"],
      "extends": ["plugin:prettier/recommended"],
      "rules": {
        "prettier/prettier": ["error", { "parser": "angular" }]
      }
    }
  ]
}
```

### Automatic Formatting Configuration

Add the following to the settings.json file inside the .vscode folder:

- Cree una carpeta llamada `.vscode` en la raíz del proyecto.
- Dentro de la carpeta `.vscode`, cree un archivo llamado `settings.json`.
- Agregue el siguiente contenido al archivo `settings.json`:

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

Make sure to install the [ESLint extension](`https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint`) in Visual Studio Code if you haven't already. If you encounter any issues, try restarting Visual Studio Code.
