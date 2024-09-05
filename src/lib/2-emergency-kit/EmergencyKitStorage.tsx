import { useTranslation } from 'react-i18next';
import { Input } from '@codegouvfr/react-dsfr/Input';

import { Container, RequiredFieldIndicator } from '@/components';

type Props = {
	storage: string;
	setStorage: (nextValue: string) => void;
};

export default function EmergencyKitStorage(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<Container>
			<p className="fr-mb-0">
				{`${t('kit_storage.accessibility')} `}
				<RequiredFieldIndicator />
			</p>
			<Input
				label=""
				hintText={t('kit_storage.input_placeholder')}
				nativeInputProps={{
					value: props.storage,
					onChange: (e) => props.setStorage(e.currentTarget.value),
				}}
			/>
		</Container>
	);
}
