/** Public folder URL (logo, talisman, screenshots). Accepts `/assets/x` or `assets/x`. */
export function assetUrl(path: string): string {
  const clean = path.replace(/^\//, '');
  return withBase(clean);
}

/** Path helpers that respect Astro `base` (e.g. /website/ on GitHub Pages). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.trim().replace(/\/+$/, '') || '';
  const segment = path.startsWith('/') ? path : `/${path}`;
  const full = base ? `${base}${segment}` : segment;
  return full.replace(/\/{2,}/g, '/');
}

export function swapLangInPath(pathname: string, from: string, to: string): string {
  const base = import.meta.env.BASE_URL.trim().replace(/\/+$/, '');
  const prefix = `${base}/${from}`;
  const replacement = `${base}/${to}`;
  if (pathname.startsWith(prefix)) {
    return `${replacement}${pathname.slice(prefix.length)}`;
  }
  return withBase(`${to}/`);
}
