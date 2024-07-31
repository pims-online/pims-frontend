import FinalizeButton from './FinalizeButton';
import InformationCheck from './InformationCheck';
import PimsConfiguration from './PimsConfiguration';

type Props = {
	navigateToFinalScreen: () => void;
};

export default function SummaryScreen(props: Props) {
	const { navigateToFinalScreen } = props;

	return (
		<div>
			<InformationCheck />
			<PimsConfiguration />
			<FinalizeButton navigateToFinalScreen={navigateToFinalScreen} />
		</div>
	);
}
