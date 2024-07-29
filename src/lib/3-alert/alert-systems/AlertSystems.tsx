import { useTranslation } from 'react-i18next';

import { Title } from '../../../components';

import AlertSystemsList from './AlertSystemsList';
import AlertSystemsSaipGuidelines from './AlertSystemsSaipGuidelines';
import AlertSystemsPlayers from './AlertSystemsPlayers';

export default function AlertSystems() {
	const { t } = useTranslation('alert_screen');

	return (
		<>
			<Title text={t('alert_systems.title')} />
			<AlertSystemsList />
			<AlertSystemsSaipGuidelines />
			<AlertSystemsPlayers />
		</>
	);
}
