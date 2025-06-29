import { Divider } from '@/components';

import InvolvementPartJNR from './InvolvementPartJNR';
import InvolvementPartParticipation from './InvolvementPartParticipation';
import InvolvementPartInformation from './InvolvementPartInformation';
import { useContext } from 'react';
import { AppContext } from '@/providers';


export default function InvolvementScreen() {
	const { inseeCode } = useContext(AppContext);
	
	return (
		<div>
			<InvolvementPartJNR />
			<Divider />
			<InvolvementPartParticipation />
			<Divider />
			<InvolvementPartInformation inseeCode={inseeCode} />
		</div>
	);
}
