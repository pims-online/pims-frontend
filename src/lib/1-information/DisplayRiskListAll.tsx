import { useTranslation } from 'react-i18next';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';

import { Container, Title } from '@/components';

import { RISK_TYPES } from './risks/constants';
import RiskList from './risks/RiskList';
import { RiskType, Risk } from '@/providers/AppContextConfig';

export default function DisplayRiskListAll() {
	const { t } = useTranslation('information_screen');

	const getAllRisks = (): Array<Risk> => {
		return RISK_TYPES.map(
			(riskType: RiskType): Risk =>
			{
				return {
					type: riskType, 
					intensityInCity: undefined, 
					intensityAtAddress: undefined
				}
			}
		)
	}

	return (
		<Container>
			<Title text={t('see_more_risks.title')} contained />
			<Accordion label={t('see_more_risks.accordion')}>
				<RiskList
					riskList={getAllRisks()}
				/>
			</Accordion>
		</Container>
	);
}
