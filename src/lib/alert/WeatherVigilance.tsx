import { useTranslation } from 'react-i18next';

export default function WeatherVigilance() {
	const { t } = useTranslation('alert_screen');

	return (
		<div>
			<h5 className="pims__screen-title">{t('weather_vigilance.title')}</h5>
			<p>{t('weather_vigilance.awareness')}</p>
			<ul className="pims__toothed-list">
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
		</div>
	);
}
