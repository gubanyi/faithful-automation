/**
 * Prefixes a root-relative path with the `base` set in astro.config.mjs, if
 * any (e.g., with `base: '/docs'`, `/framework/` becomes `/docs/framework/`).
 * External URLs and in-page anchors are returned unchanged.
 */
export function withBase(path: string): string {
	if (/^([a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) return path;
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}
