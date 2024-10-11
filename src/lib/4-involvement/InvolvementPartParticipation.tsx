import { useTranslation, Trans } from 'react-i18next';

import { Container, Title } from '@/components';

import { INVOLVEMENT_LINK_VOLUNTEERING } from './constants';

export default function InvolvementPartParticipation() {
	const { t } = useTranslation('involvement_screen');
	const translationKeyPrefix = 'participation';

	return (
		<Container>
			<Title text={t(`${translationKeyPrefix}.title`)} />
			<ul className="pims-components__arrowed-list">
				{[...Array(3).keys()].map((id) => (
					<li key={`${translationKeyPrefix}-list-item-${id + 1}`}>
						{t(`${translationKeyPrefix}.items.item_${id + 1}`)}
					</li>
				))}
				<li>
					<Trans
						t={t}
						i18nKey={`${translationKeyPrefix}.items.item_4`}
						components={{
							k1: (
								<a
									href={`https://${INVOLVEMENT_LINK_VOLUNTEERING}`}
									target="_blank"
									rel="noopener noreferrer"
									className="pims-components__text-color-orange"
								/>
							),
						}}
						values={{ urlVolunteering: INVOLVEMENT_LINK_VOLUNTEERING }}
					/>
				</li>
			</ul>
		</Container>
	);
}
