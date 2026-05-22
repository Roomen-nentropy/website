import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://roomen-nentropy.github.io/website/
const site = process.env.SITE_URL ?? 'https://roomen-nentropy.github.io';
const base = process.env.SITE_BASE ?? '/website';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'bg',
        locales: { bg: 'bg-BG', en: 'en-US' },
      },
    }),
  ],
});
