import { useTranslation } from 'react-i18next';
import { fr } from '@codegouvfr/react-dsfr';
import { Alert } from '@codegouvfr/react-dsfr/Alert';

export default function EmergencyKitNextStepAlert() {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<Alert
			severity="info"
			small
			description={t('go_to_next_step')}
			style={{ marginTop: fr.spacing('5v') }}
		/>
	);
}
