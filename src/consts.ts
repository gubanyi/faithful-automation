// Site-wide settings used by the header, footer, RSS feed, and page metadata.
// Page text lives in `src/content/`.

export const SITE_TITLE = 'Faithful Automation';
export const SITE_DESCRIPTION =
	'Faithful to the truth. Honest with yourself and others. A practical framework for using AI thoughtfully.';
export const SITE_AUTHOR = 'Marcus Gubanyi';

// Main navigation, in display order. Paths are relative to the site's base path.
export const NAV_LINKS = [
	{ href: '/what-is-ai/', label: 'What is AI?' },
	{ href: '/ai-and-humans/', label: 'AI & Humans' },
	{ href: '/framework/', label: 'Framework' },
	{ href: '/guides/', label: 'Guides' },
	{ href: '/case-studies/', label: 'Case Studies' },
	{ href: '/about/', label: 'About' },
];

export const FOOTER_LINKS = [
	{ href: '/resources/', label: 'Resources' },
	{ href: '/rss.xml', label: 'RSS' },
];
