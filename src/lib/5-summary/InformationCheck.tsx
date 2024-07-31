import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@codegouvfr/react-dsfr/Input';

import { AppContext } from '../../AppContextProvider';
import { Title, Subtitle, Container } from '../../components';

import EmergencyKitNumbersInputsItems from '../2-emergency-kit/emergency-kit-numbers/EmergencyKitNumbersInputsItems';

export default function InformationCheck() {
	const { t } = useTranslation('summary_screen');
	const {
		emergencyKitStorage,
		setEmergencyKitStorage,
		usefulNumbers,
		setUsefulNumbers,
		address,
		setAddress,
	} = useContext(AppContext);

	return (
		<Container>
			<Title text={t('information_check.title')} />
			<Subtitle text={t('information_check.address')} />
			<Input
				label={undefined}
				nativeInputProps={{
					value: address,
					onChange: (e) => setAddress(e.target.value),
				}}
			/>
			<Subtitle text={t('information_check.kit_storage')} />
			<Input
				label={undefined}
				nativeInputProps={{
					value: emergencyKitStorage,
					onChange: (e) => setEmergencyKitStorage(e.target.value),
				}}
			/>
			<Subtitle text={t('information_check.useful_numbers')} />
			<EmergencyKitNumbersInputsItems
				kitNumbers={usefulNumbers}
				setKitNumbers={setUsefulNumbers}
			/>
		</Container>
	);
}
