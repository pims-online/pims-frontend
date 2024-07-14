// ----- COMPONENTS -----
import Stepper from '../components/Stepper';
import Navigator from '../components/Navigator';

// ----- SCREENS  -----
import { SCREENS } from '../components/constants';
import InformationScreen from '../lib/InformationScreen';
import EmergencyKitScreen from '../lib/EmergencyKitScreen';
import AlertScreen from '../lib/AlertScreen';
import InvolvementScreen from '../lib/InvolvementScreen';
import SummaryScreen from '../lib/SummaryScreen';

type Props = {
	currentIndex: number;
	setCurrentIndex: (nextIndex: number) => void;
};

export default function StepsLayout(props: Props) {
	const { currentIndex, setCurrentIndex } = props;

	const navigateToFinalScreen = () => setCurrentIndex(SCREENS.FINAL_SCREEN);
	return (
		<div>
			<Stepper currentStep={currentIndex} />
			{currentIndex === SCREENS.INFORMATION_SCREEN && <InformationScreen />}
			{currentIndex === SCREENS.EMERGENCY_KIT_SCREEN && <EmergencyKitScreen />}
			{currentIndex === SCREENS.ALERT_SCREEN && <AlertScreen />}
			{currentIndex === SCREENS.INVOLVEMENT_SCREEN && <InvolvementScreen />}
			{currentIndex === SCREENS.SUMMARY_SCREEN && (
				<SummaryScreen navigateToFinalScreen={navigateToFinalScreen} />
			)}
			<Navigator currentStep={currentIndex} setCurrentStep={setCurrentIndex} />
		</div>
	);
}
