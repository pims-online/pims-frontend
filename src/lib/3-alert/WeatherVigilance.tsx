import { useTranslation } from 'react-i18next';

import { Title, Container } from '@/components';

type Alert = {
	link: string;
	shortLink: string;
	i18nKey: string
};

const ALERT_LINK_VIGILANCE_METEOFRANCE: Alert = {
	link: 'https://vigilance.meteofrance.fr',
	shortLink: 'vigilance.meteofrance.fr',
	i18nKey: 'meteofrance',
};
const ALERT_LINK_VIGICRUES: Alert = {
	link: 'https://www.vigicrues.gouv.fr',
	shortLink: 'vigicrues.gouv.fr',
	i18nKey: 'vigicrues'
};

export default function WeatherVigilance() {
	const { t } = useTranslation('alert_screen');

	return (
		<Container>
			<Title text={t('weather_vigilance.title')} contained />
			<p className="pims-components__list-introducer">
				{t('weather_vigilance.awareness')}
			</p>
			<ul className="pims-components__toothed-list">
				{[ALERT_LINK_VIGILANCE_METEOFRANCE, ALERT_LINK_VIGICRUES].map(
					(alert) => (
						<li key={alert.link}>
							{t(`weather_vigilance.${alert.i18nKey}`)}
							<a href={alert.link} target="_blank" rel="noopener noreferrer">
								{alert.shortLink}
							</a>
						</li>
					)
				)}
			</ul>
		</Container>
	);
}
