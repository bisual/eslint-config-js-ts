# Smoke test results (`0.2.0`)

> **Pegar en el PR** (abajo: bloque listo). Validado 2026-10-06.

---

## Texto para el PR

### Smoke tests (ESLint 9 + FlatCompat)

Salto grande (ESLint 8→9, typescript-eslint 7→8, react-hooks 5). Validación:

| App | Tipo | Cómo |
| --- | --- | --- |
| React/TS | Fixture reproducible en el repo (`smoke/react`) | `npm run smoke:react` |
| Angular | App real `wurth-modyf/frontend-modyf` (ESLint 9.39.5, FlatCompat, `file:` → este paquete) | `npx eslint src/main.ts src/app/components/main/main.component.ts` |

#### Errores de config vs reglas nuevas

| | React (`smoke/react`) | Angular (`frontend-modyf`) |
| --- | --- | --- |
| **Errores de config** (schema, plugin missing, type-info crash, hang) | **Ninguno** | **Ninguno** |
| **Carga FlatCompat** | OK | OK (`projectService: true`, `only-throw-error` = error) |
| **Exit code** | `1` (violaciones de reglas en sample sucio — esperado) | `1` (violaciones de reglas — esperado) |

**React — reglas nuevas / Airbnb-subset que disparan** (sample a propósito):

```text
prefer-destructuring          error
no-nested-ternary             error
eqeqeq                        error
import/prefer-default-export  error
@typescript-eslint/consistent-type-imports  error
no-console                    warning
```

**Angular — hallazgos de reglas** (no config):

```text
main.component.ts
  simple-import-sort/imports
  import/prefer-default-export
  @angular-eslint/prefer-on-push-component-change-detection

main.ts
  simple-import-sort/imports
  arrow-body-style
  no-restricted-globals
  unicorn/prefer-top-level-await
  no-console
```

**Conclusión:** no hay fallos de carga de la shareable config. Lo que aparece son reglas (Airbnb-subset + Bisual + Angular). Detalle completo en este archivo.

---

## Detalle

### 1) React / TypeScript — `smoke/react`

App mínima React+TS con ESLint 9 + FlatCompat, versionada en el repo (no hay otra app React de producto a mano que consuma este paquete).

```bash
npm run smoke:react
```

- Config: [`smoke/react/eslint.config.js`](smoke/react/eslint.config.js)
- Sample sucio: [`smoke/react/src/app.tsx`](smoke/react/src/app.tsx)

### 2) Angular — `frontend-modyf`

- FlatCompat + `resolvePluginsRelativeTo` al paquete Bisual
- `projectService: true` (evita hang de `parserOptions.project` legacy)
- `@typescript-eslint/only-throw-error` **enabled**

### Fixes de config descubiertos en smoke (ya aplicados)

1. `eslint-plugin-tailwindcss@^3.18` en dependencies del paquete (v4 rompe FlatCompat/eslintrc).
2. **React:** en `smoke/react/eslint.config.js`, `compat.config` con `parserOptions.project: ./tsconfig.json` y `tsconfigRootDir` del fixture (no el `tsconfig` del paquete Bisual). **Angular:** `projectService: true` + `tsconfigRootDir` (app real).
3. **React smoke:** `prettier/prettier` desactivado en el fixture — `eslint-plugin-prettier` busca config de Prettier hacia arriba y con enlace `file:` puede colgar; no afecta al resto de reglas del smoke.
4. `npm run smoke:react` instala dependencias en la **raíz del paquete** antes del fixture (`file:../..` necesita `node_modules` del shareable config).
