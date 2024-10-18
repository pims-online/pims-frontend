import { Divider } from '@/components';

import InvolvementPartJAFAR from './InvolvementPartJAFAR';
import InvolvementPartParticipation from './InvolvementPartParticipation';
import InvolvementPartInformation from './InvolvementPartInformation';

export default function InvolvementScreen() {
	return (
		<div>
			<InvolvementPartJAFAR />
			<Divider />
			<InvolvementPartParticipation />
			<Divider />
			<InvolvementPartInformation />
		</div>
	);
}
