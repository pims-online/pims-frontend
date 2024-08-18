import { useTranslation, Trans } from 'react-i18next';

export default function EmergencyKitNumbersEmergency() {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<div className="pims-emergency-kit-screen__useful-numbers-subcontainer">
			<h6>{t('useful_numbers.emergency.subtitle')}</h6>
			{[112, 114].map((phoneNumber) => (
				<p key={`emergency-number-${phoneNumber}`}>
					<Trans
						t={t}
						i18nKey={`useful_numbers.emergency.${phoneNumber}`}
						components={{
							k1: <b className="pims-components__text-color-orange" />,
							k2: (
								<b className="pims-emergency-kit-screen__emergency-number-value" />
							),
						}}
					/>
				</p>
			))}
		</div>
	);
}
