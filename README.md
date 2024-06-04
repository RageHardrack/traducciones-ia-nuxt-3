# Traductor de artículos científicos usando IA a través de la API de Dify

## Stack

- pnpm
- marked
- Nuxt 3
  - Nuxt UI
  - TailwindCSS
  - Nuxt Icons

## Variables de Entorno

| Nombre              | Descripción                                                                              | Requerido |
| ------------------- | ---------------------------------------------------------------------------------------- | --------- |
| `DIFY_API_KEY`      | API Key para acceder a la API de Dify                                                    | Si        |
| `DIFY_BASE_URL`     | URL Base para conectarse vía http a la API de Dify                                       | Si        |
| `DIFY_PROJECT_NAME` | Nombre del proyecto en el cual se ha configurado el LLM, la variables a usar y el modelo | Si        |

## Setup

Instalar las dependencias

```bash
# pnpm
pnpm install
```

## Development Server

Levantar servidor de desarrollo en: `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Construir la aplicación para Producción:

```bash
# pnpm
pnpm run build
```
