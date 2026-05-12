# El Descorche

Landing page estática y minimal para **El Descorche**, construida con Next.js, React y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Build estático

```bash
npm run build
```

El proyecto usa `output: 'export'`, por lo que Next.js genera una versión estática en `out/`.

## Deploy

### Vercel

Importa el repositorio en Vercel y usa la configuración por defecto. El sitio no requiere variables de entorno.

### GitHub Pages

Este repositorio incluye un workflow en `.github/workflows/deploy.yml` que construye y publica el sitio en GitHub Pages cuando se hace push a `main`.

En GitHub, confirma que **Settings → Pages → Build and deployment → Source** esté configurado como **GitHub Actions**.
