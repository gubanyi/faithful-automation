## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project structure

- Site text lives in `src/content/` as MDX; layouts, components, and styles render it. Keep prose out of `.astro` files.
- `src/content/pages/` holds standalone pages. `index.mdx` is the home page (rendered by `src/pages/index.astro`); the rest are rendered by `src/pages/[page].astro`.
- `src/content/guides/` and `src/content/case-studies/` are article collections. Each folder's `index.mdx` is the section intro. Entries with `draft: true` are listed as "Coming soon" and get no page.
- MDX components (`Callout`, `Card`, `CardGrid`, `NextTokenDemo`) are passed in by the layouts from `src/components/mdx/index.ts`, so MDX files don't import them.
- The site is served under the `/faithful-automation` base path. Use `withBase()` from `src/utils/paths.ts` for links in `.astro` files; root-relative Markdown links are prefixed by the `a` override (`src/components/mdx/ContentLink.astro`).
