import { useEffect, useContext } from 'react';

import { AppContext } from '../../AppContextProvider';

import EmergencyKitListing from './EmergencyKitListing';
import EmergencyKitStorage from './EmergencyKitStorage';
import EmergencyKitNumbers from './emergency-kit-numbers/EmergencyKitNumbers';
import EmergencyKitNextStepAlert from './EmergencyKitNextStepAlert';

type Props = {
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function EmergencyKitScreen(props: Props) {
	const { setIsNavigateNextLocked } = props;
	const {
		emergencyKitStorage,
		setEmergencyKitStorage,
		usefulNumbers,
		setUsefulNumbers,
		kitListChecked,
		setKitListChecked,
		inseeCode,
	} = useContext(AppContext);

	const isKitStorageSet = !!emergencyKitStorage;
	// const isTownHallNumberSet = !!usefulNumbers.townHall;
	// const isInsuranceNumberSet = !!usefulNumbers.insurance;
	// const isRelativesNumberSet = !!usefulNumbers.relatives;

	useEffect(() => {
		if (
			kitListChecked &&
			isKitStorageSet
			// isKitStorageSet &&
			// isTownHallNumberSet &&
			// isInsuranceNumberSet &&
			// isRelativesNumberSet
		) {
			setIsNavigateNextLocked(false);
		} else {
			setIsNavigateNextLocked(true);
		}
	}, [
		setIsNavigateNextLocked,
		kitListChecked,
		isKitStorageSet,
		// isTownHallNumberSet,
		// isInsuranceNumberSet,
		// isRelativesNumberSet,
	]);

	return (
		<div>
			<EmergencyKitListing
				kitListChecked={kitListChecked}
				setKitListChecked={setKitListChecked}
			/>
			<EmergencyKitStorage
				storage={emergencyKitStorage}
				setStorage={setEmergencyKitStorage}
			/>
			<EmergencyKitNumbers
				kitNumbers={usefulNumbers}
				setKitNumbers={setUsefulNumbers}
				inseeCode={inseeCode}
			/>
			<EmergencyKitNextStepAlert />
		</div>
	);
}
