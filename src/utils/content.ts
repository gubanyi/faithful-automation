import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

export type Section = 'caseStudies' | 'perspectives';

// Where each section is published, relative to the site's base path.
export const SECTION_PATHS: Record<Section, string> = {
	caseStudies: '/case-studies/',
	perspectives: '/perspectives/',
};

const isEntry = ({ id }: CollectionEntry<Section>) => id !== 'index';

/** A section's intro (its `index.mdx`), or an error if the section has none. */
export async function getSectionIntro(section: Section) {
	const intro = await getEntry(section, 'index');
	if (!intro) throw new Error(`Add an index.mdx file to the "${section}" content folder.`);
	return intro;
}

/**
 * A section's intro and its entries: published ones first, newest first (ties broken by
 * `order`, then title), then drafts.
 */
export async function getSection(section: Section) {
	const intro = await getSectionIntro(section);

	const entries = (await getCollection(section, isEntry)).sort(
		(a, b) =>
			Number(a.data.draft) - Number(b.data.draft) ||
			(b.data.pubDate?.valueOf() ?? 0) - (a.data.pubDate?.valueOf() ?? 0) ||
			a.data.order - b.data.order ||
			a.data.title.localeCompare(b.data.title),
	);

	return { intro, entries };
}

/** Entries that get their own page: everything except the intro and drafts. */
export function getPublished(section: Section) {
	return getCollection(section, (entry) => isEntry(entry) && !entry.data.draft);
}
