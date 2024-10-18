import { useTranslation } from 'react-i18next';

import { Title, Container } from '@/components';

export default function WeatherVigilance() {
	const { t } = useTranslation('alert_screen');

	return (
		<Container>
			<Title text={t('weather_vigilance.title')} contained />
			<p className="pims-components__list-introducer">
				{t('weather_vigilance.awareness')}
			</p>
			<ul className="pims-components__toothed-list">
				{[
					'https://vigilance.meteofrance.fr',
					'https://wwww.vigicrues.gouv.fr',
				].map((link) => (
					<li key={link}>
						<a href={link} target="_blank" rel="noopener noreferrer">
							{link}
						</a>
					</li>
				))}
			</ul>
		</Container>
	);
}
