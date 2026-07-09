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
			head: [
				// Inject runtime environment variables
				{
					tag: 'script',
					attrs: { src: '/env.js' },
				},
				{
					tag: 'script',
					attrs: { src: '/consent.js', defer: true },
				},
				{
					tag: 'script',
					attrs: { src: '/posthog.js' },
				},
			],
      components: {
        // Override the default `SocialIcons` component.
        SocialIcons: './src/components/HomeLink.astro',
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
        MobileMenuFooter: './src/components/MobileMenuFooter.astro',
        MobileMenuToggle: './src/components/MobileMenuToggle.astro',
        Footer: './src/components/Footer.astro',
        PageFrame: './src/components/PageFrame.astro',
        TwoColumnContent: './src/components/TwoColumnContent.astro',
      },
			sidebar: [
				{
					label: 'Tutorials',
						autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'Editor',
					autogenerate: { directory: 'editor' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
