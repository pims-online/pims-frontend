import { useContext, useEffect } from 'react';

import { AppContext } from '../../providers';

import { Divider } from '@/components';

import SectionAddressInput from './SectionAddressInput';
import DisplayRiskListAll from './DisplayRiskListAll';
import DisplayRiskListAround from './DisplayRiskListAround';
import IodePastilleEligibility from './iode-pastille-eligibility/IodePastilleEligibility';

type Props = {
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function InformationScreen(props: Props) {
	const { setIsNavigateNextLocked } = props;
	const { riskIdList, riskIntensityMap, coordinates } = useContext(AppContext);

	useEffect(() => {
		// Block navigation while the coordinates of the user and the related risks are unknown
		if (
			riskIdList === undefined ||
			coordinates.latitude === undefined ||
			coordinates.longitude === undefined
		) {
			setIsNavigateNextLocked(true);
		} else {
			setIsNavigateNextLocked(false);
		}
	}, [riskIdList, coordinates, setIsNavigateNextLocked]);

	return (
		<div>
			<SectionAddressInput />
			<DisplayRiskListAround riskIdList={riskIdList} riskIntensityMap={riskIntensityMap} />
			<IodePastilleEligibility />
			<Divider />
			<DisplayRiskListAll />
		</div>
	);
}
