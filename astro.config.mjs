import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://gubanyi.github.io',
  base: '/faithful-automation',

  integrations: [
	starlight({
	  title: 'Faithful Automation',
	  description:
		'A framework for discerning whether and how AI and automation should be used within human vocations.',
	}),
  ],
});