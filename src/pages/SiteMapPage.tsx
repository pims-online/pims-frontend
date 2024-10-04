import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
	HREF_ROUTE_LEGAL_INFORMATION,
	HREF_ROUTE_MAIN,
	HREF_ROUTE_SITE_MAP,
	HREF_ROUTE_ACCESSIBILITY,
	HREF_ROUTE_PRIVACY_POLICY,
} from '@/providers';

export default function SiteMapPage() {
	const { t } = useTranslation('site_map_page');

	useEffect(() => {
		document.title = `${t('title')} | PIMS`;
	}, [t]);

	const pages = [
		{
			href: HREF_ROUTE_MAIN,
			i18nkey: 'main',
		},
		{
			href: HREF_ROUTE_SITE_MAP,
			i18nkey: 'site_map',
		},
		{
			href: HREF_ROUTE_LEGAL_INFORMATION,
			i18nkey: 'legal_information',
		},
		{
			href: HREF_ROUTE_ACCESSIBILITY,
			i18nkey: 'accessibility',
		},
		{
			href: HREF_ROUTE_PRIVACY_POLICY,
			i18nkey: 'privacy_policy',
		},
	];

	return (
		<section className="pims-components__page">
			<h1>{t('title')}</h1>
			<hr />
			<ul className="fr-py-4v">
				{pages.map((item) => (
					<li key={`site-map-item-${item.i18nkey}`}>
						<a href={item.href}>{t(item.i18nkey)}</a>
					</li>
				))}
			</ul>
		</section>
	);
}
