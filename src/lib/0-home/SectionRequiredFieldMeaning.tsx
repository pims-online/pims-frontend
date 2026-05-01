import { useTranslation } from 'react-i18next';

import { RequiredFieldIndicator } from '@/components';

export default function SectionRequiredFieldMeaning() {
	const { t } = useTranslation('home_screen');
	return (
		<p aria-hidden>
			<RequiredFieldIndicator />
			{` : ${t('mandatory_fields')}`}
		</p>
	);
}
