import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { Title, Container } from '@/components';

import type { KitNumbers } from './types';
import EmergencyKitNumbersEmergency from './EmergencyKitNumbersEmergency';
import EmergencyKitNumbersInputs from './EmergencyKitNumbersInputs';

type Props = {
	kitNumbers: KitNumbers;
	setKitNumbers: Dispatch<SetStateAction<KitNumbers>>;
	inseeCode?: number;
};

export default function EmergencyKitNumbers(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<Container>
			<Title text={t('useful_numbers.title')} contained />
			<Container flexboxDirection="responsive" className="pims-components__gap">
				<EmergencyKitNumbersEmergency />
				<EmergencyKitNumbersInputs
					kitNumbers={props.kitNumbers}
					setKitNumbers={props.setKitNumbers}
					inseeCode={props.inseeCode}
				/>
			</Container>
		</Container>
	);
}
