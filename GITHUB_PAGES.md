# GitHub Pages — fix blank site

**URL:** https://roomen-nentropy.github.io/website/

## If you see 404 or a blank page (30 seconds)

1. Open **https://github.com/Roomen-nentropy/website/settings/pages**
2. **Build and deployment → Source:** choose **Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)` · click **Save**
4. Wait ~1 minute, then open the URL above

The workflow on every push to `main` rebuilds the site and updates the `gh-pages` branch automatically.
