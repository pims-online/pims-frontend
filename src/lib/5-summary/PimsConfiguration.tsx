import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@codegouvfr/react-dsfr/Input';

import { AppContext } from '../../AppContextProvider';
import { Container, Title, Subtitle } from '../../components';

export default function PimsConfiguration() {
	const { t } = useTranslation('summary_screen');
	const { pimsFileName, setPimsFileName } = useContext(AppContext);

	return (
		<Container>
			<Title text={t('configuration.title')} />
			<Subtitle text={t('configuration.name.title')} />
			<Input
				label={undefined}
				hintText={t('configuration.name.placeholder')}
				nativeInputProps={{
					value: pimsFileName,
					onChange: (e) => setPimsFileName(e.currentTarget.value),
				}}
			/>
		</Container>
	);
}
