import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@codegouvfr/react-dsfr/Input';

import { AppContext } from '../../providers';
import { Container, Title } from '@/components';

export default function PimsConfiguration() {
	const { t } = useTranslation('summary_screen');
	const { pimsFileName, setPimsFileName } = useContext(AppContext);

	return (
		<Container>
			<Title text={t('configuration.naming.title')} contained />
			<Input
				label={undefined}
				hintText={t('configuration.naming.placeholder')}
				nativeInputProps={{
					value: pimsFileName,
					onChange: (e) => setPimsFileName(e.currentTarget.value),
				}}
				data-fr-analytics-rating
				id="pims-step-5__input-filename"
			/>
		</Container>
	);
}
