import { useTranslation } from 'react-i18next';

import { Divider } from '@/components';

import WeatherVigilance from './WeatherVigilance';
import AlertSystems from './alert-systems/AlertSystems';
import RadioFrequencies from './RadioFrequencies';

export default function AlertScreen() {
	const { t } = useTranslation('alert_screen');

	return (
		<div>
			<p>{t('alea')}</p>
			<WeatherVigilance />
			<Divider />
			<AlertSystems />
			<RadioFrequencies />
		</div>
	);
}
