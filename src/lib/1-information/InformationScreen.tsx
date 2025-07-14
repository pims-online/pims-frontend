import { useContext, useEffect } from 'react';

import { AppContext } from '../../providers';

import { Divider } from '@/components';

import SectionAddressInput from './SectionAddressInput';
import DisplayRiskListAll from './DisplayRiskListAll';
import DisplayRiskListAround from './DisplayRiskListAround';
import IodePastilleEligibility from './iode-pastille-eligibility/IodePastilleEligibility';
import StrimmingObligation from './strimming-obligation/StrimmingObligation';

type Props = {
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function InformationScreen(props: Props) {
	const { setIsNavigateNextLocked } = props;
	const { riskList, coordinates } = useContext(AppContext);

	useEffect(() => {
		// Block navigation while the coordinates of the user and the related risks are unknown
		if (
			riskList === undefined ||
			coordinates.latitude === undefined ||
			coordinates.longitude === undefined
		) {
			setIsNavigateNextLocked(true);
		} else {
			setIsNavigateNextLocked(false);
		}
	}, [riskList, coordinates, setIsNavigateNextLocked]);

	return (
		<div>
			<SectionAddressInput />
			<DisplayRiskListAround riskList={riskList} />
			<IodePastilleEligibility />
			<StrimmingObligation />
			<Divider />
			<DisplayRiskListAll />
		</div>
	);
}
