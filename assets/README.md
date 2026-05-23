# Brand assets

PNG mascots and brochure art live here (committed for GitHub Pages).

**Refresh from the IFS brochure repo + local screenshot:**

```bash
npm run fetch-assets
```

This downloads cut-outs from [nentropy_brochure_ifsfocusdays](https://github.com/Roomen-nentropy/nentropy_brochure_ifsfocusdays) and copies `Screenshot *.png` / `BrochureIFS.pdf` from the project root when present.

**Optional:** drop higher-res files from `Brochure graphics/` into the same paths (see `src/i18n/assets.ts`).

Placeholder SVGs in this folder root are legacy; pages use `assets/talisman/` and `assets/brochure/ifs-graphics/`.
