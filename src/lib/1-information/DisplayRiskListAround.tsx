import { useTranslation } from 'react-i18next';

import { Container, Title } from '../../components';

import RiskList from './risks/RiskList';

type Props = {
	riskIdList: Array<string> | undefined;
};

export default function DisplayRiskListAround(props: Props) {
	const { riskIdList } = props;
	const { t } = useTranslation('information_screen');

	return (
		<Container>
			{riskIdList && riskIdList.length > 0 && (
				<>
					<Title text={t('safe_behavior')} />
					<RiskList riskIdList={riskIdList} />
				</>
			)}
			{riskIdList && riskIdList.length === 0 && <h6>{t('no_risks_around')}</h6>}
		</Container>
	);
}
