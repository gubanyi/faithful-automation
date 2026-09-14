import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPublished, SECTION_PATHS } from '../utils/content';
import { withBase } from '../utils/paths';

/** @type {import('../utils/content').Section[]} */
const SECTIONS = ['guides', 'caseStudies'];

export async function GET(context) {
	const items = [];
	for (const section of SECTIONS) {
		for (const entry of await getPublished(section)) {
			items.push({
				title: entry.data.title,
				description: entry.data.description,
				pubDate: entry.data.pubDate,
				link: withBase(`${SECTION_PATHS[section]}${entry.id}/`),
			});
		}
	}

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: new URL(withBase('/'), context.site),
		items: items.sort((a, b) => (b.pubDate?.valueOf() ?? 0) - (a.pubDate?.valueOf() ?? 0)),
	});
}
