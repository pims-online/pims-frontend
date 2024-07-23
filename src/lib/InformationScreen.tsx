import { useState } from 'react';
import AddressInput from '../components/address-input/AddressInput';
import RiskList from '../components/risks/RiskList';
import { RISK_LIST } from '../components/risks/constants';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';
import { useTranslation } from 'react-i18next';
import { fr } from '@codegouvfr/react-dsfr';

export default function InformationScreen() {
	const { t } = useTranslation('information_screen');
	const [riskIdList, setRiskIdList] = useState<Array<string>>([]);

	return (
		<div>
			<h5
				className="pims-information-screen__georisque-item"
				style={{
					...fr.spacing('padding', { topBottom: '2v', rightLeft: '2w' }),
				}}
			>
				{t('address.title')}
			</h5>
			<p
				className="pims-information-screen__georisque-item"
				style={{
					...fr.spacing('padding', { topBottom: '2v', rightLeft: '2w' }),
				}}
			>
				{t('address.call_to_action')}
			</p>
			<AddressInput setRiskIdList={setRiskIdList} />
			{riskIdList?.length > 0 && (
				<>
					<h5
						className="pims__screen-title"
						style={{
							marginTop: fr.spacing('8v'),
							marginBottom: fr.spacing('4v'),
						}}
					>
						{t('safe_behavior')}
					</h5>
					<div
						style={{
							...fr.spacing('padding', { rightLeft: '1w', topBottom: '2v' }),
						}}
					>
						<RiskList riskIdList={riskIdList} />
					</div>
				</>
			)}
			<Accordion
				label={t('see_more_risks')}
				style={{ marginTop: fr.spacing('8v') }}
			>
				<RiskList
					riskIdList={RISK_LIST.map((item) => item.georisqueApiIdentifier)}
				/>
			</Accordion>
		</div>
	);
}
