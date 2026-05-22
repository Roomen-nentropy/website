# Deploying the Nentropy website

## GitHub Pages (current)

**Live URL:** [https://roomen-nentropy.github.io/website/](https://roomen-nentropy.github.io/website/)

Repository: [github.com/Roomen-nentropy/website](https://github.com/Roomen-nentropy/website)

### One-time repo setup

1. Push the `main` branch (workflow deploys automatically).
2. In GitHub → **Settings → Pages**:
   - **Source:** GitHub Actions
3. After the first successful workflow run, the site is live.

Build uses `SITE_URL` + `SITE_BASE=/website` (see `.github/workflows/deploy.yml`).

### Custom domain later (joinnentropy.com)

In `astro.config.mjs`, set production env to `SITE_URL=https://www.joinnentropy.com` and `SITE_BASE=` (empty), or change defaults when moving off GitHub Pages.

---

## Vercel (alternative)

1. Import this repository in [Vercel](https://vercel.com).
2. Framework preset: **Astro**.
3. Build command: `npm run build` · Output: `dist`.
4. Add domain `www.joinnentropy.com` and redirect apex if needed.
5. Set production branch to `main`.

## Cloudflare Pages

1. Connect GitHub repo.
2. Build: `npm run build` · Output directory: `dist`.
3. Node version: 22.

## DNS cutover checklist

- [ ] Deploy preview URL reviewed (BG + EN, all solution pages)
- [ ] `app.joinnentropy.com` links unchanged
- [ ] Update DNS A/CNAME to new host
- [ ] Verify `sitemap-index.xml` and SSL
- [ ] Keep old site snapshot until 48h stable

## Local dev

```bash
npm install
npm run dev
```

Open `http://localhost:4321` — redirects to `/bg/`.
