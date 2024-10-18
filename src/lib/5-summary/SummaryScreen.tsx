import { Divider } from '@/components';

import FinalizeButton from './FinalizeButton';
import InformationCheck from './InformationCheck';
import PimsConfiguration from './PimsConfiguration';

type Props = {
	navigateToFinalScreen: () => void;
	navigateToInformationScreen: () => void;
	navigateToEmergencyKitScreen: () => void;
};

export default function SummaryScreen(props: Props) {
	const {
		navigateToFinalScreen,
		navigateToInformationScreen,
		navigateToEmergencyKitScreen,
	} = props;

	return (
		<div>
			<InformationCheck
				navigateToInformationScreen={navigateToInformationScreen}
				navigateToEmergencyKitScreen={navigateToEmergencyKitScreen}
			/>
			<Divider />
			<PimsConfiguration />
			<FinalizeButton navigateToFinalScreen={navigateToFinalScreen} />
		</div>
	);
}
