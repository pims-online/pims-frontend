import { useTranslation } from 'react-i18next';

import WeatherVigilance from './WeatherVigilance';
import AlertSystems from './alert-systems/AlertSystems';
import RadioFrequencies from './RadioFrequencies';

export default function AlertScreen() {
	const { t } = useTranslation('alert_screen');

	return (
		<div>
			<p>{t('alea')}</p>
			<WeatherVigilance />
			<AlertSystems />
			<RadioFrequencies />
		</div>
	);
}
