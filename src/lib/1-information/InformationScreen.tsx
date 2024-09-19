import { useContext, useEffect } from 'react';

import { AppContext } from '../../providers';

import GeorisqueAddressInput from './GeorisqueAddressInput';
import DisplayRiskListAll from './DisplayRiskListAll';
import DisplayRiskListAround from './DisplayRiskListAround';
import GatheringPlaceInput from './GatheringPlaceInput';
import IodePastilleEligibility from './iode-pastille-eligibility/IodePastilleEligibility';

type Props = {
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function InformationScreen(props: Props) {
	const { setIsNavigateNextLocked } = props;
	const { riskIdList, coordinates, gatheringPlace, setGatheringPlace } =
		useContext(AppContext);

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
			<GeorisqueAddressInput />
			<DisplayRiskListAround riskIdList={riskIdList} />
			<IodePastilleEligibility />
			<DisplayRiskListAll />
			<GatheringPlaceInput
				gatheringPlace={gatheringPlace}
				setGatheringPlace={setGatheringPlace}
			/>
		</div>
	);
}
