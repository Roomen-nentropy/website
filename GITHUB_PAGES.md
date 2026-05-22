# GitHub Pages setup

Repository: [github.com/Roomen-nentropy/website](https://github.com/Roomen-nentropy/website)

**Your site URL:** [https://roomen-nentropy.github.io/website/](https://roomen-nentropy.github.io/website/)

## Enable (one time)

1. Open [Settings → Pages](https://github.com/Roomen-nentropy/website/settings/pages)
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually under Actions)
4. Wait for the workflow to finish (green checkmark)
5. Visit the URL above

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
