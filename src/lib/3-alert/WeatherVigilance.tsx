import { useTranslation } from 'react-i18next';

import { Title, Container } from '@/components';

const ALERT_LINK_VIGILANCE_METEOFRANCE = 'https://vigilance.meteofrance.fr';
const ALERT_LINK_VIGICRUES = 'https://www.vigicrues.gouv.fr';

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
					(link) => (
						<li key={link}>
							<a href={link} target="_blank" rel="noopener noreferrer">
								{link}
							</a>
						</li>
					)
				)}
			</ul>
		</Container>
	);
}
