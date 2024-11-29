import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ignite Documentation',
			social: {
				github: 'https://github.com/brandfusion/Ignite',
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
				{label:'Start here',items:[
					{label:'Getting Started',slug:'get-started'},
					{label:'Typography',slug:'typography'},
					{label:'Branding',slug:'branding'},
				]}
			],
		}),
	],
});
