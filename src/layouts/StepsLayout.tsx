import { useState } from 'react';

// ----- COMPONENTS -----
import Stepper from '../components/stepper/Stepper';
import Navigator from '../components/Navigator';

// ----- SCREENS  -----
import { SCREENS } from './constants';
import InformationScreen from '../lib/InformationScreen';
import EmergencyKitScreen from '../lib/emergency-kit/EmergencyKitScreen';
import AlertScreen from '../lib/alert/AlertScreen';
import InvolvementScreen from '../lib/InvolvementScreen';
import SummaryScreen from '../lib/SummaryScreen';

type Props = {
	currentIndex: number;
	setCurrentIndex: (nextIndex: number) => void;
};

export default function StepsLayout(props: Props) {
	const { currentIndex, setCurrentIndex } = props;
	const [isNavigateNextLocked, setIsNavigateNextLocked] = useState(false);

	const navigateToFinalScreen = () => setCurrentIndex(SCREENS.FINAL_SCREEN);
	return (
		<div>
			<Stepper currentStep={currentIndex} />
			{currentIndex === SCREENS.INFORMATION_SCREEN && <InformationScreen />}
			{currentIndex === SCREENS.EMERGENCY_KIT_SCREEN && (
				<EmergencyKitScreen setIsNavigateNextLocked={setIsNavigateNextLocked} />
			)}
			{currentIndex === SCREENS.ALERT_SCREEN && <AlertScreen />}
			{currentIndex === SCREENS.INVOLVEMENT_SCREEN && <InvolvementScreen />}
			{currentIndex === SCREENS.SUMMARY_SCREEN && (
				<SummaryScreen navigateToFinalScreen={navigateToFinalScreen} />
			)}
			<Navigator
				currentStep={currentIndex}
				setCurrentStep={setCurrentIndex}
				isNavigateNextLocked={isNavigateNextLocked}
				setIsNavigateNextLocked={setIsNavigateNextLocked}
			/>
		</div>
	);
}
