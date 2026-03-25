import { useContext } from 'react';

import { NavigationLock } from '@/layouts/types';
import { AppContext } from '@/providers';
import { Divider } from '@/components';

import EmergencyKitListing from './EmergencyKitListing';
import EmergencyKitStorage from './EmergencyKitStorage';
import EmergencyKitNumbers from './emergency-kit-numbers/EmergencyKitNumbers';
import GatheringPlaceInput from './GatheringPlaceInput';

type Props = {
	registerNavLock: (name: string, lock?: NavigationLock) => void;
};

export default function EmergencyKitScreen(props: Props) {
	const { registerNavLock } = props;
	const {
		usefulNumbers,
		setUsefulNumbers,
		position,
		gatheringPlace,
		setGatheringPlace,
	} = useContext(AppContext);


	return (
		<div>
			<EmergencyKitListing
				registerNavLock={registerNavLock}
			/>
			<EmergencyKitStorage
				registerNavLock={registerNavLock}
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
				inseeCode={position?.inseeCode}
			/>
		</div>
	);
}
