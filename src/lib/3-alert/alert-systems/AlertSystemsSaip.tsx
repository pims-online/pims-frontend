import { useTranslation, Trans } from 'react-i18next';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

import { Container, Subtitle } from '@/components';
import mediaSaip from '@/assets/media/sound_saip.mp3';
import iconSaipLightMode from '@/assets/alert-icons/logo_saip_light_mode.min.svg';
import iconSaipDarkMode from '@/assets/alert-icons/logo_saip_dark_mode.min.svg';
// Full-size variants for the section logo (the .min ones above are the 24px
// thumbnails used inside the audio player button).
import logoSaipLight from '@/assets/alert-icons/logo_saip_light_mode.svg';
import logoSaipDark from '@/assets/alert-icons/logo_saip_dark_mode.svg';

import AlertSystemsSaipGuidelines from './AlertSystemsSaipGuidelines';
import AudioPlayer from './AudioPlayer';

export default function AlertSystemsSaip() {
	const { t } = useTranslation('alert_screen');
	const { isDark } = useIsDark();

	const imgSide = 24;

	return (
		<Container>
			<div className='pims-components__title-with-logo pims-components__title-with-logo--keep-inline fr-mb-4v'>
				{/* Decorative: the subtitle beside it already names the SAIP, so the
				    logo must not be announced a second time by screen readers. */}
				<img
					className='pims-alert-screen__saip-logo'
					src={isDark ? logoSaipDark : logoSaipLight}
					alt=''
					role='presentation'
				/>
				<Subtitle text={t('alert_systems.saip.title')} level='h4'/>
			</div>
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
			<p>{t('alert_systems.saip.simulation')}</p>
			<AudioPlayer
				media={mediaSaip}
				logoSrc={isDark ? iconSaipDarkMode : iconSaipLightMode}
				logoHeight={imgSide}
				logoWidth={(imgSide * 632) / 395}
				buttonTitle={t('alert_systems.saip.button')}
			/>
		</Container>
	);
}
