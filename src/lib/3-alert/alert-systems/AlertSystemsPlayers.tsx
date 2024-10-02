import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

import iconFrAlert from '@/assets/alert-icons/fr_alert.svg';
import iconSaipLightMode from '@/assets/alert-icons/logo_saip.png';
import iconSaipDarkMode from '@/assets/alert-icons/logo_saip_dark_mode.png';
import mediaFrAlert from '@/assets/media/sound_fr_alert.mp3';
import mediaSaip from '@/assets/media/sound_saip.mp3';

import { Container } from '@/components';

export default function AlertSystemsPlayers() {
	const { t } = useTranslation('alert_screen');
	const [selectedMedia, setSelectedMedia] = useState('');
	const { isDark } = useIsDark();

	const configFrAlert = {
		translationKey: 'fr_alert',
		icon: iconFrAlert,
		media: mediaFrAlert,
	};
	const configSaip = {
		translationKey: 'saip',
		icon: isDark ? iconSaipDarkMode : iconSaipLightMode,
		media: mediaSaip,
	};
	const imgSide = 24;

	return (
		<Container flexboxDirection="column" flexboxAlignment="center">
			<ButtonsGroup
				inlineLayoutWhen="always"
				buttonsEquisized
				alignment="center"
				buttonsSize="medium"
				buttons={[
					{
						children: (
							<p className="pims-alert-screen__alert-systems-players-button">
								<img
									src={configFrAlert.icon}
									alt={configFrAlert.translationKey}
									width={imgSide}
									height={imgSide}
									className="fr-mr-1w"
								/>
								{t(
									`alert_systems.buttons_title.${configFrAlert.translationKey}`
								)}
							</p>
						),
						priority: 'tertiary',
						type: 'button',
						onClick: () => {
							setSelectedMedia(configFrAlert.media);
						},
					},
					{
						children: (
							<p className="pims-alert-screen__alert-systems-players-button">
								<img
									src={configSaip.icon}
									alt={configSaip.translationKey}
									width={(imgSide * 632) / 395}
									height={imgSide}
									className="fr-mr-1w"
								/>
								{t(`alert_systems.buttons_title.${configSaip.translationKey}`)}
							</p>
						),
						priority: 'tertiary',
						type: 'button',
						onClick: () => {
							setSelectedMedia(configSaip.media);
						},
					},
				]}
				data-fr-analytics-rating
				id="pims-step-3__button-play-alert-sound"
			/>
			<audio controls src={selectedMedia} autoPlay></audio>
		</Container>
	);
}
