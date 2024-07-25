import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import type { KitNumbers } from './types';
import EmergencyKitNumbersEmergency from './EmergencyKitNumbersEmergency';
import EmergencyKitNumbersInputs from './EmergencyKitNumbersInputs';

type Props = {
	kitNumbers: KitNumbers;
	setKitNumbers: Dispatch<SetStateAction<KitNumbers>>;
};

export default function EmergencyKitNumbers(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<>
			<h5 className="pims__screen-title">{t('useful_numbers.title')}</h5>
			<div className="pims-emergency-kit-screen__useful-numbers-container">
				<EmergencyKitNumbersEmergency />
				<EmergencyKitNumbersInputs
					kitNumbers={props.kitNumbers}
					setKitNumbers={props.setKitNumbers}
				/>
			</div>
		</>
	);
}
