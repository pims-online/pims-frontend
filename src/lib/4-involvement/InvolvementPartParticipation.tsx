import { useTranslation } from 'react-i18next';

import { Container, Title } from '@/components';

import { INVOLVEMENT_LINK_VOLUNTEER_FIREFIGHTER, INVOLVMENT_LINK_FIRST_AID, INVOLVEMENT_LINK_VOLUNTEERING } from './constants';
import ParticipationItem from './ParticipationItem';

export default function InvolvementPartParticipation() {
	const { t } = useTranslation('involvement_screen');
	const translationKeyPrefix = 'participation';

	return (
		<Container>
			<Title text={t(`${translationKeyPrefix}.title`)} contained />
			<ul className="pims-components__arrowed-list">
				<li>
					<ParticipationItem i={1} url={INVOLVMENT_LINK_FIRST_AID} />
				</li>
				<li>
					<ParticipationItem i={2} url={INVOLVEMENT_LINK_VOLUNTEER_FIREFIGHTER} />
				</li>
				<li>
					<ParticipationItem i={3} url={undefined} />
				</li>
				<li>
					<ParticipationItem i={4} url={INVOLVEMENT_LINK_VOLUNTEERING} />
				</li>
			</ul>
		</Container>
	);
}
