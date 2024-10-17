import { useTranslation } from 'react-i18next';

import SectionTemplate from './SectionTemplate';

export default function SectionOnlineProcedure() {
	const { t } = useTranslation('home_screen');
	const translationKeyPrefix = 'online_procedure';

	return (
		<SectionTemplate i18nKey={translationKeyPrefix}>
			<ul className="pims-components__arrowed-list fr-mb-6v">
				{[...Array(5).keys()].map((id) => (
					<li key={`${translationKeyPrefix}-list-item-${id + 1}`}>
						{t(`${translationKeyPrefix}.items.item_${id + 1}`)}
					</li>
				))}
			</ul>
		</SectionTemplate>
	);
}
