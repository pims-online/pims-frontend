import { useState, Dispatch, SetStateAction } from 'react';

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
	const [isNavigateNextLocked, setIsNavigateNextLocked] = useState(false);

	const navigateToFinalScreen = () => setCurrentIndex(SCREENS.FINAL_SCREEN);
	const navigateToInformationScreen = () =>
		setCurrentIndex(SCREENS.INFORMATION_SCREEN);
	const navigateToEmergencyKitScreen = () =>
		setCurrentIndex(SCREENS.EMERGENCY_KIT_SCREEN);
	return (
		<div>
			<Stepper currentStep={currentIndex} />
			{currentIndex === SCREENS.INFORMATION_SCREEN && (
				<InformationScreen setIsNavigateNextLocked={setIsNavigateNextLocked} />
			)}
			{currentIndex === SCREENS.EMERGENCY_KIT_SCREEN && (
				<EmergencyKitScreen setIsNavigateNextLocked={setIsNavigateNextLocked} />
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
				isNavigateNextLocked={isNavigateNextLocked}
				setIsNavigateNextLocked={setIsNavigateNextLocked}
			/>
		</div>
	);
}
