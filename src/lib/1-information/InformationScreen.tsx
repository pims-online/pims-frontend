import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fr } from '@codegouvfr/react-dsfr';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';

import { AppContext } from '../../AppContextProvider';

import AddressInput from './address-input/AddressInput';
import RiskList from './risks/RiskList';
import { RISK_LIST } from './risks/constants';

type Props = {
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function InformationScreen(props: Props) {
	const { t } = useTranslation('information_screen');
	const { setIsNavigateNextLocked } = props;
	const { riskIdList, coordinates } = useContext(AppContext);

	useEffect(() => {
		// Block navigation while the coordinates of the user and the related risks are unknown
		if (
			!riskIdList?.length ||
			coordinates.latitude === undefined ||
			coordinates.longitude === undefined
		) {
			setIsNavigateNextLocked(true);
		} else {
			setIsNavigateNextLocked(false);
		}
	}, [riskIdList, coordinates, setIsNavigateNextLocked]);

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
			<AddressInput />
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
