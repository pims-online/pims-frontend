import { useTranslation } from 'react-i18next';
import { Button } from '@codegouvfr/react-dsfr/Button';

export default function FrAlertExample() {
	const { t } = useTranslation('alert_screen');
	return (
		<div>
			<h5 className="pims__screen-title">{t('fr_alert_example.title')}</h5>
			<Button
				size="medium"
				onClick={() => console.log('hello world')}
				priority="tertiary"
			>
				{t('fr_alert_example.button')}
			</Button>
		</div>
	);
}
