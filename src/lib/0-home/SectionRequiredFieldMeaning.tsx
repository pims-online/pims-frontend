import { useTranslation } from 'react-i18next';

import { RequiredFieldIndicator } from '@/components';

export default function SectionRequiredFieldMeaning() {
	const { t } = useTranslation('home_screen');
	return (
		<p>
			<RequiredFieldIndicator />
			{` : ${t('mandatory_fields')}`}
		</p>
	);
}
