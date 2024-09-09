import { useTranslation } from 'react-i18next';

import {
	HREF_ROUTE_LEGAL_INFORMATION,
	HREF_ROUTE_MAIN,
	HREF_ROUTE_SITE_MAP,
} from '@/providers';

export default function SiteMapPage() {
	const { t } = useTranslation('site_map_page');

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
	];
	return (
		<section className="pims-layouts__container">
			<h2>{t('title')}</h2>
			<ul className="fr-py-4v">
				{pages.map((item) => (
					<li>
						<a href={item.href}>{t(item.i18nkey)}</a>
					</li>
				))}
			</ul>
		</section>
	);
}
