import { useState, Dispatch, SetStateAction } from 'react';

// ----- UTILS -----
import { useScrollToTop, useRegisterNavLock } from './utils';
import { NavigationLock } from './types'

// ----- LAYOUT COMPONENTS -----
import Stepper from './components/stepper/Stepper';
import Navigator from './components/Navigator';

// ----- SCREENS  -----
import { SCREENS } from './constants';
import InformationScreen from '@/lib/1-information/InformationScreen';
import EmergencyKitScreen from '@/lib/2-emergency-kit/EmergencyKitScreen';
import AlertScreen from '@/lib/3-alert/AlertScreen';
import InvolvementScreen from '@/lib/4-involvement/InvolvementScreen';
import SummaryScreen from '@/lib/5-summary/SummaryScreen';

type Props = {
	currentIndex: number;
	setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export default function StepsLayout(props: Props) {
	const { currentIndex, setCurrentIndex } = props;
	const [navigationLocks, _] = useState<Map<string, NavigationLock>>(new Map());
	const registerNavLock = useRegisterNavLock(navigationLocks);
	const scrollToTop = useScrollToTop();

	const navigateToFinalScreen = () => {
		setCurrentIndex(SCREENS.FINAL_SCREEN);
		scrollToTop();
	};

	const navigateToInformationScreen = () => {
		setCurrentIndex(SCREENS.INFORMATION_SCREEN);
		scrollToTop();
	};

	const navigateToEmergencyKitScreen = () => {
		setCurrentIndex(SCREENS.EMERGENCY_KIT_SCREEN);
		scrollToTop();
	};

	const clearNavLocks = () => {
		navigationLocks.clear();
	}

	return (
		<div>
			<Stepper currentStep={currentIndex} />
			{currentIndex === SCREENS.INFORMATION_SCREEN && (
				<InformationScreen registerNavLock={registerNavLock} />
			)}
			{currentIndex === SCREENS.EMERGENCY_KIT_SCREEN && (
				<EmergencyKitScreen registerNavLock={registerNavLock} />
			)}
			{currentIndex === SCREENS.ALERT_SCREEN && <AlertScreen />}
			{currentIndex === SCREENS.INVOLVEMENT_SCREEN && <InvolvementScreen />}
			{currentIndex === SCREENS.SUMMARY_SCREEN && (
				<SummaryScreen
					navigateToFinalScreen={navigateToFinalScreen}
					navigateToInformationScreen={navigateToInformationScreen}
					navigateToEmergencyKitScreen={navigateToEmergencyKitScreen}
				/>
			)}
			<Navigator
				currentStep={currentIndex}
				setCurrentStep={setCurrentIndex}
				navigationLocks={navigationLocks}
				clearNavigationLocks={clearNavLocks}
			/>
		</div>
	);
}
