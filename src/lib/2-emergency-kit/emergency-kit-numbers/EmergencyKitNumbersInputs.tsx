import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { UsefulNumbers } from '@/providers/AppContextConfig';
import EmergencyKitNumbersInputsItems from './EmergencyKitNumbersInputsItems';

type Props = {
	kitNumbers: UsefulNumbers;
	setKitNumbers: Dispatch<SetStateAction<UsefulNumbers>>;
};

export default function EmergencyKitNumbersInputs(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<div className="pims-emergency-kit-screen__useful-numbers-subcontainer">
			<h4>{t('useful_numbers.inputs.subtitle')}</h4>
			<EmergencyKitNumbersInputsItems
				kitNumbers={props.kitNumbers}
				setKitNumbers={props.setKitNumbers}
			/>
		</div>
	);
}
