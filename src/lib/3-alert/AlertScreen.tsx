import { useTranslation, Trans } from 'react-i18next';

import { Container } from '@/components';

import WeatherVigilance from './WeatherVigilance';
import AlertSystems from './alert-systems/AlertSystems';
import RadioFrequencies from './RadioFrequencies';
import FrAlertDiscovery from './FrAlertDiscovery';

export default function AlertScreen() {
	const { t } = useTranslation('alert_screen');

	return (
		<div>
			<Container>
				<Trans
					t={t}
					i18nKey="crisis"
					components={{
						k1: <b className="pims-components__text-color-orange" />,
					}}
				/>
			</Container>
			<WeatherVigilance />
			<AlertSystems />
			<FrAlertDiscovery />
			<RadioFrequencies />
		</div>
	);
}
