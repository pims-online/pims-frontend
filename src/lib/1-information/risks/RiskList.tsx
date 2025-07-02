import { useTranslation } from 'react-i18next';

import { Risk } from '@/providers/AppContextConfig';
import RiskItem from './RiskItem';

type Props = {
	riskList: Array<Risk>;
};

export default function RiskList(props: Props) {
	const riskList = props.riskList;
	const { t } = useTranslation('risks');

	const getPreventionList = (
		identifier: string,
		nbPrenventions: number
	) => {
		return [...Array(nbPrenventions).keys()].map((id) =>
			t(`${identifier}.preventions.item_${id + 1}`)
		);
	};

	const getIntensity = (
		intensityId: string | undefined
	) => {
		if (intensityId === undefined) {
			return undefined;
		}

		return t("scale_city") + t(`intensity.${intensityId}`);
	};

	const risks = riskList.map((risk, index) => {
		const title = t(`${risk.type.identifier}.title`);
		const intensity = getIntensity(risk.intensityInCity)
		const preventionList = getPreventionList(
				risk.type.identifier,
				risk.type.preventionListLength
			);

		return (
			<RiskItem
			key={`risk-list-item-${risk.type.identifier}-${index}`}
			title={title}
			intensity={intensity}
			iconsPaths={risk.type.iconFileName}
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
