import { useTranslation } from 'react-i18next';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';

import { Container, Title } from '@/components';

import { RISK_TYPES } from './risks/constants';
import RiskList from './risks/RiskList';

export default function DisplayRiskListAll() {
	const { t } = useTranslation('information_screen');

	return (
		<Container>
			<Title text={t('see_more_risks.title')} contained />
			<Accordion label={t('see_more_risks.accordion')}>
				<RiskList
					riskIdList={RISK_TYPES.map((item) => item.identifier)}
					riskIntensityMap={undefined}
				/>
			</Accordion>
		</Container>
	);
}
