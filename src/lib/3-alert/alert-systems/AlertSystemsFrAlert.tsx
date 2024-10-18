import { useTranslation, Trans } from 'react-i18next';

import { Container, Subtitle } from '@/components';
import iconFrAlert from '@/assets/alert-icons/fr_alert.svg';
import mediaFrAlert from '@/assets/media/sound_fr_alert.mp3';

import FrAlertDiscovery from './FrAlertDiscovery';
import AudioPlayer from './AudioPlayer';

export default function AlertSystemsFrAlert() {
	const { t } = useTranslation('alert_screen');

	const imgSide = 24;

	return (
		<Container>
			<Subtitle text={t('alert_systems.fr_alert.title')} />
			<p>
				<Trans
					t={t}
					i18nKey={'alert_systems.fr_alert.content'}
					components={{
						k1: <b />,
					}}
				/>
			</p>
			<p>{t('alert_systems.fr_alert.simulation')}</p>
			<AudioPlayer
				logoAlt="Fr Alert"
				media={mediaFrAlert}
				logoSrc={iconFrAlert}
				logoHeight={imgSide}
				logoWidth={imgSide}
				buttonTitle={t('alert_systems.fr_alert.button')}
			/>
			<FrAlertDiscovery />
		</Container>
	);
}
