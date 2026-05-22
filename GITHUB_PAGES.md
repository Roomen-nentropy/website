# GitHub Pages setup

Repository: [github.com/Roomen-nentropy/website](https://github.com/Roomen-nentropy/website)

**Your site URL:** [https://roomen-nentropy.github.io/website/](https://roomen-nentropy.github.io/website/)

## Enable (one time — required if the site is blank/404)

1. Open [Settings → Pages](https://github.com/Roomen-nentropy/website/settings/pages)
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Branch: **`gh-pages`** · Folder: **`/ (root)`** · Save
4. Wait for the green **Deploy to GitHub Pages** workflow on `main` (pushes `dist` to `gh-pages`)
5. Visit [https://roomen-nentropy.github.io/website/](https://roomen-nentropy.github.io/website/)

Optional: run the **Enable GitHub Pages** workflow under Actions (needs repo admin).

## If the site 404s

- Confirm the latest **Deploy to GitHub Pages** workflow succeeded
- Source must be **GitHub Actions**, not “Deploy from branch” unless you change the workflow
- Hard-refresh or wait 1–2 minutes after first deploy

## Local build (same as CI)

```bat
set SITE_URL=https://roomen-nentropy.github.io
set SITE_BASE=/website
npm run build
```
