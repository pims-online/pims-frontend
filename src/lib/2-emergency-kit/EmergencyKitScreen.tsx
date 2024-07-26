import { useState, useEffect } from 'react';

import EmergencyKitListing from './EmergencyKitListing';
import EmergencyKitStorage from './EmergencyKitStorage';
import EmergencyKitNumbers from './emergency-kit-numbers/EmergencyKitNumbers';
import EmergencyKitNextStepAlert from './EmergencyKitNextStepAlert';
import type { KitNumbers } from './types';

type Props = {
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function EmergencyKitScreen(props: Props) {
	const { setIsNavigateNextLocked } = props;

	const [kitListChecked, setKitListChecked] = useState(false);
	const [kitStorage, setKitStorage] = useState('');
	const [kitNumbers, setKitNumbers] = useState<KitNumbers>({
		townHall: '',
		insurance: '',
		relatives: '',
		others: '',
	});

	useEffect(() => setIsNavigateNextLocked(true), [setIsNavigateNextLocked]);

	const isKitStorageSet = !!kitStorage;
	const isTownHallNumberSet = !!kitNumbers.townHall;
	const isInsuranceNumberSet = !!kitNumbers.insurance;
	const isRelativesNumberSet = !!kitNumbers.relatives;

	useEffect(() => {
		if (
			kitListChecked &&
			isKitStorageSet &&
			isTownHallNumberSet &&
			isInsuranceNumberSet &&
			isRelativesNumberSet
		) {
			setIsNavigateNextLocked(false);
		}
	}, [
		setIsNavigateNextLocked,
		kitListChecked,
		isKitStorageSet,
		isTownHallNumberSet,
		isInsuranceNumberSet,
		isRelativesNumberSet,
	]);

	return (
		<div>
			<EmergencyKitListing
				kitListChecked={kitListChecked}
				setKitListChecked={setKitListChecked}
			/>
			<EmergencyKitStorage storage={kitStorage} setStorage={setKitStorage} />
			<EmergencyKitNumbers
				kitNumbers={kitNumbers}
				setKitNumbers={setKitNumbers}
			/>
			<EmergencyKitNextStepAlert />
		</div>
	);
}
