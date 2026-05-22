/** Path helpers that respect Astro `base` (e.g. /website/ on GitHub Pages). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`.replace(/\/{2,}/g, '/');
}

export function swapLangInPath(pathname: string, from: string, to: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefix = `${base}/${from}`;
  const replacement = `${base}/${to}`;
  if (pathname.startsWith(prefix)) {
    return `${replacement}${pathname.slice(prefix.length)}`;
  }
  return withBase(`${to}/`);
}
