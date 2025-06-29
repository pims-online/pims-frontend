import { Divider } from '@/components';

import InvolvementPartJNR from './InvolvementPartJNR';
import InvolvementPartParticipation from './InvolvementPartParticipation';
import InvolvementPartInformation from './InvolvementPartInformation';


export default function InvolvementScreen() {	
	return (
		<div>
			<InvolvementPartJNR />
			<Divider />
			<InvolvementPartParticipation />
			<Divider />
			<InvolvementPartInformation />
		</div>
	);
}
