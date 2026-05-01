import { Trans, useTranslation } from 'react-i18next';

import { RequiredFieldIndicator } from '@/components';

export default function SectionRequiredFieldMeaning() {
	const { t } = useTranslation('common');

	return (
		<p aria-hidden className='pims-components__required-field-meaning'>
			<Trans 
				t={t}
				i18nKey='mandatory_fields'
				components={{
					k: <RequiredFieldIndicator />
				}}
			/>
		</p>
	);
}
