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
				{
					label:'Start here',items:[
						{label:'Getting Started',slug:'get-started'},
						{label:'Typography',slug:'typography'},
						{label:'Buttons & Links',slug:'branding'},
						{label:'Themes',slug:'themes'},
						{label:'Content Hierarchy',slug:'content-hierarchy'},
						{label:'Extra Content Options',slug:'content-options'},
					]
				},
				{
					label:'Ignite Elements',
					autogenerate: { directory: 'elements' },
					// 	label: 'Reference',
					// 	autogenerate: { directory: 'reference' },
					// },
				},
				{
					label:'Design System',
					autogenerate: { directory: 'design-system' },
					
				},
				{
					label:'Optimization',
					autogenerate: { directory: 'optimization' },
					
				},
				{
					label:'Update Ignite',
					autogenerate: { directory: 'update' },
					
				}
			],
		}),
	],
});
