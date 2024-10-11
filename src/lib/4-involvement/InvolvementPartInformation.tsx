import { useTranslation, Trans } from 'react-i18next';

import { Container, Title } from '@/components';

import {
	INVOLVEMENT_LINK_GEORISQUES,
	INVOLVEMENT_LINK_BUILDING_PRESERVATION,
	INVOLVEMENT_LINK_GOUV_RISKS,
} from './constants';

export default function InvolvementPartInformation() {
	const { t } = useTranslation('involvement_screen');
	const translationKeyPrefix = 'information';

	return (
		<Container withoutMarginBottom>
			<Title text={t(`${translationKeyPrefix}.title`)} />
			<ul className="pims-components__arrowed-list">
				<li>
					<Trans
						t={t}
						i18nKey={`${translationKeyPrefix}.items.item_1`}
						components={{
							k1: (
								<a
									href={`https://${INVOLVEMENT_LINK_GEORISQUES}`}
									target="_blank"
									rel="noopener noreferrer"
									className="pims-components__text-color-orange"
								/>
							),
							k2: (
								<a
									href={`https://${INVOLVEMENT_LINK_GOUV_RISKS}`}
									target="_blank"
									rel="noopener noreferrer"
									className="pims-components__text-color-orange"
								/>
							),
						}}
						values={{
							urlGeorisques: INVOLVEMENT_LINK_GEORISQUES,
							urlGouvRisks: INVOLVEMENT_LINK_GOUV_RISKS,
						}}
					/>
				</li>
				<li>
					<Trans
						t={t}
						i18nKey={`${translationKeyPrefix}.items.item_2`}
						components={{
							k1: (
								<a
									href={`https://${INVOLVEMENT_LINK_BUILDING_PRESERVATION}`}
									target="_blank"
									rel="noopener noreferrer"
									className="pims-components__text-color-orange"
								/>
							),
						}}
						values={{
							urlBuildingPreservations: INVOLVEMENT_LINK_BUILDING_PRESERVATION,
						}}
					/>
				</li>
			</ul>
		</Container>
	);
}
