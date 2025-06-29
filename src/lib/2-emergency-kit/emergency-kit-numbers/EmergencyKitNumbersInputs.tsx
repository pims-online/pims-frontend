import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import EmergencyKitNumbersInputsItems from './EmergencyKitNumbersInputsItems';

import type { KitNumbers } from './types';

type Props = {
	kitNumbers: KitNumbers;
	setKitNumbers: Dispatch<SetStateAction<KitNumbers>>;
	inseeCode?: number;
};

export default function EmergencyKitNumbersInputs(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<div className="pims-emergency-kit-screen__useful-numbers-subcontainer">
			<h6>{t('useful_numbers.inputs.subtitle')}</h6>
			<EmergencyKitNumbersInputsItems
				kitNumbers={props.kitNumbers}
				setKitNumbers={props.setKitNumbers}
				inseeCode={props.inseeCode}
			/>
		</div>
	);
}
