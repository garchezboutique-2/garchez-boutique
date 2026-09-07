import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Cambiaremos esta URL cuando Cloudflare nos dé el dominio real
  site: 'https://garchez-boutique.pages.dev',
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  image: {
    // Optimización automática a WebP/AVIF en el build
    service: { entrypoint: 'astro/assets/services/sharp' }
  },
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' }
});
