# Publishing content on the Nentropy website

The marketing site rebuilds automatically when you push to the `main` branch (Vercel / Cloudflare Pages).

## Blog articles

1. Create a file in `src/content/blog/` named e.g. `my-article-bg.md`
2. Required frontmatter:

```yaml
---
title: "Your title"
description: "Short summary for listings and SEO"
date: 2026-05-22
author: "Your name"
tags: [eudr]
locale: bg   # or en
draft: false
---
```

3. Write the article in Markdown below the `---` block.

### PDF-only publication

1. Put the PDF in `public/publications/2026/my-report.pdf`
2. Create a minimal markdown file:

```yaml
---
title: "Report title"
description: "Summary"
date: 2026-05-22
locale: bg
pdf: /publications/2026/my-report.pdf
draft: false
---
```

Optional one-line intro in the body.

## Events

File: `src/content/events/my-event.md`

```yaml
---
title: "Event name"
date: 2026-09-15
location: "Sofia"
status: upcoming   # or past
locale: bg
registrationUrl: "https://..."
heroImage: /assets/events/hero.jpg
gallery:
  - /assets/events/photo1.jpg
videos:
  - url: "https://www.youtube.com/embed/VIDEO_ID"
    title: "Recording"
downloads:
  - label: "Brochure"
    file: /publications/events/brochure.pdf
draft: false
---
```

Put images in `public/assets/events/`.

## Integration docs

Edit files in `src/content/docs/`. Set `order` for sidebar sorting.

## Do not

- Claim legal guarantees or certifications the product does not provide
- Invent features not in `PLATFORM_FEATURE_SET.md`

## Preview locally

Developers: `npm install` then `npm run dev` (requires Node 20+).
