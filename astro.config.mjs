// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.rackflow.app',
	integrations: [
		starlight({
			title: 'RackFlow Docs',
			logo: {
        src: './src/assets/logo.svg',
      },
			customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
      components: {
        // Override the default `SocialIcons` component.
        SocialIcons: './src/components/HomeLink.astro',
      },
			sidebar: [
				{
					label: 'Tutorials',
						autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
