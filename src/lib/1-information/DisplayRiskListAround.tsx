import { useTranslation } from 'react-i18next';

import { Container, Title } from '@/components';

import RiskList from './risks/RiskList';
import { Risk } from '@/providers/AppContextConfig';

type Props = {
	riskList: Array<Risk> | undefined;
};

export default function DisplayRiskListAround(props: Props) {
	const { riskList } = props;
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
