# Bisual eslint PHP

## Instalación

1.Instalar dependencias

Ejecute el siguiente comando en la terminal para instalar las dependencias necesarias:

```bash
  npm install -D @bisual/eslint-config-js-ts eslint
```

2.Configuración de ESLint

Cree un archivo llamado `.eslintrc.json` en la raíz del proyecto y agregue el siguiente contenido:

```json
{
  "extends": ["@bisual/eslint-config-js-ts"]
}
```

3.Configuración de formateo automático

Para habilitar el formateo automático del código al guardar, siga estos pasos:

- Cree una carpeta llamada `.vscode` en la raíz del proyecto.
- Dentro de la carpeta `.vscode`, cree un archivo llamado `settings.json`.
- Agregue el siguiente contenido al archivo `settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["javascript", "typescript", "javascriptreact"]
  // javascriptreact -> para archivos con extensión .jsx o .tsx
}
```

Si no le funciona el formateo automático, puede que necesite instalar la extensión ESLint en Visual Studio Code.
Si no le funciona pruebe a reiniciar Visual Studio Code.
