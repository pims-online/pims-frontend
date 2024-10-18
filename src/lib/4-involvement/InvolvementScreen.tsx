import InvolvementPartJAFAR from './InvolvementPartJAFAR';
import InvolvementPartParticipation from './InvolvementPartParticipation';
import InvolvementPartInformation from './InvolvementPartInformation';

export default function InvolvementScreen() {
	return (
		<div>
			<InvolvementPartJAFAR />
			<InvolvementPartParticipation />
			<InvolvementPartInformation />
		</div>
	);
}
