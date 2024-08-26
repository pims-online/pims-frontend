import { startReactDsfr } from '@codegouvfr/react-dsfr/spa';

function loadAssets(cdn_url?: string) {
	// When local or within the build, we don't need to pass the CDN URL, as it is in the same root directory.
	// This is required only for the Widget, that is implemented in another site, thus need to load assets from the cdn
	const CDN_URL = cdn_url || '';

	// REMOVE favicon if widget !!!

	const links = [
		{
			rel: 'apple-touch-icon',
			href: `${CDN_URL}/dsfr/favicon/apple-touch-icon.png`,
		},
		{
			rel: 'icon',
			href: `${CDN_URL}/dsfr/favicon/favicon.svg`,
			type: 'image/svg+xml',
		},
		{
			rel: 'shortcut icon',
			href: `${CDN_URL}/dsfr/favicon/favicon.ico`,
			type: 'image/x-icon',
		},
		{
			rel: 'manifest',
			href: `${CDN_URL}/dsfr/favicon/manifest.webmanifest`,
			crossOrigin: 'use-credentials',
		},
		{
			rel: 'stylesheet',
			href: `${CDN_URL}/dsfr/utility/icons/icons.min.css`,
		},
		{
			rel: 'stylesheet',
			href: `${CDN_URL}/dsfr/dsfr.min.css`,
		},
	];

	links.forEach((linkData) => {
		const link = document.createElement('link');
		Object.keys(linkData).forEach((attr) => {
			// @ts-expect-error => linkData[attr] uses string indexation
			link.setAttribute(attr, linkData[attr]);
		});
		document.head.appendChild(link);
	});
}

// Should be the direct child of App, or the most outbound parent
export default function DSFRWrapper({
	forWidget,
	children,
}: {
	children: React.ReactNode;
	forWidget?: boolean;
}) {
	startReactDsfr({ defaultColorScheme: 'system' });
	const viteAppUrl = import.meta.env.VITE_APP_URL;
	const cdnUrl = forWidget ? viteAppUrl : '';
	loadAssets(cdnUrl);
	return <>{children}</>;
}
