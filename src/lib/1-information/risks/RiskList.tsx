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

	const getIntensity = (
		identifier: string
	) => {
		if (riskIntensityMap === undefined) {
			return undefined;
		}

		const intensityId = riskIntensityMap.get(identifier);
		if (intensityId === undefined) {
			console.warn(`Unknown intensity for risk ${identifier}`);
			return undefined;
		}

		return t("scale_city") + t(`intensity.${intensityId}`);
	};

	const risks = riskItemList.map((item, index) => {
		const title = t(`${item.identifier}.title`);
		const intensity = getIntensity(item.identifier)
		const preventionList = getPreventionList(
				item.identifier,
				item.preventionListLength
			);

		return (
			<RiskItem
			key={`risk-list-item-${item.identifier}-${index}`}
			title={title}
			intensity={intensity}
			iconsPaths={item.iconFileName}
			preventionList={preventionList}
			isFirstItem={index === 0}
		/>);
	});

	return (
		<table className="pims-information-screen__risk-list-table">
			<tbody>
				{risks}
			</tbody>
		</table>
	);
}
