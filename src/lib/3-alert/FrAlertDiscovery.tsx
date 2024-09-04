import { useTranslation } from 'react-i18next';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { createModal } from '@codegouvfr/react-dsfr/Modal';

import { Title, Container } from '../../components';

export default function FrAlertDiscovery() {
	const { t } = useTranslation('alert_screen');

	const notificationTitle = t('fr_alert_discovery.notification.title');
	const body1 = t('fr_alert_discovery.notification.body_1');
	const body2 = t('fr_alert_discovery.notification.body_2');
	const body3 = t('fr_alert_discovery.notification.body_3');
	const body4 = [...Array(5).keys()].map((id) =>
		t(`fr_alert_discovery.notification.body_4.item_${id + 1}`)
	);
	const body5 = t('fr_alert_discovery.notification.body_5');

	const Modal = createModal({
		id: 'fr-alert-discovery-modal',
		isOpenedByDefault: false,
	});

	const body4ConcatJSX = body4.map((text, index) => (
		<span key={`alert-discovery-body4-item${index + 1}`}>
			{text}
			{index < 4 && <br />}
		</span>
	));

	const onClickShowAlertDiscovery = () => {
		Modal.open();
	};

	return (
		<Container>
			<Title text={t('fr_alert_discovery.title')} />
			<Container
				withoutMarginBottom
				flexboxAlignment="center"
				flexboxDirection="column"
			>
				<Button priority="tertiary" onClick={onClickShowAlertDiscovery}>
					{t('fr_alert_discovery.button')}
				</Button>
			</Container>
			<p className="fr-mb-0 fr-mt-6v">{t('public_medias')}</p>
			<Modal.Component
				title={notificationTitle}
				//iconId='fr-icon-alert-fill' icon not working
			>
				<>
					{[body1, body2, body3, body4ConcatJSX, body5].map((value, index) => (
						<p key={`alert-discovery-body${index + 1}`} className="fr-mb-0">
							{value}
							{index < 4 && (
								<>
									<br />
									<br />
								</>
							)}
						</p>
					))}
				</>
			</Modal.Component>
		</Container>
	);
}
