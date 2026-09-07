// @ts-check
import { defineConfig } from 'astro/config';

/**
 * URL del sitio.
 * PENDIENTE: aún no me diste el dominio real de GarChéz Boutique.
 * Mientras tanto se toma de la variable de entorno SITE_URL (configúrala en
 * Cloudflare Pages > Settings > Environment variables) y si no existe se usa
 * la ruta relativa. NO inventé ningún dominio.
 */
const SITE_URL = process.env.SITE_URL || undefined;

export default defineConfig({
  // Si SITE_URL no está definido, Astro simplemente omite las URLs absolutas.
  site: SITE_URL,

  // Catálogo estático: compatible con src/content.config.ts (content collections)
  // y con las stores de nanostores, que corren en el cliente.
  output: 'static',

  // Carpeta de salida esperada por Cloudflare Pages.
  outDir: './dist',
  publicDir: './public',
  srcDir: './src',

  // URLs limpias: /product/mi-producto/  (coincide con los <a href> de ProductList.astro)
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    assets: '_astro',
  },

  // Precarga de enlaces al pasar el mouse (mejora navegación del catálogo).
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  // Optimización de imágenes en build (compatible con Cloudflare Pages
  // porque las imágenes se procesan antes del deploy, no en runtime).
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },

  server: {
    port: 4321,
    host: true,
  },

  vite: {
    build: {
      // Cloudflare Pages rechaza archivos individuales muy grandes.
      chunkSizeWarningLimit: 1500,
    },
    ssr: {
      // nanostores y @nanostores/persistent son ESM puros.
      noExternal: ['nanostores', '@nanostores/persistent'],
    },
  },
});
