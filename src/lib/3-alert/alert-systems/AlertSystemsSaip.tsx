import { useTranslation, Trans } from 'react-i18next';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

import { Container, Subtitle } from '@/components';
import mediaSaip from '@/assets/media/sound_saip.mp3';
import iconSaipLightMode from '@/assets/alert-icons/logo_saip_light_mode.png';
import iconSaipDarkMode from '@/assets/alert-icons/logo_saip_dark_mode.png';

import AlertSystemsSaipGuidelines from './AlertSystemsSaipGuidelines';
import AudioPlayer from './AudioPlayer';

export default function AlertSystemsSaip() {
	const { t } = useTranslation('alert_screen');
	const { isDark } = useIsDark();

	const imgSide = 24;

	return (
		<Container>
			<Subtitle text={t('alert_systems.saip.title')} />
			<p>
				<Trans
					t={t}
					i18nKey={'alert_systems.saip.content'}
					components={{
						k1: <b />,
					}}
				/>
			</p>
			<AlertSystemsSaipGuidelines />
			<AudioPlayer
				logoAlt="Saip Sound"
				media={mediaSaip}
				logoSrc={isDark ? iconSaipDarkMode : iconSaipLightMode}
				logoHeight={imgSide}
				logoWidth={(imgSide * 632) / 395}
				buttonTitle={t('alert_systems.saip.button')}
			/>
		</Container>
	);
}
