import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';

import iconFrAlert from '@public/icons/logo_fr_alert.svg';
import iconSaip from '@public/icons/logo_saip.png';
import mediaFrAlert from '@public/media/sound_fr_alert.mp3';
import mediaSaip from '@public/media/sound_saip.mp3';

import { Container } from '../../../components';

export default function AlertSystemsPlayers() {
	const { t } = useTranslation('alert_screen');
	const [selectedMedia, setSelectedMedia] = useState('');

	const configFrAlert = {
		translationKey: 'fr_alert',
		icon: iconFrAlert,
		media: mediaFrAlert,
	};
	const configSaip = {
		translationKey: 'saip',
		icon: iconSaip,
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
									width={imgSide}
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
			/>
			<audio controls src={selectedMedia} autoPlay></audio>
		</Container>
	);
}
