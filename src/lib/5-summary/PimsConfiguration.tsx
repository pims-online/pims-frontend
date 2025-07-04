import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@codegouvfr/react-dsfr/Input';

import { AppContext } from '../../providers';
import { Container, Title } from '@/components';

export default function PimsConfiguration() {
	const { t } = useTranslation('summary_screen');
	const { pimsFileName, setPimsFileName, pimsComment, setPimsComment } = useContext(AppContext);

	return (
		<Container>
			<Title text={t('configuration.title')} contained />
			<Input
				label={t('configuration.name.label')}
				hintText={t('configuration.name.hint')}
				nativeInputProps={{
					placeholder: t('configuration.name.placeholder'),
					value: pimsFileName,
					onChange: (e) => setPimsFileName(e.currentTarget.value),
				}}
				data-fr-analytics-rating
				id="pims-step-5__input-name"
			/>
			<Input
				label={t('configuration.comment.label')}
				hintText={t('configuration.comment.hint')}
				nativeTextAreaProps={{
					value: pimsComment,
					onChange: (e) => setPimsComment(e.currentTarget.value),
				}}
				textArea
				data-fr-analytics-rating
				id="pims-step-5__input-comment"
			/>
		</Container>
	);
}
