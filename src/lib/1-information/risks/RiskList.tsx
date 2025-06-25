import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import RiskItem from './RiskItem';
import { getRiskItemList } from './utils';

type Props = {
	riskIdList: Array<string>;
	riskIntensityMap: Map<string, string> | undefined;
};

export default function RiskList(props: Props) {
	const riskIdList = props.riskIdList;
	const riskIntensityMap = props.riskIntensityMap;
	const { t } = useTranslation('risks');

	const riskItemList = useMemo(() => {
		return getRiskItemList(riskIdList);
	}, [riskIdList]);

	const getPreventionList = (
		identifier: string,
		nbPrenventions: number
	) => {
		return [...Array(nbPrenventions).keys()].map((id) =>
			t(`${identifier}.preventions.item_${id + 1}`)
		);
	};

	return (
		<table className="pims-information-screen__risk-list-table">
			<tbody>
				{riskItemList.map((item, index) => (
					<RiskItem
						key={`risk-list-item-${item.identifier}-${index}`}
						title={t(`${item.identifier}.title`)}
						intensity={riskIntensityMap !== undefined ? riskIntensityMap.get(item.identifier) : undefined}
						iconsPaths={item.iconFileName}
						preventionList={getPreventionList(
							item.identifier,
							item.preventionListLength
						)}
						isFirstItem={index === 0}
					/>
				))}
			</tbody>
		</table>
	);
}
