import { useEffect, useContext } from 'react';

import { AppContext } from '@/providers';
import { Divider } from '@/components';

import EmergencyKitListing from './EmergencyKitListing';
import EmergencyKitStorage from './EmergencyKitStorage';
import EmergencyKitNumbers from './emergency-kit-numbers/EmergencyKitNumbers';
import EmergencyKitNextStepAlert from './EmergencyKitNextStepAlert';
import GatheringPlaceInput from './GatheringPlaceInput';

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
		gatheringPlace,
		setGatheringPlace,
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
			<Divider />
			<GatheringPlaceInput
				gatheringPlace={gatheringPlace}
				setGatheringPlace={setGatheringPlace}
			/>
			<Divider />
			<EmergencyKitNumbers
				kitNumbers={usefulNumbers}
				setKitNumbers={setUsefulNumbers}
				inseeCode={inseeCode}
			/>
			<EmergencyKitNextStepAlert />
		</div>
	);
}
