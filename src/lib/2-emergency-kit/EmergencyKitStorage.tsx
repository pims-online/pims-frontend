import { useTranslation } from 'react-i18next';
import { Input } from '@codegouvfr/react-dsfr/Input';

type Props = {
	storage: string;
	setStorage: (nextValue: string) => void;
};

export default function EmergencyKitStorage(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<Input
			label={t('kit_storage.accessibility')}
			hintText={t('kit_storage.input_placeholder')}
			nativeInputProps={{
				value: props.storage,
				onChange: (e) => props.setStorage(e.currentTarget.value),
			}}
		/>
	);
}
