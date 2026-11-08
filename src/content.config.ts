import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { SITE_AUTHOR } from './consts';

// Standalone pages. `index.mdx` is the home page; every other file is published at /<file-name>/.
const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Shown beneath the title (in the hero, on the home page).
			subtitle: z.string().optional(),
			heroImage: z.optional(image()),
			heroAlt: z.string().optional(),
			heroCredit: z.object({ label: z.string(), url: z.url() }).optional(),
			// Show an "On this page" list built from the page's headings.
			toc: z.boolean().default(false),
			// Link to the next page in the site's reading path.
			next: z.object({ title: z.string(), href: z.string() }).optional(),
		}),
});

// Case studies and perspectives. In each folder, `index.mdx` holds the section's intro text
// and every other file is an entry in that section.
function articles(folder: string) {
	return defineCollection({
		loader: glob({ base: `./src/content/${folder}`, pattern: '**/*.{md,mdx}' }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				// Shown beneath the title.
				subtitle: z.string().optional(),
				// Shown in the byline. Entries are signed by their authors.
				author: z.string().default(SITE_AUTHOR),
				// Show an "On this page" list built from the page's headings.
				toc: z.boolean().default(false),
				// Transform string to Date object
				pubDate: z.coerce.date().optional(),
				updatedDate: z.coerce.date().optional(),
				// Breaks ties between entries with the same pubDate (lower numbers are listed first).
				order: z.number().default(0),
				heroImage: z.optional(image()),
				heroAlt: z.string().optional(),
				// Drafts are listed as "Coming soon" and don't get their own page.
				draft: z.boolean().default(false),
				// Section intros (index.mdx) only: a note shown at the top of every entry in the section.
				entryNote: z.string().optional(),
			}),
	});
}

export const collections = {
	pages,
	caseStudies: articles('case-studies'),
	perspectives: articles('perspectives'),
};
