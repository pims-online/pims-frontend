import { useContext, useEffect } from 'react';

import { AppContext } from '../../AppContextProvider';

import GeorisqueAddressInput from './GeorisqueAddressInput';
import DisplayRiskListAll from './DisplayRiskListAll';
import DisplayRiskListAround from './DisplayRiskListAround';

type Props = {
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function InformationScreen(props: Props) {
	const { setIsNavigateNextLocked } = props;
	const { riskIdList, coordinates } = useContext(AppContext);

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
			<DisplayRiskListAll />
		</div>
	);
}
