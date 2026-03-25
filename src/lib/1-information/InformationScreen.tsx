import { NavigationLock } from '@/layouts/types';
import { Divider } from '@/components';

import SectionAddressInput from './SectionAddressInput';
import DisplayRiskListAll from './DisplayRiskListAll';
import DisplayRiskListAround from './DisplayRiskListAround';
import IodePastilleEligibility from './iode-pastille-eligibility/IodePastilleEligibility';
import StrimmingObligation from './strimming-obligation/StrimmingObligation';

type Props = {
	registerNavLock: (name: string, lock?: NavigationLock) => void;
};

export default function InformationScreen(props: Props) {
	const { registerNavLock } = props;

	// TODO: Single loading wheel
	// TODO: Lock navigation until all risks are fetched
	// TODO: Display popup when failing to fetch risks

	return (
		<div>
			<SectionAddressInput registerNavLock={registerNavLock} />
			<DisplayRiskListAround />
			<IodePastilleEligibility />
			<StrimmingObligation />
			<Divider />
			<DisplayRiskListAll />
		</div>
	);
}
