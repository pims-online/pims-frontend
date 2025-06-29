import { useTranslation, Trans } from 'react-i18next';

import { Container, Title } from '@/components';

import {
	INVOLVEMENT_LINK_CYBERMALVEILLANCE,
	INVOLVEMENT_LINK_BUILDING_PRESERVATION,
	INVOLVEMENT_LINK_GOUV_RISKS,
} from './constants';
import { useContext, useEffect } from 'react';
import { getDicrimLink as getDicrimInfo } from './utils';
import { AppContext } from '@/providers';


export default function InvolvementPartInformation() {
	const { inseeCode, dicrimInfo, setDicrimInfo } = useContext(AppContext);

	const { t } = useTranslation('involvement_screen');
	const translationKeyPrefix = 'information';
	

	useEffect(() => {
		const fetchLink = async () => {
			const dicrimInfo = await getDicrimInfo(inseeCode);
			setDicrimInfo(dicrimInfo);
		}

		fetchLink();
	}, [inseeCode]);

	const getDircimText = () => {
		if (dicrimInfo !== undefined) {
			return (
				<Trans
					t={t}
					i18nKey={`${translationKeyPrefix}.items.item_1_with_link`}
					components={{
						k1: <a
								href={`${dicrimInfo.url}`}
								target="_blank"
								rel="noopener noreferrer"
								className="pims-components__text-color-orange"
							/>,
						}}
					values={{
						cityName: dicrimInfo.cityName,
					}}
				/>
			);
		} else {
			return (
				<Trans
					t={t}
					i18nKey={`${translationKeyPrefix}.items.item_1_no_link`}
				/>
			)
		}
	}


	return (
		<Container withoutMarginBottom>
			<Title text={t(`${translationKeyPrefix}.title`)} contained />
			<ul className="pims-components__arrowed-list">
				<li>
					{getDircimText()}
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
							urlGeorisques: INVOLVEMENT_LINK_CYBERMALVEILLANCE,
							urlGouvRisks: INVOLVEMENT_LINK_GOUV_RISKS,
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
						values={{
							urlBuildingPreservations: INVOLVEMENT_LINK_BUILDING_PRESERVATION,
						}}
					/>
				</li>
			</ul>
		</Container>
	);
}
