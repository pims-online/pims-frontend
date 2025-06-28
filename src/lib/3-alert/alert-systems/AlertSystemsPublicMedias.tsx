import { useTranslation } from 'react-i18next';

import { Container, Subtitle } from '@/components';
import RadioFrequencies from '../RadioFrequencies';

export default function AlertSystemsPublicMedia() {
	const { t } = useTranslation('alert_screen');
	return (
		<Container>
			<Subtitle text={t('alert_systems.public_medias.title')} />
			<p>{t('alert_systems.public_medias.content')}</p>
			<RadioFrequencies />
		</Container>
	);
}
