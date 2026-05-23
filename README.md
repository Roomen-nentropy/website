# Nentropy marketing website

Astro 5 static site for [joinnentropy.com](https://www.joinnentropy.com) — bilingual (BG/EN), Git-based blog and events.

## Commands

```bash
npm install
npm run dev      # then open http://localhost:4321/bg/  (root redirects to /bg/)
npm run build    # production uses base /website for GitHub Pages
npm run preview  # after build: http://localhost:4321/website/bg/
```

If `npm run dev` shows nothing in the browser, confirm the terminal still says `astro ... ready` and use **`/bg/`** not only the port root while an old tab cached `/website/`.

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
