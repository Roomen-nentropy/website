import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const dev = process.argv.includes('dev');
const site =
  process.env.SITE_URL ??
  (dev ? 'http://localhost:4321' : 'https://roomen-nentropy.github.io');
const base = process.env.SITE_BASE ?? (dev ? '/' : '/website');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'bg',
        locales: { bg: 'bg-BG', en: 'en-US' },
      },
    }),
  ],
});
