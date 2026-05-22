# Nentropy marketing website

Astro 5 static site for [joinnentropy.com](https://www.joinnentropy.com) — bilingual (BG/EN), Git-based blog and events.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Content

- Product truth: `PLATFORM_FEATURE_SET.md`
- Publishing guide: `CONTENT_GUIDE.md`
- Deploy: `DEPLOY.md`

## Structure

- `src/pages/[lang]/` — localized routes
- `src/content/blog|events|docs/` — Git-managed content
- `public/assets/` — logos, talisman art, screenshots

App: **https://app.joinnentropy.com**

**Preview (GitHub Pages):** [https://roomen-nentropy.github.io/website/](https://roomen-nentropy.github.io/website/)
