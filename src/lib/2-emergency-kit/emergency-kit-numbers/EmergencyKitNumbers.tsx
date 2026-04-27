import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { Title, Container } from '@/components';
import { UsefulNumbers } from '@/providers/AppContextConfig';
import EmergencyKitNumbersEmergency from './EmergencyKitNumbersEmergency';
import EmergencyKitNumbersInputs from './EmergencyKitNumbersInputs';

type Props = {
	kitNumbers: UsefulNumbers;
	setKitNumbers: Dispatch<SetStateAction<UsefulNumbers>>;
};

export default function EmergencyKitNumbers(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<Container>
			<Title text={t('useful_numbers.title')} level='h3' contained />
			<Container flexboxDirection="responsive" className="pims-components__gap">
				<EmergencyKitNumbersEmergency />
				<EmergencyKitNumbersInputs
					kitNumbers={props.kitNumbers}
					setKitNumbers={props.setKitNumbers}
				/>
			</Container>
		</Container>
	);
}
