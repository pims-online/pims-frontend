import { useTranslation } from 'react-i18next';

import { Title } from '@/components';

import AlertSystemsFrAlert from './AlertSystemsFrAlert';
import AlertSystemsSaip from './AlertSystemsSaip';
import AlertSystemsPublicMedia from './AlertSystemsPublicMedias';

export default function AlertSystems() {
	const { t } = useTranslation('alert_screen');

	return (
		<>
			<Title text={t('alert_systems.title')} contained />
			<p>{t('alert_systems.activation')} </p>
			<AlertSystemsFrAlert />
			<AlertSystemsSaip />
			<AlertSystemsPublicMedia />
		</>
	);
}
