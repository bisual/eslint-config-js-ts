# Bisual eslint

## Instalación

1.Instalar dependencias
Ejecute el siguiente comando en la terminal para instalar las dependencias necesarias:

```bash
  npm install -D @bisual/eslint-config eslint prettier
```

2.Configuración de ESLint
Cree un archivo llamado `.eslintrc.json` en la raíz del proyecto y agregue el siguiente contenido:

```json
{
  "extends": ["@bisual/eslint-config"]
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
  "eslint.validate": ["javascript", "javascriptreact", "typescript"]
}
```

Por último reinicie Visual Studio Code.
