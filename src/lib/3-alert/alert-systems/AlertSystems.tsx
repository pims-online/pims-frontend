import { useTranslation } from 'react-i18next';

import AlertSystemsList from './AlertSystemsList';
import AlertSystemsSaipGuidelines from './AlertSystemsSaipGuidelines';
import AlertSystemsPlayers from './AlertSystemsPlayers';

export default function AlertSystems() {
	const { t } = useTranslation('alert_screen');

	return (
		<div>
			<h5 className="pims__screen-title">{t('alert_systems.title')}</h5>
			<AlertSystemsList />
			<AlertSystemsSaipGuidelines />
			<AlertSystemsPlayers />
		</div>
	);
}
