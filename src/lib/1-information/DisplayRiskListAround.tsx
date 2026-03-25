import { useTranslation } from 'react-i18next';

import { Container, Title } from '@/components';

import RiskList from './risks/RiskList';
import { useContext } from 'react';
import { AppContext } from '@/providers';

export default function DisplayRiskListAround() {
	const { riskList } = useContext(AppContext);
	const { t } = useTranslation('information_screen');

	return (
		<Container>
			{riskList && riskList.length > 0 && (
				<>
					<Title text={t('safe_behavior')} />
					<RiskList riskList={riskList} />
				</>
			)}
			{riskList && riskList.length === 0 && <h6>{t('no_risks_around')}</h6>}
		</Container>
	);
}
