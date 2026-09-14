# Faithful Automation

**Faithful to the truth. Honest with yourself and others.**

Faithful Automation is a practical framework for deciding whether and how to use artificial intelligence, one task at a time. Rather than assuming that AI is inherently good or inherently bad, it encourages careful reflection on purpose, truth, thinking, and relationships before, during, and after we use it.

Website: <https://gubanyi.github.io/faithful-automation/>

## Purpose

Artificial intelligence is changing how we learn, work, create, communicate, and make decisions. New tools appear constantly, often promising greater efficiency, productivity, or convenience. Yet not every task should be automated, and not every use of AI serves the people affected by it.

Faithful Automation helps individuals and organizations answer questions such as:

- Should this task be automated at all?
- What is gained by using AI, and what might be lost?
- How do I stay grounded in the truth when AI can be confidently wrong?
- How will this affect my own thinking and growth?
- How does this use of AI affect the people involved?
- What responsibilities remain with people?

## The framework

**Approach** (before a task)

1. What task am I completing, and what is its purpose?
2. What is my intent in using AI for this task?

**Engage** (while working)

3. How am I anchoring truth, knowing AI is neither transparent nor fully trustworthy?
4. How am I stewarding my own thinking, knowing that tasks shape who I become?

**Reflect** (afterward)

5. Did AI replace human connections that strengthen my relationships?
6. How did AI affect the joy I find in my work?

## Website contents

- **What is AI?** A plain-language explanation of large language models, tokens, training data, retrieval, and reasoning, and why today's foundation models are effectively black boxes.
- **AI & Humans:** What research shows about how AI tends to behave (hallucination, overconfidence, sycophancy) and how people tend to use it (automation bias, anthropomorphism, and the pull of instant answers).
- **Framework:** The six questions above, with practical guidance for each.
- **Guides** (in progress): Practical guidance for specific contexts, starting with teaching, learning, and coding.
- **Case Studies** (in progress): Real and hypothetical scenarios showing that good decisions about AI often require more than a simple "use AI" or "don't use AI."
- **Resources:** A curated list of the research and explainers cited on the site.
- **About:** The story behind the project.

## Core convictions

- Technology is a tool, not an authority.
- Efficiency is valuable, but it is not the highest good.
- People are more than producers of output.
- Learning and growth often matter as much as the finished product.
- Decisions about automation should consider their effects on people, relationships, and communities.
- Good judgment requires both wisdom and context.

## Contributing case studies

Future versions of the site will include community-submitted case studies. Submissions will be reviewed and curated before publication.

The goal is to build a collection of examples that help others navigate complex questions about AI in their own work and lives.

## Working on the site

The site is built with [Astro](https://astro.build) using the [Astro blog theme](https://astro.build/themes/details/blog/). Content (MDX) is kept separate from presentation (layouts, components, and styles), so most edits only touch files in `src/content/`.

```text
src/
├── content/              all site text (MDX)
│   ├── pages/            standalone pages; index.mdx is the home page
│   ├── guides/           index.mdx is the section intro; other files are guides
│   └── case-studies/     index.mdx is the section intro; other files are case studies
├── components/           header, footer, hero, and MDX components
├── layouts/              page and section layouts
├── pages/                routes that render the content
├── styles/global.css     site-wide styles
├── consts.ts             site title, description, and navigation
└── content.config.ts     frontmatter schemas
```

### Editing content

- **Home page title, subtitle, and hero image:** the frontmatter of `src/content/pages/index.mdx`.
- **Navigation links:** `src/consts.ts`.
- **A new page:** add `src/content/pages/<name>.mdx` with a `title` and `description`. It is published at `/<name>/`.
- **A new guide or case study:** add an MDX file to `src/content/guides/` or `src/content/case-studies/`. Set `draft: true` to list it as "Coming soon" without publishing a page; add a `pubDate` when it goes live.
- **Links:** write internal links from the site root (for example, `/framework/`). The `/faithful-automation` base path is added automatically, and external links open in a new tab.

MDX files can use these components without importing them:

| Component | Use |
| :-- | :-- |
| `<Callout title="…" variant="note \| caution \| blackbox">` | A highlighted aside |
| `<CardGrid>` with `<Card title="…" href="…" eyebrow="…">` | A grid of linked cards |
| `<NextTokenDemo prompt="…" choices={[{ token: '…', probability: 40 }]} />` | The interactive next-token demo |

### Commands

All commands are run from the root of the project:

| Command           | Action                                                         |
| :---------------- | :------------------------------------------------------------- |
| `npm install`     | Install dependencies                                           |
| `npm run dev`     | Start the dev server at `localhost:4321/faithful-automation/` |
| `npm run build`   | Build the production site to `./dist/`                         |
| `npm run preview` | Preview the build locally                                      |

## Credits

- Theme based on the [Astro blog template](https://github.com/withastro/astro/tree/main/examples/blog), which is based on [Bear Blog](https://github.com/HermanMartinus/bearblog/).
- Hero photo by [Marcelo Cidrack](https://unsplash.com/@marcelocidrack) on [Unsplash](https://unsplash.com/photos/white-and-brown-boat-in-body-of-water-7jZNgIuJrCM).

## License

Unless otherwise noted, all original content on this site is © Marcus Gubanyi.

Please contact the author before reproducing substantial portions of the content.
