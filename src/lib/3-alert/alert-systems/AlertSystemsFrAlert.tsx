import { useTranslation, Trans } from 'react-i18next';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

import { Container, Subtitle } from '@/components';
import FrAlertDiscovery from './FrAlertDiscovery';
import AudioPlayer from './AudioPlayer';

import iconFrAlertLight from '@/assets/alert-icons/fr_alert_light_mode.svg';
import iconFrAlertDark from '@/assets/alert-icons/fr_alert_dark_mode.svg';
import mediaFrAlert from '@/assets/media/sound_fr_alert.mp3';

export default function AlertSystemsFrAlert() {
	const { t } = useTranslation('alert_screen');
	const { isDark } = useIsDark();

	const imgSide = 24;

	return (
		<Container>
			<div className='pims-components__title-with-logo pims-components__title-with-logo--keep-inline fr-mb-4v'>
				{/* Decorative: the subtitle beside it already names FR-Alert, so the
				    logo must not be announced a second time by screen readers. */}
				<img
					className='pims-alert-screen__fr-alert-logo'
					src={isDark ? iconFrAlertDark : iconFrAlertLight}
					alt=''
					role='presentation'
				/>
				<Subtitle text={t('alert_systems.fr_alert.title')} level='h4'/>
			</div>
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
				media={mediaFrAlert}
				logoSrc={isDark ? iconFrAlertDark : iconFrAlertLight}
				logoHeight={imgSide}
				logoWidth={imgSide}
				buttonTitle={t('alert_systems.fr_alert.button')}
			/>
			<FrAlertDiscovery />
		</Container>
	);
}
