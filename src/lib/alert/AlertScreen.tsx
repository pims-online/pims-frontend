import { useTranslation, Trans } from 'react-i18next';

import WeatherVigilance from './WeatherVigilance';
import AlertSystems from './AlertSystems';
import RadioFrequencies from './RadioFrequencies';
import FrAlertDiscovery from './FrAlertDiscovery';

export default function AlertScreen() {
	const { t } = useTranslation('alert_screen');

	return (
		<div>
			<p>
				<Trans
					t={t}
					i18nKey="crisis"
					components={{
						k1: <b className="pims__text-color-orange" />,
					}}
				/>
			</p>
			<WeatherVigilance />
			<AlertSystems />
			<FrAlertDiscovery />
			<p>{t('public_medias')}</p>
			<RadioFrequencies />
		</div>
	);
}
