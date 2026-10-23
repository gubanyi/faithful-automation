# Faithful Automation

**A framework of questions for discerning whether and how to use AI in our vocations**

Faithful Automation is meant to be used one task at a time. It doesn't assume AI is inherently good or inherently bad. Rather, it asks about intent, truth, stewardship, and human connection.

The framework is written from a Christian perspective. It starts from our reliance on Christ's faithfulness and wisdom (John 15:5, 2 Timothy 2:13, Proverbs 13:20, Luke 6:40, James 1:5), and it's meant to be useful to anyone.

Website: <https://faithfulautomation.org/>

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

As we discern whether and how to use AI in our vocations, we ask ourselves:

1. **Intent:** What is my task, its purpose, and my intent in using AI to assist in completing it or to automate it entirely?
2. **Truth:** How am I anchoring truth, knowing AI is neither transparent nor inherently trustworthy?
3. **Stewardship:** How am I stewarding my own thinking, my time, and my gifts, recognizing the formative nature of this task?
4. **Connection:** How is my use of AI displacing human connection that would otherwise occur when completing this task?

## The AI Literacy Framework

Faithful Automation is the middle level of a three-level AI Literacy Framework:

1. **Foundational human competency** (bottom): human knowledge, skill, and experience, independent of AI.
2. **Wisdom and discernment** (middle): examining intent, anchoring truth, stewarding, and directing all our work toward the service of others. This is the Faithful Automation framework.
3. **AI skill** (top): using AI technologies to solve problems within our vocations while minimizing the associated risks.

## Website contents

- **What is AI?** A plain-language explanation of large language models, tokens, training data, retrieval, and reasoning, and why today's foundation models are effectively black boxes.
- **AI & Humans:** What research shows about how AI tends to behave (hallucination, overconfidence, sycophancy) and how people tend to use it (automation bias, anthropomorphism, and the pull of instant answers).
- **Framework:** The Christian foundation of the project and the four questions above, with practical guidance for each.
- **AI Literacy:** The three-level AI Literacy Framework, with Faithful Automation as its middle level.
- **Guides** (in progress): Practical guidance for specific contexts, starting with teaching, learning, and coding.
- **Case Studies** (in progress): Real and hypothetical scenarios showing that good decisions about AI often require more than a simple "use AI" or "don't use AI."
- **Resources:** A curated list of the research and explainers cited on the site.
- **About:** Who is behind the project, and the questions it starts from.

## Core convictions

- Christ is faithful, and the wisdom we need comes from God, not from our tools.
- Our work is a vocation, a calling through which God serves our neighbors.
- Technology is a tool, not an authority.
- Efficiency is valuable. It just isn't the highest good.
- People are more than producers of output.
- Learning and growth often matter as much as the finished product.
- Decisions about automation should consider their effects on people, relationships, and communities.
- Discernment requires both wisdom and context.

## Contributing case studies

Future versions of the site will include case studies submitted by the community. Submissions will be reviewed and curated before they're published.

The goal is a collection of examples that help others work through hard questions about AI in their own work and lives.

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
- **Links:** write internal links from the site root (for example, `/framework/`). External links open in a new tab.

MDX files can use these components without importing them:

| Component | Use |
| :-- | :-- |
| `<Callout title="…" variant="note \| caution \| blackbox">` | A highlighted aside |
| `<CardGrid>` with `<Card title="…" href="…" eyebrow="…">` | A grid of linked cards |
| `<NextTokenDemo prompt="…" choices={[{ token: '…', probability: 40 }]} />` | The interactive next-token demo |
| `<Pyramid label="…">` with `<PyramidLevel title="…" eyebrow="…" href="…" highlight>` | A stacked pyramid; write levels top to bottom |

### Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the build locally                    |

## Credits

- Theme based on the [Astro blog template](https://github.com/withastro/astro/tree/main/examples/blog), which is based on [Bear Blog](https://github.com/HermanMartinus/bearblog/).
- Hero photo by [Marcelo Cidrack](https://unsplash.com/@marcelocidrack) on [Unsplash](https://unsplash.com/photos/white-and-brown-boat-in-body-of-water-7jZNgIuJrCM).

## License

Unless otherwise noted, all original content on this site is © Marcus Gubanyi.

Please contact the author before reproducing substantial portions of the content.
