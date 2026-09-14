import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

export type Section = 'guides' | 'caseStudies';

// Where each section is published, relative to the site's base path.
export const SECTION_PATHS: Record<Section, string> = {
	guides: '/guides/',
	caseStudies: '/case-studies/',
};

const isEntry = ({ id }: CollectionEntry<Section>) => id !== 'index';

/** A section's intro (its `index.mdx`) and its entries: published ones first, newest first, then drafts. */
export async function getSection(section: Section) {
	const intro = await getEntry(section, 'index');
	if (!intro) throw new Error(`Add an index.mdx file to the "${section}" content folder.`);

	const entries = (await getCollection(section, isEntry)).sort(
		(a, b) =>
			Number(a.data.draft) - Number(b.data.draft) ||
			(b.data.pubDate?.valueOf() ?? 0) - (a.data.pubDate?.valueOf() ?? 0) ||
			a.data.title.localeCompare(b.data.title),
	);

	return { intro, entries };
}

/** Entries that get their own page: everything except the intro and drafts. */
export function getPublished(section: Section) {
	return getCollection(section, (entry) => isEntry(entry) && !entry.data.draft);
}
