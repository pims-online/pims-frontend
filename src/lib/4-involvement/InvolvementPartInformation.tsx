import { useTranslation, Trans } from 'react-i18next';

import { Container, Title } from '@/components';

import {
	INVOLVEMENT_LINK_CYBERMALVEILLANCE,
	INVOLVEMENT_LINK_BUILDING_PRESERVATION,
	INVOLVEMENT_LINK_GOUV_RISKS,
} from './constants';


export default function InvolvementPartInformation() {
	const { t } = useTranslation('involvement_screen');
	const translationKeyPrefix = 'information';
	
	return (
		<Container withoutMarginBottom>
			<Title text={t(`${translationKeyPrefix}.title`)} contained />
			<ul className="pims-components__arrowed-list">
				<li>
					<Trans
						t={t}
						i18nKey={`${translationKeyPrefix}.items.item_1`}
						components={{
							k1: (
								<a
									href={`https://${INVOLVEMENT_LINK_GOUV_RISKS}`}
									target="_blank"
									rel="noopener noreferrer"
									className="pims-components__text-color-orange"
								/>
							),
						}}
						values={{
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
									href={`https://${INVOLVEMENT_LINK_CYBERMALVEILLANCE}`}
									target="_blank"
									rel="noopener noreferrer"
									className="pims-components__text-color-orange"
								/>
							),
						}}
						values={{
							urlCybermalveillance: INVOLVEMENT_LINK_CYBERMALVEILLANCE,
						}}
					/>
				</li>
				<li>
					<Trans
						t={t}
						i18nKey={`${translationKeyPrefix}.items.item_3`}
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
					/>
				</li>
			</ul>
		</Container>
	);
}
