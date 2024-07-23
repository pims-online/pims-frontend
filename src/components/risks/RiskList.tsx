import RiskItem from './RiskItem';
import { getRiskItemList } from './utils';

import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

type Props = {
	riskIdList: Array<string>;
};

export default function RiskList(props: Props) {
	const riskIdList = props.riskIdList;
	const { t } = useTranslation('risks');

	const riskItemList = useMemo(() => {
		return getRiskItemList(riskIdList);
	}, [riskIdList]);

	const getPreventionList = (
		keyTranslation: string,
		nbPrenventions: number
	) => {
		return [...Array(nbPrenventions).keys()].map((id) =>
			t(`${keyTranslation}.preventions.item_${id + 1}`)
		);
	};

	return (
		<table>
			<tbody>
				{riskItemList.map((item, index) => (
					<RiskItem
						key={`risk-list-item-${item.keyTranslation}-${index}`}
						title={t(`${item.keyTranslation}.title`)}
						iconsPaths={item.iconFileName}
						preventionList={getPreventionList(
							item.keyTranslation,
							item.preventionListLength
						)}
						isFirstItem={index === 0}
					/>
				))}
			</tbody>
		</table>
	);
}
